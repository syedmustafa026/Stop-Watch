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
