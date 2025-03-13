
import { readFile } from "node:fs/promises";
import { argv } from "node:process";

async function read() {
    try {
        // Get the filename from command line arguments
        const filename = argv[2];
        // Read the file content
        const content = await readFile(filename, 'utf8');
        const veryDisco = (word) => {
            const middle = Math.floor(word.length / 2);
            return word.slice(middle) + word.slice(0, middle);
        };
        // Split content into words, reverse each word, and join back
        const result = content.split(' ')
            .map(veryDisco)
            .join(' ');
        
        // Print the result
        console.log(result);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}
read()

