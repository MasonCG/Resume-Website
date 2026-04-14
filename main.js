

// Function for Navigation Selection
const nav_ul = document.getElementById("nav-ul");

function highlightEl(el){


    el.classList.add("visited");

}

// Function for Project descrioptions
    
const all_desc = document.getElementById("projs").querySelectorAll(".desc");

function viewProj(el){

    Array.from(all_desc).forEach(l => {

        if (el != l){

        l.classList.remove('view');

        let ul = l.parentElement;
        let content = ul.parentElement;

        content.classList.remove('view');
    }

    })

    el.classList.toggle('view');

    const ul = el.parentElement;
    const content = ul.parentElement;

    content.classList.toggle('view');

}