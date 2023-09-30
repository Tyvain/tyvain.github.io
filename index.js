//var waterDiv = document.querySelector('#water');

var currentStep = -1;
var stepValues = [5.8,11.4+5.8, 20.1+11.4+5.8, 36.3+20.1+11.4+5.8, 100];
var totalScrollDelta = 0;
var isScrolling = false;
var waterContainer = document.querySelector('#water-container');
var introsteps = 10;
   
function helloWorld() {
  alert ("COUCOU");
  }

for (var i = 0; i < stepValues.length; i++) {
  var waterDivTemp = document.querySelector('#water' + i);
  var h = stepValues[i] + '%';
  waterDivTemp.style.height = h;
}

function myFunction2() {
  alert("I am an alert box!");
}

function launchintro(){
//var element = document. getElementById("crawl");
// element. classList. remove("animate"); 
console.log("Intro launched!");
}

const get= document.getElementById('btn');

window.addEventListener('wheel', function(event) {
  if (!isScrolling) {
    isScrolling = true;
    totalScrollDelta = 0;
  }

  totalScrollDelta += event.deltaY;

  if (Math.abs(totalScrollDelta) >= 200) { // Adjust the threshold as needed
    isScrolling = false;
    var mouse = document.querySelector('#mouse');
    console.log("-current: " + currentStep);

    if (totalScrollDelta >= 0 && currentStep == 4) {
      var bd = document.querySelectorAll('.speech');
      bd.forEach(el => el.style.visibility = "initial");
      var txt = document.querySelectorAll('.text');
      txt.forEach(el => el.style.visibility = "hidden");
    }
    
    if (totalScrollDelta < 0 && currentStep == 4) {
      var bd = document.querySelectorAll('.speech');
      bd.forEach(el => el.style.visibility = "hidden");
      var txt = document.querySelectorAll('.text');
      txt.forEach(el => el.style.visibility = "initial");
    }

    if (totalScrollDelta >= 0 && currentStep < stepValues.length -1) {
      console.log("O++, display: " + currentStep);
      if (currentStep === -1) mouse.style.visibility = 'hidden';
      currentStep++;
      display(currentStep)
      displayText(currentStep)
   
    } else if (totalScrollDelta < 0 && currentStep >= 0) {
      console.log("--, hide: " + currentStep);
      if (currentStep === 0) mouse.style.visibility = 'initial';
      hide(currentStep)
      hideText(currentStep)
      currentStep--;
    }

   
   
    //waterContainer.style.height = stepValues[currentStep] + '%';
    
    
  }
});

function displayText (nb){
  var waterDivTemp = document.querySelector('#text' + nb);
  waterDivTemp.style.visibility = 'initial';
}

function hideText (nb){
  var waterDivTemp = document.querySelector('#text' + nb);
  waterDivTemp.style.visibility =  'hidden';
}


function display (nb){
  var waterDivTemp = document.querySelector('#water' + nb);
  waterDivTemp.style.height = stepValues[nb] + '%';
  waterDivTemp.style.visibility = 'initial';
}

function hide (nb){
  var waterDivTemp = document.querySelector('#water' + nb);
  waterDivTemp.style.height = stepValues[nb] + '%';
  waterDivTemp.style.visibility =  'hidden';
}

