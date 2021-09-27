  class Line {
  constructor(x1, y1, x2, y2, index, lineColor1, lineColor2, index0, index1){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.index = index;
    this.color = lineColor1;
    this.color2 = lineColor2;
    this.midX = (this.x1 + this.x2)/2;
    this.midY = (this.y1 + this.y2)/2;
    this.denomY = this.y2 - this.y1;
    this.m = (this.y2 - this.y1)/(this.x2 - this.x1);
    this.m2 = -((this.x2 - this.x1)/this.denomY);
    this.b = this.y2 - this.x2 * this.m;
    this.b2 = this.midY - this.m2*this.midX
    this.d;
    this.pluck;
    this.x;
    this.axis;
    this.axis2;
    this.axis3;
    this.axis4;
    this.wave0 =  index0;
    this.wave1 =  index1;
    this.nylon = [];
    this.c = 0;
    this.y;
    this.stringIndex = 0;
    this.wave0Amp = [];
    this.mixedColor = [];
    this.wave1Amp = [];
    this.plucked = 0;
    this.vibration = 0;
    this.thickness = 10;
    this.add = new Tone.Add();
    dots[this.wave0].env.connect(this.add, 0, 0);
    dots[this.wave1].env.connect(this.add, 0, 1);
    lamp = this.mixColors();
   }
  checkString(){
    this.d = dist(this.midX, this.midY, mouseX, mouseY);
    if(this.d < 40){
    numberOfStrings.push(this.index);
    this.pluckString();
    this.plucked = 1;
    }
   }

  mixColors(){
  for(var j = 0; j < this.color.length; j++){
  this.mixedColor.push((this.color[j] + this.color2[j])/2);
   }
  return this.mixedColor;
  }

  show(){
  noFill();
  stroke(this.color);
  strokeWeight(this.thickness);
  this.wave0Amp.push(dots[this.wave0].meter.value);
  this.wave1Amp.push(dots[this.wave1].meter.value);
  this.axis = map(dots[this.wave0].meter.value + dots[this.wave1].meter.value, -1, 1, this.midX-25, this.midX+25);
  this.axis2 = map(dots[this.wave0].meter.value + dots[this.wave1].meter.value, -1, 1, this.midY-25, this.midY+25);
  if(abs(this.y2 - this.y1) >= 1){
    beginShape();
    vertex(this.x1, this.y1);
    vertex(this.x2, this.y2);
    curveVertex(this.axis, (this.m2*this.axis) +this.b2);
    endShape(CLOSE);
  }
  if(abs(this.y2 - this.y1) <=  1){
    beginShape();
    vertex(this.x1, this.y1);
    vertex(this.x2, this.y2);
    curveVertex(this.midX, this.axis2);
    endShape(CLOSE);
  }
 }
  pluckString(){
  dots[this.wave0].playOne();
  dots[this.wave1].playOne();
  }
  changeThickness(){
  this.thickness = 15;
  }
}
