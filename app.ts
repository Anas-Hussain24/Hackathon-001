let personalBtn = document.getElementById('personalBtn') as HTMLButtonElement;
const experienceBtn = document.getElementById('experienceBtn') as HTMLButtonElement;
const skillsBtn = document.getElementById('skillsBtn') as HTMLButtonElement;

const personalSection = document.getElementById('personalSection') as HTMLDivElement;
const experienceSection = document.getElementById('experienceSection') as HTMLDivElement;
const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;

const nextToExperience = document.getElementById('nextToExperience') as HTMLButtonElement;
const nextToSkills = document.getElementById('nextToSkills') as HTMLButtonElement;


const resetActiveButton = () => {
    personalBtn.classList.remove('active');
    experienceBtn.classList.remove('active');
    skillsBtn.classList.remove('active');
};


const switchSection = (activeSection: HTMLDivElement) => {
    personalSection.style.display = 'none';
    experienceSection.style.display = 'none';
    skillsSection.style.display = 'none';
    activeSection.style.display = 'block';
};


personalBtn.addEventListener('click', () => {
    resetActiveButton();
    personalBtn.classList.add('active'); 
    switchSection(personalSection); 
});

experienceBtn.addEventListener('click', () => {
    resetActiveButton();
    experienceBtn.classList.add('active'); 
    switchSection(experienceSection); 
});

skillsBtn.addEventListener('click', () => {
    resetActiveButton();
    skillsBtn.classList.add('active');
    switchSection(skillsSection);
});

nextToExperience.addEventListener('click', () => {
    resetActiveButton();
    experienceBtn.classList.add('active'); 
    switchSection(experienceSection); 
});

nextToSkills.addEventListener('click', () => {
    resetActiveButton();
    skillsBtn.classList.add('active'); 
    switchSection(skillsSection);
});