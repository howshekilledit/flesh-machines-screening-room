var _0xaa7e=["\x6F\x72\x69\x67\x69\x6E\x3A\x20","\x2C\x20","\x6C\x6F\x67","\x70\x6F\x77","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6C\x65\x6E\x67\x74\x68","\x72\x61\x6E\x64\x6F\x6D","\x63\x65\x69\x6C","\x66\x6C\x6F\x6F\x72","\x73\x6F\x72\x74"];let x;let sides1;let sides2;let betweens;let h;let ystart;let xstart;let canvaswidth;function setup(){canvaswidth= 1920;h= canvaswidth/ 3.8;createCanvas(canvaswidth,canvaswidth* 9/ 16);frameRate(12);x= 0;xstart= canvaswidth/ 10;ystart= canvaswidth/ 6;sides1= [];sides2= [];betweens= [];var _0x1a80xa=xstart;var _0x1a80xb=xstart;for(var _0x1a80xc=0;_0x1a80xc< 4;_0x1a80xc++){if(_0x1a80xc<= 0){sides1[_0x1a80xc]= makecoords(_0x1a80xa,ystart,h);sides2[_0x1a80xc]= makecoords(_0x1a80xb,ystart,h)}else {sides1[_0x1a80xc]= makecoords(_0x1a80xa,ystart+ 0.2* h,0.8* h);sides2[_0x1a80xc]= makecoords(_0x1a80xb,ystart+ 0.2* h,0.8* h)};betweens[_0x1a80xc]= tenbetween(sides1[_0x1a80xc][0],sides2[_0x1a80xc][0]);_0x1a80xa= _0x1a80xa+ sides1[_0x1a80xc][1]+ 0.05* h;_0x1a80xb= _0x1a80xb+ sides2[_0x1a80xc][1]+ 0.05* h}}function draw(){background(0);noStroke();var _0x1a80xe=0.9* canvaswidth;var _0x1a80xf=9/ 16* _0x1a80xe;var _0x1a80x10=0.05* canvaswidth;var _0x1a80x11;if(betweens[3][x][3][1][0]> _0x1a80xe+ _0x1a80x10){_0x1a80x11= betweens[3][x][3][1][0]- _0x1a80xe- _0x1a80x10;fill(255);rect(_0x1a80x10- 0.5* _0x1a80x11,9/ 16* _0x1a80x10,_0x1a80xe+ _0x1a80x11,_0x1a80xf)}else {_0x1a80x11= 0};fill(180,200,220);rect(_0x1a80x10- 0.5* _0x1a80x11,9/ 16* _0x1a80x10,_0x1a80xe+ 0.5* _0x1a80x11,_0x1a80xf);var _0x1a80x12=[];var _0x1a80x13=0;for(var _0x1a80x14=0;_0x1a80x14< 255;_0x1a80x14= _0x1a80x14+ 8){_0x1a80x12[_0x1a80x13]= (_0x1a80x14);_0x1a80x13++};for(var _0x1a80xc=0;_0x1a80xc< 4;_0x1a80xc++){var _0x1a80x15=0.5* (betweens[_0x1a80xc][x][1][0][0]+ betweens[_0x1a80xc][x][3][1][0]);var _0x1a80x16=0.5* (betweens[_0x1a80xc][x][0][0][1]+ betweens[_0x1a80xc][x][2][1][1]);console[_0xaa7e[2]](_0xaa7e[0]+ _0x1a80x15+ _0xaa7e[1]+ _0x1a80x16);var _0x1a80x17=[];var _0x1a80x18=[];for(var _0x1a80x19=0;_0x1a80x19< 6;_0x1a80x19++){var _0x1a80x1a=200- _0x1a80x19* 15;noStroke();fill(_0x1a80x12[20- _0x1a80x19* 2]);if(_0x1a80x19== 5){fill(_0x1a80x12[6])};beginShape();betweens[_0x1a80xc][x][_0xaa7e[5]](function(_0x1a80x1b){var _0x1a80x1c;var _0x1a80x1d;_0x1a80x1b[_0xaa7e[5]](function(_0x1a80x1e){_0x1a80x1c= _0x1a80x15- (_0x1a80x15- _0x1a80x1e[0])* (Math[_0xaa7e[3]](0.9,_0x1a80x19))- 0.5* _0x1a80x11;_0x1a80x1d= _0x1a80x16- (_0x1a80x16- _0x1a80x1e[1])* (Math[_0xaa7e[3]](0.9,_0x1a80x19));if(_0x1a80x19=== 0){_0x1a80x17[_0xaa7e[4]]([_0x1a80x1c,_0x1a80x1d])};if(_0x1a80x19=== 5){_0x1a80x18[_0xaa7e[4]]([_0x1a80x1c,_0x1a80x1d])};vertex(_0x1a80x1c,_0x1a80x1d)})});endShape(CLOSE)};var _0x1a80x1f=0;for(var _0x1a80x20=_0x1a80x17[_0xaa7e[6]]- 4;_0x1a80x20>= 0;_0x1a80x20= _0x1a80x20- 3){fill(_0x1a80x12[18- _0x1a80x1f],102);beginShape();vertex(_0x1a80x17[_0x1a80x20][0],_0x1a80x17[_0x1a80x20][1]);console[_0xaa7e[2]](_0x1a80x17[_0x1a80x20][0],_0x1a80x17[_0x1a80x20][1]);vertex(_0x1a80x17[_0x1a80x20+ 1][0],_0x1a80x17[_0x1a80x20+ 1][1]);vertex(_0x1a80x18[_0x1a80x20+ 1][0],_0x1a80x18[_0x1a80x20+ 1][1]);vertex(_0x1a80x18[_0x1a80x20][0],_0x1a80x18[_0x1a80x20][1]);endShape();_0x1a80x1f++;fill(_0x1a80x12[18- _0x1a80x1f],102);beginShape();vertex(_0x1a80x17[_0x1a80x20+ 1][0],_0x1a80x17[_0x1a80x20+ 1][1]);vertex(_0x1a80x17[_0x1a80x20+ 2][0],_0x1a80x17[_0x1a80x20+ 2][1]);vertex(_0x1a80x18[_0x1a80x20+ 2][0],_0x1a80x18[_0x1a80x20+ 2][1]);vertex(_0x1a80x18[_0x1a80x20+ 1][0],_0x1a80x18[_0x1a80x20+ 1][1]);endShape();_0x1a80x1f++;fill(_0x1a80x12[18- _0x1a80x1f],102);beginShape();vertex(_0x1a80x17[_0x1a80x20+ 2][0],_0x1a80x17[_0x1a80x20+ 2][1]);vertex(_0x1a80x17[_0x1a80x20+ 3][0],_0x1a80x17[_0x1a80x20+ 3][1]);vertex(_0x1a80x18[_0x1a80x20+ 3][0],_0x1a80x18[_0x1a80x20+ 3][1]);vertex(_0x1a80x18[_0x1a80x20+ 2][0],_0x1a80x18[_0x1a80x20+ 2][1]);endShape();_0x1a80x1f++}};x++;if(x=== betweens[0][_0xaa7e[6]]){setbetweens(sides2)}}function setbetweens(sides2){var _0x1a80xb=xstart;for(var _0x1a80xc=0;_0x1a80xc< 4;_0x1a80xc++){sides1[_0x1a80xc]= sides2[_0x1a80xc];if(_0x1a80xc<= 0){sides2[_0x1a80xc]= makecoords(_0x1a80xb,ystart,h)}else {sides2[_0x1a80xc]= makecoords(_0x1a80xb,ystart+ 0.2* h,0.8* h)};betweens[_0x1a80xc]= tenbetween(sides1[_0x1a80xc][0],sides2[_0x1a80xc][0]);_0x1a80xb= _0x1a80xb+ sides2[_0x1a80xc][1]+ 0.05* h};x= 0}function makecoords(_0x1a80x1c,_0x1a80x1d,h){var _0x1a80x23=4+ Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 3);var _0x1a80x24=3+ Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 4);while(_0x1a80x24> _0x1a80x23){_0x1a80x23= 4+ Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 3);_0x1a80x24= 2+ Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 4)};var _0x1a80x25=h* (_0x1a80x24/ _0x1a80x23);var _0x1a80x26=[];_0x1a80x26[0]= [[_0x1a80x1c+ _0x1a80x25,_0x1a80x1d],[_0x1a80x1c,_0x1a80x1d]];_0x1a80x26[1]= [[_0x1a80x1c,_0x1a80x1d],[_0x1a80x1c,_0x1a80x1d+ h]];_0x1a80x26[2]= [[_0x1a80x1c,_0x1a80x1d+ h],[_0x1a80x1c+ _0x1a80x25,_0x1a80x1d+ h]];_0x1a80x26[3]= [[_0x1a80x1c+ _0x1a80x25,_0x1a80x1d+ h],[_0x1a80x1c+ _0x1a80x25,_0x1a80x1d]];var _0x1a80x27=Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 5);var _0x1a80x28=[];var _0x1a80x29;if(_0x1a80x27> 0){_0x1a80x28[0]= Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 4)};if(_0x1a80x27> 1){for(var _0x1a80x19=1;_0x1a80x19< _0x1a80x27;_0x1a80x19++){_0x1a80x29= Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 4);_0x1a80x28[_0xaa7e[4]](_0x1a80x29)}};_0x1a80x28= _0x1a80x28[_0xaa7e[10]]();for(var _0x1a80x2a=0;_0x1a80x2a< _0x1a80x28[_0xaa7e[6]];_0x1a80x2a++){switch(_0x1a80x28[_0x1a80x2a]){case 0:_0x1a80x26[0][1][0]= _0x1a80x26[0][1][0]+ Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 0.3* _0x1a80x25);_0x1a80x26[1][0][1]= _0x1a80x26[1][0][1]+ Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 0.3* h);break;case 1:_0x1a80x26[1][1][1]= _0x1a80x26[1][1][1]- Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 0.3* h);_0x1a80x26[2][0][0]= _0x1a80x26[2][0][0]+ Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 0.3* _0x1a80x25);break;case 2:_0x1a80x26[2][1][0]= _0x1a80x26[2][1][0]- Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 0.3* _0x1a80x25);_0x1a80x26[3][0][1]= _0x1a80x26[3][0][1]- Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 0.3* h);break;case 3:_0x1a80x26[3][1][1]= _0x1a80x26[3][1][1]+ Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 0.3* h);_0x1a80x26[0][0][0]= _0x1a80x26[0][0][0]- Math[_0xaa7e[8]](Math[_0xaa7e[7]]()* 0.3* _0x1a80x25);break}};var _0x1a80x2b=Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 4);var _0x1a80x2c=[];if(_0x1a80x2b> 0){_0x1a80x2c[0]= Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 4)};if(_0x1a80x2b> 1){for(var _0x1a80x19=1;_0x1a80x19< _0x1a80x2b;_0x1a80x19++){_0x1a80x29= Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 4);_0x1a80x2c[_0xaa7e[4]](_0x1a80x29)}};_0x1a80x2c= _0x1a80x2c[_0xaa7e[10]]();for(var _0x1a80x2a=0;_0x1a80x2a< _0x1a80x2c[_0xaa7e[6]];_0x1a80x2a++){switch(_0x1a80x2c[_0x1a80x2a]){case 0:_0x1a80x26[0][2]= [];_0x1a80x26[0][3]= [];_0x1a80x26[0][4]= [];_0x1a80x26[0][4][0]= _0x1a80x26[0][1][0];_0x1a80x26[0][4][1]= _0x1a80x26[0][1][1];_0x1a80x26[0][1][0]= _0x1a80x26[0][0][0]- Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.7* _0x1a80x25);_0x1a80x26[0][1][1]= _0x1a80x26[0][0][1];_0x1a80x26[0][2][0]= _0x1a80x26[0][1][0]- Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* _0x1a80x25);_0x1a80x26[0][2][1]= _0x1a80x26[0][1][1]+ Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* h);_0x1a80x26[0][3][0]= _0x1a80x26[0][2][0]- Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* _0x1a80x25);_0x1a80x26[0][3][1]= _0x1a80x26[0][0][1];break;case 1:_0x1a80x26[1][2]= [];_0x1a80x26[1][3]= [];_0x1a80x26[1][4]= [];_0x1a80x26[1][4][0]= _0x1a80x26[1][1][0];_0x1a80x26[1][4][1]= _0x1a80x26[1][1][1];_0x1a80x26[1][1][0]= _0x1a80x26[1][0][0];_0x1a80x26[1][1][1]= _0x1a80x26[1][0][1]+ Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.7* h);_0x1a80x26[1][2][0]= _0x1a80x26[1][1][0]+ Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* _0x1a80x25);_0x1a80x26[1][2][1]= _0x1a80x26[1][1][1]+ Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* h);_0x1a80x26[1][3][0]= _0x1a80x26[1][1][0];_0x1a80x26[1][3][1]= _0x1a80x26[1][2][1]+ Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* h);break;case 2:_0x1a80x26[2][2]= [];_0x1a80x26[2][3]= [];_0x1a80x26[2][4]= [];_0x1a80x26[2][4][0]= _0x1a80x26[2][1][0];_0x1a80x26[2][4][1]= _0x1a80x26[2][1][1];_0x1a80x26[2][1][0]= _0x1a80x26[2][0][0]+ Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.7* _0x1a80x25);_0x1a80x26[2][1][1]= _0x1a80x26[2][0][1];_0x1a80x26[2][2][0]= _0x1a80x26[2][1][0]+ Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* _0x1a80x25);_0x1a80x26[2][2][1]= _0x1a80x26[2][1][1]- Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* h);_0x1a80x26[2][3][0]= _0x1a80x26[2][2][0]+ Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* _0x1a80x25);_0x1a80x26[2][3][1]= _0x1a80x26[2][0][1];break;case 3:_0x1a80x26[3][2]= [];_0x1a80x26[3][3]= [];_0x1a80x26[3][4]= [];_0x1a80x26[3][4][0]= _0x1a80x26[3][1][0];_0x1a80x26[3][4][1]= _0x1a80x26[3][1][1];_0x1a80x26[3][1][0]= _0x1a80x26[3][0][0];_0x1a80x26[3][1][1]= _0x1a80x26[3][0][1]- Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.7* h);_0x1a80x26[3][2][0]= _0x1a80x26[3][1][0]- Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* _0x1a80x25);_0x1a80x26[3][2][1]= _0x1a80x26[3][1][1]- Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* h);_0x1a80x26[3][3][0]= _0x1a80x26[3][1][0];_0x1a80x26[3][3][1]= _0x1a80x26[3][2][1]- Math[_0xaa7e[9]](Math[_0xaa7e[7]]()* 0.15* h);break}};return [_0x1a80x26,_0x1a80x25]}function tenbetween(_0x1a80x2e,_0x1a80x2f){var betweens=[];var _0x1a80x30;var _0x1a80x31;for(var _0x1a80x32=0;_0x1a80x32< 4;_0x1a80x32++){if(_0x1a80x2e[_0x1a80x32][_0xaa7e[6]]< 5){_0x1a80x2e[_0x1a80x32][4]= [];_0x1a80x2e[_0x1a80x32][4][0]= [_0x1a80x2e[_0x1a80x32][1][0]];_0x1a80x2e[_0x1a80x32][4][1]= [_0x1a80x2e[_0x1a80x32][1][1]];if(_0x1a80x2e[_0x1a80x32][0][0]=== _0x1a80x2e[_0x1a80x32][1][0]){_0x1a80x31= _0x1a80x2e[_0x1a80x32][1][1]- _0x1a80x2e[_0x1a80x32][0][1];_0x1a80x30= _0x1a80x2e[_0x1a80x32][0][0];_0x1a80x2e[_0x1a80x32][1][1]= _0x1a80x2e[_0x1a80x32][0][1]+ _0x1a80x31* 0.25;_0x1a80x2e[_0x1a80x32][2]= [];_0x1a80x2e[_0x1a80x32][2][0]= _0x1a80x30;_0x1a80x2e[_0x1a80x32][2][1]= _0x1a80x2e[_0x1a80x32][0][1]+ _0x1a80x31* 0.5;_0x1a80x2e[_0x1a80x32][3]= [];_0x1a80x2e[_0x1a80x32][3][0]= _0x1a80x30;_0x1a80x2e[_0x1a80x32][3][1]= _0x1a80x2e[_0x1a80x32][0][1]+ _0x1a80x31* 0.75}else {_0x1a80x31= _0x1a80x2e[_0x1a80x32][1][0]- _0x1a80x2e[_0x1a80x32][0][0];_0x1a80x30= _0x1a80x2e[_0x1a80x32][0][1];_0x1a80x2e[_0x1a80x32][1][0]= _0x1a80x2e[_0x1a80x32][0][0]+ _0x1a80x31* 0.25;_0x1a80x2e[_0x1a80x32][2]= [];_0x1a80x2e[_0x1a80x32][2][1]= _0x1a80x30;_0x1a80x2e[_0x1a80x32][2][0]= _0x1a80x2e[_0x1a80x32][0][0]+ _0x1a80x31* 0.5;_0x1a80x2e[_0x1a80x32][3]= [];_0x1a80x2e[_0x1a80x32][3][1]= _0x1a80x30;_0x1a80x2e[_0x1a80x32][3][0]= _0x1a80x2e[_0x1a80x32][0][0]+ _0x1a80x31* 0.75}};if(_0x1a80x2f[_0x1a80x32][_0xaa7e[6]]< 5){_0x1a80x2f[_0x1a80x32][4]= [];_0x1a80x2f[_0x1a80x32][4][0]= [_0x1a80x2f[_0x1a80x32][1][0]];_0x1a80x2f[_0x1a80x32][4][1]= [_0x1a80x2f[_0x1a80x32][1][1]];if(_0x1a80x2f[_0x1a80x32][0][0]=== _0x1a80x2f[_0x1a80x32][1][0]){_0x1a80x31= _0x1a80x2f[_0x1a80x32][1][1]- _0x1a80x2f[_0x1a80x32][0][1];_0x1a80x30= _0x1a80x2f[_0x1a80x32][0][0];_0x1a80x2f[_0x1a80x32][1][1]= _0x1a80x2f[_0x1a80x32][0][1]+ _0x1a80x31* 0.25;_0x1a80x2f[_0x1a80x32][2]= [];_0x1a80x2f[_0x1a80x32][2][0]= _0x1a80x30;_0x1a80x2f[_0x1a80x32][2][1]= _0x1a80x2f[_0x1a80x32][0][1]+ _0x1a80x31* 0.5;_0x1a80x2f[_0x1a80x32][3]= [];_0x1a80x2f[_0x1a80x32][3][0]= _0x1a80x30;_0x1a80x2f[_0x1a80x32][3][1]= _0x1a80x2f[_0x1a80x32][0][1]+ _0x1a80x31* 0.75}else {_0x1a80x31= _0x1a80x2f[_0x1a80x32][1][0]- _0x1a80x2f[_0x1a80x32][0][0];_0x1a80x30= _0x1a80x2f[_0x1a80x32][0][1];_0x1a80x2f[_0x1a80x32][1][0]= _0x1a80x2f[_0x1a80x32][0][0]+ _0x1a80x31* 0.25;_0x1a80x2f[_0x1a80x32][2]= [];_0x1a80x2f[_0x1a80x32][2][1]= _0x1a80x30;_0x1a80x2f[_0x1a80x32][2][0]= _0x1a80x2f[_0x1a80x32][0][0]+ _0x1a80x31* 0.5;_0x1a80x2f[_0x1a80x32][3]= [];_0x1a80x2f[_0x1a80x32][3][1]= _0x1a80x30;_0x1a80x2f[_0x1a80x32][3][0]= _0x1a80x2f[_0x1a80x32][0][0]+ _0x1a80x31* 0.75}}};for(var _0x1a80x20=0;_0x1a80x20< 12;_0x1a80x20++){betweens[_0x1a80x20]= [];for(var _0x1a80x33=0;_0x1a80x33< 4;_0x1a80x33++){betweens[_0x1a80x20][_0x1a80x33]= [];for(var _0x1a80x34=0;_0x1a80x34< 4;_0x1a80x34++){betweens[_0x1a80x20][_0x1a80x33][_0x1a80x34]= [];betweens[_0x1a80x20][_0x1a80x33][_0x1a80x34][0]= ((12- _0x1a80x20)* _0x1a80x2e[_0x1a80x33][_0x1a80x34][0]+ _0x1a80x20* _0x1a80x2f[_0x1a80x33][_0x1a80x34][0])/ 12;betweens[_0x1a80x20][_0x1a80x33][_0x1a80x34][1]= ((12- _0x1a80x20)* _0x1a80x2e[_0x1a80x33][_0x1a80x34][1]+ _0x1a80x20* _0x1a80x2f[_0x1a80x33][_0x1a80x34][1])/ 12}}};return betweens}