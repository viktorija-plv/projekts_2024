window.onload = function() {taisnsturis()}
function taisnsturis() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(20, 20, 150, 150);
  ctx.lineWidth =15;
  ctx.strokeStyle = "blue";
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();
}
function aplis() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(120, 250, 50, 0, 3 * Math.PI);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "#08084f";
  ctx.fill();
  ctx.stroke();
}
function teksts() {
  alert("tests");
  console.log("kļūda");
    var c = document.getElementById("zimejums");
    var ctx = c.getContext("2d");
    ctx.font = "bold 30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Hello World!", 250, 100);
}

function linija() {
    var c = document.getElementById("zimejums");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(250, 110);
    ctx.lineTo(420, 110);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "green";
    ctx.stroke();
}

function bilde() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  var img = document.getElementById("bilde");
  ctx.drawImage(img, 390, 255, 150, 150);
  ctx.lineWidth = 5; 
  ctx.strokeStyle = "black";
  ctx.strokeRect(390, 255, 150, 150);
}