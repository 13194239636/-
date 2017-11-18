//文档加载动画
document.onreadystatechange = function(){
	if(document.readyState == "complete"){
		document.getElementsByClassName("loading")[0].style.display = "none";
	}
}

window.onload = function(){
	var oU = document.getElementsByClassName("main_nav")[0];
	var a = oU.getElementsByTagName("a");
	var oD = document.getElementsByClassName("page_foot")[0];
	var aL = oD.getElementsByTagName("a");
	var len = aL.length;
	var center =Math.floor(len/2);
	var prev = oD.getElementsByClassName("prev")[0];
	var next = oD.getElementsByClassName("next")[0];
	var point = [oD.getElementsByClassName("point")[0],oD.getElementsByClassName("point")[1]];

	for(var i=0; i<a.length; i++){
		a[i].onclick = function(){
			for(var j=0; j<a.length; j++){
				a[j].setAttribute("class"," ");
			}
			this.setAttribute("class","selected");
		}
	};
	checkDisplay();
	checkPoint();
	for(var i=0; i<aL.length; i++){
		aL[i].onclick = function(){
			var current = oD.getElementsByClassName("nav_foot_selected")[0];
			
			changeFootNum(this);
			checkDisplay();
			checkPoint();
		}
	}
	prev.onclick = function(){
		var index=0;
		var current = oD.getElementsByClassName("nav_foot_selected")[0];
		if(current.innerHTML<6||current.innerHTML>195){
		for(var j=0; j<aL.length; j++){
				if(aL[j].getAttribute("class")=="nav_foot_selected"){
					index = j;
				}
				aL[j].setAttribute("class"," ");
			}
			if(index-1!=0){
				aL[index-1].setAttribute("class","nav_foot_selected");
			}else{
				aL[index].setAttribute("class","nav_foot_selected");
			}
		}
		if(current.innerHTML>=6&&current.innerHTML<=195){
			changeFootNum(aL[center-1]);	
		}
			checkDisplay();
			checkPoint();
		}
	next.onclick = function(){
		var index=0;
		var current = oD.getElementsByClassName("nav_foot_selected")[0];
		if(current.innerHTML<6||current.innerHTML>195){
			for(var j=0; j<aL.length; j++){
				if(aL[j].getAttribute("class")=="nav_foot_selected"){
					index = j;
				}
				aL[j].setAttribute("class"," ");
			}
			if(index+1!=0){
				aL[index+1].setAttribute("class","nav_foot_selected");
			}else{
				aL[index].setAttribute("class","nav_foot_selected");
			}
		}
		if(current.innerHTML>=6&&current.innerHTML<=195){
			changeFootNum(aL[center+1]);	
		}
		checkDisplay();
		checkPoint();
		}

		function checkDisplay(){
			if(oD.getElementsByClassName("nav_foot_selected")[0].innerHTML==1){
					prev.style.display = "none";
				}else{
					prev.style.display = "inline-block";
				}if(oD.getElementsByClassName("nav_foot_selected")[0].innerHTML==200){
					next.style.display = "none";
				}else{
					next.style.display = "inline-block";
				}
		}
		function checkPoint(){
			if(oD.getElementsByClassName("nav_foot_selected")[0].innerHTML<=6){
				point[0].style.display = "none";
			}else{
				point[0].style.display = "inline-block";
			}
			if(oD.getElementsByClassName("nav_foot_selected")[0].innerHTML>=195){
				point[1].style.display = "none";
			}else{
				point[1].style.display = "inline-block";
			}
		}
		function changeFootNum(obj){
			for(var j=0; j<aL.length; j++){
				aL[j].setAttribute("class"," ");
			}
			if(obj.innerHTML>6||parseInt(aL[center].innerHTML)>6){
				if(obj.innerHTML<=5&&parseInt(aL[center].innerHTML)<=9){
					var index = parseInt(obj.innerHTML);
					for(var i=2;i<11;i++){
						aL[i].innerHTML=i;
						aL[index].setAttribute("class","nav_foot_selected");
					}
				}else if(obj.innerHTML>=196||aL[center].innerHTML>=196){
					var index=0;
					for(var i=200;i>191;i--){
						aL[i-189].innerHTML=i;
						for(var j=0; j<aL.length; j++){
							if(aL[j].innerHTML==obj.innerHTML){
								index = j;
								break;
							}
						}
						aL[index].setAttribute("class","nav_foot_selected");
					}
				}else{
					aL[center].innerHTML = obj.innerHTML;
					aL[center].setAttribute("class","nav_foot_selected");
					for(var i=center+1;i<center+5;i++){
						aL[i].innerHTML = parseInt(aL[center].innerHTML)+i-center;
					}
					for(var i=center-1;i>center-5;i--){
						aL[i].innerHTML = parseInt(aL[center].innerHTML)+i-center;
					}
				}
			}else{
				obj.setAttribute("class","nav_foot_selected");
			}
				
		}
		
}