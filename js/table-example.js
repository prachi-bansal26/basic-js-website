/*
refer to the numbering for marking criteria
***1  use a jQuery plugin. (10)
***2  form-validation on two inputs. (10)
***3  Use getElementsByClassName. (2)
***4  Use the event Target property. (5)
***5  Use the focus event. (2)
***6  Use a Try ... Catch statement. (5)
***7  Create an XMLHttpRequest object. (15)
***8  Use the XMLHttpRequest object to get XML/JSON data. (15)
***9  Use the innerHTML property. (2)
***10  use a built-in method of document object. (5)
*/

$(document).ready(function(){
	document.getElementById('dropdown').addEventListener('click', function() {
	  if($(".dropdown-menu").is(":visible")) {
		  $(".dropdown-menu").hide();
	  } else {
		  $(".dropdown-menu").show();
	  }
	});
	
//initialisation for table to be made by using Jquery Datatable ------- ***1 
	$('#example-table').DataTable({
        "ajax": 'table-data.json'
    });
	

//validating my sign-up form ----------- ***2
	$("#signup").validate({
	  rules: {
		  your_email_id: {
			  required: true,
			  email: true
		  },
		  your_password : {
			  required: true,
			  minlength: 8
		  }
	  },
	  messages: {
		your_email_id: {
		  required: "We need your email address to contact you",
		  email: "Enter a valid Email"
		},
		  your_password: {
		  required: "We need your password to sign you up",
		  minlength: jQuery.validator.format("At least {0} characters required!")
		}
	  }
	});
	
//Using getElementsByClassName to get the first input of the form ----------- ***3
	document.getElementsByClassName("myInput")[0].addEventListener('focus', (event) => {
// using the event target property to change the bg when focused -------- ***4
	  event.target.style.background = '#e6dbe8';    
	});
	document.getElementsByClassName("myInput")[0].addEventListener('blur', (event) => {
	  event.target.style.background = '';    
	});
	document.getElementsByClassName("myInput")[1].addEventListener('focus', (event) => {
	  event.target.style.background = '#e6dbe8';    
	});
	document.getElementsByClassName("myInput")[1].addEventListener('blur', (event) => {
	  event.target.style.background = '';    
	});
	
// for autofocus on the email input  ------------- ***5 
	$("#your_email_id").focus();
	showMyJSONTable();
});


function showMyJSONTable() {
//will try to make an XMLREquest; if unsuccessful will be handled by catch block  --------- ***6	
    try {
//XMLHttpRequest object for fetching data from JSON file.  ----------- ***7
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.status == 200 && this.readyState == 4) {
//XMLHTTPRequest will parse the JSON data recieved from the file.  ------------ ***8
                var responseText = JSON.parse(this.responseText);
                var bodyContent = "";
                for (i = 0; i < responseText['data'].length; i++) {
                    bodyContent += '<tr>' ;
					for(var j=0; j<4; j++) {
						bodyContent += '<td>' + responseText['data'][i][j] + '</td>';
					}
                    bodyContent += '</tr>';
                }
//put the response tr created in table body using innerHTML  ----------- ***9
                document.getElementById("json-table").innerHTML = bodyContent;
            } else {
				document.getElementById("json-table").innerHTML = "<span class='error'>*There is a problem in fetching data in making XHR.</span>";
			}
        };
//XMLHTTPRequest will open the JSON File.
        xmlhttp.open("GET", "table-data.json", true);
        xmlhttp.send();

    } catch (err) {
//use a built-in method of document object  --------- ***10
        document.getElementById("json-table").innerHTML = "<span class='error'>*There is a problem in fetching data from JSON.</span>";
    }
}