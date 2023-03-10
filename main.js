const btn = document.getElementById('mobile-btn');
const btnClose = document.getElementById("close");
const btnOpen = document.getElementById("open");
const menu = document.getElementById('mobile-nav-menu');

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const tabHeader = document.getElementById('tab-header');

btn.addEventListener('click', openBtn);
btnClose.addEventListener('click', closeBtn);

function openBtn () {
	menu.style.display = "block";
	btnOpen.style.display = "none";
}

function closeBtn (){
	menu.style.display = "none";
	btnOpen.style.display = "block";
}


// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBackground();
	removeShow();

	// Add border to current tab item
	this.classList.add('tab-background');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove background from all tab items
function removeBackground() {
	tabItems.forEach(item => {
		item.classList.remove('tab-background');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

