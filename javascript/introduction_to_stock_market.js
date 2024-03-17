
var currentImageIndex = 0;          //index to point current image

 // Pulled array of slideimage elements by class name
var slides = document.getElementsByClassName("slide-image");

//setting the image based upon currentImageIndex on page loading
setImage(currentImageIndex);        

//bringing the image to previous image
function setPreviousImage() {       
  // decreasing currentImageIndex to point pervious image
  currentImageIndex = currentImageIndex - 1; 
  // check if current image index is not less than first image index
  if (currentImageIndex < 0) { 
    // if current image index is less than first image, bring the index to last image
    currentImageIndex = slides.length - 1; 
  }
  setImage(currentImageIndex);
}

 //bringing the image to next image
function setNextImage() {
  // increasing currentImageIndex to point next image
  currentImageIndex = currentImageIndex + 1; 
  // check if current image index is not more than last image index
  if (currentImageIndex >= slides.length) { 
    // if current image index is more than last image, bring the index to first image
    currentImageIndex = 0; 
  }
  setImage(currentImageIndex); // setting the image after updating the value of currentImageIndex
}

function setImage() {
  var i;
  for (i = 0; i < slides.length; i++) {
    // making the image at ith index dissappear
    slides[i].style.display = "none"; 
  }
  // making the image at currentImageIndex appear
  slides[currentImageIndex].style.display = "block"; 
}
