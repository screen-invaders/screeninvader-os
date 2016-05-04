//<![CDATA[
$(window).load(function(){
 $(document).ready(

 function () {
	 $('.folder').dblclick(function () {
		 var clickedElement=this;
		 // $('.overlay').show('slow', function () {
			 $(clickedElement).parent().find('.windowbase').fadeIn('fast');

		 //});
	 });
	 $('.close').click(function () {
		 $('.windowbase').fadeOut('fast', function () {
		//	 $('.overlay').fadeOut();
		 });
	 });
 });
});//]]> 