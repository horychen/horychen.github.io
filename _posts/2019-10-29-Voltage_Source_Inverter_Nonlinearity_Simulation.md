---
layout: single
title:  "Voltage Source Inverter Nonlinearity"
date:   2019-10-29
categories: tutorial
published: true
classes: wide
---

* TOC
{:toc}
> 注意本文是一个系列中的一集。
>
> 本文的东西完完全全都是参考 1996-Choi.Sul-Inverter 的。
>
> 1996-Choi.Sul-Inverter output voltage synthesis using novel dead time compensation



# Introduction

逆变器非线性包括：防桥臂直通的死区、管子的导通压降、寄生电容和延时等。

咱们在仿真的时候就可以简化一下，毕竟我们也没有给SPWM建个模啊什么的。



# Smack It!

新建一个文件叫 inverter.c，内容如下：

```c
#include "ACMSim.h"

#if INVERTER_NONLINEARITY

void InverterNonlinearity_SKSul96(double ual, double ube, double ial, double ibe){
    double ua,ub,uc;
    double ia,ib,ic;
    double Udist;
    double TM;
    double Rce=0.04958, Rdiode=0.05618;

    TM = _Toff - _Ton - _Tdead + _Tcomp; // Sul1996
    Udist = (_Udc*TM*TS_INVERSE - _Vce0 - _Vd0) / 6.0; // Udist = (_Udc*TM/1e-4 - _Vce0 - _Vd0) / 6.0;

    ia = SQRT_2_SLASH_3 * (       ial                              );
    ib = SQRT_2_SLASH_3 * (-0.5 * ial - SIN_DASH_2PI_SLASH_3 * ibe );
    ic = SQRT_2_SLASH_3 * (-0.5 * ial - SIN_2PI_SLASH_3      * ibe );

    /* directly compute in alpha-beta frame */
    UAL_C_DIST = ual + sqrtf(1.5)*Udist*(2*sign(ia) - sign(ib) - sign(ic)) - 0.5*(Rce+Rdiode)*ial;
    UBE_C_DIST = ube + 3/sqrtf(2)*Udist*(             sign(ib) - sign(ic)) - 0.5*(Rce+Rdiode)*ibe; 
}

#endif
```

逆变器非线性的东西我已经有点忘记了，根据代码，我试着解释一下：

1. 函数的输入是控制器给定电压的alpha和beta分量，以及电机定子电流的alpha和beta分量。
2. 函数的输出是最终加到电机身上的电压的alpha和beta分量，也就是包含了畸变（Distortion）的电压。
3. 脉宽调制的本质是将电压高低用作用时间长短进行等价，好像是叫伏秒等效之类的概念。
4. 一般认为母线电压Udc是恒定值，比如300 V，那如何输出一个无级调节的电压呢？就是在一个载波周期 TS 内，只在某些时候输出母线电压（即开关管导通），母线电压的作用时间除以载波周期就是占空比。如果想输出一个30V的电压，那么可以令占空比为10%。
5. 逆变器非线性的存在，会使得实际的开关管导通的时间不同于你所期望的。比如我们有开通时间Ton、关断时Toff间、死区时间Tdead，和死区补偿时间Tcomp。注意，根据伏秒等效，这里的时间都等效于畸变电压。那为什么要除以六呢？大概是因为一个周期三相桥臂开关六次之类的原因（我不记得了），具体参考SK Sul教授的文章。
6. 最后呢，就是只有电流流通的时候，上面提到的各个畸变电压才会作用，而且作用的方向和电流流通的方向相关，具体参考SK Sul教授的文章。
7. 以上代码有一个优点就是不需要碰相电压。



> Github 代码地址在这里： https://github.com/horychen/ACMSIMC_TUT/tree/inverter_model 



# Compile

我使用的sublime编译文件（文件名为：!C_GCC.sublime-build）的内容为：

```
{
    "working_dir": "$file_path",
    "cmd": "gcc -Wall $file_name -o $file_base_name",
    "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
    "selector": "source.c",
    "variants": 
    [
        {   
        "name": "ACMSIMC_TUT",
            "shell_cmd": "gcc $file inverter.c controller.c observer.c observerTAAO.c -L. -lsatlut -o $file_base_name && start cmd /c \"${file_path}/${file_base_name}\""
        }
    ]
}

```



# Simulation Results

死区等因素影响的严重程度和母线电压的高低密切相关，同样的作用时间，母线电压越高，正比于前两者乘积的畸变电压也就越大。



母线电压为 3000 V 时：

![1572413684804](/assets/images/1572413684804.png)



母线电压为 300 V 时：

![1572413759330](/assets/images/1572413759330.png)



# 视频

视频地址： https://www.bilibili.com/video/av73918209/ 



# Future Topics

- Tsuji-2001的逆变器非线性模型
- 离线的死区补偿方法（Rasmussen-1996）
- 在线的死区补偿方法（Park.Sul-2014）
- VCO电压传感器（许扬博士的工作）