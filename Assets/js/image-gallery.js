const galleryContainer = document.getElementById("image-gallery");

const galleryArray = ["Image-Events-Conference.jpg", "Image-Events-Action.jpg", "Image-Events-Mystery.jpg", "Image-Events-Wine.jpg", "Image-Events-Challenge.jpg", "Image-Events-Party.jpg"];

const baseUrl = "./Assets/images/Gfx/";

let isEventOpen = false;

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
        capLink.setAttribute("href", "#");
        capLink.textContent = "Læs mere";

        const capHeaderArray = ["Konferrence", "Action Day", "Mystery Box", "Wine Event", "Challenge", "Firmafesten"];

        const capHeader = document.createElement("h2");
        capHeader.textContent = capHeaderArray[index];

        galleryImageCap.appendChild(capLink);
        galleryImageCap.appendChild(capHeader);

        galleryFigure.appendChild(galleryImageCap);

        const openEvent = (index) => {
            isEventOpen = true;

            const eventFigureContainer = document.createElement("div");
            eventFigureContainer.classList.add("event-container");

            const eventFigure = document.createElement("figure");
            eventFigure.classList.add("event-figure");
            const eventImage = galleryImage.cloneNode(true);
            eventFigure.appendChild(eventImage);

            const appendChildren = (parent, elements) => {
                elements.forEach((element) => {
                    parent.appendChild(element);
                })
            };

            const eventHeaderArray = ["Konferrence", "Action Day", "Mystery Box", "Wine Event", "Challenge", "Firmafesten"];

            const eventFigCap = document.createElement("figcaption");

            const eventFigCapHeader = document.createElement("header");

            const eventFigCapHeaderText = document.createElement("h2");
            eventFigCapHeaderText.textContent = eventHeaderArray[index];
            eventFigCapHeader.appendChild(eventFigCapHeaderText);

            const eventFigCapText = document.createElement("p");
            eventFigCapText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iusto voluptatibus ea eum dolor placeat perferendis, nesciunt mollitia fugiat quo qui sit, veritatis vitae";
            const eventFigCapTextTwo = document.createElement("p");
            eventFigCapTextTwo.textContent = "quos laudantium eaque numquam voluptatum voluptate?";

            appendChildren(eventFigCap, [
                eventFigCapHeader,
                eventFigCapText,
                eventFigCapTextTwo
            ]);

            eventFigure.appendChild(eventFigCap);
            eventFigureContainer.appendChild(eventFigure);
            galleryContainer.appendChild(eventFigureContainer);

            eventFigure.addEventListener("click", () => {
                isEventOpen = false;
                eventFigureContainer.remove();
            });
        };

        galleryFigure.addEventListener("click", () => {
            if (!isEventOpen) {
                openEvent(index);
            }
        });

        galleryContainer.appendChild(galleryFigure);
    });
};

window.addEventListener("load", createGallery);