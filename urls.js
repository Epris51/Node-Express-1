const fs = require('fs');
const axios = require('axios');

// This function processes each URL and saves the HTML content to a file
async function processUrl(fileUrl) {
    try {
        const response = await axios.get(fileUrl);
        const hostname = new URL(fileUrl).hostname;
        fs.writeFileSync(`${hostname}.txt`, response.data); // Save as .txt file
        console.log(`Saved content from ${fileUrl} to file ${hostname}.txt`);
    } catch (error) {
        console.error(`Error fetching ${fileUrl}: ${error.message}`);
    }
}

// Main function to process the input file
async function main() {
    const fileName = process.argv[2];

    if (!fileName) {
        console.log('Usage: node urls.js FILENAME');
        process.exit(1);
    }

    try {
        const fileContent = fs.readFileSync(fileName, 'utf8');
        const urls = fileContent.split(/\r?\n/);

        for (const fileUrl of urls) {
            if (fileUrl) {
                await processUrl(fileUrl);
            }
        }
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
}

main();

