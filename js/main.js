var cocoaUI={
	tab: function(){
		$(".tab").click(function(){
			$("#mobile").toggleClass("active");
			$(".dimmed").toggleClass("active");
			$(".tab").toggleClass("active");
		});
	},
	scrollEvent: function(){
		var t=0; // 높이 위치
		var n; // 인덱스
		var timer=0;
		var pos=0;
		
		$("#GNB li a").click(function(e){
			if($("html").is(":animated")) return;

			e.preventDefault();
			n=$(this).parent().index();
			pos=$("#section > div").eq(n).offset().top;

			$("html").animate({scrollTop:pos}, 800, function(){
				//$("#section > div").removeClass("active");
				$("#section > div").eq(n).addClass("active");
				$("#GNB li").removeClass("active");
				$("#GNB li").eq(n).addClass("active");
			});
		});
		
		$(window).scroll(function(){
			clearTimeout(timer);

			timer=setTimeout(function(){
				t=$(window).scrollTop();
				
				if(t >= $("#header").offset().top && t < $(".section1").offset().top){
					$("#header").addClass("active");
				}else if(t >= $(".section1").offset().top && t < $(".section2").offset().top){
					n=0;
				}else if(t >= $(".section2").offset().top && t < $(".section3").offset().top){
					n=1;
				}else if(t >= $(".section3").offset().top && t < $(".section4").offset().top){
					n=2;
				}else if(t >= $(".section4").offset().top && t < $(".signatures").offset().top){
					n=3;
				}else if(t >= $(".signatures").offset().top && t < $(".section5").offset().top){
					n=4;

					if($(document).height()==t+$(window).height()){
						n=5;
					}
				}else{
					n=5;
				}
				$("#section > div").eq(n).addClass("active");
				$("#GNB li").removeClass("active");
				$("#GNB li").eq(n).addClass("active");
			}, 100);
		});
		$(window).trigger("scroll");
	}
}