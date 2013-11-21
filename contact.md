---
layout: post
title:  "联系我们"
categories: info
---
<style>
  #map-canvas {
		width: 600px;
    height: 400px;
    float: right;
    margin: 0px;
    padding: 0px
  }
  ul {
  	float: left;
  }
</style>

<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&language=zh"></script>
<script>
function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(31.24, 121.418)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

</script>

* 地址：上海市中山北路2925号206
* 电话：62160150
* 手机：13122828908
* 邮箱149018992@qq.com

<div id="map-canvas"></div>

