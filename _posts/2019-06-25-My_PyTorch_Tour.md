---
layout: single
title:  "My PyTorch Exploration"
date:   2019-06-25
categories: tutorial
published: true
---



>  This article contains records of me quickly knowing PyTorch.



1. Pytorch in 5 minutes: https://www.youtube.com/watch?v=nbJ-2G2GXL0

    1. See more videos of him

    2. 这里面讲到了两个事情，一个是imperative coding，另一个是dynamic blah

        1. 中文版的解释：https://zhuanlan.zhihu.com/p/55544115

    3. 视频中出现的Autograd和Variable是什么？

        1. ```
            print(t, loss.data[0])‘’‘ # <- 这句会报错，应该是pytorch新版导致的，改为print(t, loss)即可。
            ```

        2. ![1561444967374](/assets/images/1561444967374.png)

        3. 中文版的解释：https://zhuanlan.zhihu.com/p/25572330

2. 安装Porch

    1. pytorch.org

    2. pip install https://download.pytorch.org/whl/cu100/torch-1.1.0-cp37-cp37m-win_amd64.whl
        pip install https://download.pytorch.org/whl/cu100/torchvision-0.3.0-cp37-cp37m-win_amd64.whl

        注意，如果你的OS是Linux系统，可能要用pip3。我用的Windows下的Anaconda3。

3. 确保你有NVIDIA的显卡。Pytorch支持GPU并行运算，其一个功能是能够使用GPU的numpy好像。

    1. 我的笔记本是Legion Y730，显卡是1050Ti。
    2. 安装[Cuda 10])(https://developer.nvidia.com/cuda-downloads?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exelocal) ![1561444561619](/assets/images/1561444561619.png)
    3. 点Custom！不是所有的东西都要装的！
        1. 参考：https://devtalk.nvidia.com/default/topic/1038737/cuda-setup-and-installation/windows-10-cuda-installation-failure-solved/
        2. 把一些不需要的东西uncheck以后，成功了：![1561447088795](/assets/images/1561447088795.png)
    4. 然而，实际上，安装CUDA这部分我不是很懂，有好多疑惑。
        1. 我按照https://stackoverflow.com/questions/48152674/how-to-check-if-pytorch-is-using-the-gpu去检查我CUDA装好了没有，结果发现我装好了。但是实际上当时CUDA安装程序提示我（一部分组件）安装失败了。![1561446699637](/assets/images/1561446699637.png)
        2. 我也试过用Conda装cuda-toolkit，失败了：![1561446824398](/assets/images/1561446824398.png)

4. 来吧，搞神经网络。

    1. 去这：https://pytorch.org/tutorials/beginner/nn_tutorial.html#what-is-torch-nn-really
        1. 下载一个jupyter notebook，用jupyterlab打开![1561444414331](/assets/images/1561444414331.png)
        2. Autograd mechanism and no_grad context manager: 
            1. https://pytorch.org/docs/stable/notes/autograd.html
            2. https://pytorch.org/docs/stable/autograd.html#tensor-autograd-functions
    2. 也可以去官方教程：（这个没有第一个好，太短了，太抽象了）
        1. https://pytorch.org/tutorials/beginner/blitz/neural_networks_tutorial.html#sphx-glr-beginner-blitz-neural-networks-tutorial-py
    3. 这里有个比较简单的神经网络，不需要PyTorch。
        1. https://peterroelants.github.io/posts/neural-network-implementation-part01/

5. 其他

    1. [Generative Adversarial Networks (GANs) in 50 lines of code (PyTorch)](https://medium.com/@devnag/generative-adversarial-networks-gans-in-50-lines-of-code-pytorch-e81b79659e3f)
    2. Different loss function:
        1. [Picking Loss Functions - A comparison between MSE, Cross Entropy, and Hinge Loss](https://rohanvarma.me/Loss-Functions/)







Cheat sheet:

![pytorch-cheat](assets/images/pytorch-cheat-1561532010762.jpg)



