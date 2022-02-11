function preload(){
    img = loadImage("img_legend.jpg")
}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(200,250);
    canvas.center();
     

};

function draw(){
  
    image(img,20,20,603,440);
    
 } ;


