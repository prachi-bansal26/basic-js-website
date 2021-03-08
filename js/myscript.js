/*
refer to the numbering for marking criteria
***1  addEventListener() method. (2)
***2  If Else statement. (5)
***3  Use a global variable. (2)
***4  Use querySelectorAll(). (2)
***5  Use a for loop. (5)
***6  Use jQuery UI. (10)
***7  Use a Click event.(2)
***8  If statement. (5)
***9  use this keyword effectively. (5)


Use comments throughout. (5)
5 jquery methods have been used (10) ------ .hide(), .show(), .load(), .attr(), .ready(), .is()


Kindly refer to other table-example.js file for second page.

Compiling Total for 119 points.
*/

$(document).ready(function(){
//event handler for dropdown menu in navbar -------- ***1
	document.getElementById('dropdown').addEventListener('click', function() {
//show/hide the menu --------- ***2
	  if($(".dropdown-menu").is(":visible")) {
		  $(".dropdown-menu").hide();
	  } else {
		  $(".dropdown-menu").show();
	  }
	});
	
// slider coding
//variable to store the slide number --------- ***3
	var slideIndex = 0;
	sliderFunction();

	function sliderFunction() {
//getting all slides having class name sliderSlides  ---------- ***4
	  var getSliders = document.querySelectorAll(".sliderSlides");
//looping through all the slides and hide them all ---------- ***5		
	  for (var i = 0; i < getSliders.length; i++) {
		getSliders[i].style.display = "none";  
	  }
	  slideIndex++;
	  if (slideIndex > getSliders.length) {slideIndex = 1}    
	  getSliders[slideIndex-1].style.display = "block";  
	  setTimeout(sliderFunction, 2000); // Change image every 2 seconds
	}
});

//for accordion used for left nav in documentation.html page using jqueryUI ------  ***6
	$( "#accordion" ).accordion({
		heightStyle: "content"
	});
	
//load different files on click in the left nav -----  ***7
	$("#accordion ul.my-unstyled-list li").click(function(){	
//if title attribute not defined for list-item ----------  ***8
		if($(this).attr("title") != undefined) {
//to get the filename from the li title attribute ----------  ***9
			let fileName = $(this).attr("title")+ ".html";
			$("#content").load(fileName);
		}
	});
	
//for autocomplete used for the search bar on left nav in documentation.html page using jqueryUI
    var availableTags = [
      "Introduction",
      "Download",
      "Contents",
      "Browsers and Devices",
      "Javascript",
      "Theming",
      "Build Tools",
      "Webpack",
      "Accessibility",
      "Overview",
      "Grid",
      "Utilities for layout",
      "Typography",
      "Code",
      "Images",
      "Tables",
      "Figures",
      "Alerts",
      "Badge",
      "Breadcrumb",
      "Buttons",
      "Button Group",
	  "Card",
		"Carousel",
		"Collapse",
		"Dropdowns",
		"Forms",
		"Input group",
		"Jumbotron",
		"List Group",
		"Media Object",
		"Modal",
		"Navs",
		"Navbar",
		"Pagination",
		"Popovers",
		"Scrollspy",
		"Spinners",
		"Tooltips"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

