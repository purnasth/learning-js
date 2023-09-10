console.log("try ... catch ... finally\n");

const numerator = 100,
  denominator = "a";

try {
  console.log(numerator / denominator);
  console.log(a);
} catch (error) {
  console.log(`error: ${error}`);
} finally {
  console.log("finally block.. This will execute every time.");
}
