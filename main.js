quick_draw_data_set=["aircraft carrier","airplane","alarm,clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball,bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg"]
random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1)
Element_of_array = quick_draw_data_set[random_no]

console.log("quick_draw_data_set");

function clearCanvas()
{
background("white");
}

function setup()
{
  canvas= createCanvas(280,280);
  canvas.center();
  background("white");
}
function clearCanvas()
{
background("white");
}

function setup()
{
  canvas= createCanvas(280,280);
  canvas.center();
  background("white");
  canvas.mouseRealsed(classifyCanvas);
  synth=window.speechSynthesis;
}

function preload()
{
  classifier = ml5.imageClassifier('DoodleNet');
}

function draw()
{
  strokeWeight(13);
  stroke(0);
  if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function classifyCanvas()
{
  classifier.clasify(canvas, gotResult);
}

function gotResult()
{
  if (error){
    console.error(error);
  }
  console.log(results);
  document.getElementById('label').innerHTML='Label:'+results[0].label;
  document.getElementById('confidence').innerHTML='Confidence:'+Math.round(results[0].confidence*100) +'%';

  utterthis=new SpeechSynthesisUtterance(results[0].label);
  synth.speak(utterthis);
}

if(condition){
  counter++
  }
  if(stroke=='black' || stroke=='red'){
    line(30,40,25,50)
    }  