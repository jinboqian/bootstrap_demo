$(".img-responsive").click(function imgbig(){

				//弹出图片，底部不可动
				//body.overflow=hidden;
				//获取滚动条高度
				var sh=$(document).scrollTop();  
				//console.log(sh);
				//创建标签
				var imgbig=$("<div class='imgbig' onclick='show()'></div>").appendTo("body");
				$(".imgbig").css("margin-top",sh+'px');
				$("body").css("overflow","hidden");
			
				$("<img id='imgshow' class='imgshow' src='" + this.src + "' />").appendTo(imgbig); 
				
			
	});
	
function show(){
$("body").css("overflow","visible");
$(".imgbig").remove();

}
//		$('body').click(function(){
//			if($('body').hasClass("imgshowing")){
//		$("body").css("overflow","visible").removeClass("imgshowing");
//		}
//	})

//窗口事件
$(window).resize(function(){
   //process here
});