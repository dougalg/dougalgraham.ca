document.ready = function(){
	// Set the easing speed for show/hide
	showHideDuration = 500;

	// First we can create the section to hold the skills
	// and insert it after the Experience and education section
	$('#exp_and_ed').after('<section id="skillsSection" class="five columns omega"><h2>Skills</h2></section>');
	// add in buttons to select all or none and the UL to hold the list
	$selAll = $('<button class="linkLike">All</button>');
	$selNone = $('<button class="linkLike">None</button>');
	$skillsUL = $('<ul id="skillsUL"></ul>');

	$selAll.appendTo($('#skillsSection'));
	$('#skillsSection').append(' | ');
	$selNone.appendTo($('#skillsSection'));
	$skillsUL.appendTo($('#skillsSection'));

	// Now, let's make a list of all the skills
	var allSkills = [];
	var allCheckboxes = [];
	$('footer.skills ul li').each(function(){
		// Only include each skill once
		if (jQuery.inArray($(this).text(), allSkills) == -1) {
			allSkills.push($(this).text());
		}
		// add a class hook to the article for ease of searching
		hook = 'skillsClass_'+$(this).text().replace(/\W/g, '_');
		$(this).parents('#exp_and_ed article.js-skills--hideable').addClass(hook);
	});

	// Sort and add the checkboxes, lis, etc...
	allSkills.sort();
	$.each(allSkills, function(index, value) {
		// Make a name with not spaces or other characters
		// We'll use this as the unique checkbox name
		$cleanText = 'skills_'+value.replace(/\W/g, '_');
		$newLI = $('<li><input type="checkbox" id="'+$cleanText+'" value="'+value+'" /> <label for="'+$cleanText+'">'+value+'</label></li>');
		$skillsUL.append($newLI);
		allCheckboxes.push($newLI.find('input')[0]);
	});
	
	// Attach the change event handler so they hide and show stuff when toggles
	const workEls = document.querySelectorAll('#experience .js-skills--hideable');

	requestAnimationFrame(() => {
		workEls.forEach((el) => {
			const height = el.offsetHeight;
			el.style.height = `${height}px`;
			el.dataset.height = height;
		});
	});

	const showAllWork = () => {
		requestAnimationFrame(() => workEls.forEach(showEl));
	};

	$selAll.click(function(){
		$('#skillsUL li input[type=checkbox]').attr('checked', true);
		showAllWork();
	});
	$selNone.click(function(){
		$('#skillsUL li input[type=checkbox]').attr('checked', false);
		showAllWork();
	});
	$('#skillsSection ul li input[type=checkbox]').change(function() {
		const allSelected = allCheckboxes.filter(({ checked }) => checked);

		if (allSelected.length < 1) {
			showAllWork();
			return;
		}

		var selectedClasses = allSelected.map(function(checkbox) {
			return 'skillsClass_' + checkbox.value.replace(/\W/g, '_');
		});

		requestAnimationFrame(() => {
			workEls.forEach((el) => {
				var isVisible = selectedClasses.some((currentClass) => el.classList.contains(currentClass));
				if (isVisible) {
					showEl(el);
				}
				else {
					hideEl(el);
				}
			});
		});
	});
};

function showEl(el) {
	el.classList.remove('work--hidden');
	el.style.height = `${el.dataset.height}px`;
}

function hideEl(el) {
	el.classList.add('work--hidden');
	el.style.height = 0;
}