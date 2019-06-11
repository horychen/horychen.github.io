---
layout: single
title:  "ACMSimC: AC Machine Simulation Framework in C"
date:   2019-05-04
categories: tutorial
---

<!-- # ACMSimC: AC Machine Simulation Tool in C Language -->

> 免责声明：做好将来你的拥有100台dSpace的合作者问你要Simuliink仿真结果你却没有的心理准备，然后我们开始吧。

>下文须配合视频食用：[哔哩哔哩传送门（右键新标签页打开）](https://www.bilibili.com/video/av51496015/)。  
>Please watch the video (in Chinese, however) in the link above.

## Table of Content
* TOC
<!-- {:toc: left} -->
{:toc}

## 1. Prerequisite
1. Compiler
    - MinGW (gcc)
    - Anaconda3 (python)
    ```
    D:\Users\horyc\Anaconda3\pkgs\openssl-1.1.1b-he774522_1\Library\bin
    D:\Users\horyc\Anaconda3\Lib
    D:\Users\horyc\Anaconda3\Library\bin
    D:\Users\horyc\Anaconda3\Scripts
    D:\Users\horyc\Anaconda3
    ```
2. Editor
    - Sublime Text 3: the **shell command** is as follows:
        ```json
        {
        "working_dir": "$file_path",
        "cmd": "gcc -Wall $file_name -o $file_base_name",
        "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
        "selector": "source.c",
        "variants": 
            [
                {   
        "name": "Run",
        "shell_cmd": "gcc $file controller.c observer.c -o $file_base_name && start cmd /c \"${file_path}/${file_base_name}\""
                }
            ]
        }
        ```
3. Utility
    * AutoHotkey (to close all figures at once)
    ```
    #NoEnv
    #Warn
    SendMode Input  
    SetWorkingDir %A_ScriptDir%  
    SetTitleMatchMode 2
    #q:: closePythonPlot() 
    closePythonPlot()
    {
        isExist = 1
        while isExist
        {
            PostMessage, 0x112, 0xF060,,, Figure
            IfWinNotExist, Figure
            {
                isExist = 0
            }
        }
    }
    ```
    * MS Visual Studio Code (to properly read this readme.md file)
    * Hyper (good-looking terminal)
    * Windows Subsystem for Linux, a.k.a. WSL (for being cool?)
    * Git in WSL or in DOS Cmd (for version control)

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
