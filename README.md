# Regex Data Extraction

## 📌 Project Overview
This project is a regex-based data extraction tool that extracts specific data types from large text datasets. The program supports extracting:
- 📧 Email addresses
- 🌐 URLs
- 📞 Phone numbers
- 💲 Currency amounts
- 🕒 Time in 12-hour and 24-hour formats

## 🛠️ Setup Instructions

### Prerequisites
- Ensure you have  Node.js installed on your system.
- Git installed

### Clone the Repository
```sh
 git clone https://github.com/Teddy-2004/alu_regex-data-extraction-Teddy-2004.git
 cd alu_regex-data-extraction-Teddy-2004
```
#### JavaScript
```sh
node regex_extraction.js
```

## ✅ Example Inputs & Outputs
**Input:**
```
Contact us at support@example.com.
Visit https://www.example.com.
Call (123) 456-7890.
Total cost: $1,234.56.
```

**Output:**
```
Emails: ['support@example.com']
URLs: ['https://www.example.com']
Phone Numbers: ['(123) 456-7890']
Currency Amounts: ['$1,234.56']
```

## 🔍 Edge-case Handling
This project accounts for:
- Supports different phone number formats (e.g., (123) 456-7890, 123.456.7890, international numbers).

- Handles subdomains in emails and URLs.

- Extracts currency with and without commas.

- Recognizes different time formats (12-hour and 24-hour formats).

## 🚀 Contributors
- Tedla Tesfaye Godebo


