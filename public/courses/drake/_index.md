---
title: Drake Demonstration
linkTitle: Drake Demonstration
summary: This document summarize the steps to run pydrake on a windows machine with similar experience on an Ubuntu machine.
date: '2023-10-25'
type: course
tags:
  - underactuated
  - drake
---

<!-- {{< toc hide_on="xl" >}} -->


**Step 1, get WSL2.**
1. Hold winkey (the key between Ctrl and Alt), type `Turn Windows Features on or off` and open, tick `Windows subsystem for Linux`. 
2. Install Ubuntu 20.04 version from Microsoft Store.
3. Retart and configure your Ubuntu (wsl).
4. (Optional) Check out "VMMEM 100% CPU Usage Issue" to avoid burning down you PC by disabling the GUI feature.
> 4.1. winkey+R, type in %USERPROFILE%
>
> 4.2. create a new file named `.wslconfig` with content
> **[wsl2]** 
> guiApplications=false
> 
> 4.3. restart wsl by opening a cmd.exe with admin privilege running command `wsl --shutdown`
> see `https://x410.dev/cookbook/wsl/disabling-wslg-or-using-it-together-with-x410/`

**Step 2, get VS Code.**
> In VS Code, install the extension named "WSL". It allows you to work with a terminal as if you are on an Ubuntu machine.

**Step 3, get Python (and miniconda).**

The package management software conda makes things easier for newbies, and we will install miniconda

> mkdir -p ~/miniconda3
> wget was unable to establish SSL connection
> so I manually go to https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh and download miniconda for linux
> bash ~/miniconda3/Miniconda3-latest-Linux-x86_64.sh -b -u -p ~/miniconda3
> ~/miniconda3/bin/conda init bash


**Step 4, install drake.**
> https://drake.mit.edu/pydrake/pydrake.tutorials.html
> https://drake.mit.edu/python_bindings.html#using-the-python-bindings

My steps for reference (using miniconda):
```bash
pip install drake underactuated notebook ipywidgets
```

My steps for reference (using venv, not recommended anymore):
```bash
# ON WSL2 Ubuntu 20.04

# get rid of the old python3 (mine is a python3.8)
sudo apt-get clean
sudo apt-get autoremove --purge
sudo apt-get remove python3
sudo apt-get autoremove

# get 
sudo apt-get update
sudo apt-get install python3
sudo apt install python3-pip
sudo apt install python3.8-venv

python3 -m venv main2 # this will create a folder named "./main2" in the current directory "."
# source main3/bin/activate # use this to activate the virtual env

main2/bin/pip install --upgrade pip # drake requires pip version > 20.3
main2/bin/pip install drake
main2/bin/pip install underactuated
main2/bin/pip install notebook
main2/bin/pip install ipywidgets

main2/bin/python3 -m pydrake.tutorials
  # this gives: ERROR: the Jupyter notebook runtime is not installed!
  # but you can now run ipynb files from the course companion codes.

  # http://localhost:7000/
```





<!-- BUT somehow I cannot enable my python3 venv encironment in wsl2. Instead, I run pydrake without setting an virtual environment. -->
<!-- Step 4, https://github.com/RussTedrake/underactuated
`git clone https://github.com/RussTedrake/underactuated.git`
to run, e.g., ipynb in folder ./dp, you need to fix the dependency issue by adding following snippets
```python
import sys; sys.path.insert(0, '/home/hory/codes/underactuated')
import sys; sys.path.append('../')
import sys, os; sys.path.append(os.path.dirname(os.path.abspath(__file__)))
```

`pip3 install mpld3 packaging`
 -->



**Step 4, go through [official tutorials](https://github.com/RussTedrake/underactuated)**

I personally like `cartpole_urdf.ipynb`, `cartpole_balancing.ipynb`, and `authoring_multibody_simulaiton.py` the most.

---
Other related Links:
> Lectures by Zhang, Wei @ SUSTech:
>
> https://www.youtube.com/watch?v=_HpUZU6Zlqw
>
> Finger manipulating a box:
>
> https://medium.com/@berk9848/drake-first-tutorial-275042d145b4
> 
> Examples from underactuated chapter 3:
>
> https://deepnote.com/app/zhongqi-wei/Ch-3-Acrobots-Cart-Poles-and-Quadrotors-Duplicate-b398742d-b8c6-4604-a80e-2e0627ff0f76
>
> Drake (the Cpp version of CartPole LQR):
> 
> https://drake.guzhaoyuan.com/drake-controllers/lqr-on-cart-pole
>
> More cartpoles:
>
> https://github.com/robotics-laboratory/cart-pole
>
> https://cartpole.robotics-lab.ru/3.0.0/dynamics/
>
> https://www.youtube.com/@robotics_lab/videos
>
> Fish robot:
>
> https://www.youtube.com/watch?v=oNmSqHzHQXg
>