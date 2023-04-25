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