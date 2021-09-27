var dots = [];
var dot;
var d;
var lamp = [127, 127, 127]
var c;
var other;
var x = 500;
var y = 500;
var dx;
var showMode = 1
var dy;
var gap = 0;
var angle = -90;
var r = 250;
var tester
var interval = 0;
var indexOfSelected = [];
var indexOfTrans = [];
var xline = [];
var yline = [];
var pointx = [];
var pointy = [];
var counter = 0;
var numberOfStrings = [];
var transColors = [];
var index = 0;
var stringIndex = 0;
var iteration = 0;;
var s = 0;
var same = 0;
var play;
var sel = 0;
var i;
var freq0 = ["D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4"];
var freq1 = ["D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5"];
var freq2 = ["D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6"];
var numberOfLines = [];
var sketch;
var transformation = [0,0,0,0,0,0,0,0,0,0,0,0];
var n;
var indexOfOctave = [];
var indexCount = 0;
var volHistory = [];
var newLinesX = [];
var newLinesY = [];
var transformed = [];
var newLines = [];
var rosa;
var orange;
var yellow;
var yellowGreen;
var verde;
var springGreen;
var cyan;
var azure;
var azule;
var violet;
var magenta;
var rose;
var colorCode;
var colorCode2;
var lineColor;
var newIndex = [];
var newColor;
var deadDots = [];
var note = 0;
var slider;
var sliderName;
var clock;
var iter = 0;
var drawMode = 1;
var plotMode = 0;
var checkbox;
var click;
var rectX = 100;
var rectY = 100;
var tick = 0;
var dots2 = [];
var dots3 = [];
var oct = [0, 1, 2];
var octIndex = 0;
var arpLines = [];
var arpegLineX = [];
var arpegLineY = [];
var arpeggiation = 0;
var octave = [3];
var indexOfSelected2 = [];
var  nylon = [];
var colorTest = [255, 0, 0]
var redColor= [255, 0, 0];
var orange = [255, 127, 0];
var yellow = [255, 255, 0];
var yellowGreen = [127, 255, 0];
var verde = [0, 255, 0];
var springGreen = [0, 255, 127];
var cyan = [0, 255, 255];
var azure = [0, 127, 255];
var azule = [0, 0, 255];
var azule = [0, 0, 255];
var violet = [127, 0, 255];
var magenta = [255, 0, 255];
var rose = [255, 0, 127];
var newStringIndex = 0;
var transformedStrings = [];
var transformedStrings2 = [];
var transformedIndex = [];
var transformed = 0;
var octText;
var octOfSelected = [];
var transOct1 = [];
var transOct2 = [];
var transOct3 = [];
function setup(){
createCanvas(1000,1000);
// checkbox = rosa;
background(0);
ellipseMode(CENTER);
angleMode(DEGREES);
tester = new Dot(500, 500);
for(i = 0; i < 12; i++){
dx = r * cos(angle);
dy = r * sin(angle);
dots[i] = new Dot(x + dx, y +dy, freq0[i], i)
angle += 30;
}
for(var g = 0; g < 12; g++){
dots[g].show();
 }
 octText = createP(octIndex);
 octText.position(100, 100);
 octText.style("font-size", "32pt");
}

function arpegLines(){
if(counter > 0){
arpLines.push(new Line(arpegLineX[counter], arpegLineY[counter], arpegLineX[counter-1], arpegLineY[counter-1], c, transformColor(indexOfSelected[counter])), transformColor(indexOfSelected[counter-1]));
 }
}

function arpeg(){
arpeggiation = 1;
if(counter < indexOfSelected.length){
dots[indexOfSelected[counter]].logForArpeg();
dots[indexOfSelected[counter]].playOne();
arpegLines();
counter++;
}
if(counter >= indexOfSelected.length){
indexOfSelected.reverse();
arpegLineX.reverse();
arpegLineY.reverse();
counter = 0;
iter ++;
 }
if(iter > 1){
arpegLineX.splice(0, arpegLineX.length);
arpegLineY.splice(0, arpegLineY.length);
setTimeout(wipe, 500);
clearInterval(clock);
 }
}
function wipe(){
arpeggiation = 0;
arpLines.splice(0, arpLines.length)
}

