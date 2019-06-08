---
layout: single
title:  "The Right Way To Add BH Curve (Not-Finished)"
date:   2019-01-07
categories: tech
---
# Extrapolation


## Pade Approximate



You can use table for this. It works fine.

![useful image]({{ site.url }}/assets/image.png)


| ![space-1.jpg]({{horychen.github.io}}/assets/Figure_7.png) | 
|:--:| 
| *Space* |


You can download the PDF [here]({{ site.url }}/assets/document.pdf).



Path to put files:
/assets/images/2018-08-07-jekyll-logo.png

![What](./assets/Figure_7.png)
Figure. Relative gradient versus B

The pade approximate does not give a monotonically decreasing gradient.
This results in, according to JMAG's documentation, difficulty in convergence (higher relaxation factor may be required).

md basics
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

md figure
https://medium.com/markdown-monster-blog/getting-images-into-markdown-documents-and-weblog-posts-with-markdown-monster-9ec6f353d8ec





A slight riff on the top voted answer that I found to be a little more explicit is to use the jekyll syntax for adding a class to something and then style it that way.

So in the post you would have:

![My image](./assets/Figure_7.png)

{:.image-caption}
*The caption for my image*
And then in your CSS file you can do something like this:

.image-caption {
  text-align: center;
  font-size: .8rem;
  color: light-grey;

Comes out looking good!


=======
Comes out looking good!
>>>>>>> 0c35198a83243e8f5ccb7294d454a263d53a79fb

<img src="././assets/Figure_7.png" alt="hi" class="inline"/>
