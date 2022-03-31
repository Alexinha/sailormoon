
function imageGallery() {
    const highlight = document.querySelector(".gallery-highlight");

    const previews = document.querySelectorAll(".gallery-preview img");

    previews.forEach(function (preview) {
        preview.addEventListener("click", function () {
            
            // console.log(this);
            
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big");
            
            // console.log(bigSrc);
             //switch the src of the highlight class pic
            highlight.src = bigSrc;

            //stop the active
            previews.forEach(function(preview){
                preview.classList.remove("pic-active");
            });

            //change the active
            preview.classList.add("pic-active");
        });
    });
}

imageGallery();