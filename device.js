/* device.js v0.0.2 - 2/25/2013
   http://
   Copyright (c) 2013 Javi Jimenez Villar - Licensed MIT */
window.Device={addEvent:function(n,e,t){return n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent?n.attachEvent("on"+e,t):n["on"+e]=t},removeEvent:function(n,e,t){return n.removeEventListener?n.removeEventListener(e,t,!1):n.detachEvent?n.detachEvent("on"+e,t):n["on"+e]=null}},Device.Alarm=function(){var n,e,t,r,o,i,u,a;return n="alarm",navigator.alarms=navigator.alarms||navigator.mozAlarms,i=(null!=(u=navigator.alarms)?u.addEventListener:void 0)||navigator.mozSetMessageHandler,t=function(n,e){var t;return t=navigator.alarms.all(),a(t,n,e)},e=function(n,e,t,r,o){var i,u;return u=e?"respectTimezone":"ignoreTimezone",i=navigator.alarms.add(n,u,t),a(i,r,o)},o=function(n,e){var t;return t=navigator.alarms.remove(n),a(t,e,errorr)},r=function(e){return i?i(n,e):void 0},a=function(n,e,t){return null!=n&&(n.onsuccess=e),null!=n&&(n.onerror=t),n},{add:e,remove:o,all:t,event:r}}(Device),Device.Audio=function(){var n,e,t,r,o;return t=document.createElement("audio"),o=document.createElement("audio"),n=function(n){return n?(r(o,n),t.addEventListener("ended",function(){return this.currentTime=0},!1)):t.pause()},e=function(n){return r(o,n)},r=function(n,e){return n.setAttribute("src",e),n.play()},{background:n,play:e}}(),Device.Camera=function(){var n,e,t;return navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,t=null,n=function(n,r){return null!=navigator.getUserMedia?t=navigator.getUserMedia(n,function(n){return null!=r?r.call(r,n):void 0},function(n){return e(n)}):e("Device no available")},e=function(n){return console.error("Device.Camera [ERROR] - ",n)},{get:n}}(Device),Device.Connection=function(n){var e,t;return t=function(e){return n.addEvent(window,"online",e)},e=function(e){return n.addEvent(window,"offline",e)},{online:t,offline:e}}(Device),Device.FullScreen=function(){var n,e,t;return e=function(n){return("function"==typeof n.requestFullscreen?n.requestFullscreen():void 0)||("function"==typeof n.webkitRequestFullScreen?n.webkitRequestFullScreen():void 0)||("function"==typeof n.requestFullScreen?n.requestFullScreen():void 0)||("function"==typeof n.mozRequestFullScreen?n.mozRequestFullScreen():void 0)},n=function(n){return null==n&&(n=document),("function"==typeof n.cancelFullScreen?n.cancelFullScreen():void 0)||("function"==typeof n.webkitCancelFullScreen?n.webkitCancelFullScreen():void 0)||("function"==typeof n.mozCancelFullScreen?n.mozCancelFullScreen():void 0)||("function"==typeof n.exitFullscreen?n.exitFullscreen():void 0)},t=function(n){return null==n&&(n=document),n.fullScreen||n.webkitIsFullScreen||n.mozFullScreen},{enable:e,cancel:n,enabled:t}}(),Device.Gps=function(){var n,e,t,r,o,i,u,a,c,l,v,s,f;return v=null,f=null,n={success:null,error:null},e={enableHighAccuracy:!1,timeout:1e4,maximumAge:6e4},t=function(n,e){return l()?(u(n),navigator.geolocation.getCurrentPosition(s,c,e)):void 0},i=function(n,e){return l()?(u(n),f=navigator.geolocation.watchPosition(s,c,e)):void 0},r=function(){return v},o=function(){return a()},l=function(){return navigator.geolocation?(a(),!0):(console.error("Lungo.Device.Gps [ERROR]: navigator.geolocation is innacesible."),!1)},a=function(){return v=null,f?(navigator.geolocation.clearWatch(f),f=null):void 0},u=function(e){return n.success=e.success||null,n.error=e.error||null},s=function(e){return v=e.coords,n.success.call(n.success,e)},c=function(e){return a(),n.error.call(n.error,e)},{get:t,watch:i,position:r,stop:o}}(Device),Device.Notification=function(){var n,e,t,r;return n=function(n,e,t,r){return navigator.notification.alert(n,e,t,r)},t=function(n,e,t,r){return navigator.notification.confirm(n,e,t,r)},e=function(n){return navigator.notification.beep(n)},r=function(n){return navigator.notification.vibrate(n)},{alert:n,confirm:t,beep:e,vibrate:r}}(),Device.Orientation=function(){var n,e,t,r,o;return n={ORIENTATION:"deviceorientation",MOTION:"devicemotion",COMPASS_CALIBRATION:"compassneedscalibration"},e=function(e){return o(n.ORIENTATION,e)},t=function(e){return o(n.MOTION,e)},r=function(e){return o(n.COMPASS_CALIBRATION,e)},o=function(n,e){return window.addEventListener(n,function(n){return e.apply(e,n)},!0)},{onChange:e,onMotion:t,onNeedsCalibration:r}}(),Device.Storage=function(){var n,e,t,r,o,i,u;return n={PERSISTENT:"localStorage",SESSION:"sessionStorage"},e=function(e,t){return o(n.PERSISTENT,e,t)},t=function(e,t){return o(n.SESSION,e,t)},o=function(n,e,t){return n=window[n],t?u(n,e,t):null===t?i(n,e):r(n,e)},u=function(n,e,t){return n.setItem(e,JSON.stringify(t))},i=function(n,e){return n.removeItem(e)},r=function(n,e){return JSON.parse(n.getItem(e))},{local:e,session:t}}();