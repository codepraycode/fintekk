AOS.init({
    "duration": 1000,
    disable: window.innerWidth < 450
});

window.onscroll = ()=>updateStickyHeader();
// Header scroll effect
const header = document.getElementById("header");

const sticky = header.offsetTop;

function updateStickyHeader() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky")
    }else {
        header.classList.remove("sticky")
    }
}


// Form
document.getElementById("form").addEventListener('submit', (e)=>{
    e.preventDefault();
});

const nav =  document.querySelector(".main-navigation");
const navToggle = document.querySelector(".mobile-navigation-toggle");

// nav link
const links = nav.querySelectorAll('a[href]')
links.forEach((each_link)=>{
    each_link.addEventListener('click', (e)=>{
        e.preventDefault();

        links.forEach(e=>e.parentElement.classList.remove('active'));

        e.target.parentElement.classList.add('active');

        // Scrool to element
        let id = e.target.href;
        id = id.slice(id.indexOf("#")+1,)
        
        const elem = document.getElementById(id);
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            toggleSidebar(false)
        }
    })
})

//  When the hamburger is clicked
navToggle.addEventListener("click", ()=>toggleSidebar(null));

document.getElementById("main").addEventListener("click", ()=>toggleSidebar(false));

const accordion = document.querySelector('.accordion');
const accordionTabs = accordion.querySelectorAll('[role="tab"]');

accordionTabs.forEach((tab)=>{
    tab.addEventListener('click', toggleAccordion)
})



function toggleSidebar(state=null){
    const visibility = nav.getAttribute("data-visible");

    // If state is defined, set bar visibilty to state
    if (state !== null){
        nav.setAttribute('data-visible', Boolean(state));
        navToggle.setAttribute("aria-expanded", Boolean(state));
    }
    // If the menu is closed, open it
    else if (visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute("aria-expanded", true);
    }
    // If the menu is opened, close it
    else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute("aria-expanded", false);
    }
}

function toggleAccordion(e){

    const isClosed = e.target.getAttribute("aria-selected") === "false";
    e.target.setAttribute("aria-selected", isClosed ? true : false);
    if (isClosed) e.target.focus();

    accordionTabs.forEach((ech)=>ech !== e.target && ech.setAttribute("aria-selected", false))
}

function hideContent(parent, content) {
    parent.querySelectorAll(content)
    .forEach((item)=>{
        item.setAttribute("hidden", true);
    })
}

function showContent(parent, content) {
    parent.querySelector(content).removeAttribute('hidden');
}