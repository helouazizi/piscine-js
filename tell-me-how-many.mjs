import { readdir } from 'node:fs/promises';

async function read() {
    const directory = process.argv[2] || process.cwd();  // Get the directory from argv or default to cwd

    try {
        // Read directory contents
        const files = await readdir(directory);
        // files.forEach(file => {
        //     console.log(file);  // Print each file name
        // });
        console.log(files.length);
        
    } catch (error) {
        console.error("Error reading directory:", error.message);  // Handle errors (e.g., directory not found)
    }
}

read();
