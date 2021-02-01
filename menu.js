const nav = document.querySelector('#navig');
const burger = document.querySelector('#burger');
const resume = document.querySelector('#resume');
const contact = document.getElementById('contact');
const resumepdf = './Julia_Swidron_resume.pdf'

burger.addEventListener('click' , togglemenu );
contact.addEventListener( 'click' , togglemenu );

function togglemenu(){
    nav.classList.toggle('open');
};

resume.addEventListener('click', openPdf );

function openPdf(){
    window.open('Julia_Swidron_resume.pdf', '_blank', 'fullscreen=yes'); 
    return false;
}

//show filters

const showfilters = document.querySelector('#showfilters');
const filters = document.querySelector('#filters');
const filtersbutton = document.querySelector('#filtersbutton');
let filtersVisible = false;

filtersbutton.addEventListener('click',toggleFilters);

function toggleFilters(){
    if(filtersVisible === false){
    filters.classList.remove('hide');
    filtersVisible = true;
    filtersbutton.textContent = 'Hide filters'
    }else{
    filters.classList.add('hide');
    filtersVisible = false;
    filtersbutton.textContent = 'Show filters'
    }
}

