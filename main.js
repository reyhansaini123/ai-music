song1="";
song2="";
function preload(){

song=loadSound("Dollar.mp3");
song=loadSound("Insane.mp3");

}

function setup(){

canvas = createCanvas(400,300);
canvas.center();

video = createCapture(VIDEO);

    video.hide()


}

function draw(){

image(video,0,0,500,500);


}


function play(){

song.play();

}