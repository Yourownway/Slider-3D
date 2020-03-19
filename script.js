var slider = document.getElementById("slider");

var item = document.getElementsByClassName('item')[0];
var item1 = document.getElementsByClassName('item')[1];
var item2 = document.getElementsByClassName('item')[2];


    slider.addEventListener("input",function(){
      if (slider.value === "3") {
        item.style.transform = "rotateY(-40deg) translate3d(-300px, 0px, 200px)" ;//sauf deg
        item1.style.transform = "rotateY(0deg)  translate3d(0px, 0px, 100px)" ;//*
        item2.style.transform = "rotateY(220deg) translate3d(80px, 0px, 450px)";
      }
      else if (slider.value === "2"){
        item.style.transform = "rotateY(0deg) translate3d(0px, 0px, 100px) ";//*
        item1.style.transform = "rotateY(40deg)  translate3d(300px, 0px, 200px)"; //sauf deg
        item2.style.transform = "rotateY(320deg) translate3d(-300px, 0px, 200px)";
    }
    else if (slider.value === "1"){
    
    item.style.transform = "rotateY(40deg)  translate3d(300px, 0px, 200px)"; //*
    item1.style.transform = "rotateY(120deg) translate3d(80px, 0px, 450px)";
    item2.style.transform = "rotateY(360deg) translate3d(0px, 0px, 100px) "; //* sauf deg
    }
    })