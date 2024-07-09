function reverse(str) {
    return str.split('').reverse().join('');
}

function capitalize(str) {
    let formatted = str.trim();
    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1);

}

class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    divide(a, b) {
        return a / b;
    }
    multiply(a, b) {
        return a * b;
    }
}

const calculator = new Calculator

function isLowerCase(char) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        return true;
    } else {
        false;
    }
}

function isUpperCase(char) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
    }
}

function isAlphabet(char) {
    if (isLowerCase(char) || isUpperCase(char)) {
        return true;
    } else {
        return false;
    }
}

function cipher(char, key) {
    // only aphabet enter this function
    if (isLowerCase(char)) {
        let newCode = char.charCodeAt(0) + key;
        if (newCode > 122) newCode = 96 + newCode - 122;
        return String.fromCharCode(newCode);
    } else {
        let newCode = char.charCodeAt(0) + key;
        if (newCode > 90) newCode = 64 + newCode - 90;
        return String.fromCharCode(newCode);
    }
}

function caesarCipher(str, key) {
    let encrypted = '';
    for (let char of str) {
        if (isAlphabet(char)) {
            encrypted += cipher(char, key);
        } else {
            encrypted += char;
        }
    }
    return encrypted;
}

function analyzeArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    const object = {};

    object['average'] = sum / arr.length;
    object['min'] = Math.min(...arr);
    object['max'] = Math.max(...arr);
    object['length'] = arr.length;

    return object;
}

module.exports = { reverse, capitalize, calculator, caesarCipher, analyzeArray }