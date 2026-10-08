const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("menu-open");
    menuToggle.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {

    const roleText = document.querySelector(".role-text");

    const roles = [
        "WordPress",
        "Framer",
        "Webflow",
        "UI/UX",
        "Custom Website"
    ];

    let roleIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;


    function typeEffect() {

        const currentRole = roles[roleIndex];


        /* =====================
           TYPE
        ===================== */

        if (!isDeleting) {

            letterIndex++;

            roleText.textContent =
                currentRole.substring(
                    0,
                    letterIndex
                );

        }


        /* =====================
           DELETE
        ===================== */

        else {

            letterIndex--;

            roleText.textContent =
                currentRole.substring(
                    0,
                    letterIndex
                );
        }


        /* =====================
           FINISHED TYPING
        ===================== */

        if (
            !isDeleting &&
            letterIndex === currentRole.length
        ) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }


        /* =====================
           FINISHED DELETING
        ===================== */

        if (
            isDeleting &&
            letterIndex === 0
        ) {

            isDeleting = false;

            roleIndex++;


            if (
                roleIndex >= roles.length
            ) {

                roleIndex = 0;

            }


            setTimeout(
                typeEffect,
                400
            );

            return;
        }


        /* =====================
           SPEED
        ===================== */

        const speed =
            isDeleting
                ? 60
                : 100;


        setTimeout(
            typeEffect,
            speed
        );

    }


    /* START ANIMATION */

    typeEffect();

});