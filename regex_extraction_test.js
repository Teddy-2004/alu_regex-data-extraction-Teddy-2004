const {
    extractEmails,
    extractUrls,
    extractPhoneNumbers,
    extractCurrencyAmounts
} = require('./regex_extraction');

const assert = require('assert');

const sampleText = `
    Contact: test.user@example.com, hello@domain.org
    Visit: https://www.testsite.com, www.example.net
    Call: (123) 456-7890, +1-800-555-0199
    Price: $99.99, €200, £150.50
`;

// Expected results
const expectedEmails = ['test.user@example.com', 'hello@domain.org'];
const expectedUrls = ['https://www.testsite.com', 'www.example.net'];
const expectedPhones = ['(123) 456-7890', '+1-800-555-0199'];
const expectedCurrencies = ['$99.99', '€200', '£150.50'];

// Running tests
assert.deepStrictEqual(extractEmails(sampleText), expectedEmails, 'Email extraction failed');
assert.deepStrictEqual(extractUrls(sampleText), expectedUrls, 'URL extraction failed');
assert.deepStrictEqual(extractPhoneNumbers(sampleText), expectedPhones, 'Phone number extraction failed');
assert.deepStrictEqual(extractCurrencyAmounts(sampleText), expectedCurrencies, 'Currency extraction failed');

console.log("All tests passed successfully!");