function transformColor(newIndex){
  if(newIndex == 0){
    newColor = redColor;
 } else if(newIndex == 1){
    newColor = orange;
 }else if(newIndex == 2){
    newColor = yellow;
 }else if(newIndex == 3){
    newColor = yellowGreen;
 }else if(newIndex == 4){
    newColor = verde;
 }else if(newIndex == 5){
    newColor = springGreen;
 }else if(newIndex == 6){
    newColor = cyan;
 }else if(newIndex == 7){
    newColor = azure;
 }else if(newIndex == 8){
    newColor = azule;
 }else if(newIndex == 9){
    newColor = violet;
 }else if(newIndex == 10){
    newColor = magenta;
 }else if(newIndex == 11){
    newColor = rose;
 }
 return newColor;
}


function undo(){
  numberOfLines.splice(numberOfLines.length-1, 1);
  dots[indexOfSelected[indexOfSelected.length-1]].deactivate();
  indexOfSelected.splice(indexOfSelected.length-1, 1);
  xline.splice(0,xline.length);
  yline.splice(0,yline.length);
  background(0);
}

function switchModes(){
  click = dist(rectX, rectY, mouseX, mouseY)
  if(click < 50){
  tick++;
  bomb();
  }
  if(tick % 2 == 0){
  drawMode = 1;
  plotMode = 0;
  checkbox = rosa
  } else if(tick % 2 == 1){
  drawMode = 0;
  plotMode = 1;
  checkbox = yellowGreen
  }
}


function keyPressed(){
  if(keyCode == 38){
    interval ++;
    if(interval > 11){
      interval = interval % 12;
    }
  }
  if(keyCode == 32){
    bomb();
  }
  if(keyCode == 80){
    play = 1;
    for(d of dots){
     d.playAll();
    }
   }
  if(keyCode == 84){
   transform();
    }
 if(keyCode == 85){
   // undo();

   }
 if(keyCode == 65){
   counter = 0;
   clock = setInterval(arpeg, 500);
   iter = 0;
  }
 if(keyCode == 81){
  if(octIndex > 0 ){
   octIndex--;
   print(octIndex);
  }
}
 if(keyCode == 87){
 if(octIndex < 2){
  octIndex ++;
  print(octIndex);
  }
 }
}

function colorLine(){
  if(xline.length > 1){
   if(colorCode == 0){
     lineColor = rosa;
  } else if(colorCode == 1){
     lineColor = orange;
  }else if(colorCode == 2){
     lineColor = yellow;
  }else if(colorCode == 3){
     lineColor = yellowGreen;
  }else if(colorCode == 4){
     lineColor = verde;
  }else if(colorCode == 5){
     lineColor = springGreen;
  }else if(colorCode == 6){
     lineColor = cyan;
  }else if(colorCode == 7){
     lineColor = azure;
  }else if(colorCode == 8){
     lineColor = azule;
  }else if(colorCode == 9){
     lineColor = violet;
  }else if(colorCode == 10){
     lineColor = magenta;
  }else if(colorCode == 11){
     lineColor = rose;
  }
 }
 if(xline.length == 2){
   numberOfStrings.push(stringIndex);
   for(c = 0; c < xline.length-1; c ++){
   numberOfLines.push(new Line(xline[c], yline[c], xline[c+1], yline[c+1], stringIndex, transformColor(indexOfSelected2[c]), transformColor(indexOfSelected2[c+1]), indexOfSelected2[c], indexOfSelected2[c+1]));
   }
   stringIndex ++;
 }
 if(xline.length >= 2){
   xline. splice(0, 1)
   yline. splice(0, 1)
   indexOfSelected2.splice(0, 1);
   }
 }
