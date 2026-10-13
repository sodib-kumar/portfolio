
document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".nav-link");
    const roleText = document.querySelector(".role-text");

    // Change the header when the page is scrolled.
    window.addEventListener("scroll", function () {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 20);
        }
    });

    // Mobile menu
    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {
            const isOpen = mainNav.classList.toggle("menu-open");

            menuToggle.classList.toggle("active", isOpen);
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        // Close the menu after clicking a navigation link.
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mainNav.classList.remove("menu-open");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        // Close the menu when Escape is pressed.
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                mainNav.classList.remove("menu-open");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });

    }

    // Animated job titles
    if (roleText) {

        const roles = [
            "WordPress Developer",
            "Framer Developer",
            "Webflow Developer",
            "UI/UX Designer",
            "Custom Website Developer"
        ];

        let roleIndex = 0;
        let letterIndex = 0;
        let isDeleting = false;

        function typeEffect() {

            const currentRole = roles[roleIndex];

            if (isDeleting) {
                letterIndex--;
            } else {
                letterIndex++;
            }

            roleText.textContent = currentRole.substring(0, letterIndex);

            let speed = isDeleting ? 50 : 100;

            // Pause when a complete title is displayed.
            if (!isDeleting && letterIndex === currentRole.length) {
                isDeleting = true;
                speed = 1500;
            }

            // Move to the next title after deleting the current one.
            else if (isDeleting && letterIndex === 0) {
                isDeleting = false;
                roleIndex++;

                if (roleIndex >= roles.length) {
                    roleIndex = 0;
                }

                speed = 400;
            }

            setTimeout(typeEffect, speed);
        }

        typeEffect();
    }

});
