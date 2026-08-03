# TypeScript Functions — Interview Prep Guide
### Named Function | Anonymous Function | Arrow Function

---

## 1. Named Function

- A function that has a **name** attached to it, defined using the `function` keyword.
- Can be called **before** its definition in the code (this is called **hoisting**).

```js
sayHello(); // works fine, even though called before definition

function sayHello() {
  console.log("Hello!");
}
```

- Hoisting means the *entire function* (not just its name) is moved to the top of its scope during compilation.
- The name is useful for **readability** and shows up clearly in stack traces during debugging.
- Can also be written as a **named function expression** (name + assigned to a variable) — this name is only accessible *inside* the function itself, not outside.

```js
const greet = function sayHi() {
  console.log("Hi!");
};
// greet() works, sayHi() does not — "sayHi" is local to the function
```

- Named functions are preferred for **recursion**, since the function can call itself by name reliably, even if the outer reference changes.
- In error/debugging stack traces, named functions show their actual name — anonymous functions show as `anonymous`, which makes debugging harder.
- TypeScript allows **function overloading** signatures only with named functions — not with arrow or anonymous functions.

---

## 2. Anonymous Function

- A function **without a name**, usually assigned to a variable or passed directly as an argument.

```js
const greet = function () {
  console.log("Hello!");
};
```

- **Not hoisted** the same way — since it's a function *expression*, only the variable is hoisted, not the function body. Calling it before definition throws an error.
- Commonly used as **callbacks** (e.g., inside `setTimeout`, array methods like `map`/`filter`, event listeners).

```js
setTimeout(function () {
  console.log("Runs after delay");
}, 1000);
```

- Since there's no name, **stack traces are harder to read** during debugging — everything shows as `anonymous`, making it tough to trace which function failed.
- Anonymous functions **have their own `this`** — determined by *how* they're called, not where they're defined (same rule as named functions).
- Often used in **IIFEs** (Immediately Invoked Function Expressions) to create isolated scopes.

```js
(function () {
  console.log("Runs immediately");
})();
```

---

## 3. Arrow Function (Lambda)

- A shorter syntax for writing functions, introduced in ES6, using `=>`.

```js
const greet = () => {
  console.log("Hello!");
};
```

- Supports **implicit return** — if the body is a single expression, no `return` keyword or curly braces needed.

```js
const add = (a, b) => a + b; // implicitly returns a + b
```

- **Does not have its own `this`** — it inherits `this` from the surrounding (enclosing) scope where it was defined.

- Cannot be used as a **constructor** — `new MyArrowFn()` throws an error.
- Does **not** have its own `arguments` object — trying to use `arguments` inside an arrow function refers to the outer scope's `arguments` (or throws an error if none exists).
- Not hoisted like function declarations — behaves like any variable assignment.
- Cannot be used as a **generator function** (`function*` syntax has no arrow equivalent).
- Commonly used inside **class methods** or **callbacks** specifically to preserve the outer `this` — very useful in React/Angular component code.

```js
class Timer {
  seconds = 0;
  start = () => {
    setInterval(() => {
      this.seconds++; // 'this' correctly refers to the Timer instance
    }, 1000);
  };
}
```

---

## Diagrams

### Hoisting Behavior

```mermaid
graph TD
    A[Code Compilation Starts] --> B[Named Function Declaration<br/>fully hoisted]
    A --> C[Function Expression<br/>Anonymous / Arrow]
    C --> D[Only variable name hoisted<br/>as 'undefined']
    B --> E[Callable BEFORE<br/>definition in code]
    D --> F[NOT callable before<br/>definition - throws error]
```

### `this` Binding

```mermaid
graph TD
    A["Function is called"] --> B{Regular Function<br/>Named or Anonymous}
    A --> C[Arrow Function]
    B --> D["'this' = decided by<br/>HOW it's called"]
    C --> E["'this' = inherited from<br/>surrounding scope<br/>fixed at definition time"]
```

---

## Comparison Table

| Feature | Named Function | Anonymous Function | Arrow Function |
|---|---|---|---|
| **Hoisted?** | Yes, fully | No (only variable, if assigned) | No |
| **Has own `this`?** | Yes | Yes | No — inherits from scope |
| **Has `arguments` object?** | Yes | Yes | No |
| **Can be used as constructor (`new`)?** | Yes | Yes | No |
| **Shows name in stack trace?** | Yes | No (`anonymous`) | No (unless assigned to a named variable) |
| **Can be a generator (`function*`)?** | Yes | Yes | No |
| **Typical use case** | Reusable, recursive, top-level logic | Callbacks, IIFEs | Callbacks needing outer `this`, concise expressions |

---

## Q&A — Interview Questions & Answers
**Q1. What is the difference between a named function and an anonymous function?**

A:
- A named function has an identifier and can be called before its definition due to hoisting.
- An anonymous function has no name, is usually assigned to a variable or passed as a callback.
- Anonymous functions are not hoisted the same way — only the variable is hoisted.

**Q2. How do you write an arrow function that adds two numbers?**

A:
- `const add = (a, b) => a + b;`
- This uses implicit return since the body is a single expression — no `return` keyword or curly braces needed.

**Q3. Can an anonymous function be called before it's defined in the code?**

A:
- No.
- Since it's a function expression, only the variable is hoisted (as `undefined`), not the function body.
- Calling it early throws an error.

---

**Q4. Why do arrow functions not have their own `this`?**

A:
- By design, arrow functions don't create their own `this` binding.
- They inherit `this` from the enclosing lexical scope at the time they're defined.
- This is different from regular functions, where `this` depends on how the function is called.

**Q5. What happens if you try to use `new` with an arrow function?**

A:
- It throws a `TypeError`.
- Arrow functions cannot be used as constructors since they lack their own `this` and prototype.

**Q6. Why might a named function be preferred over an anonymous one for recursion?**

A:
- A named function can reliably call itself by its own name from within its body.
- This still works even if the outer variable it's assigned to is reassigned or goes out of scope.
- An anonymous function has no such internal reference to call itself by.

---

**Q7. Explain how `this` behaves differently in a regular callback function vs an arrow function callback inside a class method.**

A:
- A regular function callback gets its own `this`, decided by how it's invoked — often `undefined` or the global object in strict mode, causing bugs.
- An arrow function callback doesn't rebind `this` — it keeps `this` from the enclosing class method.
- This means an arrow function correctly refers to the class instance.
- This is why arrow functions are commonly used for event handlers and class properties.

**Q8. Why can't arrow functions be used as generator functions?**

A:
- Generator functions rely on `function*` syntax and the internal mechanics of `yield`.
- These require their own execution context and control flow.
- Arrow functions, by spec, don't support this — there's no `=>*` equivalent.

**Q9. In a large codebase, why might excessive use of anonymous functions make debugging harder — and how would you mitigate it?**

A:
- Anonymous functions show as `anonymous` in stack traces.
- This makes it difficult to pinpoint which function caused an error, especially in deeply nested callbacks.
- Mitigation: assign meaningful names to function expressions (named function expressions).
- Mitigation: extract complex callbacks into separate named functions for clarity and better stack traces.

**Q10. How does TypeScript's function overloading interact with these three function types?**

A:
- TypeScript allows multiple call signatures (overloads) to be declared for named functions.
- This lets you define different parameter/return type combinations for the same function name.
- Arrow functions and anonymous functions assigned to variables don't support this traditional overload syntax directly.
- Instead, you'd need to type the variable itself with a union of call signatures.

