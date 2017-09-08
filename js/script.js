$(function(){
    $(".b-img-right > img:nth-child(1)").addClass("first");
    $(".b-img-right > img:nth-child(2)").addClass("second");
    $(".b-img-right > img:nth-child(3)").addClass("third");


    var currentYear = (new Date).getFullYear();
        $(document).ready(function() {
        $("#copyright-year").text( (new Date).getFullYear() );
    });

    $(".sf-menu > li:nth-child(3n+2) > a").addClass("a-col-3").parent().find('> ul').addClass("a-col-3");
    $(".sf-menu > li:nth-child(3n+1) > a").addClass("a-col-1").parent().find('> ul').addClass("a-col-1");

// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    } 
   })
  }
 }
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')