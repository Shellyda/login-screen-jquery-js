$(function(){
	        var menu = $('.menu h3');
			var white = $('.white');
			var black = $('.black');
			mudarcor();
			function mudarcor(){
			    menu.click(function(){
				menu.css('color','white');
				white.stop().css('backgroundColor','#353531').css('height','100%');
				black.stop().css('backgroundColor','#FFFFFF');
				$('.menu nav').css('display','block');

				resetar();
			})
		}

			function resetar(){
				menu.click(function(){
				menu.stop().css('color','#353531');
				white.stop().css('backgroundColor','#FFFFFF');
				white.stop().css('backgroundColor','#353531').css('height','auto');
				black.stop().css('backgroundColor','#353531');
				$('.menu nav').css('display','none');

				mudarcor();
			})
		}
})