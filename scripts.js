// a function that extracts an email
function extractEmails(text) {
    const pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(pattern) || [];
}

// a function to extract urls
function extractUrls(text) {
    const pattern = /https?:\/\/(?:www\.)?[a-zA-Z0-9.-]+(?:\.[a-zA-Z]{2,})+[/\S]*/g;
    return text.match(pattern) || [];
}

// a function to extract phone number
function extractPhoneNumbers(text) {
    const pattern = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    return text.match(pattern) || [];
}

// a function to extract currencies
function extractCurrencyAmounts(text) {
    const pattern = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
    return text.match(pattern) || [];
}

// Sample test
const sampleText = `
    Hello John,

Please contact us at info@business.com or support@helpdesk.net for further assistance. You can also reach our sales team at sales@ecommerce.shop.

Our website https://www.shopnow.com https:/www.shopnow.com has amazing deals! Visit http://offers.deals.net for exclusive discounts.

For urgent support, call (987) 654-3210 or 987-654-3210. International customers can dial +44 20 7946 0958.

The total amount due is $499.99, but with our promo code, you only pay $399.50. We also accept €250.00 or £215.75.

Order now before 5:30 PM today! Our system will process payments at 14:45 (24-hour format).

Best regards,  
Customer Support Team  

`;

// examining the sample text
console.log("Emails:", extractEmails(sampleText));
console.log("URLs:", extractUrls(sampleText));
console.log("Phone Numbers:", extractPhoneNumbers(sampleText));
console.log("Currency Amounts:", extractCurrencyAmounts(sampleText));
