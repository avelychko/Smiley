var canvas = document.getElementById("canvas");
var draw = canvas.getContext("2d");
var btn = document.getElementById("myBtn");
btn.onclick = changeBtn;
makeHappy();

function makeHappy() {
  btn.value = "Happy";
    btn.innerHTML = "Make Me Sad";

  draw.clearRect(0, 0, canvas.width, canvas.height);
  draw.lineWidth = 2;
  draw.strokeStyle = "black"; 

  //Draw face
  draw.fillStyle = "yellow"; 
  draw.beginPath();
  draw.arc(200, 200, 120, 0, 2 * Math.PI);
  draw.stroke();

  draw.beginPath();
  draw.arc(200, 200, 120, 0, 2 * Math.PI);
  draw.stroke();
  draw.fill();   

  //Draw eyes
  draw.fillStyle = "lightblue"; 
  draw.beginPath();
  draw.arc(150, 180, 20, 0, 2 * Math.PI);
  draw.stroke();

  draw.beginPath();
  draw.arc(150, 180, 20, 0, 2 * Math.PI);
  draw.stroke();
  draw.fill();   

  draw.beginPath();
  draw.arc(240, 180, 20, 0, 2 * Math.PI);
  draw.stroke();

  draw.beginPath();
  draw.arc(240, 180, 20, 0, 2 * Math.PI);
  draw.stroke();
  draw.fill();   

  //Draw mouth
  draw.lineWidth = 5;
  draw.strokeStyle = "red"; 
  draw.beginPath();
  draw.arc(200, 230, 50, 0, Math.PI);
  draw.stroke();
}

function makeSad() {
  btn.value = "Sad";
    btn.innerHTML = "Make Me Happy";

  draw.clearRect(0, 0, canvas.width, canvas.height);
  draw.lineWidth = 2;
  draw.strokeStyle = "black"; 

  //Draw face
  draw.fillStyle = "yellow"; 
  draw.beginPath();
  draw.arc(200, 200, 120, 0, 2 * Math.PI);
  draw.stroke();

  draw.beginPath();
  draw.arc(200, 200, 120, 0, 2 * Math.PI);
  draw.stroke();
  draw.fill();   

  //Draw eyes
  draw.fillStyle = "lightblue"; 
  draw.beginPath();
  draw.arc(150, 180, 20, 0, 2 * Math.PI);
  draw.stroke();

  draw.beginPath();
  draw.arc(150, 180, 20, 0, 2 * Math.PI);
  draw.stroke();
  draw.fill();   

  draw.beginPath();
  draw.arc(240, 180, 20, 0, 2 * Math.PI);
  draw.stroke();

  draw.beginPath();
  draw.arc(240, 180, 20, 0, 2 * Math.PI);
  draw.stroke();
  draw.fill();   

  //Draw mouth
  draw.lineWidth = 5;
  draw.strokeStyle = "red"; 
  draw.beginPath();
  draw.arc(200, 280, 50, 0, Math.PI, true);
  draw.stroke();
}

function changeBtn() {
    if (btn.value == "Happy") {
        makeSad();
    }
    else {
        makeHappy();
    }
}

canvas.addEventListener("click", function (event) {
    //Calculate the distance
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
    const dist = Math.sqrt((x - 200) ** 2 + (y - 200) ** 2);

    if (dist <= 120) {
        changeBtn();
    }
});