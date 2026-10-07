const animatedElements = document.querySelectorAll(
    ".hero-content, .hero-products, .section-title, .product-card, .why-card, .about-box, .contact-box"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });

}, {
    threshold: 0.2
});

animatedElements.forEach((element) => {
    observer.observe(element);
});
// Floating WhatsApp Menu

const whatsappMenu = document.getElementById("whatsappMenu");
const whatsappToggle = document.getElementById("whatsappToggle");

whatsappToggle.addEventListener("click", () => {
    whatsappMenu.classList.toggle("open");
});