import { readdir } from 'node:fs/promises';
//import { dirname } from 'node:path';

async function countDirectoryEntries() {
        const directory = process.argv[2] || process.cwd();
        
        // Read directory contents
         return  await readdir(directory);
}

// Run the main function
countDirectoryEntries().then(files => {
    files.forEach(file => {console.log(file);
    })
});