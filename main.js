difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550 , 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}



function modelLoaded()
{
    console.log('PoseNet Is Inisialized');
}



function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);

    }
}



function draw()
{
    background('#969A97');
    textSize(difference);
    fill('#ff0000');
    text('YASHASHVI',10 , 270 );

    document.getElementById("text_size").innerHTML = "The Font Size Of The Text = " + difference + "px";
}