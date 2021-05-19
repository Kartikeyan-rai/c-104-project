Webcam.set({
    height: 300,
    width: 400,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function (data_uri) { document.getElementById("result").innerHTML = '<img src="' + data_uri + '" id="capture_img">' });
}
console.log('ml5 version', ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EwlSxW160/model.json', modelLoaded());
function modelLoaded() {
    console.log("Model Loaded")
}