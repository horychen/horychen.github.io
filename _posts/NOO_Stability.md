Assumptions:

- The signal $\psi_2$, i.e., the voltage model (VM) based rotor flux, is consistent with the actual rotor flux $\psi_\mu$.
- The equivalent circuit parameters ($r_s$ and $r_{req}$) and the inertia $J_s$ are known.



The actual induction motor model can be written in the M-T frame as follows:
$$
\begin{align}

p{{ i}_{Ts}} &= L_\sigma ^{ - 1}\left[ {{u_{Ts}} - \left( {{{r}_s} + {{r}_{req}}} \right){{ i}_{Ts}} - \omega {\psi _{M2}}} \right] - \left( { \omega  + {{r}_{req}}\frac{{i_s^TJ{\psi _2}}}{{\psi _2^T{\psi _2}}}} \right){{i}_{Ms}} \\

p\omega&=J_s^{-1}n_{pp}\left( n_{pp}\psi_{M2}i_{Ts} -  T_L \right)

\end{align}
$$




The proposed observer is 

$$
\begin{align}

p{{\hat i}_{Ts}} &= L_\sigma ^{ - 1}\left[ {{u_{Ts}} - \left( {{{r}_s} + {{r}_{req}}} \right){{\hat i}_{Ts}} - \hat \omega {\psi _{M2}}} \right] - \left( {\hat \omega  + {{r}_{req}}\frac{{i_s^TJ{\psi _2}}}{{\psi _2^T{\psi _2}}}} \right){{i}_{Ms}} \\

p\hat\omega&=J_s^{-1}n_{pp}\left( n_{pp}\psi_{M2}i_{Ts} - \hat T_L \right)

\end{align}
$$



The error dynamics for $\tilde i_{Ts}$ and $\tilde\omega$ are

$$\begin{array}{l}
p{{\tilde i}_{Ts}} = L_\sigma ^{ - 1}\left[ { - \left( {{r_s} + {r_{req}}} \right){{\tilde i}_{Ts}} - \tilde \omega {\psi _{M2}}} \right] - \tilde \omega {i_{Ms}}\\
p\tilde \omega  = J_s^{ - 1}{n_{pp}}{{\tilde T}_L}
\end{array}$$




$$
\left \{ - \frac{a^{2}}{3 \sqrt[3]{- a^{3} - \frac{27 b c d}{2} + \frac{\sqrt{- 4 a^{6} + \left(- 2 a^{3} - 27 b c d\right)^{2}}}{2}}} + \frac{a}{3} - \frac{\sqrt[3]{- a^{3} - \frac{27 b c d}{2} + \frac{\sqrt{- 4 a^{6} + \left(- 2 a^{3} - 27 b c d\right)^{2}}}{2}}}{3} : 1, \quad - \frac{a^{2}}{3 \left(- \frac{1}{2} - \frac{\sqrt{3} i}{2}\right) \sqrt[3]{- a^{3} - \frac{27 b c d}{2} + \frac{\sqrt{- 4 a^{6} + \left(- 2 a^{3} - 27 b c d\right)^{2}}}{2}}} + \frac{a}{3} - \frac{\left(- \frac{1}{2} - \frac{\sqrt{3} i}{2}\right) \sqrt[3]{- a^{3} - \frac{27 b c d}{2} + \frac{\sqrt{- 4 a^{6} + \left(- 2 a^{3} - 27 b c d\right)^{2}}}{2}}}{3} : 1, \quad - \frac{a^{2}}{3 \left(- \frac{1}{2} + \frac{\sqrt{3} i}{2}\right) \sqrt[3]{- a^{3} - \frac{27 b c d}{2} + \frac{\sqrt{- 4 a^{6} + \left(- 2 a^{3} - 27 b c d\right)^{2}}}{2}}} + \frac{a}{3} - \frac{\left(- \frac{1}{2} + \frac{\sqrt{3} i}{2}\right) \sqrt[3]{- a^{3} - \frac{27 b c d}{2} + \frac{\sqrt{- 4 a^{6} + \left(- 2 a^{3} - 27 b c d\right)^{2}}}{2}}}{3} : 1\right \}
$$

$$
\frac{a^{2}}{3 \sqrt[3]{- a^{3} - \frac{27 b c d}{2} + \frac{\sqrt{- 4 a^{6} + \left(- 2 a^{3} - 27 b c d\right)^{2}}}{2}}} + \frac{a}{3} - \frac{\sqrt[3]{- a^{3} - \frac{27 b c d}{2} + \frac{\sqrt{- 4 a^{6} + \left(- 2 a^{3} - 27 b c d\right)^{2}}}{2}}}{3}
$$

$$
- \frac{a^{2}}{3 \left(- \frac{1}{2} - \frac{\sqrt{3} i}{2}\right) \sqrt[3]{- a^{3} - \frac{27 b c d}{2} + \frac{\sqrt{- 4 a^{6} + \left(- 2 a^{3} - 27 b c d\right)^{2}}}{2}}} + \frac{a}{3} - \frac{\left(- \frac{1}{2} - \frac{\sqrt{3} i}{2}\right) \sqrt[3]{- a^{3} - \frac{27 b c d}{2} + \frac{\sqrt{- 4 a^{6} + \left(- 2 a^{3} - 27 b c d\right)^{2}}}{2}}}{3}
$$


The Delta for cubic equation:	


$$
- \frac{\sqrt[3]{- a^{3} - \frac{27 b c d}{2} + \frac{\sqrt{- 4 a^{6} + \left(- 2 a^{3} - 27 b c d\right)^{2}}}{2}}}{3}
$$
$\Delta = -4a^6 + (-2a^3-27bcd)^2=-4a^6 + 4 a ^6 + 4\times27a^3bcd+ 27^2b^2c^2d^2>0$

where note that a,b,c,d are all <0, which means it has one real root and a pair of conjugate roots.

Let the real root be negative:

$\frac{a^2}{\sqrt[3]{-a^3-\frac{27}{2}bcd + \frac{1}{2}\sqrt{-4a^6+(-2a^3-27bcd)^2}}}$

$\frac{1}{3}\frac{a^2}{\sqrt[3]{-a^3-\frac{27}{2}bcd + \frac{1}{2}\sqrt{\Delta}}}+\frac{a}{3} < \frac{1}{3}\sqrt[3]{-a^3-\frac{27}{2}bcd + \frac{1}{2}\sqrt{\Delta}}$

