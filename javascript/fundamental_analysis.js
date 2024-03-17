$(document).ready(() => {

  var slides = $('.slide-image'); // pulling and instantiatnig the slides
  var slides_length = slides.length;
  var currentImageIndex = 0;
  loadContent('apple'); // loading of default content
  setImage(); //Setting the default image
  loadDescription();// loading of desciption in html from json

  //companies list according to the sequence
  var companies = {
    "apple": "0",
    "cocacola": "1",
    "tesla": "2",
    "johnson": "3"
  };
 
  // method to show previous image and hide others upon click action of previous button
  $('#prev').click(function () {
    currentImageIndex = currentImageIndex - 1;
    if (currentImageIndex < 0) {
      currentImageIndex = slides_length - 1;
    }
    setImage();
  });

  // method to show forward image and hide others upon click action of forward button
  $('#next').click(function () {
    currentImageIndex = currentImageIndex + 1;
    if (currentImageIndex >= slides_length) {
      currentImageIndex = 0;
    }
    setImage();
  });

  //Setting the image in slide show based upon the current slide index
  function setImage() {
    var i;
    for (i = 0; i < slides_length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentImageIndex].style.display = "block";
  }

  // Setting the image as well as loading the content based upon the company selection in drop down
  $('#company').change(function () {
    currentImageIndex = companies[this.value];
    setImage();
    loadContent(this.value)
  });


  // loading selective content from the json file based upon company name and adding it to the html element
  function loadContent(company_name) {
    $.getJSON("/resources/fundamental_analysis.json", function (data) {
      var content = "<dd>";
      var company_content = data[company_name];
      company_content.forEach(function (obj) {
        content += obj;
        content += "<br><br>"
      });
      content += "</dd>";
      $('#paragraph').html("");
      $('#paragraph').append(content);
    });
  }

  // loading description content in html in from the json file
  function loadDescription() {
    $.getJSON("/resources/fundamental_analysis.json", function (data) {
      var content = "<dd>";
      content += data["description"];
      content += "</dd>";
      $('#article-description').html("");
      $('#article-description').append(content);
    });
  }
});
