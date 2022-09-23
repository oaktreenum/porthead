function preload() {
  // preload() runs once
bkg = loadImage('assets/bkg.jpg');
  cimg = loadImage('assets/d.svg');
  dimg = loadImage('assets/c.svg');
  eimg = loadImage('assets/e.png');
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  
  
  resrat = bkg.width/bkg.height;
  
  wRatio = width/bkg.width;
  hRatio = height/bkg.height;
  rat  = max(wRatio,hRatio);
  bkg.resize(bkg.width*rat,bkg.height*rat);
  
  eimg.resize(130,130);
}

function draw() {
  clear();
  background(50);

  image(bkg,0,0);
  
  noStroke()
  rect(0,0,60,innerHeight)
  push();
  translate(00,3*innerHeight/4);
  rotate(-PI/2);
  textFont('Prata');
  textSize(43);
  text("ALLON GOLDBERG", 0, 45);
  pop();
  
  a=180;
  b=60;
  c=30;
  if(innerWidth<800){
    a=a/2;
    b=b/2;
    c=c/2;
  } else{
      a=180;
      b=60;
      c=30;}
  
  textFont('Silkscreen');
  textSize(b);
  text("Engineer", innerWidth/2-4.6*a/3, innerHeight/2-b);
  textFont('Reggae One');
  textSize(b);
  text("Designer", innerWidth/2-2.3*a/3, innerHeight/2);
  textFont('Rock Salt');
  textSize(b);
  text("Artist", innerWidth/2-a/13, innerHeight/2+b);
 
  
  textFont('Space Mono');
  textSize(13);
  text("LinkedIn", innerWidth/4-31, 26);
  textSize(13);
  text("Instagram", 2*innerWidth/4-31, 26);
  textFont('Space Mono');
  textSize(13);
  text("Quantum Crypto", 3*innerWidth/4-52, 26);
 
  image(dimg,innerWidth-145,innerHeight/7);
  image(eimg,innerWidth-130,3*innerHeight/7);
  image(cimg,innerWidth-150,5*innerHeight/7);
  
  
  
}
