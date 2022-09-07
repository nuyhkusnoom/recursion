function fibsRec(length, array = [0, 1]) {

    if (length === 1) {
        return [0];
    } else if (length === 2) {
        return [0, 1];
    } else if (length === array.length) { // Base case
        return array;
    } else {
        array.push(array.at(-1) + array.at(-2));
        return fibsRec(length, array);
    }
}

export default fibsRec;