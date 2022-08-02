var bdCountDown= new Date("oct 17, 2022 00:00:00").getTime()
var timer=setInterval(function(){
    var currentdate=new Date().getTime()
    var difference=bdCountDown-currentdate;

var days=Math.floor(difference/(1000*60*60*24));
var hours=Math.floor((difference % (1000*60*60*24))/(1000*60*60))
var mins=Math.floor((difference % (1000*60*60))/(1000*60));
var sec=Math.floor((difference % (1000*60))/1000)

document.getElementById("bd").innerHTML=days+"days: "+ hours + " hours: "+mins+ "minutes: "+sec+" seconds"

if(difference<0){
    clearInterval(timer);
    document.getElementById("bd").innerHTML = "Timer Expired";
}


},1000)