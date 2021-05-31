"use strict";

var map;
var PlACES = [{
  lat: 49.091678,
  lng: 33.451642,
  title: title
}];

function initMap() {
  map = L.map('map').setView([49.091678, 33.451642], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  var marker = L.marker([49.091678, 33.451642]).addTo(map).bindPopup("\n        <p>\u0422\u0443\u0442 \u0436\u0438\u0432\u0443.</p>\n    ");
  var barber = L.marker([49.06920553701443, 33.41621841257502]).addTo(map).bindPopup("\n    <ul class=\"workTime\">\n        <li>\u043F\u043D-\u0432\u0441: 9:00 - 20:00</li>\n    </ul>\n    <p>\u0422\u0443\u0442 \u0441\u0442\u0440\u0438\u0433\u0443\u0441\u044C.</p>\n    ");
}

map_link.addEventListener('click', function () {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", "assets/plugins/leaflet/leaflet.css");
  document.head.append(link);
  var script = document.createElement('script');
  script.setAttribute('src', "assets/plugins/leaflet/leaflet.js");
  document.body.append(script);
  script.onload = initMap;
  map_link.remove();
  map_pic.remove();
});