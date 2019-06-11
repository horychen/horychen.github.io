---
layout: single
title:  "ACMSimC: Field Oriented Control"
date:   2019-06-10
categories: tutorial
published: false
---

<!-- # ACMSimC: AC Machine Simulation Tool in C Language -->

> 本篇是本系列第二集，第一集请戳：[EP01](https://horychen.github.io/tutorial/AC-Machine-Simulation-Framework-in-C/)。
> 下文须配合视频食用：[哔哩哔哩传送门（右键新标签页打开）](?)。
> Please watch the video (in Chinese, however) in the link above.

## Table of Content
* TOC
<!-- {:toc: left} -->
{:toc}

## 1. Prerequisite
1. Watched EP01 of the series, and installed all the softwares.

## 2. Machine Models
### 2.1. Model of Induction Machine
{% raw %}
$$\begin{array}{l}
{L_\sigma }p{i_s} = {u_s} - \left( {{r_s} + {r_{req}}} \right){i_s} + \left( {\alpha I - \omega J} \right){\psi _\mu }\\
p{\psi _\mu } = {r_{req}}{i_s} - \left( {aI - \omega J} \right){\psi _\mu }
\end{array}$$
{% endraw %}
<!-- ![eq:IM](eq_IM.png) -->

### 2.2. Model of Permanent Magnet Synchronous Machine
{% raw %}
$$\begin{array}{l}
{L_d}p{i_d} =  - r{i_d} + \omega {L_q}{i_q} + {u_d}\\
{L_q}p{i_q} =  - r{i_q} - \omega {L_d}{i_d} + {u_q} - \omega {\psi _{{\mathrm{PM}}}}
\end{array}$$
{% endraw %}
<!-- ![eq:PMSM](eq_PMSM.png) -->

### 2.3. Model of Bearingless Induction Machine*

## 3. Block Diagram for the Codes  
Simulation procedure is as follows:

    for loop begins{

        time

        machine_simulation(); // machine_dynamics, numeric_integration

        measurement(); // speed, current

        observation(); // observer 

        control(); // speed_control, current_control

        inverter_model(); // 
    }

## Future Topics (Brainstorming)
* C语言电机仿真架构 / framework in C language (done)
* 永磁电机的仿真
* 电机设计的电路参数拟合
* 变步长数值积分（DoPri54）
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
* 无轴承感应电机建模
* 基于扩展反电势模型的无传感器控制
* 基于 Active Flux 模型的无传感器控制
* 三维模型的绘制技巧
