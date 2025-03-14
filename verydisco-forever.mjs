
import { argv } from "node:process";
import { writeFile } from "node:fs";

const arg = argv[2]

if (!arg) {
    console.error("Error: No input provided.");
    process.exit(1);
}

const veryDisco = (word) => {
    const middle = Math.ceil(word.length / 2);
    return word.slice(middle) + word.slice(0, middle);
};

const result = arg.split(" ").map(veryDisco).join(" ");
writeFile("verydisco-forever.txt", result, (err) => {
    if (err) {
        console.error("Error writing to file:", err);
        process.exit(1);
    }
});