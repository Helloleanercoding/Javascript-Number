for (let i = 1; i <= 100; i++) {
    console.log(i);
}
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
let start = parseInt(prompt("Enter the starting number:"));
let end = parseInt(prompt("Enter the ending number:"));

for (let i = start; i <= end; i++) {
    console.log(i);
}
