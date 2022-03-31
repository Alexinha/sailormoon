const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("img");
images.forEach(function(image){
    image.addEventListener("click", function(){
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = image.src;

        //always removes its any child and then add a new child, so that there's only one children(image) showing up.
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);
    });
});

lightbox.addEventListener("click", function(e){
    // if we click on the image (that's not the lightbox aka the current target we add event listener to) then nothing happens
    if (e.target !== e.currentTarget) return ;
    
    // in other cases the lightbox disappears.
    lightbox.classList.remove("active");
});