import { readdir } from 'node:fs/promises';

//function read() {
const directory = process.argv[2] || process.cwd();  // Get the directory from argv or default to cwd

try {
    // Read directory contents
    const files = await readdir(directory);
    const clean = files.map(file => {
        const [first,last] = file.replace('.json','').split('_')
        return {last,first}
    })
    clean.sort((a,b)=> {
        let kbir = a.last.localeCompare(b.last)
        if (kbir === 0){
            return  a.first.localeCompare(b.first)
        }
        return kbir
    })
    clean.forEach((obj,index )=> {
        console.log(`${index+1}. ${obj.last} ${obj.first}`);
        
    })

} catch (error) {
    console.error("Error reading directory:", error.message);  // Handle errors (e.g., directory not found)
}
