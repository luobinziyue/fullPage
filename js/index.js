$(function() {
	setTimeout(function() {
		$('.first').addClass('comein');
	},200);

	$('#fullpage').fullpage({
		//是否显示项目符号
		navigation: true,
		loopButtom: true,
		onLeave: function(index,nextIndex,direction) {
			if(nextIndex != 1) {
				$('#bg').addClass('rotate');
			}

			if (index == 1 && nextIndex == 2) {
				$('.speed').addClass('layer');
			    setTimeout(function() {
			    	$('.speed').hide();
			    },1001);
			    setTimeout(function() {
			    	$('.p2').css('transform','translate(-50%,-50%) translateZ(0px)');			    	
			    },500)
			    
			}
			if (index == 2 && nextIndex == 3) {
				$('.p2').css('transform','translate(-50%,-50%) translateZ(1800px)');
				$('.p3').css('transform','translateZ(-50px) rotateX(30deg)');
				$('.title3').css('transform','translateZ(0px) rotateY(0deg)');
			}


		},

	});

})