class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed=database.ref('lastFeed');
    this.image=loadImage("Images/Milk.png");
    }

    updateFoodStock(foodStock){
        this.foodStock=this.foodStock + 1;
       }
      
       getFedTime(lastFed){
         this.lastFed=lastFed;
       }
      
       deductFood(foods){
         if(foods>0){
          this.foodStock=this.foodStock-1;
         }
        }
      
        getFoodStock(){
          return this.foodStock;
        }
      
        display(){
          var x=80,y=100;
          
          imageMode(CENTER);
          image(this.image,720,220,70,70);
          
          if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
              if(i%10==0){
                x=80;
                y=y+50;
              }
              image(this.image,x,y,50,50);
              x=x+30;
            }
          }
        }
 bedroom(){
   imageMode(CENTER);
          image(bedroom,550,500);
        }

garden(){
  imageMode(CENTER);
  image(garden,550,500);
}

washroom(){
  imageMode(CENTER);
 image(washroom,550,500);
}
}