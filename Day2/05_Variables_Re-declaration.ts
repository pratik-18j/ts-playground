//   3) Re-declaration

// Re-declaration means declaring a variable with the same name more than once in the same scope.
// 'var' allows re-declaration of variables within the same scope, which can lead to unexpected behavior and bugs in the code.
// 'let' and 'const' do not allow re-declaration of variables within the same scope, which helps prevent accidental overwriting of variable values.

// Example 1: var (Re-declaration allowed)
var city = "New York"
console.log(city)
var city = "Los Angeles" // Re-declaration is allowed
console.log(city) // Output: Los Angelests

// Example 2: let (Re-declaration not allowed)
let country = "Scotland"
// let country = "India" // This will cause a compile-time error block-scoped variable 'country' has already been declared
console.log(country)

// Example 3: const (Re-declaration not allowed)
const president = "Trump"
// const president = "Putin" // This will cause a compile-time error block-scoped variable 'president' has already been declared
console.log(president)