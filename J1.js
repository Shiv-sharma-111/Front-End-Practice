document.write("I Love You Nikita ");
var x=6;
x=x*5;
var s="Hello";
var s=9;
var s;
var y=3/4;
document.write(y+" ");
document.write(s+x+"<br/>");

var x=5,i=1;

if(x>0)
document.write(" "+x+" is postive number");
else {
  document.write(" X is not positive number");
}
while(i<=10)
{
  document.write(x+" x "+i+" "+x*i+"<br/>");
  i++;
}
//popup boxes. three types popup boxes
alert("Hii Myself Shivam Sharma");
var x=confirm("Do you want to proceed with red color");
if(x)
{
  document.getElementsByTagName('body') [0].style.backgroundColor="red";
}

var k=prompt("Enter a number", "5");
if(k!=null)
{
  for(i=1;i<10;i++)
  {
    document.write("<br/>"+k+"x"+i+"="+x*i);
  }
}
//Event Handling
function effect()
{
  var x=document.getElementById('para1');
  x.style.backgroundColor="lightblue";

}
function effectback()
{
  var x=document.getElementById('para1');
  x.style.backgroundColor="white";

}
//how to access html element in javascript
function f1()
{
  var x=document.getElementById('p1');
  alert(x.innerHTML);
  x.innerHTML="This is Modified paragraph";
}
//How to access CSS Element in javascript
function f3()
{
  var x=document.getElementById('p1');
  x.style.color="green";
  x.style.fontSize="20px";
}
//Form Validation
function validation()
{
  var result=true;
  var i = document.getElementsByTagName("input");
  if(i[0].value.length==0)
  result=false;
  return(result);
}
