var  dog, happyDog, foodS, foodStock;
var database;

function preload(){
       dogImg=loadImage("images/dogImg.png");
       happyDogImg=loadImage("images/dogImg1.png");
}


function setup(){
    createCanvas(500,500);
    database=firebase.database();
    foodStock=database.ref("food");
    foodStock.on("value",readStock);
    readStock();
    
}

function draw(){
    background("46, 139, 87");
    if(keyDown(LEFT_ARROW)){
        writeStock(0,-1);
    }

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.adImage(HappyDog);
    }
    drawSprites();
    Text("NOTE:Press UP_ARROW Key To Feed Dog",310,310);
   

function readStock(data){
    foodS=data.val();
}

function writeStock(x){

    if(x<=0){
        x=0;
    }else{
        x=x-1;
    }

    database.ref("/").updated({
        Food:x
    })
    Text("Food Remaining:FOOd:x")
}
}




