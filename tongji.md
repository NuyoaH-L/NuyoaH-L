---
layout: page
permalink: /tongji
permalink_name: 站点统计
title: 站点统计
detail_image: https://tuapi.eees.cc/api.php?category={fengjing}
---
<script src='https://cdn.jsdelivr.net/npm/busuanzi@2.3.0' async="async"></script>
<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
<body>
  <center>
  <div>
    <i class="fa fa-rss" style="color:#ffffff;"></i> <span id="busuanzi_value_site_pv"> <i class="fa-li fa fa-spinner fa-spin"></i></span> <code>次访问</code>
    <br>
    <i class="fa fa-group" style="color:#ffffff;"></i> <span id="busuanzi_value_site_uv"> <i class="fa-li fa fa-spinner fa-spin"></i></span> <code>位访客</code>
  </div>
  </center>
  <center>
    <div>
      累计运行了：
      <span id="run_time_day">
        <i class="fa-li fa fa-spinner fa-spin"></i>
      </span>天
      <span id="run_time_hour">
        <i class="fa-li fa fa-spinner fa-spin"></i>
      </span>时
      <span id="run_time_minute">
        <i class="fa-li fa fa-spinner fa-spin"></i>
      </span>分
      <span id="run_time_second">
        <i class="fa-li fa fa-spinner fa-spin"></i>
      </span>秒
      <script>
         setInterval(function (d,h,m,s,b) {
           function setzero(i) {
             return i < 10 ? "0" + i : i;
         }
         let BirthDay = new Date(b);
         let today = new Date();
         let timeold = (today.getTime() - BirthDay.getTime());
         let sectimeold = timeold / 1000;
         let secondsold = Math.floor(sectimeold);
         let msPerDay = 24 * 60 * 60 * 1000;
         let e_daysold = timeold / msPerDay;
         let daysold = Math.floor(e_daysold);
         let e_hrsold = (e_daysold - daysold) * 24;
         let hrsold = Math.floor(e_hrsold);
         let e_minsold = (e_hrsold - hrsold) * 60;
         let minsold = Math.floor((e_hrsold - hrsold) * 60);
         let seconds = Math.floor((e_minsold - minsold) * 60);
         d.textContent = daysold;
         h.textContent = setzero(hrsold);
         m.textContent = setzero(minsold);
         s.textContent = setzero(seconds);
      },
      1000,
      document.getElementById("run_time_day"),
      document.getElementById("run_time_hour"),
      document.getElementById("run_time_minute"),
      document.getElementById("run_time_second"),
      "08/09/2021 00:00:00")
      </script>
    </div>
  </center>
</body>
