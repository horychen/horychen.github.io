---
layout: single
title:  "ACMFEM - Simple (Surface Mounted) Permanent Magnet Motor Design"
date:   2019-08-23
categories: tutorial
published: false
classes: wide
---

* TOC
{:toc}
> 中文标题：（表贴式）永磁电机设计极速入门 - Part 1/4

# Background

有一天，我突然就被拜托设计永磁电机了。

俺不懂啊！咋破？

按照 Pyrhonen 的书再弄一遍呗！反正感应电机之前弄好了嘛！

呃。。。有点懒啊。。。不想弄。。。反正最后要优化的嘛。。。设计得那么准确干嘛。。。

那行，要不就直接把感应电机的定子拿过来给永磁电机用呗？

这个想法好！定子槽数 Qs = 24 的时候亲测可行。成功。完事？

但是永磁电机还有 Qs = 6、12 的呢，还能拿感应电机的来用吗？不行……代码报错了，不想 Debug。。。我并不想知道为什么报错了。。。懒。。。

好好好，那就稍微弄一弄，好歹倒腾出一个粗糙的初始设计就行了。

为什么需要初始设计？

因为需要根据初始设计确定合理的电机截面几何参数的取值范围——用于优化。

# PM Motor Geometry Design

长话短说。

把你的设计过程想象成一个黑盒子。

黑盒子的输入是：气隙磁密猜测值、定子齿部磁密值、定子轭部磁密值。

黑盒子的输出是：电机的定子槽型的几何尺寸。

你问转子怎么办？随便选一个永磁体的宽度，然后加一块背铁就行了呗。背铁多宽？参考定子的轭部有多宽，最多打个七八折，我看差不多，反正后来要优化的。

# Stator Winding Design

绕组的设计，是一门“无人问津”的苦难学问啊。。。

> 说到绕组设计，我想起一门往事。当年博一的时候，被学院组织的暑期社会实践分配到杭州电机有限公司去研究电葫芦，最后我设计了一个双速锥形电机。双速绕组，有多麻烦呢，就是你的这个绕组的端部，要能方便继电器啪嚓一下切换，然后就能实现绕组的极对数变化。当年我去借了两本书（资料不多，好像也就那两本了，而且第二本基于第一本写的），好生研究了一段时间。最后根据自己的理解，把书中的 Fortran 代码改成了 Python 脚本自动生成合适的双速绕组。最后嘛，当然没有产生任何社会效益，呵呵。

所以，绕组设计是几句话讲不清楚的，可以考虑直接拿别人的绕组来用吧。但是注意一点，绕组的本质是绕组函数哦。这里真正想要讲的是另一个参数：每槽导体数 zQ——你要进行有限元仿真的时候，这个东西你得提前确定好。

```
VoltageRating = 480 # V, line-to-line
stator_phase_voltage_rms = VoltageRating / sqrt(3)
desired_emf_Em = 0.95 * stator_phase_voltage_rms 

ExcitationFreq = 500 # Hz
p = 1 # 30,000 rpm at 500 Hz
no_phase_m = 3
Qs = 6 # 12 # 24
number_parallel_branch = 2

tip_speed = 150 # m/s
air_gap_diameter_D = get_air_gap_diameter_from_tip_speed(tip_speed)
pole_pitch_tau_p = pi*air_gap_diameter_D/(2*p)

if self.winding_layout.no_winding_layer == 1:
    # full pitch - easy
    coil_span_W = pole_pitch_tau_p
else: 
    # short pitch (not tested)
    stator_slot_pitch_tau_us = pi * air_gap_diameter_D / self.Qs
    coil_span_W = self.winding_layout.coil_pitch * stator_slot_pitch_tau_us
    # for 2 pole motor, the recommended short pitch is 0.7. --p76

kd1 = 2*sin(1/no_phase_m*pi/2)/(Qs/(no_phase_m*p)*sin(1*pi*p/Qs))
kq1 = sin(1*coil_span_W/pole_pitch_tau_p*pi/2)        
ksq1 = 1
kw1 = kd1 * kq1 * ksq1

alpha_i = 2/pi # ideal sinusoidal flux density distribusion, when the saturation happens in teeth, alpha_i becomes higher.

guess_air_gap_flux_density = 0.9 # T
stack_length_eff = 100 # mm

air_gap_flux_Phi_m = alpha_i * guess_air_gap_flux_density * pole_pitch_tau_p * stack_length_eff
air_gap_flux_Phi_m

no_series_coil_turns_N = sqrt(2)*desired_emf_Em / (2*pi*ExcitationFreq * kw1 * air_gap_flux_Phi_m)
no_conductors_per_slot_zQ = 2* no_phase_m * no_series_coil_turns_N / Qs * number_parallel_branch

```

# Excitation

规定定子电流密度为 4 Arms/mm^2（取值在 3 到 5 之间吧，冷却方式：自然冷却或风冷），槽满率（槽面积中材料为铜的部分）为 0.5（集中绕组高手手绕达到 0.45 应该可以，分布的叠绕组高手受扰能达到 0.35 也不错了，我的无轴承感应电机样机的槽满率是 0.27，我是故意弄低的，供参考）。然后你就可以根据槽的大小，计算出你能给的电流的大小了。



有的人可能会告诉你，叠长无所谓的，随便给一个值，因为是二维有限元计算，最后总是可以调整电机的叠长使得电机输出想要的额定功率。但是话只说了一半，你改变了电机的叠长，就是改变了电机的气隙表面积，在同样的气隙磁密下，电机的磁通变大，磁链变大，反电势也相应变大哦，你一开始规定的额定电压就保不住了。当然，你还是可以调节绕组的匝数，将电压和电流的功率等级进行有级掉换的。





情况一，定子外径是固定死的，比如机壳的大小已经知道了。

情况二，定子外径可以为任意值，那么你就需要估算电流，然后得到槽面积，然后得到槽高，再加上轭部高度，你就有了定子外径。

