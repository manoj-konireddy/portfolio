const galleryImages = document.querySelectorAll(".gallery-image");

const viewer = document.getElementById("imageViewer");

const viewerImage = document.getElementById("viewerImage");

const closeBtn = document.querySelector(".viewer-close");

const prevBtn = document.querySelector(".viewer-prev");

const nextBtn = document.querySelector(".viewer-next");

const counter = document.getElementById("viewerCounter");

let currentIndex = 0;


/* ===============================
   Show Image
================================ */

function showImage(index){

    currentIndex = index;

    viewerImage.src = galleryImages[currentIndex].src;

    viewerImage.alt = galleryImages[currentIndex].alt;

    counter.textContent =
    (currentIndex + 1) + " / " + galleryImages.length;

}


/* ===============================
   Open Viewer
================================ */

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        showImage(index);

        viewer.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* ===============================
   Close Viewer
================================ */

function closeViewer(){

    viewer.classList.remove("show");

    document.body.style.overflow = "";

}

closeBtn.addEventListener("click", closeViewer);


/* ===============================
   Click Outside Image
================================ */

viewer.addEventListener("click",(e)=>{

    if(

        e.target === viewer

    ){

        closeViewer();

    }

});


/* ===============================
   Next Image
================================ */

nextBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    showImage(currentIndex);

});


/* ===============================
   Previous Image
================================ */

prevBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    showImage(currentIndex);

});


/* ===============================
   Keyboard Controls
================================ */

document.addEventListener("keydown",(e)=>{

    if(!viewer.classList.contains("show")) return;

    if(e.key === "Escape"){

        closeViewer();

    }

    if(e.key === "ArrowRight"){

        nextBtn.click();

    }

    if(e.key === "ArrowLeft"){

        prevBtn.click();

    }

});


/* ===============================
   Prevent Image Click Closing
================================ */

viewerImage.addEventListener("click",(e)=>{

    e.stopPropagation();

});