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
                const title = document.createElement('h1');
                const link = document.createElement(`h3`);
                const description = document.createElement('p');
                ref.href = item.repository;
                img.src = item.highlight;
                title.textContent = item.name;
                description.textContent = item.description;
                link.textContent=`View project↗`;
                img.addEventListener("click", ()=>{
                    window.open(img.src, '_blank');
                });
                img.style.cursor = `pointer`
                ref.appendChild(link);
                element.appendChild(title);
                element.appendChild(img);
                element.appendChild(description);
                element.appendChild(ref);
                list.appendChild(element);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
}