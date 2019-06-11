---
layout: single
title:  "ACMSimC: Field Oriented Control"
date:   2019-06-10
categories: tutorial
published: true
---

> 本篇是本系列第二集，第一集请戳：[EP01](https://horychen.github.io/tutorial/AC-Machine-Simulation-Framework-in-C/)。
> 下文须配合视频食用：[哔哩哔哩传送门（右键新标签页打开）](?)。
> Please watch the video (in Chinese, however) in the link above.

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

## 3. Block Diagram

![](https://i.imgur.com/2MELGRx.png)

## 3. Block Diagram for the Codes

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
    // Tajima1996
    
    // Voltage model
    
    // Current model
    
}
```



```c
define control(speed_cmd, speed_cmd_dot){
    // Input 1 is feedback: estimated speed or measured speed
    // Input 2 is feedback: measured current 
    // Input 3 differs for DFOC and IFOC
    // DFOC: estimated flux components in alpha-beta frame
    // IFOC: estimated rotor resistance

    // Flux (linkage) command generation
    rotor_flux_cmd = f(speed, dc bus voltage, last torque current command)
        // speed is compared with the base speed to decide flux weakening or not
        // dc bus voltage is required for certain application
        // last torque current command is required for loss minimization

        // M-axis current command 
        i_Ms_cmd = rotor_flux_cmd*Lmu_inv + M1*OMG1*cos(OMG1*timebase) / rreq;
    // T-axis current command
    speed_ctrl_err = omg_fb - speed_cmd * RPM_2_RAD_PER_SEC
        i_Ts_cmd = - PI(speed_ctrl_err)

        // Field orientation
        cosT = 
        sinT = 
        omega_sl = 
        omega_syn = omg_fb + 

        // Measured current in M-T frame
        iMs = AB2M(ial, ibe, cosT, sinT)
        iTs = AB2T(ial, ibe, cosT, sinT)

        // Voltage command in M-T frame
        vM = - PI(CTRL.iMs - CTRL.iMs_cmd);
    vT = - PI(CTRL.iTs - CTRL.iTs_cmd);

    // Current loop decoupling (skipped, see)

    // Voltage command in alpha-beta frame
    CTRL.ual = MT2A(uMs_cmd, uTs_cmd, ob.cosT, ob.sinT);
    CTRL.ube = MT2B(uMs_cmd, uTs_cmd, ob.cosT, ob.sinT);

}
```

## 4. Future Topics

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

