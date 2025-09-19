const args = process.argv.slice(2);
const firstArg = args[0];

console.log(firstArg || "No argument");