function mousePressed(){
for(var d of dots){
  d.check();
 }
 colorLine();
}

 function mouseMoved(){
  if(transformed == 0){
  for(var n of numberOfLines){
  n.checkString();
 }
} else if(transformed > 0)
 for(var n of transformedStrings){
 n.checkString();
 }

}
function bomb(){
  // xline.splice(0,xline.length);
  // yline.splice(0,yline.length);
  // pointx.splice(0, pointx.length);
  // pointy.splice(0, pointy.length);
  // numberOfLines.splice(0, numberOfLines.length)
  // indexOfSelected.splice(0, indexOfSelected.length);
  // indexOfTrans.splice(0, indexOfTrans.length);
  // newLines.splice(0, newLines.length);
  // numberOfLines.splice(0, numberOfLines.length);
  // transformedStrings.splice(0, transformedStrings.length);
  // newLinesX.splice(0, newLinesX.length);
  // newLinesY.splice(0, newLinesY.length);
  // newIndex.splice(0, newIndex.length);
  // for(b of dots){
  //   b.deactivate();
  // }
  //   background(0);
 }


function transform(){
  transformedIndex.splice(0, transformedIndex.length);
  transformedStrings.splice(0, transformedStrings.length)
  transColors.splice(0, transColors.length);
  indexOfOctave.splice(0, indexOfOctave.length);
  for(var j = 0; j < indexOfSelected.length; j++){
    indexOfTrans[j] = indexOfSelected[j] + interval;
    if(indexOfSelected[j] >= 12){
      indexOfSelected[j] = indexOfSelected[j] % 12;
      }
      if(indexOfTrans[j] >= 12){
        indexOfTrans[j] = indexOfTrans[j] % 12;
        }
    }
    for(var p = 0; p < indexOfSelected.length; p++){
    dots[indexOfSelected[p]].deactivate(octOfSelected[p]);
    }
    for(var r = 0; r < indexOfSelected.length; r++){
    dots[indexOfTrans[r]].activate(octOfSelected[r]);
    dots[indexOfTrans[r]].log();
  }
    print(indexOfOctave);
    for(var t = 0; t < indexOfOctave.length; t++){
    transColors.push(indexOfOctave[t]);
    dots[transColors[t] % 12].colorDots(transColors[t]);
  }
    for(var o = 0; o < indexOfTrans.length; o++){
    indexOfSelected[o] = indexOfTrans[o];
    }
    connectDots();
    // for(var v = 0; v < newLines.length; v++){
    // newLines[v].show();
    // }
    for(d of dots){
      d.playNew();
    }
    transformed ++;
    // numberOfLines.splice(0, numberOfLines.length)
 }
function connectDots(){
  if(newLinesX.length > 0){
  for(var c = 0; c < newLinesX.length-1; c ++){
  newLines.push(new Line(newLinesX[c], newLinesY[c], newLinesX[c+1], newLinesY[c+1], newStringIndex, transformColor(newIndex[c]), transformColor(newIndex[c+1]), transformedIndex[c], transformedIndex[c+1]));
  transformedStrings.push(new Line(newLinesX[c], newLinesY[c], newLinesX[c+1], newLinesY[c+1], newStringIndex, 255, 255, transformedIndex[c], transformedIndex[c+1]));

}
  newStringIndex++;
  newLinesX.splice(0, newLinesX.length);
  newLinesY.splice(0, newLinesY.length);
  newIndex.splice(0, newIndex.length);
 }
}


function draw(){
lamp[3] = 75;
background(0);
// if(keyIsDown(88)){
//
// }
if(arpeggiation == 0){
if(numberOfLines.length > 0){
  for(n = 0; n < numberOfLines.length; n++){
  numberOfLines[n].show();
    }
  }
  for(var t of transformedStrings){
    t.show();
    t.changeThickness();
  }
if(newLines.length > 0){
  for(var f = 0; f < newLines.length; f++){
  newLines[f].show();
  }
}
for(var g = 0; g < 12; g++){
dots[g].show();
  }
 }
for(var l of arpLines){
l.show();
 }
text(octIndex, 100, 100);
textSize(20);
}
