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

$('#resetSkills').addEventListener('click', showAllWork);

// Sort and add the checkboxes, lis, etc...
const listItemTpl = $('#skillListItem').content;
const temporaryUl = $('#skillsUL');
const skillsUl = document.importNode(temporaryUl);
const allListItems = Array.from(allSkills.values())
	.sort()
	.map((value) => renderSkillRow(listItemTpl, value));
allListItems.forEach((el) => {
	const changeHandler = getChangeHandler(el);
	const input = $('input', el);
	input.addEventListener('change', changeHandler);
	addToggler(input);
	skillsUl.appendChild(el);
});
replaceNode(skillsUl, temporaryUl);
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

	const skillName = $('.skill-selector__skill-name', clone);
	skillName.textContent = skill;

	return clone;
}

let workEls;
function getWorkEls() {
	if (!workEls) {
		workEls = $$('#experience .work');
	}
	return workEls;
}

function addToggler(el) {
	el.toggle = function() {
		if (!this.squirkle || !this.vert || !this.rotation) {
			const parent = this.parentElement;
			this.squirkle = $('.squirkle', parent);
			this.vert = $('.vert', parent);
			this.rotation = 0;
		}

		if (this.checked) {
			if (this.rotation % 180) {
				this.rotation += 180;
			}
			else {
				this.rotation += 90;
			}
		}
		else {
			if ((this.rotation + 90) % 180) {
				this.rotation += 180;
			}
			else {
				this.rotation += 90;
			}
		}

		requestAnimationFrame(() => {
			this.vert.setAttribute('transform', `rotate(${el.rotation}, 45, 45)`);
			this.squirkle.setAttribute('transform', `rotate(${el.rotation}, 45, 45)`);
		});
	};
}

function getChangeHandler(el) {
	let allCheckboxes = null;

	return function(e) {
		if (allCheckboxes === null) {
			allCheckboxes = $$('#skillsUL input');
		}

		const allSelected = allCheckboxes
			.filter(({ checked }) => checked)
			.map(({ value }) => value);

		e.currentTarget.toggle();
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

let allInputs;
function showAllWork() {
	allInputs = allInputs || $$('input', skillsUl);
	allInputs.forEach((input) => {
		if (input.checked) {
			input.checked = false;
			input.toggle();
		}
	});
	getWorkEls().forEach((el) => {
		showEl(el);
	});
}
