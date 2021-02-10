'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	// call AJAX endpoint
	var projectURL = "https://lab6-kichuong.herokuapp.com/project/" + idNumber;
	$.get(projectURL, callBackFn);
	console.log(projectURL);
	console.log("User clicked on project " + idNumber);
}

function callBackFn(result) {
	console.log(result);
	var selector = "#project" + result.id + " .details";
	var projectHTML = '<p>' + result.title + '</p>' +
		'<p>' + result.date + '</p>' +
		'<img src="' + result.image + '" class="detailsImage">' +
    	'<p>' + result.summary + '</p>';
	$(selector).html(projectHTML);
}