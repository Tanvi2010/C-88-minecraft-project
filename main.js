

var canvas=new fabric.Canvas("my_canvas");
image_width=100;
image_height=100;
player_x=10;
player_y=10;
var player_object="";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}


function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        image_object=Img;
        image_object.scaleToWidth(image_width);
        image_object.scaleToHeight(image_height);
        image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(image_object);
    })
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
 keypressed=e.keyCode;
 console.log(keypressed);
  
   
   if (keypressed=="38") {
    console.log("up");
  up();
   } 

   if (keypressed=="40") {
    console.log("down");
   down();
   } 

   if (keypressed=="37") {
    console.log("left");
   left();
   } 

   if (keypressed=="39") {
    console.log("right");
  right();
   } 

  

   if (keypressed=="68") {
    console.log("d");
   new_image("dress-elsa.png");
   }
   if (keypressed=="65") {
    console.log("a");
   new_image("ariel-dress.jpg");
   }
   if (keypressed=="74") {
    console.log("j");
   new_image("jasmine-dress.png");


   } 

   if (keypressed=="69") {
    console.log("e");
    new_image("left-hand-elsa.png");
   }
   if (keypressed=="80") {
    console.log("p");
    new_image("hand-left-ariel.png");
   }
   if (keypressed=="84") {
    console.log("t");
    new_image("jasmine-hands.png");


   } 

   
   if (keypressed=="79") {
    console.log("o");
    new_image("right-hand-elsa.png");
   }
   if (keypressed=="70") {
    console.log("f ");
     
    new_image("hand-right-ariel.png");
   }
   if (keypressed=="87") {
    console.log("w");
    new_image("jasmine-hands.png");


   } 

   if (keypressed=="77") {
    console.log(" m");
    new_image ("head-elsa.png");
   }
   if (keypressed=="83") {
    console.log("s");
    new_image("head-ariel.png");
   }
   if (keypressed=="75") {
    console.log("k");
   new_image("jasmine-head.png");


   } 
  
}


function up() {
    if (player_y>=0) {
      player_y=player_y-image_height;
      console.log("image height =" + image_height);
      console.log("when up is pressed x=" + player_x+ " & y=" + player_y);
      canvas.remove(player_object);
      player_update();
    }
}

function down() {
    if (player_y<=560) {
      player_y=player_y+image_height;
      console.log(" image height =" + image_height);
      console.log("when down is pressed x=" + player_x+ " & y=" + player_y);
      canvas.remove(player_object);
      player_update();
    }
}

function left() {
    if (player_x>=0) {
      player_x=player_x-image_width;
      console.log("image width =" + image_width);
      console.log("when left is pressed x=" + player_x+ " & y=" + player_y);
      canvas.remove(player_object);
      player_update();
    }
}

function right() {
    if (player_x<=900) {
      player_x=player_x+image_width;
      console.log("image width =" + image_width);
      console.log("when right is pressed x=" + player_x+ " & y=" + player_y);
      canvas.remove(player_object);
      player_update();
    }
}
