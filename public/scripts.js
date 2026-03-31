// scripts.js

// Functionality for Stripe Integration

// Set your publishable key from Stripe
const stripe = Stripe('your-publishable-key');

// Function to handle donations
function handleDonation(amount) {
    // Create a checkout session
    fetch('/create-checkout-session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            type: 'donation',
            amount: amount
        })
    })
    .then((response) => response.json())
    .then((sessionId) => {
        return stripe.redirectToCheckout({sessionId: sessionId});
    })
    .then((result) => {
        if (result.error) {
            alert(result.error.message);
        }
    })
    .catch((error) => console.error('Error:', error));
}

// Function to handle ebook purchases
function handleEbookPurchase(ebookId) {
    fetch('/create-checkout-session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            type: 'ebook',
            id: ebookId
        })
    })
    .then((response) => response.json())
    .then((sessionId) => {
        return stripe.redirectToCheckout({sessionId: sessionId});
    })
    .then((result) => {
        if (result.error) {
            alert(result.error.message);
        }
    })
    .catch((error) => console.error('Error:', error));
}