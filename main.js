// Snack 1

function getInitials(fullName) {
    return fullName.split(" ")[0][0].toUpperCase() + fullName.split(" ")[1][0].toUpperCase();
}

// Snack 2

function createSlug(str) {
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


module.exports = {
    getInitials,
    createSlug,
    average
}