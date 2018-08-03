var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
    
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
var myActivities = ["Frost Museum","Spa Day","Movie theater","Picnic","Park","Pamm Art Museum","Music Festival","Concert","Baking","Beach","Take a Boat Tour","Arshton Center","Hiking","Biking","Camping","Walking Tour","Escape Room","Zoo","Karaoke","Pool","Cruise","Kayaking","Visit the Everglades","Volunteering","Color-Me-Mine","Boating","Watch the Sunrise/Sunset","Thrift Shopping","Mall/Shopping","Ice Skating","Skyzone","Yoga","Cycling","Farmer's Market","Get a Job","Parasailing","Scuba-Diving/Snorkeling","Rock Climbing","Hotel Stay","Wynwood","Botanical Gardens","Fire Pit/S'mores","Carnival","Versailles","Internships","Dayger","Strawberry Picking","Sports","Horseback Riding","Segway Tour","Arcade","Slumber Party"];


var myFood = ["Cheesecake Factory","Salty Donut","Blue Ginger","Boca's House","Texas De Brazil","Tab 42","Poke + Go","Yard Bird","Michael Genuine","Raw Juce","Shake Shack","Mandolin","Kith","Thai Ice","Bayside","Wynwood","Zona Grill","Sabora Peru","Pastelo Catracho","Havana Harrey","BartonG","Moshi Moshi","Pock Buffet","Houston's","One Rooftop","Aventura","Lincoln Road","Sugar Factory","Pizza Rustica","Ginsen","Taikayi Wynwood",];

function pickRandomItems(){
    var randomActivity = myActivities[Math.floor(Math.random()*myActivities.length)];
    var randomFood = myFood[Math.floor(Math.random()*myFood.length)];
    document.getElementById("printActivity").innerHTML = randomActivity;
    document.getElementById("printFood").innerHTML = randomFood;
    
}


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}