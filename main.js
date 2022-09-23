song2="";
scoreLeft=0;
playorno="";
song1="";
leftWristX=0;
rightWristY=0;
leftWristY=0;
rightWristX=0;
scoreright=0;
s1status="";
s2status="";
function preload(){
song2=loadSound("song2.mp4");
song1=loadSound("song1.mp4");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}
function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    s1status=song1.isPlaying()
s2status=song2.isPlaying();
    
    if(scoreLeft > 0.2){
        circle(leftWristX,leftWristY,20);
        song1.stop()
    
    if(s2status==false){
        song2.play();
        document.getElementById("song").innerHTML="Kaun tughe";
    }
}
    if(scoreright > 0.2){
        circle(rightWristX,rightWristY,20);
        song2.stop()
    
    if(s1status==false){
        song1.play();
        document.getElementById("song").innerHTML="Agar Tum saath ho";
    }
}
}
function play(){
song.play();

song.setVolume(1);
song.rate(1);
}

function modelLoaded(){
    console.log("model is successfully loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log("results");
        scoreright=results[0].pose.keypoints[10].score;
        scoreLeft=results[0].pose.keypoints[9].score;
        console.log(scoreLeft);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("right wrist x="+rightWristX+"right wrist y"+rightWristY+"left wrist x"+leftWristX+"left wrist y"+leftWristY);
    }
}