function setup() {
    createCanvas(450, 450);
    background("white");
  }
  
  function draw() {
    
  
  stroke("violet");
  fill("gold");
    
   //console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
     rect(mouseX,mouseY,20,35);
      }
  }