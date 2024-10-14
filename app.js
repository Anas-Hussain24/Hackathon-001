var personalBtn = document.getElementById('personalBtn');
var experienceBtn = document.getElementById('experienceBtn');
var skillsBtn = document.getElementById('skillsBtn');
var personalSection = document.getElementById('personalSection');
var experienceSection = document.getElementById('experienceSection');
var skillsSection = document.getElementById('skillsSection');
var nextToExperience = document.getElementById('nextToExperience');
var nextToSkills = document.getElementById('nextToSkills');
var resetActiveButton = function () {
    personalBtn.classList.remove('active');
    experienceBtn.classList.remove('active');
    skillsBtn.classList.remove('active');
};
var switchSection = function (activeSection) {
    personalSection.style.display = 'none';
    experienceSection.style.display = 'none';
    skillsSection.style.display = 'none';
    activeSection.style.display = 'block';
};
personalBtn.addEventListener('click', function () {
    resetActiveButton();
    personalBtn.classList.add('active');
    switchSection(personalSection);
});
experienceBtn.addEventListener('click', function () {
    resetActiveButton();
    experienceBtn.classList.add('active');
    switchSection(experienceSection);
});
skillsBtn.addEventListener('click', function () {
    resetActiveButton();
    skillsBtn.classList.add('active');
    switchSection(skillsSection);
});
nextToExperience.addEventListener('click', function () {
    resetActiveButton();
    experienceBtn.classList.add('active');
    switchSection(experienceSection);
});
nextToSkills.addEventListener('click', function () {
    resetActiveButton();
    skillsBtn.classList.add('active');
    switchSection(skillsSection);
});
