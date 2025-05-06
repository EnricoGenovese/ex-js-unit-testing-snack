// Snack 1

function getInitials(fullName) {
    return fullName.split(" ")[0][0].toUpperCase() + fullName.split(" ")[1][0].toUpperCase();
}

// Snack 2

function createSlug(str) {
    if (str.replace(/\s/g, "") === "" || !str) {
        throw new Error('The string cannot be empty');
    }
    return str.replace(/\s+/g, "-").toLowerCase();

}

function average(arr) {
    arr.forEach((n) => {
        if (isNaN(n)) {
            throw new Error('The array must contain only numbers')
        }
    })
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
}


function isPalindrome(str) {
    const strArr = str.split("");
    const revArr = strArr.reverse();
    const palStr = revArr.join("");

    return palStr.replace(/\s+/g, "").toLowerCase() === str.replace(/\s+/g, "").toLowerCase();
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
}