// Snack 1

function getInitials(fullName) {
    return fullName.split(" ")[0][0].toUpperCase() + fullName.split(" ")[1][0].toUpperCase();
}

// Snack 2

function createSlug(str) {
    return str.toLowerCase();
}



module.exports = {
    getInitials,
    createSlug
}