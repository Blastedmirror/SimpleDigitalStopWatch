window.onload = function () {
var sec =00;
var min=00;
var appendsec = document.getElementById("sec");
var appendmin = document.getElementById("min");
var butstart = document.getElementById("start");
var butend = document.getElementById("end");
var butreset = document.getElementById("reset");
var interval;
var eo = 0;
var blink = document.getElementById("blink");

butstart.onclick = function(){

	interval = setInterval(startTimer,1000);

}
butend.onclick = function(){
	clearInterval(interval);
}
butreset.onclick = function(){
	clearInterval(interval);
	sec = 00;
	min = 00;
	appendsec.innerHTML = "0"+sec;
	appendmin.innerHTML = "0"+min;
}

function startTimer(){
	eo++;
	if(eo%2==0){
		blink.innerHTML = ":";
	}
	else{
		blink.innerHTML = " ";
	}
	sec++;
	if(sec<10){
		appendsec.innerHTML="0"+sec;
	}
	else{
	appendsec.innerHTML=sec;
	}
	if(sec>60){
		min++;
		if(min<10){
			appendmin.innerHTML = "0"+min;
		}
		else{
			appendmin.innerHTML = min;
		}
		sec = 0;
	
	}


}
}
