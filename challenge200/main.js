// Return true if three sides of a triangle (a, b, c) can actually form a triangle, else return false

function isTriangle(a, b, c) {
    return a + b > c && b + c > a && a + c > b
}
