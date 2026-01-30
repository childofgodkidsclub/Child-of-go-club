// Small site JS: set year and mark active nav link
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();
  // mark active link by pathname
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function(a){
    if (a.getAttribute('href') === window.location.pathname || (a.getAttribute('href') === '/' && window.location.pathname === '/')) {
      a.classList.add('active');
    }
  });
});