import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const directory = process.argv[2] || process.cwd();  // Get the directory from argv or default to cwd

async function read() {
    try {
        const files = await readdir(directory);

        const clean = (await Promise.all(files.map(async (file) => {
            try {
                const filePath = join(directory, file);
                const content = await readFile(filePath, 'utf8');
                const parsed = JSON.parse(content);

                if (parsed.answer === "yes") {
                    const [first, last] = file.replace('.json', '').split('_');
                    return { last, first };
                }

            } catch (err) {
                console.error(`Error reading/parsing ${file}:`, err.message);
            }
        }))).filter(Boolean); // Remove undefined values

        // Sort the filtered guests by last name, then first name
        clean.sort((a, b) => {
            const lastNameComparison = a.last.localeCompare(b.last);
            if (lastNameComparison === 0) {
                return a.first.localeCompare(b.first);
            }
            return lastNameComparison;
        });

        // Format output properly
        const output = clean.map((obj, index) => `${index + 1}. ${obj.last} ${obj.first}`).join('\n');

        // Write output to a file
        await writeFile("vip.txt", output, "utf8");

        console.log("Guest list has been saved to vip.txt");

    } catch (error) {
        console.error("Error reading directory:", error.message);
    }
}

read();
