I built this blog by following:
https://zenglix.github.io/personal_website/

----

Support Math (LaTeX)
https://stackoverflow.com/questions/26275645/how-to-support-latex-in-github-pages

Quote begins:

If you used Jekyll in your GitHub pages, you can add
  <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        inlineMath: [['$','$']]
      }
    });
  </script>
  <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script> 
in the file _includes/head.html, and then your GitHub Pages site will support MathJax

End of Quote

----

Add Google Analytics.

Add 
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-141735057-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-141735057-1');
</script>
```
to head.html.
Then send a test at the Google site.

----

Add disqus (comments)

Choose the code for Jekyll. Tutorial on Youtube will tell you to choose universal. Don't.

Inside folder \_layouts:

Add 
```html
<script id="dsq-count-scr" src="//https-horychen-github-io.disqus.com/count.js" async></script>
```
to default.html

Add 
```html
<!-- https://https-horychen-github-io.disqus.com/admin/install/platforms/jekyll/ -->
{% if page.comments %} 

<div id="disqus_thread"></div>
<script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

// var disqus_config = function () {
//   this.page.url = "{{site.url}}{{page.url}}";  // Replace PAGE_URL with your page's canonical URL variable
//   this.page.identifier = "{{page.id}}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
// };

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://https-horychen-github-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

{% endif %}
```
to posts.html.

Modify the \_config.yml file as mine. Search for keyword "disqus" and "comment".


----
Go back to top button.
https://github.com/vfeskov/vanilla-back-to-top
