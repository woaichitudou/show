$(document).ready(function(){
	$('#menu li').hover(function(){
		 $(this).children("ul").css("display","block");
		 },function(){
		 $(this).children("ul").css("display","none");
		 })
});