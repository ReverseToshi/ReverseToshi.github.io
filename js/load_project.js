export function load_projects(){
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');

  fetch('./assets/jsons/projects.json')
    .then(response => response.json())
    .then(data => {
      const project = data.find(item => item.name === projectId);
      console.log(project);
      if (project) {
        const title = document.getElementById('project-title');
        const description = document.getElementById('project-description');
      //   const image = document.getElementById('project-image');

        title.textContent = project.name;
        description.textContent = project.description;
      //   image.src = project.image;
      } else {
        console.error('Project not found');
      }
    })
    .catch(error => console.error('Error loading JSON:', error));
}