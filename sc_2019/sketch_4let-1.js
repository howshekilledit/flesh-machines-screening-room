  let x; 
  let sides1;
  let sides2;
  let betweens; 
  let h; 
  let ystart;
  let xstart; 
  let canvaswidth; 
 function setup() { 
    canvaswidth = 1920; 
    h = canvaswidth/3.8; 
    createCanvas(canvaswidth, canvaswidth * 9/16);
    frameRate(12); 
    x = 0; 
    xstart = canvaswidth/10; 
    ystart = canvaswidth/6; 
    sides1 = [];
    sides2 = []; 
    betweens = []; 
    var xpos1 =  xstart; 
    var xpos2 =  xstart; 
    
    for(var i = 0; i < 4; i++){
      if(i <= 0){
        sides1[i] = makecoords(xpos1, ystart, h);
        sides2[i] = makecoords(xpos2, ystart, h);
      } else {
        sides1[i] = makecoords(xpos1,  ystart + 0.2*h, 0.8*h);
        sides2[i] = makecoords(xpos2,  ystart + 0.2*h, 0.8* h);
      }
      betweens[i] = tenbetween(sides1[i][0], sides2[i][0]); 
      xpos1 = xpos1 + sides1[i][1] + 0.05*h; 
      xpos2 = xpos2 + sides2[i][1] + 0.05*h; 

  }
 //noLoop(); 
}


function draw() {

    //alert(betweens); 
  // betweens.forEach(function(shape){; 
  //add offset
  background(0); 
  noStroke(); 
  var framewidth = 0.9 * canvaswidth;
  var frameheight = 9/16 *framewidth; 
  var framestart = 0.05 * canvaswidth; 
  var offset;
  if(betweens[3][x][3][1][0] > framewidth + framestart){
     offset = betweens[3][x][3][1][0] - framewidth - framestart; 
     fill(255); 
       rect(framestart - 0.5*offset, 9/16* framestart, framewidth + offset, frameheight);  
  } else {
    offset = 0; 
  }
    fill(180,200,220);
    rect(framestart - 0.5*offset, 9/16*framestart, framewidth + 0.5*offset, frameheight); 
   
  
  var grayshades = [];
  var j = 0; 
  for(var y = 0; y < 255; y = y +8){
    grayshades[j] = (y,y, y); 
    j++; 
  }
 

  //var a = 0; 
  for(var i = 0; i < 4; i++){ //for each letter

    var ox = 0.5*(betweens[i][x][1][0][0] + betweens[i][x][3][1][0]); 
    var oy = 0.5 * (betweens[i][x][0][0][1] + betweens[i][x][2][1][1]); 
    console.log("origin: " + ox + ", " + oy); 
    var wallouts = [];
    var wallins = []; 
    for(var a = 0; a < 6; a++){ // for each concentric
         var shade = 200 - a * 15;
         //alert(betweens[x][0]); 
          noStroke(); 
         fill(grayshades[20 - a*2]);
         //fill(255); 
         if(a == 5){
           fill(grayshades[6])
         }
         beginShape();
           //alert(betweens[x]); 
        betweens[i][x].forEach(function(side){
          var cx;
          var cy;
           side.forEach(function(vert){
            
              cx = ox - (ox - vert[0])*(Math.pow(0.9, a)) - 0.5*offset;    
              cy = oy - (oy - vert[1])*(Math.pow(0.9, a));
            if(a === 0){
              wallouts.push([cx, cy,]); 
            }
            if(a === 5){
               wallins.push([cx, cy,]); 
            }
            vertex(cx, cy); 
             //make it in relation to outline origin
             //y half the difference
             //x duble the difference
             //save first and last vertices to create walls
             }); 
           }); 
        endShape(CLOSE);
       } //end for each concentric
      ;
       var k = 0; 
       for(var d = wallouts.length-4; d >= 0; d = d - 3){
           fill(grayshades[18-k], 102);
           beginShape();
           vertex(wallouts[d][0], wallouts[d][1]);
           console.log(wallouts[d][0], wallouts[d][1]); 
            vertex(wallouts[d+1][0], wallouts[d+1][1]);
            vertex(wallins[d+1][0], wallins[d+1][1]);
            vertex(wallins[d][0], wallins[d][1]);
           endShape(); 
           k++;
           fill(grayshades[18-k], 102);
           beginShape();
               vertex(wallouts[d+1][0], wallouts[d+1][1]);
              vertex(wallouts[d+2][0], wallouts[d+2][1]);
              vertex(wallins[d+2][0], wallins[d+2][1]);
                vertex(wallins[d+1][0], wallins[d+1][1]);
           endShape();
           k++;
          fill(grayshades[18-k], 102);

            beginShape();
               vertex(wallouts[d+2][0], wallouts[d+2][1]);
              vertex(wallouts[d+3][0], wallouts[d+3][1]);
              vertex(wallins[d+3][0], wallins[d+3][1]);
                vertex(wallins[d+2][0], wallins[d+2][1]);
           endShape();
           k++;
       }
     
         
       //scale(0.9); 
 }  //end for each letter
    x++; 
    if(x === betweens[0].length){ //reset if at end of transition
      setbetweens(sides2);
    }
    
}

