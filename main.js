function setup()
{
    video = createCapture(VIDEO);
    video.size(800, 800);
    video.position(300,150);

    canvas = createCanvas (900, 700);
    canvas.position(1500, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);

}

function modelLoaded()
{
    console.log('PoseNet is working 2')
}

function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background('#FFA500')
}