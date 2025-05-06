const { getInitials, createSlug, average, isPalindrome } = require("./main.js")


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
    expect(() => average(["hello", 4, 5, true])).toThrow();

})

// Snack 4

test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Hello World")).toBe("hello-world");
})

// Snack 5

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("otto")).toBeTruthy();
    expect(isPalindrome("casa")).toBeFalsy();
})

// Snack 6

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow();
    expect(() => createSlug("   ")).toThrow();
})

// Snack 7 

const posts = [
    { id: 1, title: "Primo Post", slug: "primo-post" },
    { id: 2, title: "Secondo Post", slug: "secondo-post" },
    { id: 3, title: "I topi non avevano nipoti", slug: "i-topi-non-avevano-nipoti" },
]

function findPostById(arr, id) {
    return arr.find(a => a.id === id)
}

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Secondo Post", slug: "secondo-post" });
    expect(createSlug(findPostById(posts, 1).title)).toBe("primo-post");
    expect(isPalindrome(findPostById(posts, 3).title)).toBeTruthy();
})