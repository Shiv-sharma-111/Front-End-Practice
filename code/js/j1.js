document.write("Ax Shivam sharma");
function fun()
{
  var x =document.getElementById('text1');
  var y =document.getElementById('text2');
  var z=document.getElementById('heading3');
  if(x.checked==true)
  {
    z.style.color="red";
    alert("The Channel "+x.value);
  }
  else if (y.checked==true) {
    alert("The Channel "+y.value)
  }
  else {
    alert("No Channel is selected");
  }
  /*var x =document.getElementById('text1').value;
  var y =document.getElementById('text2').value;
  if(x==y)
  {
    alert("mathes");
  }
  else {
          alert("Not mathes");
      }*/
  //alert(x);
   //document.getElementById('heading3').innerHTML="hii this is shiavm sharma";
}
//var keyword is used to defined the variable
