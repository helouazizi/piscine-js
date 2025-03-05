function reverse(params) {
    let isArray = Array.isArray(params);
    let res = [];

    if (!isArray) {
        params = String(params); // Convert to string for proper iteration
    }

    for (let i = params.length - 1; i >= 0; i--) {
        res.push(params[i]);
    }

    return isArray ? res : res.join(''); // Join only for non-array cases
}

// Test Cases
console.log(reverse([1, 2, 3]));    // Expected: [3, 2, 1]
console.log(reverse("hello"));      // Expected: "olleh"
console.log(reverse("pouet"));      // Expected: "teuop"
console.log(reverse(12345));        // Expected: "54321"
console.log(reverse(true));         // Expected: "eurt"
console.log(reverse(["a", "b", "c"])); // Expected: ["c", "b", "a"]
