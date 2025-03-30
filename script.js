let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let slideInterval;

// Show a specific slide
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Auto slide function
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Start auto slide every 8 seconds
function startAutoSlide() {
    slideInterval = setInterval(autoSlide, 8000); // Change every 8 seconds
}

// Stop auto slide when hovering over slider
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Manual Navigation
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Go to a specific slide when clicking dots
function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Start the slider when page loads
startAutoSlide();
showSlide(currentIndex);


// Adds a smooth fade-in effect to shop items when they enter the viewport by detecting scroll events and applying a "show" class.
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    function showBoxes() {
        boxes.forEach((box) => {
            if (box.getBoundingClientRect().top < window.innerHeight - 50) {
                box.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showBoxes);
    showBoxes(); // Run on page load
});


/* See More Button Link to Amazon */
function openAmazonPage(element) {
    try {
        console.log("Function triggered!"); // Debugging step

        // Define category mappings for Amazon searches
        let categoryMapping = {
            "manga": "manga",
            "personal care": "personal+care+products",
            "electronics": "electronics",
            "back to school": "school+supplies",
            "beauty picks": "beauty+products",
            "jewellery": "jewelry",
            "mustard oil": "mustard+oil",
            "fashion trends": "fashion+trends"
        };

        // Get category from the clicked element
        let category = element.getAttribute("data-category");
        console.log("Clicked category:", category); // Debugging step

        // Check if category is valid
        if (!category) {
            console.error("Error: No category found for clicked element.");
            return;
        }

        // Convert category to lowercase and trim spaces to avoid mismatches
        category = category.toLowerCase().trim();

        // Find the correct search term
        let searchTerm = categoryMapping[category] || category;

        // Encode for URL compatibility
        let formattedCategory = encodeURIComponent(searchTerm);

        // Construct the Amazon search URL
        let amazonURL = `https://www.amazon.com/s?k=${formattedCategory}`;

        // Debugging: Log the final URL
        console.log("Opening URL:", amazonURL);

        // Open Amazon page in a new tab
        window.open(amazonURL, "_blank");

    } catch (error) {
        console.error("Error in openAmazonPage function:", error);
    }
}

function showOverlay() {
    document.getElementById("overlay").style.display = "block"; // Show overlay when dropdown is clicked
}

function hideOverlay() {
    document.getElementById("overlay").style.display = "none"; // Hide overlay when clicking outside
}

function updateCategory(selectElement) {
    let selectedText = selectElement.options[selectElement.selectedIndex].text;
    document.getElementById("selected-category").innerText = selectedText; // Update dropdown text
    hideOverlay(); // Hide overlay after selection
}


// Function to Search on Amazon
function searchAmazon() {
    const category = document.querySelector(".search-select").value;
    const query = document.querySelector(".search-input").value.trim();
    const baseURL = "https://www.amazon.in/s";

    let searchURL = `${baseURL}?k=${encodeURIComponent(query)}`;

    if (category !== "all") {
        searchURL += `&i=${encodeURIComponent(category)}`;
    }

    window.open(searchURL, "_blank");
}

// Select elements
let signinButton = document.querySelector(".nav-signin");
let signinDropdown = document.querySelector(".signin-dropdown");

// Function to show the dropdown
signinButton.addEventListener("mouseenter", () => {
    signinDropdown.style.opacity = "1";
    signinDropdown.style.visibility = "visible";
});

// Function to hide the dropdown when moving away
signinButton.addEventListener("mouseleave", (event) => {
    if (!signinDropdown.matches(":hover")) {
        signinDropdown.style.opacity = "0";
        signinDropdown.style.visibility = "hidden";
    }
});

// Hide dropdown when the cursor moves away from the dropdown itself
signinDropdown.addEventListener("mouseleave", () => {
    signinDropdown.style.opacity = "0";
    signinDropdown.style.visibility = "hidden";
});


/* Language Selector */
const languageBtn = document.querySelector(".language-btn");
const languageDropdown = document.querySelector(".language-dropdown");

// Toggle dropdown on click
languageBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    languageDropdown.style.display = languageDropdown.style.display === "block" ? "none" : "block";
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!languageDropdown.contains(event.target) && !languageBtn.contains(event.target)) {
        languageDropdown.style.display = "none";
    }
});

// Change button text and flag when a language is selected
document.querySelectorAll(".language-dropdown ul li a").forEach(option => {
    option.addEventListener("click", function (e) {
        e.preventDefault();
        
        let selectedLangShortcut = this.innerText.split(" - ")[1]; // Extracts only the language code (e.g., "EN")
        let selectedFlag = this.querySelector("img").src;

        languageBtn.innerHTML = `
            <img src="${selectedFlag}" alt="Selected Flag">
            <span>${selectedLangShortcut}</span>
            <i class="fas fa-caret-down"></i>`;

        languageDropdown.style.display = "none";
    });
});

