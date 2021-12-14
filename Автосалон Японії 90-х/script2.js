var i=0;
var imgs=new Array('img.png','img1.png');
function imgsrc(){
   var image=document.getElementById("Japan");
   image.src=imgs[++i];
}