---
layout: single
title:  "ACMSimC: PMSM Control Simulation"
date:   2019-06-22
categories: tutorial
published: true
---

> 本篇是本系列第三集，第一集请戳：[EP01](https://horychen.github.io/tutorial/AC-Machine-Simulation-Framework-in-C/)。
> 本文暂时没有相应视频。

## ACMSimC: PMSM Control Simulation

### Table of Content

* TOC
{:toc}
### Background

永磁电机作为一种因材料突破而得以普及的同步电机，不得不承认其如今在位置伺服领域的地位。此外，在轴向长度受到限制的场合，使用永磁电机的效果那是拔群的，比如电瓶车的轮毂电机等。~~但是，我最爱的还是优雅的感应电机。~~

感应电机的”高级玩法“一般都是在转子上做文章，主要是实心转子的各种变种，这里@哈默尼克。永磁电机的”高级“玩法（表贴、内嵌、V型这些肯定就不算了哈）则可以从定子和转子两方面入手。比如可以把永磁体放到定子上形成开关磁链电机，可以疯狂减少定子槽数形成分数槽电机，可以把永磁体每隔一个极才放一个形成 Consequent Pole 电机，也可以把永磁体放置成辐条状且为 Consequent Pole 形式则称为游标电机，还可以烧钱玩 Halbach Array 减少轭部的钢的用量等。



### Prerequisite

Installed the software mentioned from [EP01](https://horychen.github.io/tutorial/AC-Machine-Simulation-Framework-in-C/).



### Mathematic Models (Ref: Zhiqian Chen 2003)

The stator voltage equations on rotating d-q frame.

$$\left[\begin{array}{c}{v_{d}} \\ {v_{q}}\end{array}\right]=\left[\begin{array}{cc}{R+p L_{d}} & {-\omega_{r e} L_{q}} \\ {\omega_{r e} L_{d}} & {R+p L_{q}}\end{array}\right]\left[\begin{array}{c}{i_{d}} \\ {i_{q}}\end{array}\right]+\left[\begin{array}{c}{0} \\ {\omega_{r e} K_{E}}\end{array}\right]$$

$$\Rightarrow\left\{ \begin{array}{l}
{v_d} = R{i_d} + p{L_d}{i_d} - {\omega _{re}}{L_q}{i_q}\\
{v_q} = R{i_q} + p{L_q}{i_q} + {\omega _{re}}{L_d}{i_d} + {\omega _{re}}{K_E}
\end{array} \right.$$

$$\Rightarrow\left\{ \begin{array}{l}
{L_d}p{i_d} = {v_d} - R{i_d} + {\omega _{re}}{L_q}{i_q}\\
{L_q}p{i_q} = {v_q} - R{i_q} - {\omega _{re}}{L_d}{i_d} - {\omega _{re}}{K_E}
\end{array} \right.$$



The stator voltage equations on stationary $\alpha$-$\beta$ frame.

$$\left[\begin{array}{c}{v_{\alpha}} \\ {v_{\beta}}\end{array}\right]=\left[\begin{array}{cc}{R+p L_{\alpha}} & {p L_{\alpha \beta}} \\ {p L_{\alpha \beta}} & {R+p L_{\beta}}\end{array}\right]\left[\begin{array}{c}{i_{\alpha}} \\ {i_{\beta}}\end{array}\right]+\omega_{r e} K_{E}\left[\begin{array}{c}{-\sin \theta_{r e}} \\ {\cos \theta_{r e}}\end{array}\right]$$

$$\Rightarrow\begin{aligned}\left[\begin{array}{c}{v_{\alpha}} \\ {v_{\beta}}\end{array}\right]=R\left[\begin{array}{c}{i_{\alpha}} \\ {i_{\beta}}\end{array}\right] &+p L_{0}\left[\begin{array}{c}{i_{\alpha}} \\ {i_{\beta}}\end{array}\right]+\omega_{r e} K_{E}\left[\begin{array}{c}{\sin \theta_{r e}} \\ {\cos \theta_{r e}}\end{array}\right] \\ &+p L_{1}\left[\begin{array}{cc}{\cos 2 \theta_{r e}} & {\sin 2 \theta_{r e}} \\ {\sin 2 \theta_{r e}} & {-\cos 2 \theta_{r e}}\end{array}\right]\left[\begin{array}{c}{i_{\alpha}} \\ {i_{\beta}}\end{array}\right] \end{aligned}$$



where position dependent inductances are defined as follows

$$\begin{aligned} L_{\alpha} &=L_{0}+L_{1} \cos 2 \theta_{r e} \\ L_{\beta} &=L_{0}-L_{1} \cos 2 \theta_{r e} \\ L_{\alpha \beta} &=L_{1} \sin 2 \theta_{r e} \\ L_{0} &=\frac{\left(L_{d}+L_{q}\right)}{2} \\ L_{1} &=\frac{\left(L_{d}-L_{q}\right)}{2} \end{aligned}$$



**We will use the d-q model for simulation. I mean that it does not matter what reference frame your model is in. Just simulate it correctly and that’s all. ** Oh, I almost forget. One more thing: the torque equation:

$$T_{em}=n_{pp}\left(\psi_{d} i_{q}-\psi_{q} i_{d}\right)=n_{pp}\left[K_E i_{q}+\left(L_{d}-L_{q}\right) i_{d} i_{q}\right]$$

This equation tells us even if $K_E$ is zero (i.e., no permanent magnet), there is still torque, which give rise to a new type of synchronous machine called SynRM (Synchronous Reluctance Machine).



### Codes (Check out the pmsm branch at [my Github page](https://github.com/horychen/ACMSIMC_TUT))

> 看了代码以后，可能有同学会问了，为什么不把感应电机和永磁电机归到一起？
>
> 其实，我一开始用 Python 做控制仿真的时候，就是直接对带阻尼绕组的同步电机进行建模的（见下图）。也就是说，一个模型包罗万象。但是缺点也很明显，这样做会让代码看起来复杂很多，多出很多不必要的状态变量。所以我不推崇大一统仿真，但是大一统理论依旧是很有意思的东西。

![永磁感应大一统模型（摘自我的本科论文）](/assets/images/1561239593187.png)

## Future Topics (Updated)

- C语言电机仿真架构 / framework in C language **(done in [EP01](https://horychen.github.io/tutorial/AC-Machine-Simulation-Framework-in-C/))**
- 矢量控制 / Vector control **(done in [EP02](https://horychen.github.io/tutorial/ACMSimC-Field-Oriented-Control/))**
- 永磁电机的仿真 **(done in this article)**
- 为什么前向欧拉法是个大坑？
- [永磁电机的滑模观测器](https://www.zhihu.com/question/323600165)
- 系统控制参数的可视化与优化框架 / Visualization and optimization of system control parameters
- 电机设计的电路参数拟合
- 变步长数值积分 / DoPri54
- 电机参数自整定
- 电流环系数设计
- 转速环系数设计
- 转动惯量辩识
- 无速度传感器系统中的转动惯量辨识
- 自抗扰控制
- 基于带宽指标的自抗扰控制系数设计
- 预测控制（预测电流控制，PCC）与优化目标
- 全局稳定转速自适应观测器设计
- 一种简单的自适应观测器（模型参考自适应系统，MRAS）设计及其存在的问题
- 逆变器非线性建模 / inverter nonlinearity
- SPWM建模
- SVPWM建模
- 饱和建模 / modeling of saturation
- 结合场的建模策略（查表法）
- 如何绘制任意控制策略的电机运行工况效率图？
- 非理想电流测量环节建模（温飘与不对称）
- 母线电容建模和无轴承电机的仿佛有UPS控制
- 异步伺服（异步电机的位置控制媲美永磁电机的关键是？）
- 低成本单母线电流传感器驱动的实现
- 无轴承感应电机建模
- 基于扩展反电势模型的无传感器控制
- 基于 Active Flux 模型的无传感器控制
- 三维模型的绘制技巧 / SolidWorks Modeling **(done in ![哔哩哔哩传送门之使用SolidWorks绘制无轴承感应电机三维模型](https://www.bilibili.com/video/av55227896))**
- 番外：使用免费有限元软件实现感应电机的设计与优化
- 番外：使用旋转静态场有限元实现电机转矩脉动的超准确分析（嗯，堪比瞬态场）
- 番外：Notched Rotor（介于表贴和内嵌之间的一种转子）永磁电机的设计
- 番外：高速实心转子的设计与优化
- 番外：机器学习之电机建模竞赛

