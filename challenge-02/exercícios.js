function multiple_conditions (a, b, c) {
    if (arguments.length == 0) {
        return false;
    }
    else if (a !== undefined && b === undefined && c === undefined) {
        return a;
    }
    else if (a === undefined && b !== undefined && c === undefined) {
        return b;
    }
    else if (a === undefined && b === undefined && c !== undefined) {
        return c;
    }
    else if (a !== undefined && b !== undefined && c === undefined) {
        return a + b;
    }
    else if (a !== undefined && b === undefined && c !== undefined) {
        return a + c;
    }
    else if (a === undefined && b !== undefined && c !== undefined) {
        return b + c;
    }
    else {
        return (a + b) / c;
    }
}

console.log(multiple_conditions());