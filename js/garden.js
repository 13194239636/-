//文档加载动画
document.onreadystatechange = function(){
	if(document.readyState == "complete"){
		document.getElementsByClassName("loading")[0].style.display = "none";
	}
}

window.onload = function(){
	var $li = $(".content>nav>ul>li");
	var $publish_btn = $(".publish_btn>ul>li");
	$li.click(function(){
		$(this).children("a").addClass("selected").parents().siblings().removeClass("selected");
		return false;
	});
	$publish_btn.click(function(){
		$(this).siblings()
		.children("input")
		.prop("checked",false);
	});
}