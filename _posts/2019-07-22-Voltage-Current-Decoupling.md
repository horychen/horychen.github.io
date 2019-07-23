---
layout: single
title:  "Voltage-Current Decoupling"
date:   2019-07-22
categories: tutorial
published: true
---

* TOC
{:toc}
> 此文为本系列[第四集](https://www.bilibili.com/video/av60367448/)，第一集请戳：[传送门](https://www.bilibili.com/video/av51496015)。

### 前言

很久没更新了，最近在制作样机啊什么的，分身乏术。昨天还去当了小半天水手嘿。

电压电流解耦控制，其实就是一个很简单的比例积分（PI）反馈控制器和前馈控制器结合的例子。在本次视频里，我们通过高速反转运行，来显示了在动态运行情况下，电流环解耦控制的必要性。



### 这里就是一些推导，具体去看视频吧

推导在这里，但是知乎你不能直接复制 LaTeX 代码，可以去我的博客相关页面邮件复制 TeX 代码。视频中的代码和这边的公式推导结果有一点点出入，虽然无伤大雅，但是还是有点难受的。我后来一想，一开始的方程就用错了，如果一开始用的是：$L_\sigma p i_s = u_s -r_s i_s + p\psi_s$（$\psi_s$是定子磁链）的话，就和代码一致了。
$$
\begin{array}{l}
{L_\sigma }p{i_s} = {u_s} - \left( {{r_s} + {r_{req}}} \right){i_s} + \left( {\alpha I - \omega J} \right){\psi _\mu }\\
{i_s} = \left[ \begin{array}{l}
{i_{\alpha s}}\\
{i_{\beta s}}
\end{array} \right]\\
T = \left[ {\begin{array}{*{20}{c}}
{\cos {\theta _M}}&{\sin {\theta _M}}\\
{ - \sin {\theta _M}}&{\cos {\theta _M}}
\end{array}} \right],\,p{\theta _M} = {\omega _\psi }\\
 \Rightarrow {L_\sigma }T\left( {p{i_s}} \right) = T{u_s} - \left( {{r_s} + {r_{req}}} \right)T{i_s} + \left( {\alpha I - \omega J} \right)T{\psi _\mu }\\
 \Rightarrow {L_\sigma }T\left( {p{i_s}} \right) = u_s^{MT} - \left( {{r_s} + {r_{req}}} \right)i_s^{MT} + \left( {\alpha I - \omega J} \right)\psi _\mu ^{MT}\\
p\left( {T{i_s}} \right) = \left( {pT} \right){i_s} + Tp{i_s} \Rightarrow Tp{i_s} = p\left( {T{i_s}} \right) - \left( {pT} \right){i_s}\\
 \Rightarrow p\left( {T{i_s}} \right) - \left( {pT} \right){i_s} = \frac{1}{{{L_\sigma }}}\left[ {u_s^{MT} - \left( {{r_s} + {r_{req}}} \right)i_s^{MT} + \left( {\alpha I - \omega J} \right)\psi _\mu ^{MT}} \right]\\
 \Rightarrow pi_s^{MT} - \left( {pT} \right){i_s} = \frac{1}{{{L_\sigma }}}\left[ {u_s^{MT} - \left( {{r_s} + {r_{req}}} \right)i_s^{MT} + \left( {\alpha I - \omega J} \right)\psi _\mu ^{MT}} \right]\\
pT = {\omega _\psi }\left[ {\begin{array}{*{20}{c}}
{ - \sin {\theta _M}}&{\cos {\theta _M}}\\
{ - \cos {\theta _M}}&{ - \sin {\theta _M}}
\end{array}} \right] = -{\omega _\psi }JT,\,p{\theta _M} = {\omega _\psi }\\
 \Rightarrow pi_s^{MT} - {\omega _\psi }\left[ {\begin{array}{*{20}{c}}
{ - \sin {\theta _M}}&{\cos {\theta _M}}\\
{ - \cos {\theta _M}}&{ - \sin {\theta _M}}
\end{array}} \right]{i_s} = \frac{1}{{{L_\sigma }}}\left[ {u_s^{MT} - \left( {{r_s} + {r_{req}}} \right)i_s^{MT} + \left( {\alpha I - \omega J} \right)\psi _\mu ^{MT}} \right]\\
JT = \left[ {\begin{array}{*{20}{c}}
0&{ - 1}\\
1&0
\end{array}} \right]\left[ {\begin{array}{*{20}{c}}
{\cos {\theta _M}}&{\sin {\theta _M}}\\
{ - \sin {\theta _M}}&{\cos {\theta _M}}
\end{array}} \right] = \left[ {\begin{array}{*{20}{c}}
{\sin {\theta _M}}&{ - \cos {\theta _M}}\\
{\cos {\theta _M}}&{\sin {\theta _M}}
\end{array}} \right]\\
 \Rightarrow pi_s^{MT} = \frac{1}{{{L_\sigma }}}\left[ {u_s^{MT} - \left( {{r_s} + {r_{req}}} \right)i_s^{MT} + \left( {\alpha I - \omega J} \right)\psi _\mu ^{MT}} \right] - {\omega _\psi }Ji_s^{MT}\\
 \Rightarrow p\left[ \begin{array}{l}
{i_{Ms}}\\
{i_{Ts}}
\end{array} \right] = \frac{1}{{{L_\sigma }}}\left\{ {\left[ \begin{array}{l}
{u_{Ms}}\\
{u_{Ts}}
\end{array} \right] - \left( {{r_s} + {r_{req}}} \right)\left[ \begin{array}{l}
{i_{Ms}}\\
{i_{Ts}}
\end{array} \right] + \left( {\alpha I - \omega J} \right)\left[ \begin{array}{l}
{\psi _{M\mu }}\\
{\psi _{T\mu }}
\end{array} \right]} \right\} - {\omega _\psi }\left[ \begin{array}{l}
 - {i_{Ts}}\\
{i_{Ms}}
\end{array} \right]\\
 \Rightarrow p\left[ \begin{array}{l}
{i_{Ms}}\\
{i_{Ts}}
\end{array} \right] = \frac{1}{{{L_\sigma }}}\left\{ {\left[ \begin{array}{l}
{u_{Ms}}\\
{u_{Ts}}
\end{array} \right] - \left( {{r_s} + {r_{req}}} \right)\left[ \begin{array}{l}
{i_{Ms}}\\
{i_{Ts}}
\end{array} \right] + \left( {\alpha \left[ \begin{array}{l}
{L_\mu }{i_{Ms}}\\
0
\end{array} \right] - \omega \left[ \begin{array}{l}
 - 0\\
{L_\mu }{i_{Ms}}
\end{array} \right]} \right)} \right\} - {\omega _\psi }\left[ \begin{array}{l}
 - {i_{Ts}}\\
{i_{Ms}}
\end{array} \right]\\
There\,could\,be\,error\,in\,the\,results...
\end{array}
$$
