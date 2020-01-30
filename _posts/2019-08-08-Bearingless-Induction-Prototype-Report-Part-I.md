---
layout: single
title:  "Bearingless Induction Motor Prototype Report--Part I"
date:   2019-08-08
categories: tech
published: false
classes: wide
---

* TOC
{:toc}
> This report covers everything about building and testing the bearingless induction motor prototype. The first part is about the fabrication process and the second part is for the testing results.
>
> This is Part I: Fabrication.



# Fabrication

## Mechanical Specification Details

The details about the properties of the 2 pole bearingless induction motor prototype are listed below:

1. Stator core lamination.
    1. Stator outer diameter is 150 mm.
    2. There are 6 installing holes on the hexagon frame. The diameter of each hole is 8.05±0.03. The center of each hole is 79 mm away from the origin.
    3. The stator slot opening is 2.405 mm. **The gauge 20 wire we are using is about 0.8 mm wide in diameter.** So the slot open is at least 2 times wider than the diameter of the wire.
2. Copper rod
    1. It has a diameter of 3/16” or 4.7625 mm.
    2. We are going to order from McMaster: <https://www.mcmaster.com/8966k3>
    3. The name of the copper rod is **Multipurpose 110 Copper Rod**.
3. Rotor core lamination
    1. Rotor inner diameter is 15.03 mm for installing the shaft. By the way, rotor outer diameter is 63.62 mm.
    2. Rotor slot diameter is 5.0162 mm = (4.7625 mm + 2*0.127 mm). This means the clearance between parts (i.e., rotor lamination and copper rod) is 0.127 mm.
    3. Rotor slot diameter is 5.0162 mm = (3/16” + 2*0.005”). This means the clearance between parts (i.e., rotor lamination and copper rod) is 0.005” mm.
4. Copper plate
    1. It will be cut from a copper sheet using the laser cutter.
    2. The copper sheet is 1/16" Thick, 4" Wide.
    3. The copper sheet is 1.5875 mm Thick, 101.6 mm Wide.
    4. We are going to order from McMaster: <https://www.mcmaster.com/8964k32>
    5. The name of the copper sheet is **Multipurpose 110 Copper Bar** (Yes, it is called bar)



## Purchase Order (PO)

