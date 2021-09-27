 class Dot {
  constructor(x, y, freq, i){
  this.x = x;
  this.y = y;
  this.index = i;
  this.transformation = transformation;
  this.coloration = color(57);
  this.coloration2 = this.coloration;
  this.coloration3 = this.coloration;
  this.coloration4 = this.coloration;
  this.clicked = 2;
  this.oct1mode = 0
  this.oct2mode = 0;
  this.oct3mode = 0;
  this.d;
  this.s;
  this.h;
  this.l = 1;
  this.steps = 0;
  this.numberOfClicks = 0;
  this.meter = new Tone.Meter(0);
  this.oct1freq = new Tone.Frequency(freq);
  this.oct2freq = new Tone.Frequency(freq);
  this.oct3freq = new Tone.Frequency(freq);
  this.oct2freq.transpose(12);
  this.oct3freq.transpose(24);
  this.gt0 = new Tone.GreaterThanZero();
  this.env = new Tone.AmplitudeEnvelope().chain(this.meter).toMaster();
  this.env2 = new Tone.AmplitudeEnvelope().chain(this.meter).toMaster();
  this.env3 = new Tone.AmplitudeEnvelope().chain(this.meter).toMaster();
  this.osc = new Tone.Oscillator().chain(this.env).start();
  this.osc2 = new Tone.Oscillator().chain(this.env2).start();
  this.osc3 = new Tone.Oscillator().chain(this.env3).start();
  this.osc.type = "sine"
  Tone.Master.volume.value = -15;
  // this.osc.volume = -10
  // this.fft.connect(this.osc);
  this.counter = 0;
  this.osc.frequency.value = this.freq;
  this.weight = 10;
  this.octave = 0;
  this.osc.frequency.value = this.oct1freq;
  this.osc2.frequency.value = this.oct2freq;
  this.osc3.frequency.value = this.oct3freq;
  }

  show() {
  if(this.oct3mode == 1){
  stroke(this.coloration4);
  strokeWeight(5);
  noFill();
  ellipse(this.x, this.y, 80, 80);
}
  if(this.oct2mode == 1){
  stroke(this.coloration3);
  strokeWeight(5);
  noFill();
  ellipse(this.x, this.y, 60, 60);
}
  if(this.oct1mode == 1){
  stroke(this.coloration2);
  strokeWeight(5);
  noFill();
  ellipse(this.x, this.y, 40, 40);
  }
  stroke(this.coloration);
  strokeWeight(20);
  point(this.x, this.y);
 }

  check() {
  this.d = dist(this.x, this.y, mouseX, mouseY);
  if((this.d < 10) && octIndex == 0){
    this.oct1mode = 1;
    this.env.triggerAttackRelease(1);
    pointx.push(this.x);
    pointy.push(this.y);
    xline.push(this.x);
    yline.push(this.y);
    octOfSelected.push(octIndex);
    indexOfSelected.push(this.index);
    indexOfSelected2.push(this.index);
    indexCount++;
    this.coloration = transformColor(this.index);
    if(indexOfSelected.length > 1){
    this.coloration2 = transformColor(indexOfSelected[indexOfSelected.length-2])
    }
    colorCode = this.index;
    this.weight = 20;
 } if((this.d < 10) && octIndex == 1){
    this.oct2mode = 1;
    this.env2.triggerAttackRelease(1);
    pointx.push(this.x);
    pointy.push(this.y);
    xline.push(this.x);
    yline.push(this.y);
    octOfSelected.push(octIndex);
    indexOfSelected.push(this.index);
    indexOfSelected2.push(this.index);
    this.coloration = transformColor(this.index);
    if(indexOfSelected.length > 1){
    this.coloration3 = transformColor(indexOfSelected[indexOfSelected.length-2])
    }
    colorCode = this.index;
    this.weight = 20;
}  if((this.d < 10) && octIndex == 2){
   this.oct3mode = 1;
   this.env3.triggerAttackRelease(1);
   pointx.push(this.x);
   pointy.push(this.y);
   xline.push(this.x);
   yline.push(this.y);
   octOfSelected.push(octIndex);
   indexOfSelected.push(this.index);
   indexOfSelected2.push(this.index);
   this.coloration = transformColor(this.index);
   if(indexOfSelected.length > 1){
   this.coloration4 = transformColor(indexOfSelected[indexOfSelected.length-2])
   }
   colorCode = this.index;
   this.weight = 20;
 }
}

 playAll(){
   if((this.oct1mode == 1) && (play == 1)){
   this.env.triggerAttackRelease(1)
   }
   if((this.oct2mode == 1) && (play == 1)){
   this.env2.triggerAttackRelease(1)
   }
   if((this.oct3mode == 1) && (play == 1)){
   this.env3.triggerAttackRelease(1)
   }
 }
 // kill(){
 // if((this.oct1mode == 1)) {
 //  deadDots.push(this.index);
 //  }
// }
 deactivate(octMode){
  if(octMode == 0){
   this.oct1mode = 0;
}
  if(octMode == 1){
   this.oct2mode = 0;
}
  if(octMode == 2){
   this.oct3mode = 0;
}
   this.weight = 10;
   this.coloration = color(57);
 }
 activate(octMode2){
   if(octMode2 == 0){
   this.oct1mode = 1;
   indexOfOctave.push(this.index);
 } if(octMode2 == 1){
   this.oct2mode = 1;
   indexOfOctave.push(this.index + 12);
 } if(octMode2 == 2){
   this.oct3mode = 1;
   indexOfOctave.push(this.index + 24)
 }
 this.coloration = transformColor(this.index);
 colorCode = this.index;
 this.weight = 20;
}
colorDots(index2){
if(index2 < 12 && transColors.length > 1){
this.coloration2 = transformColor((transColors[transColors.length - 2]) % 12);
}
if(index2 >= 12 && index2 < 24){
this.coloration3 = transformColor((transColors[transColors.length - 2]) % 12);
}
if(index2 >= 24 && index2 < 36){
this.coloration4 = transformColor((transColors[transColors.length - 2]) % 12);
}
}
 log(){
 newLinesX.push(this.x);
 newLinesY.push(this.y);
 newIndex.push(this.index);
 indexOfSelected.push(this.index);
 transformedIndex.push(this.index);
 indexOfSelected.splice(0, 1);
 }
 logForArpeg(){
 arpegLineX.push(this.x);
 arpegLineY.push(this.y);
 }
 playNew(){
  if(this.oct1mode == 1){
    this.env.triggerAttackRelease(1);
  }if(this.oct2mode == 1){
    this.env2.triggerAttackRelease(1);
    }
   if(this.oct3mode == 1){
    this.env3.triggerAttackRelease(1);
   }
  }
 playOne(){
   if(this.oct1mode == 1){
     this.env.triggerAttackRelease(1);
   }if(this.oct2mode == 1){
     this.env2.triggerAttackRelease(1);
     }
    if(this.oct3mode == 1){
     this.env3.triggerAttackRelease(1);
    }
 }
 changeOctave(){
 }
}
