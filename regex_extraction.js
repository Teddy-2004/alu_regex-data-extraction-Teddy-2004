// Function to extract emails
function extractEmails(text) {
    const pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(pattern) || [];
}

// Function to extract URLs
function extractUrls(text) {
    const pattern = /https?:\/\/[a-zA-Z0-9.-]+(?:\.[a-zA-Z]{2,})(?:\/\S*)?|www\.[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(pattern) || [];
}


// Function to extract phone numbers (including international format)
function extractPhoneNumbers(text) {
    const pattern = /(\+?\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    return text.match(pattern) || [];
}

// Function to extract currency amounts (supporting $, €, £)
function extractCurrencyAmounts(text) {
    const pattern = /[$€£]\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
    return text.match(pattern) || [];
}

// Sample text for testing
const sampleText = `
    Hello John,

Please contact us at info@business.com or support@helpdesk.net for further assistance.
Our sales team: sales@ecommerce.shop.

Visit our website: https://www.shopnow.com or www.example.org for great deals.
For discounts, check http://offers.deals.net!

For support, call (987) 654-3210 or 987-654-3210. International support: +44 20 7946 0958.

The total cost is $499.99, but with a discount, it's $399.50. We also accept €250.00 or £215.75.

Order before 5:30 PM today! Payments will be processed at 14:45.
`;

// Running extraction functions and logging results
console.log("Emails:", extractEmails(sampleText));
console.log("URLs:", extractUrls(sampleText));
console.log("Phone Numbers:", extractPhoneNumbers(sampleText));
console.log("Currency Amounts:", extractCurrencyAmounts(sampleText));

module.exports = {
    extractEmails,
    extractUrls,
    extractPhoneNumbers,
    extractCurrencyAmounts
};