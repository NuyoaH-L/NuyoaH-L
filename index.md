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
<!-- 为博客底部添加音乐组件 -->
<div id="player"  class="aplayer"></div>
<script type="text/javascript">
const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    autoplay: true, //自动播放
    audio: [{
        name: 'The Song Of Doremi',
        artist: '林澜叶',
        url: '.mp3',
        cover: '.ico',
    },
	{
 		name: '阳光甚好，微风不噪',
        artist: '何石',
        url: '.mp3',
        cover: '.ico',
	}

	]
});
ap.init();
</script>
<br>
<center>
<div class="link-chip">
 <img alt="🌚" src="https://blog.nuyoah-l.ga/favicon.ico" class="link-chip-icon">
 <a title="🌚" target="_blank" class="link-chip-title" href="https://blog.nuyoah-l.ga/">博客</a>
</div>
<div class="link-chip">
 <img alt="🌚" src="http://api.molure.cn/sjtx/api.php?lx=c1" class="link-chip-icon">
 <a title="🌚" target="_blank" class="link-chip-title" href="https://status.nuyoah-l.ga/">状态</a>
</div>
<div class="link-chip">
 <img alt="🌚" src="http://api.molure.cn/sjtx/api.php?lx=c1" class="link-chip-icon">
 <a title="🌚" target="_blank" class="link-chip-title" href="https://tools.nuyoah-l.ga/">工具</a>
</div>
<div class="link-chip">
<img alt="🌚" src="http://api.molure.cn/sjtx/api.php?lx=c1" class="link-chip-icon">
 <a title="🌚" target="_blank" class="link-chip-title" href="https://pan.nuyoah-l.ga/">网盘</a>
</div>
</center>
