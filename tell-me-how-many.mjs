import { readdir } from "node:fs/promises";
import { argv } from "node:process";


async function read() {
    try {
        let path = argv[2]
        const files = await readdir(path = ".")
        files.forEach(file => {
            console.log(file);
        })
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}
read()