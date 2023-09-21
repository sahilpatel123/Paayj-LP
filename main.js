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


/*
function initClient () { //provide the authentication credentials you set up in the Google developer console
    gapi.load('client', async () => {
        try {
          await gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            scope: SCOPE,
            discoveryDocs: [DISCOVERY_DOC],
          });
  
          gapiInited = true;
        } catch (err) {
          console.error('Error initializing Google API client:', err);
        }
      });
 }

function onFormSubmit() {
    const email = document.getElementById('email').value
    const params = {
      // The ID of the spreadsheet to update.
      spreadsheetId: SPREADSHEET_ID, 
      // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
      range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
      // How the input data should be interpreted.
      valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
      // How the input data should be inserted.
      insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
    };

    const valueRangeBody = {
      'majorDimension': 'ROWS', //log each entry as a new row (vs column)
      'values': [email] 
    };

    let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then(function (response) {
      // TODO: Insert desired response behaviour on submission
      console.log(response.result);
    }, function (reason) {
      console.error('error: ' + reason.result.error.message);
    });
  }


/*
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
    ;

    

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
*/