const btn = document.getElementById('mobile-btn');
const btnClose = document.getElementById("close");
const btnOpen = document.getElementById("open");
const menu = document.getElementById('mobile-nav-menu');
const scroll = document.getElementById('scroll');

const d = new Date ();
const today = d.toLocaleString("default", {
	month: 'long',
    weekday: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/New_York'
});

const date = document.querySelector('.date').innerHTML = today;

function scrollTop() {
	document.documentElement.scrollTop = 0;
};

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction () {
	if (document.documentElement.scrollTop > 20) {
		scroll.style.display = "block";
	} else {
		scroll.style.display = "none";
	}
}

scroll.addEventListener('click', scrollTop);

btn.addEventListener('click', openBtn);
btnClose.addEventListener('click', closeBtn);

function openBtn () {
	menu.style.display = "block";
	btnOpen.style.display = "none";
	document.body.style = "overflow: hidden";
}

function closeBtn (){
	menu.style.display = "none";
	btnOpen.style.display = "block";
	document.body.style = "overflow: visible";
}

// select tabs
const tab = document.querySelectorAll('.tabs');
const tabContent = document.querySelectorAll('.tab-content');

function selectedItems (e){
    removeBorder();
    removeShow();

    this.classList.add('border');
    
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    tabContentItem.classList.add('d-block');

}

function removeBorder () {
  tab.forEach(item => item.classList.remove('border'));
};

function removeShow () {
    tabContent.forEach(item => item.classList.remove('d-block'));
};

tab.forEach(item => item.addEventListener('click', selectedItems));


// UX tab section
const ux = document.querySelectorAll('.ux');
const tabContentUX = document.querySelectorAll('.tab-ux-content');

function selectItem (e) {
	borderRemove();
	showRemove();

	this.classList.add('border');

	const uxContent = document.querySelector(`#${this.id}-content`);

	uxContent.classList.add('d-block');
}

function borderRemove(){
ux.forEach(item => item.classList.remove('border'));
};

function showRemove () {
	tabContentUX.forEach(item => item.classList.remove('d-block'));
}

ux.forEach(item => item.addEventListener('click', selectItem));

/*
const modalOpen = document.querySelectorAll('[data-modal-target]');
const modalClose= document.querySelectorAll('[data-close-button]');

modalOpen.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector('.modal-skills');
        modal.showModal();
        console.log(modal);
    });
    button.addEventListener('click', () => {
        const modalLeadership = document.querySelector('.modal-skills-leadership');
        modalLeadership.showModal();
        console.log(modalLeadership);
    })
})

modalClose.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal-skills');
        closeModal(modal);
    })
    
    button.addEventListener('click', () => {
        const modalLeadership = button.closest('.modal-skills-leadership');
        closeModal(modalLeadership);
    })
    
})

function closeModal (modal) {
    if(modal == null) return
    modal.close();
}

window.addEventListener('click', bodyClick);

function bodyClick (e) {
    const modal = document.querySelector('.modal-skills');
   if(e.target == modal) {
    modal.close();
   } 
};


const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

function randomGrocery () {
    const random = Math.floor(Math.random() * shopping.length);
    const output = shopping[random];
    return output;
}

randomGrocery();

console.log(randomGrocery());
//const random = Math.floor(Math.random() * shop.length);

//console.log(random);


modalOpen.addEventListener('click', () => {
    modal.showModal();
});

modalClose.addEventListener('click', () => {
    modal.close();
});

window.addEventListener('click', bodyClick);

function bodyClick (e) {
   if(e.target == modal) {
    modal.close();
   } 
};

const openModal = document.querySelector('.modal-open');
const closeModal= document.querySelector('.modal-close');
const modalSkills = document.querySelector('.modal-skills');
const modalSkillsLeadership = document.querySelector('.modal-skills-leadership');

//function displayModal() {
	//modalSkills.showModal();
	//const skillContent = document.querySelector(`#${this.id}-skills`);
	//console.log(skillContent);
//};

//openModal.forEach(item => item.addEventListener('click', displayModal));

openModal.addEventListener('click', () => {
    modalSkills.showModal();
    modalSkillsLeadership.showModal();
});

closeModal.addEventListener('click', () => {
    modalSkills.close();
    modalSkillsLeadership.close();
});

window.addEventListener('click', bodyClick);

function bodyClick (e) {
   if(e.target == modalSkills) {
    modalSkills.close();
   } 
};

/*
const openModalLeadership = document.querySelector('.modal-open-leadership');
const closeModalLeadership = document.querySelector('.modal-close-leadership');
const modalSkillsLeadership = document.querySelector('.modal-skills-leadership');

openModalLeadership.addEventListener('click', () => {
    modalSkillsLeadership.showModal();
});

closeModalLeadership.addEventListener('click', () => {
    modalSkillsLeadership.close();
});

window.addEventListener('click', bodyClick);

function bodyClick (e) {
   if(e.target == modalSkillsLeadership) {
	modalSkillsLeadership.close();
   } 
};
*/