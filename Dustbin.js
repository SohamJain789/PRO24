class Dustbin{
	constructor(x,y){
		this.x = x;
		this.y = y;
        this.dustbinWidth = 200;
        this.wallThickness = 20;
        this.angle = 0;
        this.bottomBody = Bodies.rectangle(340,665,200,10);
        this.leftBody = Bodies.rectangle(450,620,20,100);
        this.rightBody = Bodies.rectangle(250,620,20,100);
	   
		}
    
}