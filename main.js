//https://teachablemachine.withgoogle.com/models/Ij7TJ48hq/
console.log(ml5.version);

Webcam.set({

width:350,
height:300,
img_format:"jpg",
jpg_quality:30

});

//camera=ffef;

Webcam.attach(document.getElementById("WebcamViewer"));

function takeSnapshot(){

Webcam.snap(

function(data_uri){

    document.getElementById("WebcamResulter").innerHTML="<img id='imgStorer' src='"+data_uri+"'>";

});


}


classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ij7TJ48hq/model.json", modelLoaded);

function modelLoaded(){

console.log("model is loaded");


}











function correcter(){

    img=document.getElementById("imgStorer");
    classifier.classify(img,getRusult);
    
    
    }
    
    function getRusult(error,result){
    
    if(error){
    
    console.log(error);
    
    
    }
    else{
    
    console.log(result);
    
    document.getElementById("resultObjectName").innerHTML= "Object :" + result[0].label;
    
    
    document.getElementById("relutObjectAccuracy").innerHTML= "Accuracy :" + (result[0].confidence*100).toFixed(2) + " %";
    
    }
    
    }