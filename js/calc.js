document.addEventListener("DOMContentLoaded", function(){
  var calcButton = document.getElementsByClassName("buttonNum");

  var operator = document.getElementsByClassName("operator");

  var equals = document.getElementsByClassName("equals");
  var div1 = document.body.children[0].children[1];
  var div2 = document.body.children[0].children[2];
  var div3 = document.body.children[0].children[3];
  var div4 = document.body.children[0].children[4];
  var div5 = document.body.children[0].children[5];
  var div6 = document.body.children[0].children[6];
  var div7 = document.body.children[0].children[7];
  var div8 = document.body.children[0].children[8];
  var div9 = document.body.children[0].children[9];


  var displayScreen =document. getElementById("screen");
div1.addEventListener('click' , function(event){
  event.stopPropagation();
  displayScreen.innerHTML = "7";
  if (true) {

  }
});

div2.addEventListener('click' , function(event){
  event.stopPropagation();
  displayScreen.innerHTML = "8";

});

div3.addEventListener('click' , function(event){
  event.stopPropagation();
  displayScreen.innerHTML = "9";

});

div4.addEventListener('click' , function(event){
  event.stopPropagation();
  console.log('4');

});
div5.addEventListener('click' , function(event){
  event.stopPropagation();
  console.log('5');

});
div6.addEventListener('click' , function(event){
  event.stopPropagation();
  console.log('6');

});
div7.addEventListener('click' , function(event){
  event.stopPropagation();
  console.log('1');
});
div8.addEventListener('click' , function(event){
  event.stopPropagation();
  console.log('2');

});
div9.addEventListener('click' , function(event){
  event.stopPropagation();
  console.log('3');

});


});
