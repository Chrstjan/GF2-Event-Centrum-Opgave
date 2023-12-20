const galleryContainer = document.getElementById("image-gallery");

const galleryArray = ["Image-Events-Conference.jpg", "Image-Events-Action.jpg", "Image-Events-Mystery.jpg", "Image-Events-Wine.jpg", "Image-Events-Challenge.jpg", "Image-Events-Party.jpg"];

const baseUrl = "./Assets/images/Gfx/";

const createGallery = () => {
    galleryArray.forEach((img, index) => {
        const galleryFigure = document.createElement("figure");
        galleryFigure.classList.add("gallery-figure");

        const galleryImage = document.createElement("img");
        const galleryImageSovs = baseUrl + img;
        galleryImage.src = galleryImageSovs;

        galleryFigure.appendChild(galleryImage);

        const galleryImageCap = document.createElement("figcaption");
        galleryImageCap.classList.add("gallery-cap");

        const capLink = document.createElement("a");
        capLink.textContent = "Læs mere";

        const capHeaderArray = ["Konferrence", "Action Day", "Mystery Box", "Wine Event", "Challenge", "Firmafesten"];

        const capHeader = document.createElement("h2");
        capHeader.textContent = capHeaderArray[index];

        galleryImageCap.appendChild(capLink);
        galleryImageCap.appendChild(capHeader);

        galleryFigure.appendChild(galleryImageCap);

        galleryContainer.appendChild(galleryFigure);
    });
};

window.addEventListener("load", createGallery);