const $ = (s, target=document) => target.querySelector(s);
const $$ = (s, target=document) => Array.from(target.querySelectorAll(s));

const HIDDEN_WORK_CLASS = 'work--hidden';

// Set the easing speed for show/hide
showHideDuration = 500;

// Now, let's make a list of all the skills
const allSkills = new Set();
const addToSkills = allSkills.add.bind(allSkills);
const allCheckboxes = [];

$$('#experience .work').forEach((workEl) => {
	const skills = $$('footer.skills ul li', workEl)
		.map((li) => li.textContent);

	workEl.dataset.skills = skills;
	skills.forEach(addToSkills);

	requestAnimationFrame(() => {
		const height = workEl.offsetHeight;

		workEl.dataset.height = height;
		workEl.style.height = `${height}px`;

	});
});

// Sort and add the checkboxes, lis, etc...
const listItemTpl = $('#skillListItem').content;
const skillsUl = $('#skillsUL');
const tempUl = document.importNode(skillsUl);
const allListItems = Array.from(allSkills.values())
	.sort()
	.map((value) => renderSkillRow(listItemTpl, value));
const changeHandler = getChangeHandler(allListItems);
allListItems.forEach((el) => {
	$('input', el).addEventListener('change', changeHandler);
	tempUl.appendChild(el);
});
replaceNode(tempUl, skillsUl);
requestAnimationFrame(() => {
	$('#skillsSection').classList.remove('hidden');
});

function showEl(el) {
	el.classList.remove(HIDDEN_WORK_CLASS);
	el.style.height = `${el.dataset.height}px`;
}

function hideEl(el) {
	el.classList.add(HIDDEN_WORK_CLASS);
	el.style.height = 0;
}

function renderSkillRow(template, skill) {
	const clone = document.importNode(template, true);
	const id = `skill_${skill.replace(/\W/g, '_')}`;

	const input = $('input', clone);
	input.id = id;
	input.value = skill;

	const label = $('label', clone);
	label.setAttribute('for', id);
	label.textContent = skill;

	return clone;
}

let workEls;
function getWorkEls() {
	if (!workEls) {
		workEls = $$('#experience .work');
	}
	return workEls;
}

function getChangeHandler(allListItems) {
	let allCheckboxes = null;
	return function() {
		if (allCheckboxes === null) {
			allCheckboxes = $$('#skillsUL input');
		}

		const allSelected = allCheckboxes
			.filter(({ checked }) => checked)
			.map(({ value }) => value);

		if (allSelected.length < 1) {
			showAllWork();
			return;
		}

		requestAnimationFrame(() => {
			getWorkEls().forEach((el) => {
				var isVisible = allSelected.some((skill) => el.dataset.skills.split(',').includes(skill));
				if (isVisible) {
					showEl(el);
				}
				else {
					hideEl(el);
				}
			});
		});
	}
}

function replaceNode(newEl, oldEl) {
	requestAnimationFrame(() => {
		oldEl.parentNode.replaceChild(newEl, oldEl);
	});
}

function showAllWork() {
	getWorkEls().forEach((el) => {
		showEl(el);
	});
}
