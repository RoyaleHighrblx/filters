lipsX = 0;
lipsY = 0;
function preload(){
    lipstick_filter = loadImage('lip.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0 )
    {
        console.log(results);
        lipsX = results[0].pose.lips.x;
        lipsY = results[0].pose.lips.y;
        console.log("lips x = " + lipsX);
        console.log("lips y = " + lipsY);
    }
}

function draw(){
 image(video, 0, 0, 300, 300);
 image(lipstick_filter, lipsX, lipsY, 100, 30 );

}

function take_snapshot(){
    save('FilterImage.png');
}