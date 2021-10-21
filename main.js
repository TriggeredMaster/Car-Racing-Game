canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width= 120;
car1_height= 70; 
Car1_img= "car1 (1).png";
car1_x= 10;
car1_y= 10;

car2_width= 120;
car2_height= 70; 
Car2_img= "car2.png";
car2_x= 10;
car2_y= 100;

background = "racing111.jpg";
Car1 = "";
Car2 = "";

bgarray= ["car1 (1).png","car2.png","racing111.jpg"];
random_no= Math.floor(Math.random()*6);
background_img= "racing111.jpg";


function add(){
    background= new Image();
    background.onload= uploadbackground;
    background.src = background_img;

    Car1= new Image();
    Car1.onload= uploadCar1;
    Car1.src = Car1_img;

    Car2= new Image();
    Car2.onload= uploadCar2;
    Car2.src = Car2_img;

    console.log(background);
    console.log(Car1);
    console.log(Car2); 
}

function uploadbackground(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(Car1,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2(){
    ctx.drawImage(Car2,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",keydow);

function keydow(e){
    keypress= e.keyCode;
    if(keypress=='38'){
        up();
        console.log(keypress);
    }
    if(keypress=='40'){
        down();
        console.log(keypress);
    }
    if(keypress=='37'){
        left();
        console.log(keypress);
    }
    if(keypress=='39'){
        right();
        console.log(keypress);
    }
    
    //Car2 arrow keys start here
    if(keypress=='87'){//change askii code of w 
        up1();
        console.log(keypress);
    }
    if(keypress=='83'){//change askii code of s
        down1();
        console.log(keypress);
    }
    if(keypress=='65'){//change askii code of a
        left1();
        console.log(keypress);
    }
    if(keypress=='68'){//change askii code of d
        right1();
        console.log(keypress);
    }

    if (car1_x > 700) {
        console.log("Car 1 Won!");
        document.getElementById('game_status').innerHTML = "Car 1 Won!";
    }
    
    
    if (car2_x > 700) {
        console.log("Car 2 Won!");
        document.getElementById('game_status').innerHTML = "Car 2 Won!";
    }
}
    


function up(){
    if(car1_y>= 10){
        car1_y= car1_y - 10;
        uploadbackground();
        uploadCar1();
        uploadCar2();
        console.log("hii");
    }
}

function down(){
    if(car1_y<= 500){
        car1_y= car1_y + 10;
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}

function left(){
    if(car1_x>= 10){
        car1_x= car1_x - 10;
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}

function right(){
    if(car1_x<= 700){
        car1_x= car1_x + 10;
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}
//car 2 keys function starts here
function up1(){
    if(car2_y>= 10){
        car2_y= car2_y - 10;
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}

function down1(){
    if(car2_y<= 500){
        car2_y= car2_y + 10;
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}

function left1(){
    if(car2_x>= 10){
        car2_x= car2_x - 10;
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
}

function right1(){
    if(car2_x<= 700){
        car2_x= car2_x + 10;
        uploadbackground();
        uploadCar1();
        uploadCar2();
    }
} 