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

    if (totalScrollDelta >= 0 && currentStep < stepValues.length -1) {
      console.log("O++, display: " + currentStep);
      currentStep++;
      display(currentStep)
      displayText(currentStep)
   
    } else if (totalScrollDelta < 0 && currentStep >= 0) {
      console.log("--, hide: " + currentStep);
      hide(currentStep)
      hideText(currentStep)
      currentStep--;
    }

    console.log("-current: " + currentStep);
   
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

