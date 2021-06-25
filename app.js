var min =00;
var sec=00;
var msec=00;

var min1=document.getElementById('min')
var sec1=document.getElementById('secs');
var msec1 = document.getElementById('msec');

var a;
function time(){
msec++
msec1.innerHTML=msec;

  if(msec>=100){
    sec++
sec1.innerHTML=sec;
    msec=0;
}else if(sec>=60){
    min++
    min1.innerHTML=min
    sec=0
    
  }
}

function start(){

    a=setInterval(time,10)
    document.getElementById("start").disabled=true;
}

function stop(){
    
    clearInterval(a)
    document.getElementById("start").disabled=false;
}

function reset(){
     min =00 +":";
     sec=00;
     msec=00;
    min1.innerHTML=00;
    sec1.innerHTML=00;
    msec1.innerHTML=000;
    clearInterval(a)
