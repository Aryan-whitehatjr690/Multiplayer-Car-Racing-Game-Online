class Form {

  constructor() {
    this.wimage=("images/bg1.jpg");
    this.welcome=createImg(this.wimage);
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.title = createElement('h1');
    this.reset=createButton('Reset');
    
 
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.welcome.hide();
  }

  display(){
    this.welcome.position(0,0);
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-250, 0);

    this.input.position(displayWidth/2 - 100 , displayHeight/2 - 80);
    this.button.position(displayWidth/2-100, displayHeight/2);
    this.reset.position(displayWidth-250,20);
   
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0);
    })
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name+"!");
      this.greeting.position(displayWidth/2 - 150, displayHeight/3);
    });

  }
}
