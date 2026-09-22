/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
        });

    });
}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


/* =========================
   ACTIVE NAVBAR
========================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(function (link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});

/* =========================
   TYPING LOGO
========================= */

const logoText = "Rizki's Portfolio.";
const logoElement = document.getElementById("typing-logo");

let logoIndex = 0;
let deleting = false;

function typeLogo() {

    if (!logoElement) {
        return;
    }

    if (!deleting) {

        logoElement.textContent =
            logoText.substring(0, logoIndex + 1);

        logoIndex++;

        if (logoIndex === logoText.length) {

            deleting = true;

            setTimeout(typeLogo, 1800);

            return;
        }

    } else {

        logoElement.textContent =
            logoText.substring(0, logoIndex - 1);

        logoIndex--;

        if (logoIndex === 0) {

            deleting = false;

            setTimeout(typeLogo, 400);

            return;
        }
    }

    setTimeout(
        typeLogo,
        deleting ? 90 : 140
    );
}

typeLogo();


/* =========================
   HANGING PROFILE
========================= */

const hangingProfile =
    document.querySelector(".hanging-profile");

if (hangingProfile) {

    hangingProfile.addEventListener(
        "mouseenter",
        function () {
            hangingProfile.style.animationPlayState = "paused";
        }
    );

    hangingProfile.addEventListener(
        "mouseleave",
        function () {
            hangingProfile.style.animationPlayState = "running";
        }
    );
}

/* =========================
   LIGHT / DARK MODE
========================= */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "☾";
    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        const isLight =
            document.body.classList.contains("light-mode");

        if (isLight) {
            themeToggle.textContent = "☾";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "☀";
            localStorage.setItem("theme", "dark");
        }

    });

}