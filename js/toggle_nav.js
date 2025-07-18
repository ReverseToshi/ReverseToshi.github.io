export function nav_toggle(){
    const navtoggleBtn = document.getElementById("toggle-nav");
    const navMenu = document.getElementById(`second-row`);

    navtoggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}