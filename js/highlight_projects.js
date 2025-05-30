export function highlight_projects(){
    fetch("./assets/jsons/projects.json")
        .then(response=>response.json())
        .then(data => {
            const topThree = data.slice(0,3);
            const list = document.getElementById("highlights");
            topThree.forEach(item=>{
                const ref = document.createElement('a');
                const element = document.createElement('li');
                const img = document.createElement('img');
                const title = document.createElement('h3');
                const description = document.createElement('p');
                ref.href = item.repository;
                img.src = item.highlight;
                title.textContent = item.name;
                description.textContent = item.description;
                ref.appendChild(title);
                ref.appendChild(img);
                element.appendChild(ref);
                element.appendChild(description);
                list.appendChild(element);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
}