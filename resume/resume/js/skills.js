/* Author: Dougal Graham
     Inspired by Mike Kelly (http://hiremike.heroku.com/js/script.js)
     His code is super tight, but I've gone for something simple for those not used to regex,
     I recommend checking out how he approaches this problem

     A list of skills for searching your CV auto-generated by jQuery

     Here I create everything from scratch so if the user doesn't have JS on it will degrade
     gracefully.

     There is a lot of redundancy (I call replace() 3 times, COME ON!), but I think this is very clear,
     cleaning it up is left as an exercise for the reader ;)
*/

$(function(){
	// Set the easing speed for show/hide
	showHideDuration = 500;

	// First we can create the section to hold the skills
	// and insert it after the Experience and education section
	$('#exp_and_ed').after('<section id="skillsSection" class="five columns omega"><h2>Skills</h2></section>');
	// add in buttons to select all or none and the UL to hold the list
	$selAll = $('<span class="linkLike">All</span>').click(function(){
		$('.work').show(showHideDuration);
		$('#skillsUL li input[type=checkbox]').attr('checked', true);
	});
	$selNone = $('<span class="linkLike">None</span>').click(function(){
		$('.work').hide(showHideDuration);
		$('#skillsUL li input[type=checkbox]').attr('checked', false);
	});
	$skillsUL = $('<ul id="skillsUL"></ul>');

	$selAll.appendTo($('#skillsSection'));
	$('#skillsSection').append(' | ');
	$selNone.appendTo($('#skillsSection'));
	$skillsUL.appendTo($('#skillsSection'));

	// Now, let's make a list of all the skills
	var allSkills = [];
	$('footer.skills ul li').each(function(){
		// Only include each skill once
		if (jQuery.inArray($(this).text(), allSkills) == -1) {
			allSkills.push($(this).text());
		}
		// add a class hook to the article for ease of searching
		hook = 'skillsClass_'+$(this).text().replace(/\W/g, '_');
		$(this).parents('#exp_and_ed article.work').addClass(hook);
	});
	// Sort and add the checkboxes, lis, etc...
	allSkills.sort();
	$.each(allSkills, function(index, value) {
		// Make a name with not spaces or other characters
		// We'll use this as the unique checkbox name
		$cleanText = 'skills_'+value.replace(/\W/g, '_');
		$newLI = $('<li><input type="checkbox" id="'+$cleanText+'" value="'+value+'" checked="checked" /> <label for="'+$cleanText+'">'+value+'</label></li>');
		$skillsUL.append($newLI);
	});
	// Attach the change event handler so they hide and show stuff when toggles
	$('#skillsSection ul li input[type=checkbox]').change(function(){
		// Find all work articles with $(this).attr('value') in their class list and show/hide them
		$mainValue = 'skillsClass_'+$(this).attr('value').replace(/\W/g, '_');
		$isChecked = $(this).attr('checked');
		$('#experience .work.'+$mainValue).each(function(){
			var classes = $(this).attr('class').split(/\s+/g);
			$isChecked ? $(this).show(showHideDuration) : $(this).hide(showHideDuration, function(){unCheck(classes)});
		});
	});

	// When a work item is hidden, uncheck the associated boxes
	var unCheck = function(items) {
		$.each(items, function(index, item){
			if (item != 'work') {
				theID = item.replace(/^skillsClass_/g, 'skills_');
				$('#'+theID).attr('checked', false);
			}
		});
	}
})