function setbetweens(sides2){
  var xpos2 = xstart; 
  for(var i = 0; i < 4; i++){
    sides1[i] = sides2[i];
    if(i <= 0){
      sides2[i] = makecoords(xpos2, ystart, h);
    } else {
      sides2[i] = makecoords(xpos2, ystart + 0.2*h, 0.8* h);
    }
    
    betweens[i] = tenbetween(sides1[i][0], sides2[i][0]); 
    xpos2 = xpos2 + sides2[i][1] + 0.05*h; 
  }
  x = 0; 
}


function makecoords(cx, cy, h){
//calculate aspect, height, width
  var ah = 4 + Math.ceil(Math.random() * 3); 
  var aw = 3 + Math.ceil(Math.random() * 4); 
  while(aw > ah){
    ah = 4 + Math.ceil(Math.random() * 3); 
    aw = 2 + Math.ceil(Math.random() * 4); 
  }
  
  /*switch(Math.floor(Math.random() * 6)){ 
    case 0:
      h = 300;
      break;
    default:
      h = 200; 
      /*break; 
  }*/
  var w = h * (aw/ah); 
  
  //create square coordinates
  
  //cx: bottom left x
  //cy: bottom left y
  
  var sides = [];
  sides[0] = [[cx + w, cy],[cx, cy]]; //bottom right -> bottom left
  sides[1] = [[cx, cy],[cx, cy + h]];  //bottom left -> top left
  sides[2] = [[cx, cy + h],[cx+w, cy + h]]; //top left -> top right
  sides[3] = [[cx + w, cy + h],[cx+w, cy]]; //top right -> bottom right
  
  //create slices
  
  var numslices = Math.floor(Math.random() * 5); 
  var slicelocs = [];
  var temploc; 
  if(numslices > 0){
    slicelocs[0] = Math.floor(Math.random() * 4); 
  }
  
  if(numslices > 1){
  for(var a = 1; a < numslices; a++){
    temploc = Math.floor(Math.random() * 4);
    slicelocs.push(temploc); 
  }
  }

  
  slicelocs = slicelocs.sort(); 
  
  for(var b = 0; b < slicelocs.length; b++){
    switch(slicelocs[b]){
      case 0:
        sides[0][1][0] = sides[0][1][0] + Math.ceil(Math.random() * 0.3 * w); //push bottom left x
        sides[1][0][1] = sides[1][0][1] + Math.ceil(Math.random() * 0.3 * h); //raise bottom left y
        break; 
      case 1:
        sides[1][1][1] = sides[1][1][1] - Math.ceil(Math.random() * 0.3 * h); //lower top left y
        sides[2][0][0] = sides[2][0][0] + Math.ceil(Math.random() * 0.3 * w); //push top left x
        break; 
      case 2: 
        sides[2][1][0] = sides[2][1][0] - Math.ceil(Math.random() * 0.3 * w); //pull top right x
        sides[3][0][1] = sides[3][0][1] - Math.ceil(Math.random() * 0.3 * h); //lower top right y
        break; 
      case 3:
        sides[3][1][1] = sides[3][1][1] + Math.ceil(Math.random() * 0.3 * h); //raise bottom right y
        sides[0][0][0] = sides[0][0][0] - Math.ceil(Math.random() * 0.3 * w); //pull buttom right x
        break; 
    }
  }
  //alert(sides[0]); //test
  //create notches
  
  var numnotches = Math.floor(Math.random() * 4); 
  var notchlocs = []; 
  if(numnotches > 0){
    notchlocs[0] = Math.floor(Math.random() * 4); 
  }
  if(numnotches > 1){
  for(var a = 1; a < numnotches; a++){
    temploc = Math.floor(Math.random() * 4);
    notchlocs.push(temploc); 
    }
  }
  notchlocs = notchlocs.sort(); 
  for(var b = 0; b < notchlocs.length; b++){
    switch(notchlocs[b]){
      case 0: //bottom side
        sides[0][2]  = [];
        sides[0][3]  = [];
        sides[0][4] = []; 
        sides[0][4][0] = sides [0][1][0]; //left corner x
        sides[0][4][1] = sides [0][1][1]; //left corner y
        sides[0][1][0] = sides[0][0][0] - Math.floor(Math.random() * 0.7 * w);//notch, right x coordiante
        sides[0][1][1] = sides[0][0][1]; //notch, right y coordinate
        sides[0][2][0] = sides[0][1][0] - Math.floor(Math.random() * 0.15 * w); //notch, center x coordiante
        sides[0][2][1] = sides[0][1][1] + Math.floor(Math.random() * 0.15 * h);//notch, center y coordiante
        sides[0][3][0] = sides[0][2][0] - Math.floor(Math.random() * 0.15 * w); //notch, left x coordinate
        sides[0][3][1] = sides[0][0][1]; //notch, left y coordinate
        break; 
      case 1:
        sides[1][2]  = [];
        sides[1][3]  = [];
        sides[1][4] = []; 
        sides[1][4][0] = sides [1][1][0]; //top corner x
        sides[1][4][1] = sides [1][1][1]; //top corner y
        sides[1][1][0] = sides[1][0][0];//notch, bottom x coordiante
        sides[1][1][1] = sides[1][0][1] + Math.floor(Math.random() * 0.7 * h); //notch, bottom y coordinate
        sides[1][2][0] = sides[1][1][0] + Math.floor(Math.random() * 0.15 * w); //notch, center x coordiante
        sides[1][2][1] = sides[1][1][1] + Math.floor(Math.random() * 0.15 * h);//notch, center y coordiante
        sides[1][3][0] = sides[1][1][0]; //notch, top x coordinate
        sides[1][3][1] = sides[1][2][1] + Math.floor(Math.random() * 0.15 * h); //notch, top y coordinate
        break; 
      case 2: //top side
        sides[2][2]  = [];
        sides[2][3]  = [];
        sides[2][4] = []; 
        sides[2][4][0] = sides [2][1][0]; //right corner x
        sides[2][4][1] = sides [2][1][1]; //right corner y
        sides[2][1][0] = sides[2][0][0] + Math.floor(Math.random() * 0.7 * w);//notch, left x coordiante
        sides[2][1][1] = sides[2][0][1]; //notch, left y coordinate
        sides[2][2][0] = sides[2][1][0] + Math.floor(Math.random() * 0.15 * w); //notch, center x coordiante
        sides[2][2][1] = sides[2][1][1] - Math.floor(Math.random() * 0.15 * h);//notch, center y coordiante
        sides[2][3][0] = sides[2][2][0] + Math.floor(Math.random() * 0.15 * w); //notch, right x coordinate
        sides[2][3][1] = sides[2][0][1]; //notch, right y coordinate
        break; 
      case 3:
        sides[3][2]  = [];
        sides[3][3]  = [];
        sides[3][4] = []; 
        sides[3][4][0] = sides [3][1][0]; //bottom corner x
        sides[3][4][1] = sides [3][1][1]; //bottom corner y
        sides[3][1][0] = sides[3][0][0];//notch, top x coordiante
        sides[3][1][1] = sides[3][0][1] - Math.floor(Math.random() * 0.7 * h); //notch, top y coordinate
        sides[3][2][0] = sides[3][1][0] - Math.floor(Math.random() * 0.15 * w); //notch, center x coordiante
        sides[3][2][1] = sides[3][1][1] - Math.floor(Math.random() * 0.15 * h);//notch, center y coordiante
        sides[3][3][0] = sides[3][1][0]; //notch, bottom x coordinate
        sides[3][3][1] = sides[3][2][1] - Math.floor(Math.random() * 0.15 * h); //notch, bottom y coordinate
        break; 
    }
  }
  return [sides, w]; 
}

