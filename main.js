rover="rover.png";
rover2="rover.png"
mars_array=["mars.jpg","mars_1.jpg","mars_2.jpg","mars_3.jpg","mars_4.jpg"];
randomnum_array=Math.floor(Math.random()*5);
background=mars_array[randomnum_array];
rover_x = 10;
rover_y = 10;
roverheight = 100;
roverwidth = 100;
rover_x2 = 10;
rover_y2 = 10;
roverheight2 = 100;
roverwidth2 = 100;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

function add(){
    background_img= new Image();
    background_img.onload = uploadBackground;
    background_img.src = background;

    rover_img= new Image();
    rover_img.onload = uploadrover;
    rover_img.src = rover;
}

function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_img, rover_x, rover_y, roverwidth, roverheight);
}

window.addEventListener("keydown", my_kedow);

function my_kedow(e){

   keypressed=e.keyCode;
   console.log(keypressed);   
    if(keypressed == '38')
    {
        up();
        console.log("up");
    }

    if(keypressed == '40')
    {   
        down();
        console.log("down");
    }

    if(keypressed == '37')
    {
        left();
        console.log("left");
    }

    if(keypressed == '39')
    {
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y >=0){
        rover_y = rover_y-10;
        console.log("When up arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover_y <= 700){
        rover_y = rover_y+10;
        console.log("When up arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
} function left(){
    if(rover_x >=0){
        rover_x =rover_x-10;
        console.log("When up arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
} function right(){
    if(rover_x <= 900){
        rover_x =rover_x+10;
        console.log("When up arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
} 

