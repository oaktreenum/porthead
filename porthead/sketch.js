function preload() {
  bkg = loadImage('assets/bkg.jpg');

  cimg = loadImage('assets/d.svg');
  dimg = loadImage('assets/c.svg');
  eimg = loadImage('assets/e.svg');
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  
  
  resrat = bkg.width/bkg.height;
  
  wRatio = width/bkg.width;
  hRatio = height/bkg.height;
  rat  = max(wRatio,hRatio);
  bkg.resize(bkg.width*rat,bkg.height*rat);
  
  if(innerWidth<500){
    cimg.resize(65,67);
    dimg.resize(65,67);
    eimg.resize(65,67);
  }
}

function draw() {
  clear();
  background(50);

  image(bkg,0,0);
  
  noStroke();
  rect(0,0,60,innerHeight);
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
  d=145;
  e=150;
  
   if(innerWidth<800){
    a=a/2-22;
    b=b/2;
    c=c/2;
  } else{
      a=180;
      b=60;
      c=30;
  }
  
  if(innerWidth<500){
    d=d/2;
    e=c/2;
    image(dimg,innerWidth-d,innerHeight/7);
    image(eimg,innerWidth-d,3*innerHeight/7);
    image(cimg,innerWidth-75,5*innerHeight/7);
  }else{
    d=145;
    e=150;
    image(dimg,innerWidth-d,innerHeight/7-22);
    image(eimg,innerWidth-d,3*innerHeight/7-22);
    image(cimg,innerWidth-150,5*innerHeight/7-22);
  }
  
  textFont('Silkscreen');
  textSize(b);
  text("ENGINEER", innerWidth/2-4.6*a/3, innerHeight/2-b);
  textFont('Reggae One');
  textSize(b);
  text("Designer", innerWidth/2-2.3*a/3, innerHeight/2);
  textFont('Rock Salt');
  textSize(b);
  text("artist", innerWidth/2-a/13, innerHeight/2+b);
 
  
  textFont('Space Mono');
  textSize(13);
  text("LinkedIn", innerWidth/4-31, 26);
  textSize(13);
  text("Instagram", 2*innerWidth/4-45, 26);
  textFont('Space Mono');
  textSize(13);
  text("Quantum Crypto", 3*innerWidth/4-52, 26);

}
