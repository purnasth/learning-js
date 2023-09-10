console.log("throw\n");

const number = 100;

try {
    if (number > 50) {
        console.log("Success!");
    } else {
        throw "Error: number is too small";
    }
    // if throw executes this code will not run
    console.log("This will not run");
}
catch (error) {
    console.log(error);
}