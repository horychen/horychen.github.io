---
layout: single
title:  "ACMSimC: Field Oriented Control"
date:   2019-06-12
categories: tutorial
published: true
---

> 本篇是本系列第二集，第一集请戳：[EP01](https://horychen.github.io/tutorial/AC-Machine-Simulation-Framework-in-C/)。
> 下文须配合视频食用：[哔哩哔哩传送门（右键新标签页打开）](?)。

**今天的内容相当于为下一集铺垫一下，跑一遍这一版的代码，你会开始意识到，有很多系数或参数需要调节，不仅仅是电流环的PI、转速环的PI，还有观测器中的系数。当然，不断手动修改，然后重新编译、观察波形，肯定是可以的——实际上我一直以来都是这么做的。但是，我已经开始厌倦了这样子的生活了……**

## Table of Content
* TOC
{:toc}

## 1. Prerequisite

Watched EP01 of the series, and installed all the softwares.

## 2. Machine Models

### 2.1. Model of Induction Machine

{% raw %}
$$\begin{array}{l}
{L_\sigma }p{i_s} = {u_s} - \left( {{r_s} + {r_{req}}} \right){i_s} + \left( {\alpha I - \omega J} \right){\psi _\mu }\\
p{\psi _\mu } = {r_{req}}{i_s} - \left( {aI - \omega J} \right){\psi _\mu }
\end{array}$$
{% endraw %}

See [2017-Chen.Huang-Online](https://github.com/horychen/Publications/blob/master/2017-Chen.Huang-Online EA.pdf) for detail.

## 3. Block Diagram

![](https://i.imgur.com/2MELGRx.png)

## 4. Codes

Simulation procedure is as follows:

```c
for loop begins{

    time

    machine_simulation(); // machine_dynamics, numeric_integration

    measurement(); // speed, current

    observation(); // observer 

    control(); // speed_control, current_control

    inverter_model(); // transfer function is 1 for now
}
```
```c
define observation(){
    // Speed estimation: Tajima1996

    // Flux estimation 1: Voltage model
    
    // Flux estimation 2: Current model
    
}
```



```c
void control(double speed_cmd, double speed_cmd_dot){
    // Input 1 is feedback: estimated speed or measured speed
    CTRL.omg_fb = im.omg;
    // CTRL.omg_fb = ob.tajima.omg;
    // Input 2 is feedback: measured current 
    CTRL.ial_fb = IS_C(0);
    CTRL.ibe_fb = IS_C(1);
    // Input 3 differs for DFOC and IFOC
    #if CONTROL_STRATEGY == DFOC
        // DFOC: estimated flux components in alpha-beta frame
        CTRL.psi_mu_al_fb = ob.psi_mu_al;
        CTRL.psi_mu_be_fb = ob.psi_mu_be;
    #elif CONTROL_STRATEGY == IFOC
        // IFOC: estimated rotor resistance
        CTRL.rreq = ob.rreq;
    #else
    #endif

    // Flux (linkage) command
    CTRL.rotor_flux_cmd = 0.5; // f(speed, dc bus voltage, last torque current command)
        // 1. speed is compared with the base speed to decide flux weakening or not
        // 2. dc bus voltage is required for certain application
        // 3. last torque current command is required for loss minimization

    // M-axis current command
    CTRL.iMs_cmd = CTRL.rotor_flux_cmd*CTRL.Lmu_inv + M1*OMG1*cos(OMG1*CTRL.timebase) / CTRL.rreq;

    // T-axis current command
    static int vc_count = 0;
    if(vc_count++==VC_LOOP_CEILING*DOWN_FREQ_EXE_INVERSE){ 
        vc_count = 0;
        CTRL.omg_ctrl_err = CTRL.omg_fb - speed_cmd*RPM_2_RAD_PER_SEC;
        CTRL.iTs_cmd = - PI(&CTRL.pi_speed, CTRL.omg_ctrl_err);

        CTRL.speed_ctrl_err = CTRL.omg_ctrl_err * RAD_PER_SEC_2_RPM;
    }

    #if CONTROL_STRATEGY == DFOC
        // feedback field orientation
        double modulus = sqrt(CTRL.psi_mu_al_fb*CTRL.psi_mu_al_fb + CTRL.psi_mu_be_fb*CTRL.psi_mu_be_fb);
        if(modulus<1e-3){
            CTRL.cosT = 0;
            CTRL.sinT = 1;
        }else{
            CTRL.cosT = CTRL.psi_mu_al / modulus;
            CTRL.sinT = CTRL.psi_mu_be / modulus;
        }
    #elif CONTROL_STRATEGY == IFOC
        // Feed-forward field orientation
        CTRL.theta_M += TS * CTRL.omega_syn;

        if(CTRL.theta_M > M_PI){
            CTRL.theta_M -= 2*M_PI;
        }else if(CTRL.theta_M < -M_PI){
            CTRL.theta_M += 2*M_PI; // 反转！
        }

        CTRL.omega_sl = CTRL.rreq*CTRL.iTs_cmd / CTRL.rotor_flux_cmd;
        CTRL.omega_syn = CTRL.omg_fb + CTRL.omega_sl;

        CTRL.cosT = cos(CTRL.theta_M); 
        CTRL.sinT = sin(CTRL.theta_M);
    #endif

    // Measured current in M-T frame
    CTRL.iMs = AB2M(CTRL.ial_fb, CTRL.ibe_fb, CTRL.cosT, CTRL.sinT);
    CTRL.iTs = AB2T(CTRL.ial_fb, CTRL.ibe_fb, CTRL.cosT, CTRL.sinT);

    // Voltage command in M-T frame
    double vM, vT;
    vM = - PI(&CTRL.pi_iMs, CTRL.iMs-CTRL.iMs_cmd);
    vT = - PI(&CTRL.pi_iTs, CTRL.iTs-CTRL.iTs_cmd);

    // Current loop decoupling (skipped, see Chen.Huang-Stable)
    CTRL.uMs_cmd = vM;
    CTRL.uTs_cmd = vT;

    // Voltage command in alpha-beta frame
    CTRL.ual = MT2A(CTRL.uMs_cmd, CTRL.uTs_cmd, CTRL.cosT, CTRL.sinT);
    CTRL.ube = MT2B(CTRL.uMs_cmd, CTRL.uTs_cmd, CTRL.cosT, CTRL.sinT);
}

```

## 5. Future Topics

* C语言电机仿真架构 / framework in C language **(done in EP01)**
* 系统控制参数的可视化与优化框架 / Visualization and optimization of system control parameters
* 矢量控制 / Vector control **(done in this article)**
* 为什么前向欧拉法是个大坑？
* 永磁电机的仿真
* 电机设计的电路参数拟合
* 变步长数值积分 / DoPri54
* 电机参数自整定
* 电流环系数设计
* 转速环系数设计
* 转动惯量辩识
* 自抗扰控制
* 基于带宽指标的自抗扰控制系数设计
* 全局稳定转速自适应观测器设计
* 逆变器非线性建模 / inverter nonlinearity
* SPWM建模
* SVPWM建模
* 饱和建模 / modeling of saturation
* 非理想电流测量环节建模
* 母线电容建模和无轴承电机的仿佛有UPS控制
* 低成本单母线电流传感器驱动的实现
* 无轴承感应电机建模
* 基于扩展反电势模型的无传感器控制
* 基于 Active Flux 模型的无传感器控制
* 三维模型的绘制技巧 / SolidWorks Modeling **(done in ![哔哩哔哩传送门之使用SolidWorks绘制无轴承感应电机三维模型（搞笑版）](https://www.bilibili.com/video/av55227896))**
* 番外：感应电机的设计与优化
* 番外：表贴式永磁电机的设计
* 番外：高速实心转子的设计与优化

