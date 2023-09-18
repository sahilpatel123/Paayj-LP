document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("hamburger");
    const mobileLinks = document.getElementById("mobileLinks");
    mobileLinks.style.display = "none";
    hamburgerButton.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent click event from reaching document
        if (mobileLinks.style.display === "block" || mobileLinks.style.display === "") {
            mobileLinks.style.display = "none";
        } else {
            mobileLinks.style.display = "block";
        }

    });

    // Add a click event listener to the document to hide mobile links
    document.addEventListener("click", function (e) {
        if (mobileLinks.style.display === "block" && e.target !== mobileLinks) {
            mobileLinks.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(function (faq) {
        faq.addEventListener("click", function () {
            // Toggle the 'expanded' class on the clicked FAQ
            faq.classList.toggle("expanded");

            // Toggle the arrow icon
            const arrow = faq.querySelector(".arrow");
            arrow.textContent = faq.classList.contains("expanded") ? "▼" : "▶";

            // Toggle the answer visibility
            const answer = faq.querySelector(".answer");
            answer.style.display = faq.classList.contains("expanded") ? "block" : "none";
        });
    });
});