function multiple_conditions (a, b, c) {
    if (a !== undefined && b === undefined && c === undefined) {
        return a;
    }
    else if (a !== undefined && b !== undefined && c === undefined) {
        return a + b;
    }
    else if (a !== undefined && b !== undefined && c !== undefined ) {
        return (a + b) / c;
    }
    else {
        return false;
    }
}

console.log(multiple_conditions());