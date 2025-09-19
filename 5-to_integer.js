const args = process.argv.slice(2);
const firstArg = args[0];

const num = parseInt(firstArg);

if (firstArg === undefined) {
  console.log("Not a number");
} else if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}