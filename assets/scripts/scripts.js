btns = document.getElementsByClassName('btn');
closeBtns = document.getElementsByClassName('close-btn');
overlay = document.getElementById('modal-overlay');


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        const project = btns[i].dataset.project;
        const modal = document.getElementById(project + "-modal");

        // Remove hidden class from modal and overlay
        overlay.classList.remove("hidden");
        modal.classList.remove("hidden");
    });
}

for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", function () {
        const modalId = overlay.childNodes[1].id;
        modal = document.getElementById(modalId);

        // Add hidden class to modal and overlay
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    });
}