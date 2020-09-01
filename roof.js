class ground{
constructor(x,y,width,height){
var options={
isStatic:true,
density:0.9

}
this.body = Bodies.rectangle(x, y, width, height, options);
this.w = width;
this.h = height;
World.add(world, this.body);
var height = this.body.height;


}
display() {
var groundPos=this.body.position;
push();
translate(groundPos.x, groundPos.y); 
fill(128,128,128) 
rect(0,0,this.w, this.h); 
pop(); 
}



}