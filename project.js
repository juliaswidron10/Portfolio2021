// const bigImage = document.querySelector('.big');
// const smallImage = document.querySelector('.smallImage1');


// const smallImageContainer = document.querySelector('.smalercontainer');


// function switchPhotos(e){
//     let photo = e.src;
//     console.log(`${photo} photo ${e.class} clicked`);
//     // bigImage.src = photo;
// }

let params = new URLSearchParams(document.location.search.substring(1));
let projectFromUrl = params.get("project");

init();

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

function showProjects(project){
    const template = document.querySelector('#projecttemplate').content;
    const clone = template.cloneNode(true);

    if(project.photo === projectFromUrl){
        clone.querySelector('.proname').textContent = project.name;
        clone.querySelector('.description').textContent = project.description;
        clone.querySelector('.technologies').textContent = project.technologies;
        clone.querySelector('.bigimage').src = `projectsimages/${project.photo}1.jpg`;
        clone.querySelector('.smallImage1').src = `projectsimages/${project.photo}1.jpg`;
        clone.querySelector('.smallImage2').src = `projectsimages/${project.photo}2.jpg`;
        clone.querySelector('.smallImage3').src = `projectsimages/${project.photo}3.jpg`;
        clone.querySelector('.smallImage4').src = `projectsimages/${project.photo}4.jpg`;

        clone.querySelectorAll('.smalercontainer > img').forEach(e=>{
            e.addEventListener("click", e =>{
                document.querySelector('.bigimage').src = e.target.src
                console.log(e)
            })
        })

        document.querySelector('main').appendChild(clone);
    }

}