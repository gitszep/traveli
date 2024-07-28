// Preloader
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    if (preloader) { // Sprawdzenie, czy element istnieje
        preloader.classList.add("remove");
    }
});

// Funkcja dodająca nasłuchiwanie zdarzeń do kolekcji elementów
const addEventOnElements = (elements, eventType, callback) => {
    elements.forEach(element => element.addEventListener(eventType, callback));
}

// Nawigacja i elementy nawigacyjne
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

// Header
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});
