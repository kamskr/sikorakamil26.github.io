
function start(){
  if(document.getElementById('txt-start').innerHTML == 'Start'){
    document.getElementById('txt-start').innerHTML = "||"
    document.getElementById('txt-start').style.color = 'white';
    document.getElementById('txt-start').style.fontSize = '20px';
  }else{
    document.getElementById('txt-start').innerHTML = "Start";
    document.getElementById('txt-start').style.fontSize = '16px';
  }
}