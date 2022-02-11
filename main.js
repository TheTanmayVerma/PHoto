function preload(){
    img = loadImage("img_legend.jpg")
}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(200,250);
    canvas.center();
     

};

function draw(){
    fill(204,101,192,127);
    stroke(127,63,120);
    image(img,20,20,603,440);
    rect(0,0,20,600);
    rect(640,480,600,440);
    rect(40,120,120,40);
    rect(40,120,120,40);
 } ;


