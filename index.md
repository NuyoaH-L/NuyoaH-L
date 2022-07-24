---
layout: home
permalink: /
permalink_name: 主页
title: NuyoaH-L
detail_image: https://unsplash.it/1600/900?random
---
<center>
 <div id="hitokoto"><script>hitokoto()</script></div>
</center>
<hr>
<!--<center>
 <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1425371292&auto=1&height=66"></iframe>
</center>-->
<div id="player"  class="aplayer"></div>
<script type="text/javascript">
const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: false,
    autoplay: true, //自动播放
    audio: [{
        artist: 'Eye Water - itsuwari',
        url: 'https://music.163.com/song/media/outer/url?id=1351784375.mp3',
        cover: 'https://p1.music.126.net/XSOnbQelZb4qtcdhTKPafQ==/109951163924980512.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0',
    }
	]
});
ap.init();
</script>
<br>
<center>
<div class="link-chip">
 <img alt="🌚" src="https://q1.qlogo.cn/g?b=qq&nk=1634297622&s=640" class="link-chip-icon">
 <a title="🌚" target="_blank" class="link-chip-title" href="https://blog.nuyoah-l.ga/">博客</a>
</div>
<div class="link-chip">
 <img alt="🌚" src="https://status.nuyoah-l.ga/favicon.ico" class="link-chip-icon">
 <a title="🌚" target="_blank" class="link-chip-title" href="https://status.nuyoah-l.ga/">状态</a>
</div>
<div class="link-chip">
 <img alt="🌚" src="https://tools.nuyoah-l.ga/favicon.ico" class="link-chip-icon">
 <a title="🌚" target="_blank" class="link-chip-title" href="https://tools.nuyoah-l.ga/">工具</a>
</div>
</center>
