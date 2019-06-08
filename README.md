I built this blog by following:
https://zenglix.github.io/personal_website/


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
