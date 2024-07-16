function abc(){
  alert("May your birthday be as incredible as you are! Enjoy every moment.🎈🎊");


  confetti({
    particleCount: 1000,
    spread: 500,
    origin: { y: 0.5}
  });

  var sound = document.getElementById("confettiSound");
  sound.play();





  var body = document.body;
  var newimage = "url(images/newimage.webp)"
  body.style.backgroundImage = newimage;
  var button = document.querySelector('.b1');
  button.style.display = 'none';
  var p1 = document.querySelector('.p1');
  p1.style.display = "block";
  var p2 = document.querySelector('.p2');
  p2.style.display = "block";
  var i1 = document.querySelector(".i1")
  i1.style.display = "block"
  var i2 = document.querySelector(".i2")
  i2.style.display = "block";
  void p1.offsetWidth;
  void p2.offsetWidth;
  void i1.offsetWidth;
  void i2.offsetWidth;

  // Set transition properties
  p1.style.transition = "opacity 5s ease-in-out";
  p2.style.transition = "opacity 9s ease-in-out";
  i1.style.transition = "opacity 7s ease-in-out";
  i2.style.transition = "opacity 8s ease-in-out";

  // Set opacity to 1
  p1.style.opacity = "1";
  p2.style.opacity = "1";
  i1.style.opacity = "1";
  i2.style.opacity = "1";


  
  
  
}