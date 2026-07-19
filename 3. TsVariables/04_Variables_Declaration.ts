
// 2) Declaration/Value Initialization:

// In terms of declaration and initialization, there are some differences between var, let, and const:
// 'var' and 'let' can be declared without an initial value, and they can be initialized later. 
// However, 'const' must be initialized at the time of declaration, and it cannot be reassigned later.


//  Example 1: var
    var x         // Declaration
    console.log(x)  // Undefined because 'x' is declared but not initialized
    x = 10      // Initialization
    console.log(x)

    //  Example 2: let
    let y         // Declaration
    console.log(y)  // Undefined because 'y' is declared but not initialized
    y = 20      // Initialization
    console.log(y)

    //  Example 3: const
    //const z       //Incoorect. Shows the compiler error "const declarations must be initialized"
    const z = 30  // Declaration and Initialization
    console.log(z)

