// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the total price from the URL
const totalPrice = getUrlParameter('totalPrice');

// Set the amount input field with the total price
if (totalPrice) {
    const amountInput = document.getElementById('amount');
    amountInput.value = `Rs ${totalPrice}`; // Set the value in the amount field
}

// Handle form submission
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission
});