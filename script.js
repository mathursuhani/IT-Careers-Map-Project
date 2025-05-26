const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
//Toggle Mobile menu visibility
menuToggle.addEventListener('click',() => {
    mobileMenu.classList.toggle('hidden');
});
//Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if(target){
            target.scrollIntoView({behavior:'smooth'});
            const mobileMenu = document.getElementById("mobile-menu");
            if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.add("hidden");
            }
        }
    });
});

function toggleDetails(id, button){
    const details = document.getElementById(id);
    const isHidden = details.classList.contains("hidden");
    document.querySelectorAll('[id$="-details"]').forEach(el => {
        if(el.id!== id){
            el.classList.add('hidden');
            const btn = el.parentElement.querySelector("button");
            if(btn) btn.textContent ="Read More"
        }
    });
    if(isHidden){
        
        details.classList.remove("hidden");
        button.textContent = "Read Less";
    }
    
    else{
        details.classList.add("hidden");
        button.textContent("Read More");
    }
}
