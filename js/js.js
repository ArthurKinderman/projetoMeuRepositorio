function time()
{
today=new Date();
h=today.getHours();
m=today.getMinutes();
document.getElementById('txt').innerHTML="BR: "+h+":"+m+" (SP)";
setTimeout('time()',500);
}