const translations = {
    en: {
        "deliverTo": "Deliver to",
        "india": "India",
        "searchPlaceholder": "Search Amazon.in",
        "signIn": "Hello, sign in",
        "accountLists": "Account & Lists",
        "returnsOrders": "Returns & Orders",
        "cart": "Cart",
        "heroMsg": "You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.",
        "goToAmazonIndia": "Click here to go to amazon.in",
        "seeMore": "See more",
        "backToTop": "Back to Top",
    },
    es: {
        "deliverTo": "Entregar a",
        "india": "India",
        "searchPlaceholder": "Buscar en Amazon.in",
        "signIn": "Hola, inicia sesión",
        "accountLists": "Cuenta y listas",
        "returnsOrders": "Devoluciones y pedidos",
        "cart": "Carrito",
        "heroMsg": "Estás en amazon.com. También puedes comprar en Amazon India millones de productos con entrega rápida local.",
        "goToAmazonIndia": "Haz clic aquí para ir a amazon.in",
        "seeMore": "Ver más",
        "backToTop": "Volver arriba",
    },
    fr: {
        "deliverTo": "Livrer à",
        "india": "Inde",
        "searchPlaceholder": "Rechercher sur Amazon.in",
        "signIn": "Bonjour, connectez-vous",
        "accountLists": "Compte et listes",
        "returnsOrders": "Retours et commandes",
        "cart": "Panier",
        "heroMsg": "Vous êtes sur amazon.com. Vous pouvez également acheter sur Amazon India des millions de produits avec une livraison rapide locale.",
        "goToAmazonIndia": "Cliquez ici pour aller sur amazon.in",
        "seeMore": "Voir plus",
        "backToTop": "Retour en haut",
    },
    de: {
        "deliverTo": "Liefern nach",
        "india": "Indien",
        "searchPlaceholder": "Auf Amazon.in suchen",
        "signIn": "Hallo, anmelden",
        "accountLists": "Konto und Listen",
        "returnsOrders": "Rücksendungen und Bestellungen",
        "cart": "Warenkorb",
        "heroMsg": "Sie sind auf amazon.com. Sie können auch auf Amazon India einkaufen und Millionen von Produkten mit schneller lokaler Lieferung erhalten.",
        "goToAmazonIndia": "Klicken Sie hier, um zu amazon.in zu gehen",
        "seeMore": "Mehr sehen",
        "backToTop": "Zurück nach oben",
    },
    it: {
        "deliverTo": "Consegna a",
        "india": "India",
        "searchPlaceholder": "Cerca su Amazon.in",
        "signIn": "Ciao, accedi",
        "accountLists": "Account e liste",
        "returnsOrders": "Resi e ordini",
        "cart": "Carrello",
        "heroMsg": "Sei su amazon.com. Puoi anche fare acquisti su Amazon India per milioni di prodotti con consegna locale veloce.",
        "goToAmazonIndia": "Clicca qui per andare su amazon.in",
        "seeMore": "Vedi di più",
        "backToTop": "Torna in cima",
        "getToKnowUs": "Scopri di più su di noi",
    },
    hi:{
        "deliverTo": "डिलीवर करें",
        "india": "भारत",
        "searchPlaceholder": "Amazon.in पर खोजें",
        "signIn": "नमस्ते, साइन इन करें",
        "accountLists": "खाता और सूची",
        "returnsOrders": "रिटर्न और ऑर्डर",
        "cart": "कार्ट",
        "heroMsg": "आप amazon.com पर हैं। आप Amazon India पर भी खरीदारी कर सकते हैं जहाँ लाखों उत्पादों की तेज़ स्थानीय डिलीवरी उपलब्ध है।",
        "goToAmazonIndia": "amazon.in पर जाने के लिए यहाँ क्लिक करें",
        "seeMore": "और देखें",
        "backToTop": "ऊपर जाएं",
    }
};

function changeLanguage(lang) {
    document.querySelector(".search-input").placeholder = translations[lang].searchPlaceholder;
    document.querySelector(".nav-signin span").textContent = translations[lang].signIn;
    document.querySelector(".nav-signin .nav-second").textContent = translations[lang].accountLists;
    document.querySelector(".nav-returns span").textContent = translations[lang].returnsOrders;
    document.querySelector(".nav-cart").textContent = translations[lang].cart;
    document.getElementById("backToTop").textContent = translations[lang].backToTop;
    document.querySelectorAll(".see-more").forEach(el => el.textContent = translations[lang].seeMore);
    document.querySelector(".hero-msg p").innerHTML = `${translations[lang].heroMsg} <a href="https://www.amazon.${lang}" target="_blank">${translations[lang].goToAmazonIndia}</a>`;
}

document.querySelectorAll(".language-dropdown a").forEach(item => {
    item.addEventListener("click", function () {
        const lang = this.getAttribute("data-lang");
        changeLanguage(lang);
    });
});


/* Back To top Button */
document.addEventListener("DOMContentLoaded", function () {
    let backToTop = document.getElementById("backToTop");

    // Scroll smoothly to the top when clicked
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
