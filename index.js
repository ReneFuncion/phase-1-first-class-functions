function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function named() {
        console.log("I am a named function");
    }
}
function returnsAnAnonymousFunction() {
    return () => console.log("I am an anonymous function");

}