# Regex Data Extraction

## 📌 Project Overview
This project is a regex-based data extraction tool that extracts specific data types from large text datasets. The program supports extracting:
- 📧 Email addresses
- 🌐 URLs
- 📞 Phone numbers
- 💲 Currency amounts

## 🛠️ Setup Instructions

### Prerequisites
Ensure you have  Node.js installed on your system.

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
- Various email and phone number formats
- URLs with/without `www.`
- Currency amounts with/without commas

## 🚀 Contributors
- Tedla Tesfaye Godebo


