function large_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
large_shirt();
function medium_shirt(size, message) {
    if (size === void 0) { size = "medium"; }
    if (message === void 0) { message = "I hate coding"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it"));
}
medium_shirt();
function small_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it"));
}
small_shirt('small', "Don't touch my phone");
