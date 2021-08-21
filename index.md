---
layout: home
permalink: /
permalink_name: 主页
title: NuyoaH-L
detail_image: https://unsplash.it/1600/900?random
---
<link rel="icon" href="http://q1.qlogo.cn/g?b=qq&nk=1634297622&s=640">
<script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
<script>
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?74ad0ce7195884b1175861953f436113";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
</script>
<div id="hitokoto"><script>hitokoto()</script></div>
<hr>
{% for f in site.data.friends %}
<div class="link-chip">
 <img alt="{{f.describe}}" src="{{f.image}}" class="link-chip-icon">
 <a title="{{f.describe}}" target="_blank" class="link-chip-title" href="{{f.url}}">{{f.name}}</a>
</div>
<div class="link-chip">
 <img alt="{{f.describe2}}" src="{{f.image2}}" class="link-chip-icon">
 <a title="{{f.describe2}}" target="_blank" class="link-chip-title" href="{{f.url2}}">{{f.name2}}</a>
</div>
<div class="link-chip">
 <img alt="{{f.describe3}}" src="{{f.image3}}" class="link-chip-icon">
 <a title="{{f.describe3}}" target="_blank" class="link-chip-title" href="{{f.url3}}">{{f.name3}}</a>
</div>
{% endfor %}
