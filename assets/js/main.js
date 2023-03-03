const nav =  document.querySelector(".main-navigation");
const navToggle = document.querySelector(".mobile-navigation-toggle");

//  When the hamburger is clicked
navToggle.addEventListener("click", ()=>toggleSidebar(null));

document.getElementById("main").addEventListener("click", ()=>toggleSidebar(false));


function toggleSidebar(state=null){
    const visibility = nav.getAttribute("data-visible");

    // If state is defined, set bar visibilty to state
    if (state !== null){
        nav.setAttribute('data-visible', Boolean(state));
        navToggle.setAttribute("aria-expanded", Boolean(state));
        console.log("Got here", state)
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