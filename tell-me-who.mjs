import { readdir } from 'node:fs/promises';

//function read() {
const directory = process.argv[2] || process.cwd();  // Get the directory from argv or default to cwd

try {
    // Read directory contents
    const files = await readdir(directory);
    let i = 1
    files.forEach(file => {
        const format = file.split('_')
        const first = format[0]
        const last = format[1].split('.')[0]
        console.log(`${i} ${last} ${first}`);  // Print each file name
        i++
    });
    //console.log(files.length);

} catch (error) {
    console.error("Error reading directory:", error.message);  // Handle errors (e.g., directory not found)
}
