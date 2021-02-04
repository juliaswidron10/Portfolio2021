function init(){
    fetch("./projects.json")
    .then(function(response){
        console.log('Projects fetched!');
        return response.json();
    })
    .then(function(data){
        console.log(data);
        dataRecived(data)
    })
    function dataRecived(projects){
        projects.forEach(showProjects)
    }
}

init()

function showProjects(project){
    const template = document.querySelector('#projecttemplate').content;
    const clone = template.cloneNode(true);

    clone.querySelector('.projectimage').src = 'projectsimages/' + project.photo + 1 + '.jpg';
    clone.querySelector('.projectname').textContent = project.name;

    clone.querySelector(".projectlink").href = `project.html?project=${project.photo}`;

    let shortlist = project.technologies;
    let shorterlist = shortlist.slice(0,3).join(', ');
    clone.querySelector('.projecttechnology').textContent = shorterlist;

    document.querySelector(".projects").appendChild(clone);

}



