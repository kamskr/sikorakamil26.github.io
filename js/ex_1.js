var totalTime = 60;
var countDown = 5;


window.onload = function() {
  var minutes = Math.floor(totalTime / 60);
  var seconds = Math.floor(totalTime - (minutes*60));
  document.getElementById("total").innerHTML = minutes + "m " + seconds + "s ";
}

function settings(){
  totalTime = prompt("Całkowity czas ćwiczenia w sekundach", "60");
  reset();
}

function reset(){
  document.getElementById('main-color').innerHTML = 'Ready!';
  document.getElementById('main-color').style.backgroundColor = "white";
  document.getElementById('txt-start').innerHTML = 'Start';
  var minutes = Math.floor(totalTime / 60);
  var seconds = Math.floor(totalTime - (minutes*60));
  document.getElementById("total").innerHTML = minutes + "m " + seconds + "s ";
}

function start(){
  if(document.getElementById('txt-start').innerHTML == 'Start'){
    document.getElementById('txt-start').innerHTML = '||';
    document.getElementById('txt-start').style.color = 'white';

    var toCount = countDown;
    var count = setInterval(function() {
      
    toCount -= 1;
     document.getElementById('main-color').innerHTML = toCount;
      

      if(toCount <= 0){
        document.getElementById('main-color').innerHTML = '';
        changeColor();
        clearInterval(count);
      }else if(toCount > 0 && document.getElementById('txt-start').innerHTML == 'Start'){
        document.getElementById('main-color').style.backgroundColor = "white";
        document.getElementById('main-color').innerHTML = '';
        clearInterval(count);
      }

    }, 1000)
   
    var distance = +totalTime + +countDown;
    var counting = getRandomArbitrary(3,5);

        var x = setInterval(function() {

          
          var minutes = Math.floor(distance / 60);
          var seconds = Math.floor(distance - (minutes*60));
          // Output the result in an element with id="demo"

          
          if(counting > 1){
            counting -= 1
          }else{
            changeColor();
            counting = getRandomArbitrary(3,5);
          }
          distance -= 1;

          if(distance < totalTime){
            document.getElementById('main-color').innerHTML = counting;
            document.getElementById("total").innerHTML = minutes + "m " + seconds + "s ";
          }

         
         
          // If the count down is over, write some text 
          if (distance < 0 || document.getElementById('txt-start').innerHTML != '||') {
            clearInterval(x);
            document.getElementById('main-color').style.backgroundColor = "white";
            document.getElementById('main-color').innerHTML = "Nice!";
          }
        }, 1000);
      
    }else{
    document.getElementById('txt-start').innerHTML = 'Start';
    document.getElementById('main-color').style.backgroundColor = "white";
  }
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * max) + min;  
}

function changeColor(){
  
  if(document.getElementById('main-color').style.backgroundColor == "white"){
    document.getElementById('main-color').style.backgroundColor = "blue";
  }else if(document.getElementById('main-color').style.backgroundColor == "blue"){
    document.getElementById('main-color').style.backgroundColor = "green";
  }else{
    document.getElementById('main-color').style.backgroundColor = "blue";
  }

  
}