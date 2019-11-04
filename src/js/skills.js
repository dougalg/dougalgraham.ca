const HIDDEN_WORK_CLASS = 'work--hidden';

const $ = (s, target = document) => target.querySelector(s);
const $$ = (s, target = document) => Array.from(target.querySelectorAll(s));

const allWorkEls = $$('#experience .work');
const temporaryUl = $('#skillsUL');
const listItemTpl = $('#skillListItem').content;

const skillsForWorkEls = mapWorkElsToSkills(allWorkEls);
skillsForWorkEls.forEach(setSkillsAndTransitionHandler);
$('#resetSkills').addEventListener('click', showAllWork);
const renderedList = renderSkillListWithTemplate(temporaryUl, listItemTpl, skillsForWorkEls);
addAndShowList(renderedList, temporaryUl);

function showEl(el) {
	if (!el.classList.contains(HIDDEN_WORK_CLASS)) {
		return;
	}
	el.classList.remove(HIDDEN_WORK_CLASS);
	el.style.height = `${el._cachedHeight}px`;
}

function hideEl(el) {
	if (el.classList.contains(HIDDEN_WORK_CLASS)) {
		return;
	}
	const height = el.offsetHeight;
	el._cachedHeight = height;
	el.style.height = `${height}px`;
	el._tID = window.requestAnimationFrame(function() {
		el.classList.add(HIDDEN_WORK_CLASS);
		el.style.height = 0;
	});
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
			allWorkEls.forEach((el) => {
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
	allInputs = allInputs || $$('input', renderedList);
	allInputs.forEach((input) => {
		if (input.checked) {
			input.checked = false;
			input.toggle();
		}
	});
	allWorkEls.forEach((el) => {
		showEl(el);
	});
}

function getSkillsForWork(el) {
	return $$('footer.skills ul li', el).map((li) => li.textContent);
}

function mapWorkElsToSkills(workEls) {
	return workEls.map((el) => ({
		el,
		skills: getSkillsForWork(el),
	}));
}

function setSkillsAndTransitionHandler({ el, skills }) {
	el.dataset.skills = skills;

	el.addEventListener('transitionend', function(e) {
		if (e.propertyName === 'height' && el.style.height !== 0) {
			el.style.height = null;
		}
	});
}

function renderSkillListWithTemplate(temporaryUl, listItemTpl, skillsForWorkEls) {
	const skillsUl = document.importNode(temporaryUl);
	const allListItems = Array.from(new Set(skillsForWorkEls.flatMap(({ skills }) => skills)).values())
		.sort()
		.map((value) => renderSkillRow(listItemTpl, value));

	allListItems.forEach((el) => {
		const changeHandler = getChangeHandler(el);
		const input = $('input', el);
		input.addEventListener('change', changeHandler);
		addToggler(input);
		skillsUl.appendChild(el);
	});

	return skillsUl;
}

function addAndShowList(skillsUl, temporaryUl) {
	replaceNode(skillsUl, temporaryUl);
	requestAnimationFrame(() => {
		$('#skillsSection').classList.remove('hidden');
	});
}