function tenbetween(firstsides, lastsides){
  var betweens = []; 
  //place 5 points on each line
  var constco; 
  var sidelength; 
  for(var c = 0; c < 4; c++){
    if(firstsides[c].length < 5){ 
      firstsides[c][4] = []; 
      firstsides[c][4][0] = [firstsides[c][1][0]];
      firstsides[c][4][1] = [firstsides[c][1][1]]; 
      if(firstsides[c][0][0] === firstsides[c][1][0]){ // if vertical, generate new points along vertical line
        sidelength = firstsides[c][1][1] -  firstsides[c][0][1]; 
        //alert("secnd corner - " + firstsides[c][4] + " sidelength - " + sidelength); 
        constco = firstsides[c][0][0]; 
        firstsides[c][1][1] = firstsides[c][0][1] + sidelength*0.25;
        firstsides[c][2] = []; 
        firstsides[c][2][0] = constco;
        firstsides[c][2][1] = firstsides[c][0][1] + sidelength*0.5;
        firstsides[c][3] = []; 
        firstsides[c][3][0] = constco;
        firstsides[c][3][1] = firstsides[c][0][1] + sidelength*0.75;
      } else { //if horizontal, generate new points along horizontal line
        sidelength = firstsides[c][1][0] -  firstsides[c][0][0];
        constco = firstsides[c][0][1]; 
        firstsides[c][1][0] = firstsides[c][0][0] + sidelength*0.25;
        firstsides[c][2] = []; 
        firstsides[c][2][1] = constco;
        firstsides[c][2][0] = firstsides[c][0][0] + sidelength*0.5;
        firstsides[c][3] = []; 
        firstsides[c][3][1] = constco;
        firstsides[c][3][0] = firstsides[c][0][0] + sidelength*0.75;
      }
    }
    if(lastsides[c].length < 5){ 
      lastsides[c][4] = []; 
      lastsides[c][4][0] = [lastsides[c][1][0]];
      lastsides[c][4][1] = [lastsides[c][1][1]]; 
      if(lastsides[c][0][0] === lastsides[c][1][0]){ // if vertical, generate new points along vertical line
        sidelength = lastsides[c][1][1] -  lastsides[c][0][1]; 
        //alert("secnd corner - " + lastsides[c][4] + " sidelength - " + sidelength); 
        constco = lastsides[c][0][0]; 
        lastsides[c][1][1] = lastsides[c][0][1] + sidelength*0.25;
        lastsides[c][2] = []; 
        lastsides[c][2][0] = constco;
        lastsides[c][2][1] = lastsides[c][0][1] + sidelength*0.5;
        lastsides[c][3] = []; 
        lastsides[c][3][0] = constco;
        lastsides[c][3][1] = lastsides[c][0][1] + sidelength*0.75;
      } else { //if horizontal, generate new points along horizontal line
        sidelength = lastsides[c][1][0] -  lastsides[c][0][0];
        constco = lastsides[c][0][1]; 
        lastsides[c][1][0] = lastsides[c][0][0] + sidelength*0.25;
        lastsides[c][2] = []; 
        lastsides[c][2][1] = constco;
        lastsides[c][2][0] = lastsides[c][0][0] + sidelength*0.5;
        lastsides[c][3] = []; 
        lastsides[c][3][1] = constco;
        lastsides[c][3][0] = lastsides[c][0][0] + sidelength*0.75;
      }
    }
  }
  for(var d = 0; d < 12; d++){ //for each in between
    betweens[d] = []; 
    for(var e = 0; e < 4; e++){//for each side
      betweens[d][e] = []; 
      for(var f = 0; f < 4; f++){ //for each coord
        betweens[d][e][f] = [];
        betweens[d][e][f][0] = ((12-d)*firstsides[e][f][0] + d*lastsides[e][f][0])/12;
        betweens[d][e][f][1] = ((12-d)*firstsides[e][f][1] + d*lastsides[e][f][1])/12;
      }//end for each x & y coord
    }//end for each side
  }//end for each in between
  
  /*var between = []; 
  for(var e = 0; e < 4; e++){//for each side
      between[e] = []; 
      for(var f = 0; f < 4; f++){ //for each coord
        between[e][f] = []; 
        between[e][f][0] = (firstsides[e][f][0] + lastsides[e][f][0])*0.5;
        between[e][f][1] = (firstsides[e][f][1] + lastsides[e][f][1])*0.5;
      }//end for each x & y coord
    }//end for each side
  alert("first: " + firstsides[2].length + "/" + firstsides + "\n last: " + lastsides[2].length + "/" +lastsides +   "\n between: " + between[2].length + "/" + between); */

  return betweens; 
}
