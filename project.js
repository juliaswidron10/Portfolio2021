const bigImage = document.querySelector('.big');
const smallImage = document.querySelector('.smallImage1');


const smallImageContainer = document.querySelector('.smalercontainer');


function switchPhotos(e){
    let photo = e.src;
    console.log(`${photo} photo ${e.class} clicked`);
    // bigImage.src = photo;
}