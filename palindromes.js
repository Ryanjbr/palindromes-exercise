const palindromes = function (word) {
    let letters = []
    for (let letter of word) {
        if (/^[A-Z]$/i.test(letter))
        letters.push(letter.toLowerCase())
    }
    for(let i = 0; i < letters.length/2; i++) {
        if (letters[i] !== letters[letters.length-i-1]) {
            return false;
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
