const { getInitials, createSlug, average } = require("./main.js")


// Snack 1

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {

    expect(getInitials("Mario Rossi")).toBe("MR");
    expect(getInitials("Anna Neri")).toBe("AN")
})

// Snack 2

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Hello World")).toBe("hello-world");
    expect(createSlug("ANY string becomes a SLUG")).toBe("any-string-becomes-a-slug");
})

// Snack 3

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([6, 7, 8, 9, 10])).toBe(8);
    expect(() => average(["hello", 4, 5, true])).toThrow()

})

// Snack 4

test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Hello World")).toBe("hello-world");
})