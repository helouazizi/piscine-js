import { argv } from "node:process";

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
console.log(result);
