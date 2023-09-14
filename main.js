document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("hamburger");
    const mobileLinks = document.getElementById("mobileLinks");

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
