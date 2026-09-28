// SLIDER

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

setInterval(nextSlide,4000);



// MENU ACTIVE

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link=>{

    link.addEventListener("click",function(){

        menuLinks.forEach(item=>{
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});



// SEARCH SYSTEM

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", searchPage);

searchInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        searchPage();
    }

});

function searchPage(){

    let value = searchInput.value.toLowerCase().trim();

    // ŞEHİRLER

    if(value.includes("artvin")){
        window.location.href = "artvin.html";
    }

    else if(value.includes("gaziantep")){
        window.location.href = "gaziantep.html";
    }

    else if(value.includes("kars")){
        window.location.href = "kars.html";
    }

    else if(value.includes("sivas")){
        window.location.href = "sivas.html";
    }

    else if(value.includes("trabzon")){
        window.location.href = "trabzon.html";
    }

    else if(value.includes("van")){
        window.location.href = "van.html";
    }

   

    else{
        alert("Aradığınız içerik bulunamadı.");
    }

}



// CITY CARDS CLICK

const cityCards = document.querySelectorAll(".city-card");

cityCards.forEach(card=>{

    card.addEventListener("click",()=>{

        let cityName = card.querySelector("h3")
        .innerText.toLowerCase();

        window.location.href = cityName + ".html";

    });


    
});