I created a PO for the copper part of the prototype. The excel file for this PO can be found [here](https://drive.google.com/file/d/1PdWdyNRJrWq1rdxuZ-E0fFHsnNIUR74n/view?usp=sharing). The order total is $ 165.30. The purpose of the items are explained as follows.

1. For end plates, two kinds of copper sheets are ordered. 
2. 1. One (8964K32) is 1/16 inch (1.5875 mm) thick.
    2. The other (8963K167) is 0.04 inch (1.016 mm) thick. The 0.04 inch thick copper sheet is ordered in case that laser cutter cannot cut through the 1/16 inch thick copper sheet.
    3. Both copper sheets are 4 inch wide and 3 feet long.
    4. The end plate has an outer diameter of 63.62 mm **< 4 inch.**
    5. We need in total 9 end plates. One of them is a regular end ring, while the other 8 end plates are two pole ones.
    6. The required length of this 4 inch wide copper sheet is estimated to be 0.07 m * 9 = 2.07 feet **< 3 feet.**
3. For rotor conductor, copper rod is ordered.
4. 1. The copper rod (8966K3) is 3/16 inch wide in diameter and 6 feet long
    2. We will need in total 16 copper rods.
    3. The required maximal length of a single copper rod is 81.75 mm.
    4. The required minimal length of a single copper rod is 50 mm + 4/16 inch = 56.35 mm.
    5. The copper rod length is estimated by 81.75 mm * 16 = 4.3 feet **< 6 feet.**
5. For helping the assembly of stator lamination, an 8 mm diameter hand reamer is ordered.
6. 1. We modify the .fab file once for the laser cutter once to rotate the lamination 30 deg in order to allow cutting 3 more lamination per steel sheet.
    2. It turns out that the uniformity of lamination cut by laser cutter is poor. It is extremely difficult to insert lamination from different cutting patch to the 6 installing shafts.
    3. One solution is to increase the hole size but this may lead to loose assembly and waste over 50 lamination.
    4. So Kyle and I decide to get a reamer (2822A44) to rescue this situation.

## SolidWorks Modeling

Use the templates from [WEMPEC lab site](https://lab.wempec.wisc.edu/fablight-metal-laser-cutter/) to make sure your installing holes are correct.

A screenshot of the 3D model is shown here.

![image.png](assets/images/image-1565318485385.png)

## Laser Cutter

The files are in .fab format. Make sure you put two or more “tabs” so that your lamination will not fall after it is cut. See the figure below.

![1565318709587](assets/images/1565318709587.png)

You will need the FL4500 database. Go to the [WEMPEC lab site](https://lab.wempec.wisc.edu/fablight-metal-laser-cutter/) for it:

![1565318844115](assets/images/1565318844115.png)

All my .fab files are available on the Group Google drive.



## Stator

### Stator lamination

Solidworks files are created using the templates (150 mm) from the WEMPEC site. Make sure the orientation of your model when exporting to .dxf file!!!

The steel is M19-Gauge 29 (0.355 mm thick). One sheet can cut 21 (3 times 7) laminations. We need 50 mm / 0.355 = 141 laminations, which is translated into 7 steel sheets.

![image.png](assets/images/image.png)



## Rotor

### Rotor end plate

Two kinds of end plates will be cut by the laser cutter.

- One accommodates 16 copper rods.

    - ![image.png](assets/images/image-1565319388931.png)

- The other takes only 2 copper rods. Please notice 2 slot end plate has been revised based on Kyle and Eric's advice, i.e., make the circular path thinner and move the circular path near the shaft and check the current density will be equal or lower than the copper rod.

    - ![image.png](assets/images/image-1565319401540.png)

    

### Length of copper rods

There will be 8 pairs of copper rods that have different length.

- The longest one is 2 x 1/16 inch + 50 mm + 16 x 1/16 inch + 2 x 1/16 inch = 2 * 1/16*25.4 + 50 + 16 * 1/16*25.4 + 2 * 1/16*25.4 = 81.75 mm
- The shortest one is 2 x 1/16 inch + 50 mm + 2 x 1/16 inch + 2 x 1/16 inch = 2 * 1/16*25.4 + 50 + 2 * 1/16*25.4 + 2 * 1/16*25.4 = 59.525 mm
- Here is a list of length of rotor rods in millimeters and inches:
56.35 mm         2.2185 inch
59.525 mm       2.3435 inch
62.7 mm           2.4685 inch
65.875 mm       2.5935 inch
69.05 mm         2.7185 inch
72.225 mm       2.8435 inch
75.4 mm           2.9685 inch
78.575 mm       3.0935 inch
81.75 mm         3.2185 inch



## Cutting Copper Plates

The .fab files are on the group Google drive.

![image.png](assets/images/image-1565319773143.png)

## Rotor Lamination

One M19 Gauge 29 steel sheet is enough for 141 rotor laminations.

![IMG_20190627_151728.jpg](assets/images/IMG_20190627_151728.jpg)



## TeamLab

We need to get a red pass. 

The fee is paid by Kyle.

Enroll in course and the pass test online (make some screenshot about the results when training is helpful).

Attend the Seminar for red pass on 2019/6/24 12pm.

You will be trained to build a red part (shown in the figure below) by watching Youtube videos.

![image.png](assets/images/image-1565318127672.png)



## Shaft

The shaft is from Misumi. Its outer diameter is 15 mm at rotor core and its outer diameter is 12 mm at load end and non-load end.

You will need to cut a key from the key stock at TeamLab. The picture below shows a Misumi shaft with a self-cut key installed together. **Make sure your key is slightly larger than 50 mm.**

![image.png](assets/images/image-1565319458817.png)



## Cutting Rotor Bars/Rods

### Length of copper rods

There will be 8 pairs of copper rods that have different length.

- If the end plate is 0.04 inch thick (**We use this one!**)

  - The longest one is (0.04 + 1/16) inch *2 + 50 mm + (0.04 + 1/16) inch *8
  - The shortest one is (0.04 + 1/16) inch *2 + 50 mm + (0.04 + 1/16) inch *1
  - Here is a list of length of rotor rods in millimeters and inches:
>>> (0.04 + 1/16)*25.4 * 2 + 50 + (0.04 + 1/16)*25.4 * 8
>>> 76.035 mm
>>> (0.04 + 1/16)*25.4 * 2 + 50 + (0.04 + 1/16)*25.4 * 7
>>> 73.4315 mm
>>> ..........
>>> (0.04 + 1/16)*25.4 * 2 + 50 + (0.04 + 1/16)*25.4 * 2
>>> 60.414 mm
>>> (0.04 + 1/16)*25.4 * 2 + 50 + (0.04 + 1/16)*25.4 * 1
>>> 57.8105 mm

- If the end plate is 1/16 inch thick (This is too thick to be cut)

  - The longest one is 2 x 1/16 inch + 50 mm + 16 x 1/16 inch + 2 x 1/16 inch = 2 * 1/16*25.4 + 50 + 16 * 1/16*25.4 + 2 * 1/16*25.4 = 81.75 mm
  - The shortest one is 2 x 1/16 inch + 50 mm + 2 x 1/16 inch + 2 x 1/16 inch = 2 * 1/16*25.4 + 50 + 2 * 1/16*25.4 + 2 * 1/16*25.4 = 59.525 mm
  - Here is a list of length of rotor rods in millimeters and inches:
>>> 56.35 mm         2.2185 inch
>>> 59.525 mm       2.3435 inch
>>> 62.7 mm           2.4685 inch
>>> 65.875 mm       2.5935 inch
>>> 69.05 mm         2.7185 inch
>>> 72.225 mm       2.8435 inch
>>> 75.4 mm           2.9685 inch
>>> 78.575 mm       3.0935 inch
>>> 81.75 mm         3.2185 inch

Received the package from McMaster. Here is a picture for the copper rod. It fits in the rotor slot well.

You will need the layout blue to mark the location to cut. The layout blue can be wiped with alcohol. 

![IMG_20190627_162841.jpg](assets/images/IMG_20190627_162841.jpg)

Note: other student is able to cut 1.5 mm copper sheet. This means that the laser cutter setting matters.



## Assembly

## Hand Reamer

This is a life-saver! 

You will need this to clear the blur in your six installing holes on the stator like this:

![1565319334618](assets/images/1565319334618.png)

Or else you will find it is very difficult to put six installing rods through.

## Stator Assembly

Make sure the tabs are aligned. Add markers to the laminations so you will quickly find the alignment.

![image.png](assets/images/image-1565319694115.png)

![image.png](assets/images/image-1565319682912.png)

## Rotor Assembly

### Rotor Core and Shaft Assembly

During assembling the shaft, it is not hard to slide the rotor lamination onto the shaft.

![image.png](assets/images/image-1565320126724.png)

### Rotor Conductors Assembly

![IMG_20190627_164037.jpg](assets/images/IMG_20190627_164037.jpg)

![IMG_20190627_173715.jpg](assets/images/IMG_20190627_173715.jpg)

### Soldering Copper Rods to Copper Plates

Mike (at TeamLab) gave me one stainless rod (having a diameter of 1/16 inch). This is useful to make clearance between different 2 hole copper plates during soldering.

#### Flux

The flux is crucial to make the solder flowing to the gap between copper parts.

![IMG_20190703_114618](assets/images/IMG_20190703_114618.jpg)

This flux can be cleaned with water.



The torch. Use a proper head that spits fire that is large enough will help a lot.

![IMG_20190701_105441](assets/images/IMG_20190701_105441.jpg)

A spin-able vise:

![IMG_20190701_105429](assets/images/IMG_20190701_105429.jpg)

## Clean the Flux after Soldering

There is no varnish outside the rotor core. If you forget to clean the flux, the rotor core will get rusted, and the flux will turn into green color.

![IMG_20190703_114735](assets/images/IMG_20190703_114735.jpg)

This flux can be cleaned with water, so:

![IMG_20190711_102324.jpg](assets/images/IMG_20190711_102324.jpg)

General guide:

- Step one: Read instruction for the flux we used.
- Step two: Find the proper liquid and put the rotor inside the liquid.
- Step three: Bake the rotor after enough time. (There is a baking machine in the basement lab.)
    - ![IMG_20190711_175110.jpg](assets/images/IMG_20190711_175110.jpg)
- Step four: apply varnish to prevent rusting
    - ![IMG_20190711_153658.jpg](assets/images/IMG_20190711_153658.jpg)

Go to TeamLab and get a wire brush to further clean it up, if needed.



## Motor Frame (150 mm End Bell)

Give bearing and its clip to Mike (at TeamLab).

Kyle sent the SolidWorks files of the 150 end bell to Mike. Find it here: https://uwmadison.box.com/s/6qm3hx0ej49vuq5fm1qs1u3z3fuoiqx6

Get “motor frame/end bell with bearing” back from Mike.

![IMG_20190711_175750.jpg](assets/images/IMG_20190711_175750.jpg)



## Stator Winding

### Pre-processing

#### Wire gauges

The wire gauges available are:
1. Gauge 21 magnet wire (insulation for low voltage, solder with insulation on)
2. Gauge 20 Amber wire (insulation for 480 V, remove insulation before soldering )

Note that the wire diameter does not account for the insulation.

#### Number of turns per slot zQ

Number of turns per slot zQ is 4 when the stator voltage excitation is 480 V for 30,000 rpm operation. For the first prototype, 15,000 rpm is considered to be high enough.

#### Number of strands in hand

The slot area can be calculated by the area formula for polygon:
[link](https://www.mathopenref.com/coordpolygonarea.html)

Q: How many conductors can be fit into one slot? 
The answer to this question along with zQ determines the strands in hand number.

#### Paper liner and paper cutter

The price is $20 per piece. 

How to set up a lining paper: search for videos from Youtube: https://www.youtube.com/watch?v=yPwf3BwS4pg

#### Configuration

The stator winding has the following specifications:

- $z_Q=36$, 
- 4 strands in hand, 
- gauge 22 wire (I started with gauge 20 and then found it too hard to wind so I gave up). 
- Double layer winding.
- Number of parallel path is 2 for being DPNV winding.

This means there will be 36*4 = 144 strands for one layer of a slot.

For each layer of the winding, there will be **18** turns for each coils and there will be **4** coils.

#### Terminals

There will be 4 independent coils (i.e., 8 terminals) for me to connect to the torque inverter and suspension inverter.

### Winding diagram

The phase-U stator winding diagram is shown below:![winding_diagram_phase_u](assets/images/winding_diagram_phase_u.png)

The phase-V stator winding diagram is shown below:![winding_diagram_phase_v](assets/images/winding_diagram_phase_v.png)

The phase-W stator winding diagram is shown below:![winding_diagram_phase_w](assets/images/winding_diagram_phase_w.png)

### Bobbin

Q: 3D print or use what we have? 
A: Not necessary. I think I can use what we have in the basement.

The two bobbins should be put 50 mm apart.

There is a video in which I used the bobbin for winding coils: [link](https://drive.google.com/file/d/174WwZl3WLrKovitidsCZYbV7jWB8dwsN/view?usp=sharing) (file name is “Bobbin and Coils.mp4”)

### Lap Winding

#### First phase

![IMG_20190717_151016_1](assets/images/IMG_20190717_151016_1.jpg)

#### Second Phase

![IMG_20190717_214923](assets/images/IMG_20190717_214923.jpg)

#### Third Phase

![20190718_160843](assets/images/20190718_160843.jpg)

I have a video for how to do the stator winding. Ask me for it if I forget to edit it. Note: I was doing it wrong in the video. Even though my winding method will work but it needs excessive end space.







