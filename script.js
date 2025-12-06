document.addEventListener("DOMContentLoaded", () => {
    // Elements to fade in/out
    const fadeElements = document.querySelectorAll(
        "section, .title, .subtitle, .mountains, .city, .about-content"
    );

    function fadeOnScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            // If section enters view
            if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                el.classList.add("visible");
            } else {
                el.classList.remove("visible"); // fade out on scroll up
            }
        });
    }

    fadeOnScroll();
    window.addEventListener("scroll", fadeOnScroll);

    // Highlight nav links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function updateNavHighlight() {
        let current = "";
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            if (top >= offset) {
                current = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (current && link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateNavHighlight);
    updateNavHighlight();
});
