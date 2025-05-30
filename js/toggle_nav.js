export function nav_toggle(){
    const navtoggleBtn = document.getElementById("toggle-nav");
    const navMenu = document.querySelector(".navigation-ribbon ul");

    navtoggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}