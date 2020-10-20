function bounceoff(moving,fixed){
    if(moving.y - fixed.y <= (moving.height/2 + fixed.height/2)
  && fixed.y - moving.y <= (moving.height/2 + fixed.height/2)
  )
  { fixed.shapeColor = "green";
   moving.shapeColor = "green";
   fixed.velocityY = fixed.velocityY * -1;
   moving.velocityY = moving.velocityY * -1;
 }


}