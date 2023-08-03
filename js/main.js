var a=new Date();
var b=a.getDay(a);
console.log(b);
if(a==0||a==6){
    document.write("It is weekend")
}
else{
    document.write("It is not weekend")
}