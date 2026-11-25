// Mobil menü
(function(){var b=document.querySelector('.burger'),m=document.getElementById('menu');if(!b||!m)return;
b.addEventListener('click',function(){var o=document.body.classList.toggle('nav-open');b.setAttribute('aria-expanded',o?'true':'false');});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){document.body.classList.remove('nav-open');b.setAttribute('aria-expanded','false');}});})();
// Görünürken yumuşak belirme (JS kapalıysa içerik zaten görünür)
(function(){var els=document.querySelectorAll('.reveal');if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}})},{rootMargin:'0px 0px -8% 0px'});els.forEach(function(e){io.observe(e)});})();
