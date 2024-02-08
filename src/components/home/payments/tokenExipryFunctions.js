// Function to start the session timer
function startSessionTimer() {
  const timeoutDuration = 60 * 60 * 1000; // 1 hour in milliseconds

  // Start the timer
  const timeoutId = setTimeout(() => {
    // Perform any necessary actions for session timeout (e.g., showing modal, redirecting)
    showModalWithRedirect(
      "Session Timeout",
      "Your session has expired. Please log in again.",
      "home.html"
    );
  }, timeoutDuration);

  // Store the timeout ID in localStorage for reference
  localStorage.setItem("sessionTimeoutId", timeoutId.toString());
}

// Function to clear the session timer
function clearSessionTimer() {
  const timeoutId = localStorage.getItem("sessionTimeoutId");
  clearTimeout(parseInt(timeoutId));
  localStorage.removeItem("sessionTimeoutId");
  localStorage.removeItem("twToken");
}

// Function to handle the "setItem" action in localStorage
function handleLocalStorageSetItem() {
  // Perform your logic for setting an item in localStorage
  // ...

  // Clear any existing session timer and start a new one
  clearSessionTimer();
  startSessionTimer();
}

// Function to display a modal message and redirect
function showModalWithRedirect(title, message, redirectUrl) {
  // Create a modal element
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
      <div class="modal-content">
        <h3>${title}</h3>
        <p>${message}</p>
      </div>
    `;

  // Append the modal element to the document body
  document.body.appendChild(modal);

  // Redirect to the specified URL after a delay
  setTimeout(() => {
    window.location.href = "/";
  }, 3000); // Redirect after 3 seconds (adjust as needed)
}
