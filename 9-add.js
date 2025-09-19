const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("no argument");
} else if (args.length === 1) {
  console.log("argument: " + args[0]);
} else {
  console.log("arguments: " + args.join(" "));
}