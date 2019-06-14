---
layout: single
classes: wide
title:  "ECCE 2019 Full Paper Bearingless Induction"
date:   2019-06-08
categories: tech
published: false
# visible: 0
---

<!-- # ECCE 2019 Full Paper Bearingless Induction -->


<!-- more -->

## Table of Content
* TOC
{:toc}

## Modeling of the machine

### Thermal assumptions
- Stator current density ($J_s=4~\text{Arms}/\text{mm}^2$)
- Rotor current density ($J_r=6.5~\text{Arms}/\text{mm}^2$)
    - This is used to calculate the slot area of the rotor bar, but the actual current densitiy may deviate.
- Other factors that may implicitly affect the thermal performance:
    - Rotor outer diameter (note that for smaller diameter rotor that rotor current density may need to be increased)
        - For example, when stator OD is 150 mm, rotor current density usually needs to be over $7~\text{Arms}/\text{mm}^2$ to have feasible rotor geometry.
    - Drop shape rotor bar can be used **to maximize surface area for better thermal conductivity?**
        - This is suggested by Gerada [23] for high speed IM with contact bearings. ![Drop shape rotor slot](https://i.imgur.com/TIofhbt.png) ![](/assets/images/SolidWorks_Prototype_Qs24Qr32PS.png)
            - [23] D. Gerada, A. Mebarki, N. L. Brown, K. J. Bradley, and C. Gerada, "Design aspects of high-speed high-power-density laminated-rotor induction machines", IEEE Transactions on Industrial Electronics, vol. 58, no. 9, pp. 4039–4047, 2011.

### Structural assumptions

- On the one hand, **We have to make sure the maximum stess due to centrifugal force on the rotor will not exceed the yield stress of the rotor material or it will fail.**
    - Stress depends on the rotor geometry and rotor speed. Rotor outer radius $r_{or}$ is determined by the tip speed.
    - Rotational speed is 30,000 rpm.
        - The mechanical angular speed is $\Omega = 2 \pi \frac{30,000}{60} $ [rad/s]
    - Tip speed is **150 m/s** in this paper.
        - Pyrhonen (Figure 6.4): for laminated IM tip speed should be $<200$ m/s.
        - Based on tip speed, we have rotor outer radius as:
            $$ r_{or} = \frac{\text{tip speed}}{\Omega} = 47.7~\text{mm} $$ ~~(55.7 mm for 175 m/s)~~
    - Validation:
        - **Pyrhonen (2014)** Rotor stess due to centrifugal force $F_\text{cf}=m r_{or}\Omega^2$ with $m$ the mass (assuming solid cylinder with a bore): 
        $$ \sigma  = r_{or}^2 C'\rho {\Omega ^2} = 145.5~\text{MPa}<350~\text{MPa} $$ ~~(198 MPa for 175 m/s)~~
            - where 
                - $C^\prime=\frac{3+v}{4}$ for a cylinder with a small bore;
                - $v=0.29$ is Poisson's ratio for iron;
                - $\rho=7860~\text{kg/m}^3$ is the density of iron;
                - $r_{or}$ is the rotor outer radius;
                - $\Omega$ is the mechanical angular speed.
                - $350$ MPa is the yield stress of M19 steel, according to *Jahns 2004 Mechanical Design Considerations for Conventionally Laminated, High-Speed, Interior PM Synchronous Machine Rotors*
            - **Conclusion is that the specified tip speed gives stress safety factor of 1.75. This safety factor seems low since the actual rotor shape has less structural integerity. We will therefore investigate both 150 m/s and 175 m/s tip speeds.** 
            - In reality, different less strong rotor shapes are used:
                - Drop shape rotor bar (mechanically weaker)
                - Round shape rotor bar (mechanically stronger)
                - In this case, static structural FEA is resorted to.
        - **Gerada (2011 TIE)** provides a different approach to calculate stress as follows
        $$ \sigma (R) = \frac{\rho\Omega^2}{8\times 10^{12}} \left[ \frac{3m-2}{m-1}\left( r_{in}^2 + r_{out}^2 + \frac{r_{in}^2 r_{out}^2}{R^2} \right) - \frac{m+2}{m-1}R^2 \right] $$
            - where
                - $r_{in}$ and $r_{out}$ are rotor inner radius and rotor outer radius, respectively, and $R\in[r_{in}, r_{out}]$.
                - All radii ($r_{in}$, $r_{out}$ and $R$) are in millimeters. 
                - $1/m$ is Poisson's ratio.
                - Results for our rotor:
                    -          R,      $\sigma(R)$
                    - 14.7953 mm, 153.207 MPa
                    - 16.7953 mm, 134.968 MPa
                    - 18.7953 mm, 121.65 MPa
                    - ...
                    - 44.7953 mm, 47.5019 MPa
                    - 46.7953 mm, 42.8614 MPa
            - **Conclusion: The highest stress is present on the inner radius surface.**
        - **Lateb** in his paper gives another formula. However, it is free of rotor inner radius and works for a hollow rotor.
            - Paper title: *High speed, High power electrical induction motor technologies for integrated compressors*.
            - ![](https://i.imgur.com/zARAkKP.png)
- On the other hand, **We have to make sure the stack length will not exceed the length that reaches shaft's bending mode at rated speed.**
    - Stack length depends on the rated power and the rotor outer radius $r_{or}$.
    - Rated power is $P_\text{rated}=50$ kW.
        - The required torque is 
            $$T_\text{rated}=\frac{P_\text{rated}}{\Omega} =  15.9~\text{Nm}$$
        - The required rotor volume is
            $$V_r = \frac{T_\text{rated}}{2\sigma_{\tan}}$$
            where the tangential/shear stress $\sigma_{\tan}$ is assumed to be 12 kPa.
        - Finally, the stack length is
            $$L_{stk} = \frac{V_r} {\pi r_{or}^2} = 92.6~\text{mm}$$ 
            ~~(68 mm for 175 m/s)~~
    - Validation
        - The maximum stack length that reaches first critical speed (banana bending mode) is caculated by:
            $$ l_{\max }^2 = {n^2}\frac{{{\pi ^2}}}{{k\Omega }}\sqrt {\frac{{EI}}{{\rho S}}}= 495.8~\text{mm} $$ ~~(536 mm for 175 m/s)~~
            - where
                - $S$ is the area of the cross-section of the cylinder with bore ($m^2$);
                - $E$ is the modulus of elasticity (Young’s modulus) of the rotor material, typically 190–210 GPa for steel;
                - $I$ is second moment of inertia of area ($m^4$), $I = \pi(D^4_\text{out} - D^4_\text{in})/64$ for a cylinder;
                - $n$ is the order of critical rotation speed;
                - $k=1.5$ is the safety factor (the ratio of the nth critical angular speed to rated angular speed);
                - $\rho$ is the density of material.
            - **Conclusion is that the estimate of the stack length of 92.6 mm is below the maximum of 495.8 mm.**

### Electromagnetic performance variable calculations
- **Step 1: Geometry definition**
    - 4 pole motor winding, 2 pole suspension winding
    - $Q_s=24$, $Q_r=16$.
    - 7 geometry variables: $L_g$, $w_{st}$, $w_{rt}$, $\theta_{so}$, $w_{ro}$, $d_{so}$, $d_{ro}$.
    - 3 specified variable:
        - Stator outer diameter: specified by the motor frame.
        - Rotor outer diameter: specified by tip speed and rotor angular speed.
        - Rotor inner diameter: specified by desired rotor shaft diameter.
    - 4 derived variables: 
        - Stator slot height: derived by stator packing factor (=0.5), stator current, $J_s$ and $w_{st}$.
        - Rotor slot height: derived by rotor packing factor (=1.0), rotor current, $J_r$ and $w_{rt}$.
        - Stator yoke height: derived by stator slot height and stator outer diamter.
        - Rotor yoke height: derived by rotor slot height and rotor inner diameter
- **Step 2: Modeling in FEA software**
    - **FEA Configuration List**
        - Number of steps 1st TSS: 32,
        - Number of steps 2nd TSS: 32,
        - End ring resistance modeling: False,
        - Pole specific: True,
        - DPNV: True,
        - Steel: "M-19 Gauge 29",
        - Copper Resitivity: 1/((3.76*75+873)*1e-9/55.),
        - Temperature: 75 deg Celcius,
        - Stator current: consistent with initial design,
    - Draw models
        - FEMM ![](https://i.imgur.com/S3Xpykd.png)
        - JMAG ![](https://i.imgur.com/weNsora.png)
    - Configure stator winding
        - 3 phase winding in the slots ![](https://i.imgur.com/PG8rFbj.png)
        - The Winding diagram ![](https://i.imgur.com/eo3XI9o.png)
    - Configure rotor winding
        - 4 phase wave winding (one phase plotted) ![](https://i.imgur.com/y8hKd3c.png)
    - Define excitation
        - ![](https://i.imgur.com/t3oQ6yQ.png)
    - **Question regarding the problem setup in FEMM.**
        - Parallel or series circuit?
            - Answer: they are totally different connections. What we want is the parallel circuit.
        - FEMM documentation?
            ![](https://i.imgur.com/xo6TO4p.png)
    - Before transient simulation begins, the slip frequency or the actual rotor speed must be defined. Thus, we need a two staged FEA simulation as follows.
        - Two staged FEA simulation
            - Stage One: FEMM search for breakdown slip frequency with 5 parallel instances.
                - Refer to the figure below. 
                - Step 1: Five equally spaced black points (1 Hz to 5 Hz) are first evaluated. 
                    - If torque does not reach a maximum, 
                        - Another five points are evaluated at 6 Hz to 10 Hz. Repeat this until torque reaches a maximum.
                - Step 2: torque has reached a maximum (which is also the 1st heightest point).
                    - Evaluate 5 points between the 1st heighest and 2nd heightest points.
                        - For example, in the figure below, frequencies of 3.167, 3.333, 3.5, 3.667, 3.833 Hz are evaluated as 5 points marked in red.
                    - Check if there is a new maximum found within these 5 points. If not, the maximum is between the 1st heighest and 3rd heightest points, so evaluate 5 points between the 1st heighest and 3rd heightest points and a maximum is definitely found now.
                - Step 3: If the slip frequency difference between the 1st heighest point and another point is below pre-set threshold then stop, or else repeat Step 2.
                - ![](https://i.imgur.com/lDl8OwQ.png)
            - Stage Two: JMAG transient FEA simulation. 
                - Refer to the figure below.
                - In the first time step section, simulate 32 steps over half the slip period.
                - In the second time step section, simulate another 32 steps over half the stator period.
                    - During this section, the torque and force profiles go through complete electrical period.
                - The transient simulation begins from an eddy current solution.
                - ![](https://i.imgur.com/g7xgly9.png)
- **Step 3: Post-processing**
    - All performance metrics are evaluated during steady state (i.e., during the **entire** 2nd time step section).
    - The depth of the 2D solution is $L_{stk}$. This depth does not really matter. It will be scaled later to get a motor that produces the rated power.
    - Torque
        - Average torque is caculated as the sum of troque profile divided by the number of data points.
        - Torque ripple is evaluated by the peak-to-peak value as illustrated in the figure below.
            - ![](https://i.imgur.com/8UXvKxq.png)
    - Force
        - The average force vector is defined as a vector $[F_{x,Avg}, F_{y,Avg}]$ with $F_{x,Avg}$ the average x-axis force.
        - Force amplitude is $\sqrt{F_{x,Avg}^2 + F_{y,Avg}^2}$
        - Force error magntitude is defined as the amplitude difference between the most deviated force vector and the average force vector.
        - Force error angle is defined as the angle between the most deviated force vector and the average force vector.
        - ![](https://i.imgur.com/QoR1NK0.png)
    - Loss
        - Iron loss
            - Evaluated by **JMAG** for the data within the last 1/4 stator period. 
                - Effective data: the second half of the 2nd time step section (i.e., the last 16 steps).
                - Hysterisis loss
                - Eddy current loss
                - Material is M19 Gauge 29.
                    - The loss coefficients of the Steinmetz's equation (adpated from femm.org)
        - Ohmic loss
            - Stator
                - Stator current is a given value
                - Loss along the stack (will be scaled)
                - Loss in the end winding (will not be scaled)
            - Rotor
                - Rotor current is provided by **FEMM results**
                - Loss along the stack (will be scaled)
                - Loss in the end winding (will not be scaled)
            - Formula:
                - **Option 1 (We use this one!)** 
                    - From Nicola Bianchi, Silverio Bolognani, Paolo Frare "Design Criteria for High-Efficiency SPM Synchronous Motors"
                    - Copper loss is $P_{\mathrm{Cu}}=\rho \mathrm{Vol}_{\mathrm{Cu}} J^{2}$
                    - where, 
                        - $\rho$ is the copper resistivity.
                        - {% raw %} $\mathrm{Vol}_ {\mathrm{Cu}} = S_{\mathrm{Cu}}\left(L_{t}+L_{\mathrm{ew}}\right) Q$ {% endraw %}
                            - $S_{\mathrm{Cu}} = k_\mathrm{fill}S_\mathrm{slot}$ is the area of copper. 
                            - $L_t$ is stack length.
                            - $L_{\mathrm{ew}}=\frac{\pi}{2} \frac{p_{s}^{\prime}+w_{t}}{2}+p_{s}^{\prime} k_{\mathrm{ov}}\left(y_{q}-1\right)$ is end winding length.
                            - $w_t$ is the width of tooth.
                            - The number $y_q$ is the coil pitch (in number of slots) of the winding.
                            - $k_\mathrm{ov}=1.8$ accounts for overlapping of end winding.
                            - $p_{s}^{\prime}=\pi\left(D+h_{t}\right) / Q$ is the slot pitch measured at the half height of the tooth.
                                - $D$ is the stator inner diameter.
                                - $h_t$ the height of the slot.
                        - $J$ is the slot current density.
                - Option 2 (from Pyrhonen's book)
                    Copper loss is $$P_{Cu}=\frac{1}{\rho_{Cu}\sigma_{Cu}} k_R J^2 m_{Cu} m$$
                    - where 
                    - $\rho_{Cu}$ is the density of copper.
                    - $\sigma_{Cu}$ is the conductivity of copper, $1/\sigma_{Cu}=(3.76T+873)\times1\text{e-}9/55$ with $T=75~{\rm K}$ with the temperature $T$.
                    - $k_R$ is the AC resistance factor considering the skin effect, which is assumed to be 1 here.
                    - $J$ is the current density, $J=\frac{\rm phase~current~rms~value}{aS_c}$
                    - $S_c$ is the area of a conductor, $S_c=A_{slot}k_{\rm fill}/z_Q$
                    - $z_Q$ is the number of conductors in a slot.
                    - $N_s$ is the number of turns in series, $N_s=Q_s z_Q/(2ma)$
                    - $m_{Cu}$ is the mass of the copper.
                    - $m$ is the phase of the winding.
                    - $a$ is the number of parallel path.
                    - $l_{av}=2L_{stk} + 2.4W + 0.1 \text{m}$ is the length of one turn.
                    - $W = y/Q_s \times (0.5\times(r_{or} + L_g + r_{siy})) 2\pi $ is the coil span. 
                    with $y$ the coil pitch by slot count and $r_{siy}$ the stator inner yoke radus. <span style="color:tomato">Cannot find the expression for $W$ in the book of Pyrhonen.</span>
                    - Reference: Pyrhonen's book (the thermal chapter).
        - Windage loss
            - Friction due to air
            - Based on **Ye gu Kang's Matlab code**


## Optimization approach

### Objective function approach
- Weighted multiobjective optimization
    - ![](https://i.imgur.com/RhFaSGW.png)
    - So fat, this method actually gives satisfactory resutls. It is efficient when the user knows what he/she is looking for, e.g., a low ripple design ($O_2$).
    - Before optimizing for different weights: $w_1$ and $w_2$, a local sensitivity analysis can tell whether or not the weights are good or not.
- Non-dominated sorting approach
    - 3 Objectives:
        - Negative torque per rotor volume (TRV)
        - Negative Efficiency at rated power ($\eta$)
        - Ripple performance: weighted sum of torque ripple ($T_{\rm rip}$), $E_m$ and $E_a$.
        - ![](https://i.imgur.com/EO1tMMB.png)
    - When to stop optimization? 
        - Set the number of iterations as **50**.
        - After the optimization stops, 
            - a local sensitivity analysis can be applied to one of the design in the Pareto front, in order to visualize the space of improvement.
            - or a local search can be initiated.
    - **How to determine the best design?**
        - Give a single objective, e.g., $O_1$, $O_2$ or others.
        - Specify constraints. For exmaple, $O_C<3$. Then pick a design gives highest TRV value. No requrement on efficiency.
        - **Hyper-volume versus generations plot.**
    - Will the pop size change during the optimization process? 
        - Not in our method (MOEA/D, Multi-Objective Evolutionary algorithm based on Decomposition), a trial chromosome that does not dominate its opponent is just discarded, even though its opponent does not dominate it.
        - In case that the unbounded external archive (UEA) is applied, all nondominated solutions found during searching process will be stored outside of the population, and will be used for generating trial chromosome.

### Constraints
- Perforamnce constraints (in order to for example avoid a high efficiency design with too large error angle results):
    - $T_{\rm rip}<20\%$
    - $E_m<20\%$
    - $E_a<10~\text{deg}$
- Geometry constraints:
    - The slot area of a new-born IM design (i.e., the trial chromosome/individual in the population) is the same with the IM design template (i.e., the candidate design).
        - Why? Answer: Slot area along with the free variable of tooth width derives the slot height of the IM design.
        - How to get slot area value? Answer: The slot area is obtained from the motor current and the specified current density for the candidate design.
    - Rotor slot open width cannot be larger than rotor slot width. In other words, the rotor slot has to be at least half closed.

### Allowable variable ranges
- Decide the air gap length based on the literature.
- Decide the tooth width ranges according to the initial design.
- Other geometry variables are manually specified.
- The table we use in the digest 
    - ![](https://i.imgur.com/SH9k1b9.png)
    
### Details on Optimization process
- Comparison between NSGA-II (Non-dominated sorting Genetic Algorithm II) and MOEA/D (Multi-Objective Evolutionary Algorithm based on Decomposition)
    - Please note that **MOGA** is essentially one kind of NSGA.
    - What is NSGA-II: http://oklahomaanalytics.com/data-science-techniques/nsga-ii-explained/
    - What is MOEA/D: Qingfu Zhang and Hui Li - MOEA/D: A Multiobjective Evolutionary Algorithm Based on Decomposition (See also: https://sites.google.com/view/moead/)
    - Which one is better? 
        - It is reported in [37] that MOEA/D outperforms NSGA-II. 
        - MOEA/D works well with large population size while convergence rate of NSGA-II is slowed with large population size [38].
        - [37] Qingfu Zhang and Hui Li - MOEA/D: A Multiobjective Evolutionary Algorithm Based on Decomposition
        - [38] R. Tanabe and H. Ishibuchi, “An analysis of control parameters of moea/d under two different optimization scenarios,” Applied Soft Computing, vol. 70, pp. 22–40, 2018.
    - How about **DE**?
        - MOEA/D has different variants. One is called MOEA/D-DE variant, which is what we are using. To me, MOEA/D-DE is the multi-objective implementation of DE.
- MOEA/D-DE
    - MOEA: Multi-Objective Evolutionary Algorithm.
    - DE: The mutation oeprator is differential evolution (DE) alike.
    - /D: Decomposition means the multi-objective problem is decomposed into a series of single objective problem in a neighborhood.
    - There are 3 decomposition methods:
        - 1\. Weighted sum
            - MOEA/D with the weighted sum function does not have an ability to handle MOPs with non-convex PFs.
                - from Ryoji Tanabe, Hisao Ishibuchi - An Analysis of Control Parameters of MOEA/D Under Two Different Optimization Scenarios
        - 2\. **Tchebycheff decomposition (We use this one!)**
        - 3\. Boundary Interception method with Penalty constraint (PBI)
    - The weights of the decomposition are automatically generated. There are different methods to generate weights:
        - **Grid method (We use this one!)**
            - The weight generation method grid offers a uniform distribution of the decomposed weights, **but is limiting the population size as it only allows for certain sizes** according to the number of objectives.
        - Low discrepancy method
        - Random method
- Settings
    - Pop size is **78**. 
        - It cannot be, e.g., 80 or 72 because the weight generation technique we use is **grid**.
        - For exmaple, set pop size to 7, and then the software pygmo will report: _Population size of 72 is detected, but not supported by the 'grid' weight generation method selected. A size of 66 or 78 is possible._
- Restart an interrupted run
    - Sort all the evaluated designs into different ranks of Pareto front.
    - For those designs that are inside the same rank of Pareto front, compute the crowding distance and sort them by crowding distance from up to 


## Literature review
- Literature review on optimization papers on electric machinery
    - The TIE SS mentioned by Gerd's TIE paper
    - Duan Yao & Dan Ionel 2013 A review of optimization of machines
    - IEMDC 2019 Dan Ionel: Design Optimization of Electric Machines with 3D FEA and a New Hybrid DOE-DE Numerical Algorithm
- More comprehensive literature review on bearingless induction motors
    - How many papers are there on design of bearingless IMs? I have all of them.
        - **How do I know I have all of them?**
            - Search google scholar for "design", "bearingless" and "induction": https://scholar.google.com/scholar?start=20&q=%22design%22+%22bearingless%22+%22induction%22&hl=en&as_sdt=0,50
            - **There is not a single paper having these 3 keywords in the title.**
        - 1. Chiba's papers on pole-specific rotor.
        - 2. Y. Sun, J. Tang, and K. Shi, “Design of a bearingless outer rotor induction motor,” Energies, vol. 10, no. 5, p. 705, 2017.
        - 3. Our IEMDC 2019 paper.
    - Cite more papers on bearingless IM control. Done.
        - ![](https://i.imgur.com/K56IdxO.png)
- Description of salient details of prior work on developing bearingless motors as aligned to this manuscript (satisfying reviewer 1)
    - Bearingless PM motor design papers. Done. See the manuscript.

## Paper completion
- Based on above outcomes, conduct final optimization
- Complete draft of paper
- Milestone 1: review meeting on preliminary optimization
- Due: May 31st, 2019
- Milestone 2: review meeting on final optimization
- Due: June 10th, 2019
- Milestone 3: review meeting on complete paper draft
- Due: June 10th
- Milestone 3: Paper revision incorporating feedback from a peer reviewer
- Due: June 17th
- Milestone 4: Paper submitted
- Due: June 27th
