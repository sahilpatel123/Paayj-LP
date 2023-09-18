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
        });
    });
});

const API_KEY = 'AIzaSyDimidnU1vV-yx5-qu4lX7xnvrKDiXWl5E';
const SPREADHSEET_ID = '1MA9WuJ0tBYJ3KAXKXrP6eWMqGuWcDUhWa4v-tQk-V6Q';
const CLIENT_ID = '763976178735-ir8kv8fpm8iiulgj1oh3q7k6jq2r24kc.apps.googleusercontent.com';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';


function initApiClient() {
    gapi.load('client', async () => {
      try {
        await gapi.client.init({
          apiKey: API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        });

        gapiInited = true;
        maybeEnableButtons();
      } catch (err) {
        console.error('Error initializing Google API client:', err);
      }
    });
  }

  async function writeToSheet() {
    const email = document.getElementById('email').value;

    // Check if the user is authorized
    if (gapi.client.getToken() === null) {
      alert('Please authorize first by clicking the "Authorize" button.');
      return;
    }

    try {
      const response = await gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: SPREADHSEET_ID, // Use the variable SPREADHSEET_ID
        range: 'Sheet1', // Replace with the sheet name where you want to write data
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [[email]],
        },
      });

      // Clear the input field
      document.getElementById('email').value = '';

      console.log('Data written successfully:', response);
      alert('Email subscribed successfully!');
    } catch (err) {
      console.error('Error writing data:', err);
      alert('Error subscribing to email. Please try again later.');
    }
}

let gisInited = false;
// Define the maybeEnableButtons function
function maybeEnableButtons() {
    if (gapiInited && gisInited) {
        document.getElementById('authorize_button').style.visibility = 'visible';
    }
}

// ... Rest of your code

// Make sure you call maybeEnableButtons when both libraries are initialized
async function initializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    maybeEnableButtons(); // Call the function here
}
