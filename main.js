function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(400, 450);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet' ,modelLoaded);
}