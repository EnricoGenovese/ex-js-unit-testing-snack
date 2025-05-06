const { getInitials, createSlug } = require("./main.js")


// Snack 1

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {

    expect(getInitials("Mario Rossi")).toBe("MR");
    expect(getInitials("Anna Neri")).toBe("AN")
})

// Snack 2

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Hello World")).toBe("hello world");
    expect(createSlug("ANY string becomes a SLUG")).toBe("any string becomes a slug");
})