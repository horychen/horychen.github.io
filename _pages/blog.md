---
title:  "Blog"
layout: archive
permalink: /blog/
author_profile: true
comments: true
---

This blog serves as a clean list for the video tutorial I make.


<ul>
  {% for post in site.posts %}
    {% unless post.next %}
      <font color="#DA70D6"><h2>{{ post.date | date: '%Y %b' }}</h2></font>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y %b' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y %b' }}{% endcapture %}
      {% if year != nyear %}
        <font color="#DDA0DD"><h2>{{ post.date | date: '%Y %b' }}</h2></font>
      {% endif %}

    {% endunless %}
   {% include archive-single.html %}
  {% endfor %}
</ul>

<!-- ## Notebooks:
- [**Python: assignment, function argument passing, views, and copies**](https://github.com/horychen/Notebooks/python_variable.ipynb) -->

