function fibs(length) {

    let array = [];
    let newNumber;

    for (let i = 0; i < length; i++) {
        if (i===0) {
            array.push(0);
        } else if (i===1) {
            array.push(1);
        } else {
            newNumber = array[i-1] + array[i-2];
            array.push(newNumber);
        }

    }

    return array;
}

export default fibs;