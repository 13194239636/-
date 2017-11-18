//文档加载动画
document.onreadystatechange = function(){
	if(document.readyState == "complete"){
		document.getElementsByClassName("loading")[0].style.display = "none";
	}
}
window.onload = function(){
	var $li = $(".content>nav>ul>li");
	var $toTop = $(".toTop");
	//主体部分的导航栏的点击效果
	$li.click(function(){
		if($(this).children("a").attr("class")!="select"){
					$(this).children("a").addClass("select").parent().siblings().children("a").removeClass("select");
		}
		return false;
	});
	var speed = 30;
	var timer = null;
	//滚动条效果实现的多种方法
	$toTop.click(function(){
/*		timer = setInterval(function(){
			var nextTop = document.documentElement.scrollTop*4/5;
			document.documentElement.scrollTop = nextTop;
			if(document.documentElement.scrollTop==0){
				clearInterval(timer);
			}
		},speed);*/

/*		timer = setInterval(function(){
			var nextTop = $(document).scrollTop()*4/5;
			document.documentElement.scrollTop = nextTop;
			if($(document).scrollTop()==0){
				clearInterval(timer);
			}
		},speed);*/
		timer = setInterval(function(){
			var nextTop = $(document).scrollTop()*4/5;
			$("html,body").animate({scrollTop:nextTop},1);
			if($(document).scrollTop()==0){
				clearInterval(timer);
			}
		},speed);
	});
}