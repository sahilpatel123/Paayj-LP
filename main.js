document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("hamburger");
    const mobileLinks = document.getElementById("mobileLinks");
    mobileLinks.style.display = "none";

    // display mobileLinks if clicked
    hamburgerButton.addEventListener("click", function (e) {
        e.stopPropagation(); 
        if (mobileLinks.style.display === "block" || mobileLinks.style.display === "") {
            mobileLinks.style.display = "none";
        } else {
            mobileLinks.style.display = "block";
        }
    });

    // do not display if click off
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

            const faqTitle = faq.querySelector(".faq-title");
            faqTitle.classList.toggle("expanded-padding");
        });
    });
});