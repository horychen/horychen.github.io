

#### Number of turns per slot

当前设计zQ是8（之前的代码计算反电势的时候每相串联匝数没有考虑并联支路数为2，所以zQ只有4），考虑到导线的直径是Gauge 20，槽的面积可以用四边形面积公式计算：

<https://www.mathopenref.com/coordpolygonarea.html>

（Circle Packing）能放多少跟导体？从而决定所需要的并绕数（Strands in hand）。



#### For the 2 pole bearingless induction motor prototype, here is a list of thing that I have checked.

1. Stator core lamination.
   1. Stator outer diameter is 150 mm.
    2. There are 6 installing holes on the hexagon frame. The diameter of each hole is 8.05±0.03. The center of each hole is 79 mm away from the origin.
    3. The stator slot opening is 2.405 mm. **The gauge 20 wire we are using is about 0.8 mm wide in diameter.** So the slot open is 2 times wider than the diameter of the wire.
2. Copper rod
   1. It has a diameter of 3/16” or 4.7625 mm.
    2. We are going to order from McMaster: <https://www.mcmaster.com/8966k3>
    3. The name of the copper rod is **Multipurpose 110 Copper Rod**.
    4. 
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



The SolidWorks files are edited in SolidWorks 2017, and are attached in a zip file including

StatorCore.SLDPRTRotorCore.SLDPRT
CopperRod.SLDPRT
EndPlate2Pole.SLDPRT
Assem2.SLDASM (A screenshot of this assembly is attached.)
and an original .dxf file.





#### Purchase Order

I created a PO for the copper part of the prototype, including:

The excel file for this PO can be found in the link below

<https://uwmadison.box.com/s/kjmwru9qa2yurqg4mkl1zas1kznoyzgh>

Order Total: $ 165.30.



The purpose of the items are explained as follows.

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


