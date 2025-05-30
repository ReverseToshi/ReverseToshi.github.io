export function project_toggle() {
    const toggleBtn = document.getElementById("toggle-projects");
    const projectsPanel = document.getElementById("Projects");

    toggleBtn.addEventListener("click", () => {
        projectsPanel.classList.toggle("active");
    });
}
