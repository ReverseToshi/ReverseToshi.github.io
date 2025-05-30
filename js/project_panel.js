export function project_panel(){
  fetch('./assets/jsons/projects.json')
    .then(response => response.json())
    .then(data => {
      const topFive = data.slice(0, 5);
      const list = document.getElementById('projects-list');
      topFive.forEach(item => {
        const li = document.createElement('li');
        const a= document.createElement('a');
        a.href = "project.html?id=" + encodeURIComponent(item.name);
        a.textContent = item.name;
        li.appendChild(a);
        list.appendChild(li);
      });
    })
    .catch(error => console.error('Error loading JSON:', error));
}