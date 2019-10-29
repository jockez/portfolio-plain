    btns = document.getElementsByClassName('btn');
    closeBtns = document.getElementsByClassName('close-btn');
    overlay = document.getElementById('modal-overlay');
    images = document.getElementsByClassName('modal-gallery-img');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            const project = btns[i].dataset.project;
            const modal = document.getElementById(project + "-modal");
            // Only if modal found
            if (modal) {
                // Remove hidden class from modal and overlay
                overlay.classList.remove("hidden");
                modal.classList.remove("hidden");
            }
        });
    }

    for (let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener("click", function () {
            //const modalId = overlay.childNodes[1].id;
            const modalId = closeBtns[i].parentNode.parentNode.parentNode.id;
            modal = document.getElementById(modalId);

            // Add hidden class to modal and overlay
            modal.classList.add("hidden");
            overlay.classList.add("hidden");
        });
    }

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function () {
            const caption = images[i].dataset.caption;
            const imgContainer = images[i].parentNode.parentNode;
            const heroImgs = imgContainer.getElementsByClassName('modal-hero-img');
            const captionEls = imgContainer.getElementsByTagName('figcaption');

            if (caption && captionEls && heroImgs) {
                heroImgs[0].src = images[i].src;
                captionEls[0].innerHTML = caption;
            }
        });
    }