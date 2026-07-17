import type { Lesson } from "./types";

export const lessonsEn: Lesson[] = [
  {
    id: 1,
    title: "Welcome to TypeScript",
    level: "basic",
    content:
      "TypeScript is a superset of JavaScript that adds static typing. " +
      'With it, you define the "shape" of your data using interfaces, preventing ' +
      "runtime errors. See the example: we create a `User` interface with " +
      "two typed fields and instantiate an object that follows it.",
    task: "Try changing the user's name in the editor and click Compile & Run.",
    hint: "Change the value of `name` inside the `user` object.",
    starterCode: `interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "TypeScript Explorer",
  id: 1
};

console.log(\`Hello, \${user.name}! Your ID is \${user.id}.\`);`,
  },
  {
    id: 2,
    title: "Static Typing and Inference",
    level: "basic",
    content:
      "TypeScript automatically infers types in many cases. When you define a variable " +
      "with an initial value, TypeScript deduces its type. This is called type inference and " +
      "makes the code more concise while maintaining safety.",
    task: "Observe how TypeScript infers the type of the `message` variable.",
    hint: "The type is inferred from the initial value.",
    starterCode: `let message = "Hello, TypeScript!"
let count = 42
let isActive = true

// TypeScript infers:
// message: string
// count: number
// isActive: boolean

console.log(message)
console.log(count)
console.log(isActive)`,
  },
  {
    id: 3,
    title: "Interfaces",
    level: "basic",
    content:
      "Interfaces define the structure that objects must follow. They are fundamental in TypeScript " +
      "to ensure objects have the correct properties with the right types.",
    task: "Add an `email` property to the `Person` interface and the object.",
    hint: "Add `email: string` to the interface.",
    starterCode: `interface Person {
  name: string
  age: number
}

const person: Person = {
  name: "Alice",
  age: 25
}

console.log(\`\${person.name} is \${person.age} years old\`)`,
  },
  {
    id: 4,
    title: "Enums",
    level: "basic",
    content:
      "Enums allow you to define a set of named constants. They are useful for " +
      "representing states, directions, user roles, etc. TypeScript supports " +
      "numeric (default) and string enums.",
    task: "Add an `ADMIN` value to the `Role` enum and create a user with that role.",
    hint: 'Add `ADMIN = "ADMIN"` to the enum and use `Role.ADMIN` in the object.',
    starterCode: `enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

enum Role {
  USER = "USER",
  MODERATOR = "MODERATOR"
}

interface Player {
  name: string
  role: Role
  facing: Direction
}

const player: Player = {
  name: "Hero",
  role: Role.USER,
  facing: Direction.UP
}

console.log(\`\${player.name} (\${player.role}) is facing \${player.facing}\`)`,
  },
  {
    id: 5,
    title: "Type Aliases and Union Types",
    level: "basic",
    content:
      "Type aliases create names for complex types. Union types (`|`) allow " +
      "a variable to accept more than one type. This is much safer than using " +
      "`any` while maintaining flexibility.",
    task: "Create a type alias `Result` that is `string | number | boolean`.",
    hint: "type Result = string | number | boolean;",
    starterCode: `type ID = string | number
type Status = "active" | "inactive" | "pending"

function formatId(id: ID): string {
  return typeof id === "number" ? \`#\${id.toString().padStart(4, "0")}\` : id
}

function getStatusLabel(status: Status): string {
  const labels = {
    active: "✅ Active",
    inactive: "❌ Inactive",
    pending: "⏳ Pending"
  }
  return labels[status]
}

console.log(formatId(42))
console.log(formatId("USR-001"))
console.log(getStatusLabel("active"))`,
  },
  {
    id: 6,
    title: "Type Assertions",
    level: "basic",
    content:
      "Type assertions tell TypeScript to treat a value as a specific type. " +
      'Use `as` or angle bracket syntax. It\'s like a "cast" in other languages, ' +
      "but doesn't convert the value at runtime.",
    task: "Use type assertion to treat `input` as `string`.",
    hint: "const str = input as string;",
    starterCode: `let input: unknown = "hello world"

const length1 = (input as string).length
const length2 = (<string>input).length

console.log("Length 1:", length1)
console.log("Length 2:", length2)`,
  },
  {
    id: 7,
    title: "Basic Types",
    level: "basic",
    content:
      "TypeScript supports all JavaScript primitive types: `string`, `number`, " +
      "`boolean`, `null`, `undefined`. It also offers `symbol`, `bigint` and the " +
      "type `void` for functions that don't return anything.",
    task: "Create variables of the types you learned.",
    hint: 'let name: string = "Alice";',
    starterCode: `{
let name: string = "Alice"
let age: number = 25
let isStudent: boolean = true
let nothing: null = null
let notDefined: undefined = undefined
let id: symbol = Symbol("id")
let bigNumber: bigint = 9007199254740991n

console.log(name, age, isStudent)
}`,
  },
  {
    id: 8,
    title: "Arrays and Tuples",
    level: "basic",
    content:
      "Arrays in TypeScript can be typed as `number[]` or `Array<number>`. " +
      "Tuples are arrays with a fixed size and specific types at each position: `[string, number]`.",
    task: "Create a tuple with a person's name and age.",
    hint: 'let person: [string, number] = ["Alice", 25];',
    starterCode: `const numbers: number[] = [1, 2, 3, 4, 5]
const names: Array<string> = ["Alice", "Bob", "Charlie"]

const person: [string, number] = ["Alice", 25]
const coords: [number, number, number] = [10.5, 20.3, 5.0]

console.log("Numbers:", numbers)
console.log("Person:", person)
console.log("Coords:", coords)`,
  },
  {
    id: 9,
    title: "Functions - Parameter and Return Typing",
    level: "basic",
    content:
      "Functions in TypeScript can have defined types for parameters and return. " +
      "This ensures the function is called with the correct arguments and returns the expected value.",
    task: "Add the return type `number` to the `soma` function.",
    hint: "function soma(a: number, b: number): number",
    starterCode: `function greet(name: string): string {
  return \`Hello, \${name}!\`
}

function soma(a: number, b: number): number {
  return a + b
}

const add = (a: number, b: number): number => a + b

console.log(greet("TypeScript"))
console.log(soma(5, 3))
console.log(add(10, 20))`,
  },
  {
    id: 10,
    title: "Optional and Default Parameters",
    level: "basic",
    content:
      "Optional parameters use `?` (e.g., `name?: string`). Parameters with default values " +
      "are automatically optional. The difference is that `undefined` is passed for optionals, " +
      "while the default value is used for parameters with defaults.",
    task: "Make the `age` parameter optional in the `introduce` function.",
    hint: "function introduce(name: string, age?: number)",
    starterCode: `function greet(name: string, greeting?: string): string {
  return greeting ? \`\${greeting}, \${name}!\` : \`Hello, \${name}!\`
}

function introduce(name: string, age?: number): string {
  if (age !== undefined) {
    return \`\${name} is \${age} years old\`
  }
  return \`\${name}\`
}

console.log(greet("Alice"))
console.log(greet("Bob", "Hi"))
console.log(introduce("Charlie", 30))
console.log(introduce("Diana"))`,
  },
  {
    id: 11,
    title: "Utility Types - Partial, Required, Pick, Omit",
    level: "basic",
    content:
      "TypeScript includes built-in utility types that transform existing types: " +
      "`Partial<T>` makes all fields optional, `Required<T>` makes them required, " +
      "`Pick<T, K>` selects fields, `Omit<T, K>` removes fields.",
    task: 'Use `Omit<User, "password">` to create a `PublicUser` type.',
    hint: 'type PublicUser = Omit<User, "password">',
    starterCode: `interface User {
  id: number
  name: string
  email: string
  password: string
  age?: number
}

type UserUpdate = Partial<User>
type CompleteUser = Required<User>
type UserPreview = Pick<User, "id" | "name">
type UserMap = Record<string, UserPreview>

const update: UserUpdate = { name: "New Name" }
const preview: UserPreview = { id: 1, name: "Alice" }
const userMap: UserMap = {
  "alice": { id: 1, name: "Alice" },
  "bob": { id: 2, name: "Bob" }
}

console.log("Update:", JSON.stringify(update))
console.log("Preview:", JSON.stringify(preview))`,
  },
  {
    id: 12,
    title: "Mapped Types",
    level: "basic",
    content:
      "Mapped types allow you to create new types by transforming each property of an existing type. " +
      "They use the syntax `{ [K in keyof T]: ... }`. Combined with `keyof` and modifiers " +
      "(`readonly`, `?`), they are extremely powerful.",
    task: "Create a mapped type `Nullable<T>` that makes all properties optional.",
    hint: "type Nullable<T> = { [K in keyof T]?: T[K] | null; }",
    starterCode: `interface Config {
  host: string
  port: number
  debug: boolean
  timeout: number
}

type ReadonlyConfig = { readonly [K in keyof Config]: Config[K] }
type OptionalConfig = { [K in keyof Config]?: Config[K] }
type Stringified<T> = { [K in keyof T]: string }

const config: ReadonlyConfig = {
  host: "localhost",
  port: 3000,
  debug: true,
  timeout: 5000
}

const partial: OptionalConfig = { host: "production.server.com" }

console.log("Config:", JSON.stringify(config))
console.log("Partial:", JSON.stringify(partial))`,
  },
  {
    id: 13,
    title: "Conditional Types",
    level: "basic",
    content:
      "Conditional types follow the syntax `T extends U ? X : Y` — if `T` is assignable to `U`, " +
      "the resulting type is `X`, otherwise `Y`. With `infer`, you can extract types " +
      "from inside other types.",
    task: "Create a conditional type `IsArray<T>` that returns `true` if T is an array.",
    hint: "type IsArray<T> = T extends any[] ? true : false",
    starterCode: `type IsString<T> = T extends string ? "yes" : "no"

type A = IsString<string>
type B = IsString<number>

type MyNonNullable<T> = T extends null | undefined ? never : T

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never
type Awaited<T> = T extends Promise<infer U> ? U : T

type ToArray<T> = T extends any ? T[] : never
type StrOrNumArray = ToArray<string | number>

function fetchUser(): Promise<{ id: number; name: string }> {
  return Promise.resolve({ id: 1, name: "Alice" })
}

type FetchResult = Awaited<ReturnType<typeof fetchUser>>
const result: FetchResult = { id: 1, name: "Alice" }
console.log("Result:", JSON.stringify(result))`,
  },
  {
    id: 14,
    title: "Decorators",
    level: "basic",
    content:
      "Decorators are special functions that can be applied to classes, methods, " +
      "properties and parameters using the `@decorator` syntax. They are widely used " +
      "in frameworks like Angular, NestJS and TypeORM.",
    task: "Create a `@readonly` decorator that makes a property non-editable.",
    hint: "Use Object.defineProperty in the descriptor.",
    starterCode: `function sealed(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

function measure(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value
  descriptor.value = function (...args: any[]) {
    const start = performance.now()
    const result = original.apply(this, args)
    const end = performance.now()
    console.log(\`\${key} executed in \${(end - start).toFixed(2)}ms\`)
    return result
  }
  return descriptor
}

@sealed
class Calculator {
  lastResult: number = 0

  @measure
  fibonacci(n: number): number {
    if (n <= 1) return n
    return this.fibonacci(n - 1) + this.fibonacci(n - 2)
  }
}

const calc = new Calculator()
console.log("Fib(10):", calc.fibonacci(10))`,
  },
  {
    id: 15,
    title: "Generics - Introduction",
    level: "basic",
    content:
      "Generics allow you to create components that work with any type while maintaining " +
      "type safety. They are represented by `<T>` and allow you to create reusable " +
      "functions, classes and interfaces.",
    task: "Create an `identity` function that returns the same value passed.",
    hint: "function identity<T>(value: T): T { return value; }",
    starterCode: `function identity<T>(value: T): T {
  return value
}

const str = identity<string>("hello")
const num = identity<number>(42)
const auto = identity("type inference")

console.log(str, num, auto)`,
  },
  {
    id: 16,
    title: "Literal Types",
    level: "basic",
    content:
      "TypeScript allows you to specify exact values a variable can have using literal types. " +
      "This is useful when you want to restrict a value to a specific set of strings or numbers.",
    task: "Create a variable that can only have the values 'pending', 'loading' or 'success'.",
    hint: "type Status = 'pending' | 'loading' | 'success';",
    starterCode: `type Status = "pending" | "loading" | "success"

let currentStatus: Status = "pending"
currentStatus = "loading"

console.log("Current status:", currentStatus)`,
  },
  {
    id: 17,
    title: "Function Overloads",
    level: "basic",
    content:
      "TypeScript supports function overloading, allowing you to define multiple signatures. " +
      "TypeScript chooses the correct signature based on the arguments provided.",
    task: "Create a `format` function that can format numbers and dates.",
    hint: "Use multiple signatures before the implementation.",
    starterCode: `function format(value: string): string
function format(value: number, decimals?: number): string
function format(value: Date): string
function format(value: any, decimals?: number): string {
  if (typeof value === "string") {
    return value.toUpperCase()
  }
  if (typeof value === "number") {
    return value.toFixed(decimals ?? 2)
  }
  if (value instanceof Date) {
    return value.toLocaleDateString()
  }
  return ""
}

console.log(format("hello"))
console.log(format(42.123, 2))
console.log(format(new Date()))`,
  },
  {
    id: 18,
    title: "Modules and Imports/Exports",
    level: "basic",
    content:
      "TypeScript has full support for the ES6 module system. Organize your code in separate files " +
      "with explicit imports and exports for better encapsulation.",
    task: "Create and export a function from a module, and import it in another.",
    hint: "Use `export` and `import` in ES6 style.",
    starterCode: `export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const reverseString = (str: string): string => {
  return str.split("").reverse().join("")
}

export default function trim(str: string): string {
  return str.trim()
}

const text = "  hello world  "
console.log(capitalize(text))
console.log(reverseString("TypeScript"))
console.log(trim(text))`,
  },
  {
    id: 19,
    title: "Namespaces",
    level: "basic",
    content:
      "Namespaces group related code without polluting the global scope. Use `namespace` " +
      "to organize code internally and `export` to expose members.",
    task: "Create a `MathUtils` namespace with `add` and `multiply` functions.",
    hint: "namespace MathUtils { export function add(...) }",
    starterCode: `namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b
  }

  export function multiply(a: number, b: number): number {
    return a * b
  }

  export const PI = 3.14159
}

console.log("Sum:", MathUtils.add(5, 3))
console.log("Multiply:", MathUtils.multiply(4, 7))
console.log("PI:", MathUtils.PI)`,
  },
  {
    id: 20,
    title: "Iterators and Generators",
    level: "basic",
    content:
      "TypeScript has full support for ES6 iterator and generator protocols. " +
      "Generators (`function*`) provide an easy way to create functions that return sequences.",
    task: "Create a generator function that yields numbers from 1 to N.",
    hint: "Use function* and yield.",
    starterCode: `function* counter(limit: number) {
  let count = 1
  while (count <= limit) {
    yield count
    count++
  }
}

console.log("Counting to 5:")
for (const num of counter(5)) {
  console.log(num)
}

const nums = [...counter(3)]
console.log("As array:", nums)`,
  },
  {
    id: 21,
    title: "Advanced Type Inference",
    level: "advanced",
    content:
      "TypeScript automatically infers types in many contexts. Inference works " +
      "in variables, parameters, returns and uses control flow analysis and contextual typing.",
    task: "Observe how TypeScript infers different types in the same example.",
    hint: "Return type changes based on the parameter.",
    starterCode: `function processInput(input: string | number) {
  if (typeof input === "string") {
    return input.toUpperCase()
  }
  return input * 2
}

const result1 = processInput("hello")
const result2 = processInput(21)

const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((n) => n * 2)

console.log("Result1:", result1)
console.log("Result2:", result2)
console.log("Doubled:", doubled)`,
  },
  {
    id: 22,
    title: "Structural Type Compatibility",
    level: "advanced",
    content:
      "TypeScript uses structural compatibility — two types are compatible if they have the same structure. " +
      "This is different from nominal systems and makes TypeScript more flexible.",
    task: "See how objects with compatible structures can be used interchangeably.",
    hint: "If properties match, the type is compatible.",
    starterCode: `interface Point {
  x: number
  y: number
}

interface NamedPoint {
  x: number
  y: number
  name: string
}

const point: Point = { x: 10, y: 20 }
const namedPoint: NamedPoint = { x: 10, y: 20, name: "Origin" }

let p: Point = namedPoint

function distanceFromOrigin(p: Point): number {
  return Math.sqrt(p.x * p.x + p.y * p.y)
}

console.log("Distance:", distanceFromOrigin(namedPoint))`,
  },
  {
    id: 23,
    title: "Working with JavaScript",
    level: "basic",
    content:
      "TypeScript was designed to gradually adopt existing JavaScript. " +
      "Use `@ts-check` or `checkJs: true` in tsconfig.json to check .js files.",
    task: "Understand how TypeScript checks JavaScript code.",
    hint: "Use JSDoc to add types in .js files.",
    starterCode: `// Simulating .js file verification
// To enable: use // @ts-check at the top

/**
 * Calculates the factorial of a number
 * @param {number} n - The number
 * @returns {number} The factorial of n
 */
function factorial(n) {
  if (n < 0) {
    throw new Error("Number must be non-negative")
  }

  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }

  return result
}

console.log("Factorial of 5:", factorial(5))`,
  },
  {
    id: 24,
    title: "Declaration Files (.d.ts)",
    level: "advanced",
    content:
      "Declaration files (.d.ts) provide type information for JavaScript libraries. " +
      "Type definitions for popular libraries are in DefinitelyTyped (@types/*).",
    task: "Create a simple declaration file for a function.",
    hint: "declare function name(params): returnType;",
    starterCode: `// Simulating a declaration file

declare namespace Utils {
  function formatDate(date: Date): string
  function trim(str: string): string

  class HttpClient {
    constructor(baseUrl: string)
    get<T>(endpoint: string): Promise<T>
    post<T>(endpoint: string, data: any): Promise<T>
  }
}

declare module "lodash-es" {
  export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait?: number
  ): T
}

console.log("Declaration file created!")
console.log("Install types: npm install @types/lodash")`,
  },
  {
    id: 25,
    title: "Classes - Introduction",
    level: "basic",
    content:
      "Classes in TypeScript work like modern JavaScript but with full typing. " +
      "You can define properties, methods, constructors and access modifiers.",
    task: "Add a `sayHello` method to the `Person` class.",
    hint: "sayHello() { return 'Hello, ' + this.name; }",
    starterCode: `class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet(): string {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old\`
  }
}

const person = new Person("Alice", 25)
console.log(person.greet())`,
  },
  {
    id: 26,
    title: "Access Modifiers",
    level: "basic",
    content:
      "TypeScript offers `public`, `private` and `protected` to control access to members. " +
      "There is also `readonly` for properties that cannot be changed after initialization.",
    task: "Make the `balance` property private and add a getter.",
    hint: "private balance: number; public getBalance()",
    starterCode: `class BankAccount {
  public readonly id: number
  private balance: number
  protected owner: string

  constructor(id: number, owner: string, initialBalance: number) {
    this.id = id
    this.owner = owner
    this.balance = initialBalance
  }

  public getBalance(): number {
    return this.balance
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount
    }
  }
}

const account = new BankAccount(1, "Alice", 1000)
console.log("ID:", account.id)
console.log("Balance:", account.getBalance())
account.deposit(500)
console.log("New Balance:", account.getBalance())`,
  },
  {
    id: 27,
    title: "Class Inheritance",
    level: "basic",
    content:
      "Classes can inherit from other classes using `extends`. The child class has access to " +
      "public/protected methods and properties from the parent class and can override them.",
    task: "Create a `Student` class that inherits from `Person`.",
    hint: "class Student extends Person { }",
    starterCode: `class Person {
  constructor(public name: string, public age: number) {}

  greet(): string {
    return \`Hello, I am \${this.name}\`
  }
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age)
  }

  study(): string {
    return \`\${this.name} is studying\`
  }
}

const student = new Student("Alice", 20, "A")
console.log(student.greet())
console.log(student.study())`,
  },
  {
    id: 28,
    title: "Abstract Classes",
    level: "basic",
    content:
      "Abstract classes cannot be instantiated directly, they serve as base for other classes. " +
      "They can contain abstract methods (without implementation) that child classes must implement.",
    task: "Create an abstract `Shape` class with abstract `area` method.",
    hint: "abstract class Shape { abstract area(): number; }",
    starterCode: `abstract class Shape {
  abstract area(): number
  abstract perimeter(): number

  describe(): string {
    return \`Area: \${this.area()}, Perimeter: \${this.perimeter()}\`
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }

  area(): number {
    return this.width * this.height
  }

  perimeter(): number {
    return 2 * (this.width + this.height)
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }

  area(): number {
    return Math.PI * this.radius * this.radius
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius
  }
}

const rect = new Rectangle(5, 3)
const circle = new Circle(2)

console.log(rect.describe())
console.log(circle.describe())`,
  },
  {
    id: 29,
    title: "Getters and Setters",
    level: "basic",
    content:
      "Getters and setters allow precise control over property access. " +
      "Useful for validation, computed values, or maintaining class invariants.",
    task: "Create a `fullName` getter that returns the full name.",
    hint: "get fullName(): string { return this.firstName + ' ' + this.lastName; }",
    starterCode: `class User {
  private _password: string = ""

  constructor(
    public firstName: string,
    public lastName: string
  ) {}

  get fullName(): string {
    return \`\${this.firstName} \${this.lastName}\`
  }

  get password(): string {
    return "***"
  }

  set password(value: string) {
    if (value.length >= 6) {
      this._password = value
    } else {
      console.log("Password must be at least 6 characters")
    }
  }
}

const user = new User("John", "Doe")
console.log("Full Name:", user.fullName)
user.password = "123456"
console.log("Password:", user.password)`,
  },
  {
    id: 30,
    title: "Static Members",
    level: "basic",
    content:
      "Static members belong to the class itself, not to instances. " +
      "Accessed via `ClassName.property`, they are useful for constants or utility functions.",
    task: "Add a static `createDefault` method to the `User` class.",
    hint: "static createDefault(): User { }",
    starterCode: `class MathHelper {
  static readonly PI = 3.14159

  static add(a: number, b: number): number {
    return a + b
  }

  static factorial(n: number): number {
    if (n <= 1) return 1
    return n * this.factorial(n - 1)
  }
}

console.log("PI:", MathHelper.PI)
console.log("Add:", MathHelper.add(5, 3))
console.log("Factorial 5:", MathHelper.factorial(5))`,
  },
  {
    id: 31,
    title: "Utility Types - Record, Partial, Readonly",
    level: "advanced",
    content:
      "`Record<K, V>` creates an object type with keys K and values V. " +
      "`Partial<T>` makes all properties optional. " +
      "`Readonly<T>` makes all properties read-only.",
    task: "Create a `UserRecord` type using Record<string, User>.",
    hint: "type UserRecord = Record<string, User>",
    starterCode: `interface User {
  id: number
  name: string
  email: string
}

type UserRecord = Record<string, User>
type PartialUser = Partial<User>
type ReadonlyUser = Readonly<User>

const users: UserRecord = {
  "alice": { id: 1, name: "Alice", email: "alice@example.com" },
  "bob": { id: 2, name: "Bob", email: "bob@example.com" }
}

const partial: PartialUser = { name: "New Name" }
const readonly: ReadonlyUser = { id: 1, name: "Alice", email: "alice@example.com" }

console.log("Users:", JSON.stringify(users))
console.log("Partial:", JSON.stringify(partial))`,
  },
  {
    id: 32,
    title: "Utility Types - Extract and Exclude",
    level: "advanced",
    content:
      "`Extract<T, U>` extracts from T the types that are assignable to U. " +
      "`Exclude<T, U>` removes from T the types that are assignable to U.",
    task: "Use Extract to get only strings from a union type.",
    hint: "type Strings = Extract<T, string>",
    starterCode: `type T = string | number | boolean | null

type Strings = Extract<T, string>
type Numbers = Extract<T, number>
type NotNull = Exclude<T, null | undefined>

const str: Strings = "hello"
const num: Numbers = 42
const bool: NotNull = true

console.log("Strings:", str)
console.log("Numbers:", num)
console.log("NotNull:", bool)`,
  },
  {
    id: 33,
    title: "Utility Types - ReturnType and Parameters",
    level: "advanced",
    content:
      "`ReturnType<T>` gets the return type of a function. " +
      "`Parameters<T>` gets the parameter types as a tuple.",
    task: "Get the return type and parameters of a function.",
    hint: "type R = ReturnType<typeof func>",
    starterCode: `function createUser(name: string, age: number): { name: string; age: number; id: number } {
  return { name, age, id: Math.random() }
}

type Return = ReturnType<typeof createUser>
type Params = Parameters<typeof createUser>

const newUser: Return = { name: "Alice", age: 25, id: 1 }
const args: Params = ["Bob", 30]

console.log("User:", JSON.stringify(newUser))
console.log("Args:", args)`,
  },
  {
    id: 34,
    title: "Type Guards",
    level: "basic",
    content:
      "Type guards are expressions that refine the type of a variable. " +
      "Use `typeof`, `instanceof`, or custom with `is` to filter types in unions.",
    task: "Create a type guard to check if a value is a string.",
    hint: "function isString(value: unknown): value is string { }",
    starterCode: `function isString(value: unknown): value is string {
  return typeof value === "string"
}

function process(value: string | number) {
  if (isString(value)) {
    return value.toUpperCase()
  }
  return value * 2
}

console.log(process("hello"))
console.log(process(42))

class Dog {
  bark() { return "Woof!" }
}

class Cat {
  meow() { return "Meow!" }
}

function isDog(animal: Dog | Cat): animal is Dog {
  return "bark" in animal
}

const pet = new Dog()
if (isDog(pet)) {
  console.log(pet.bark())
}`,
  },
  {
    id: 35,
    title: "unknown and any",
    level: "basic",
    content:
      "`any` completely disables type checking. " +
      '`unknown` is the "safe" type that represents any value — you must refine it before using.',
    task: "Refine an `unknown` type to use it safely.",
    hint: "Use type guards to check the type.",
    starterCode: `let anyValue: any = "hello"
let unknownValue: unknown = "world"

console.log(anyValue.toUpperCase())

console.log(unknownValue.toUpperCase())

if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase())
}

const str: string = unknownValue as string
console.log(str)`,
  },
  {
    id: 36,
    title: "never",
    level: "basic",
    content:
      "`never` represents values that never occur. Functions that always throw errors " +
      "or infinite loops have return type `never`. It is also used in exhaustive unions.",
    task: "Create a function that throws an error and has return type never.",
    hint: "function error(): never { throw new Error(); }",
    starterCode: `function throwError(message: string): never {
  throw new Error(message)
}

function infiniteLoop(): never {
  while (true) {}
}

type Direction = "North" | "South" | "East" | "West"

function getDirection(direction: Direction): string {
  switch (direction) {
    case "North":
      return "North"
    case "South":
      return "South"
    case "East":
      return "East"
    case "West":
      return "West"
    default:
      const _exhaustive: never = direction
      return _exhaustive
  }
}

console.log("Declaration merging works!")`,
  },
  {
    id: 37,
    title: "keyof and Index Access Types",
    level: "advanced",
    content:
      "`keyof` gets the keys of a type as a union. " +
      "Use `T[K]` to access the type of a specific property.",
    task: "Get the keys of User and the type of the 'name' property.",
    hint: 'type Keys = keyof User; type NameType = User["name"]',
    starterCode: `interface User {
  id: number
  name: string
  email: string
}

type UserKeys = keyof User

type NameType = User["name"]
type IdType = User["id"]

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user: User = { id: 1, name: "Alice", email: "alice@example.com" }

console.log(getProperty(user, "name"))
console.log(getProperty(user, "email"))`,
  },
  {
    id: 38,
    title: "Generic Constraints",
    level: "basic",
    content:
      "Constraints use `extends` to limit the types that can be used with generics. " +
      "This ensures the type has the necessary properties.",
    task: "Create a generic that only accepts objects with a `length` property.",
    hint: "function fn<T extends { length: number }>(arg: T)",
    starterCode: `function getLength<T extends { length: number }>(arg: T): number {
  return arg.length
}

console.log(getLength("hello"))
console.log(getLength([1, 2, 3]))
console.log(getLength({ length: 10 }))

function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b }
}

const result = merge({ name: "Alice" }, { age: 25 })
console.log("Merged:", JSON.stringify(result))`,
  },
  {
    id: 39,
    title: "Generic Classes",
    level: "basic",
    content:
      "Generic classes allow creating reusable components that work with different types. " +
      "The type is specified when creating an instance of the class.",
    task: "Create a class `Box<T>` that stores a value.",
    hint: "class Box<T> { private content: T; }",
    starterCode: `class Box<T> {
  private content: T

  constructor(content: T) {
    this.content = content
  }

  get(): T {
    return this.content
  }

  set(value: T): void {
    this.content = value
  }
}

const stringBox = new Box<string>("Hello")
const numberBox = new Box<number>(42)

console.log("String Box:", stringBox.get())
console.log("Number Box:", numberBox.get())

numberBox.set(100)
console.log("Updated:", numberBox.get())`,
  },
  {
    id: 40,
    title: "Generic Interfaces",
    level: "basic",
    content:
      "Generic interfaces define contracts that work with multiple types. " +
      "They are the foundation of libraries like React, Zod, and Prisma.",
    task: "Create a `Repository<T>` interface with CRUD methods.",
    hint: "interface Repository<T> { findAll(): T[]; }",
    starterCode: `interface Entity {
  id: number
}

interface Repository<T extends Entity> {
  findAll(): T[]
  findById(id: number): T | undefined
  save(entity: T): void
  delete(id: number): boolean
}

interface User extends Entity {
  name: string
  email: string
}

class UserRepository implements Repository<User> {
  private users: User[] = []

  findAll(): User[] {
    return [...this.users]
  }

  findById(id: number): User | undefined {
    return this.users.find(u => u.id === id)
  }

  save(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id)
    if (index >= 0) {
      this.users[index] = user
    } else {
      this.users.push(user)
    }
  }

  delete(id: number): boolean {
    const index = this.users.findIndex(u => u.id === id)
    if (index >= 0) {
      this.users.splice(index, 1)
      return true
    }
    return false
  }
}

const repo = new UserRepository()
repo.save({ id: 1, name: "Alice", email: "alice@example.com" })
repo.save({ id: 2, name: "Bob", email: "bob@example.com" })
console.log("Users:", repo.findAll())
console.log("Find 1:", repo.findById(1))`,
  },
  {
    id: 41,
    title: "Error Handling Typing",
    level: "basic",
    content:
      "TypeScript improves error handling with better inference in try/catch blocks. " +
      "Specify the error type for better autocomplete.",
    task: "Create a function that can throw errors and handle them.",
    hint: "try { } catch (error) { if (error instanceof Error) { } }",
    starterCode: `function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed")
  }
  return a / b
}

function processInput(input: string): number {
  const num = Number(input)

  if (isNaN(num)) {
    throw new Error("Input must be a valid number")
  }

  if (num < 0) {
    throw new Error("Number must be positive")
  }

  return num * 2
}

try {
  const result = processInput("5")
  console.log("Result:", result)

  const invalidResult = processInput("-3")
  console.log("This won't print:", invalidResult)
} catch (error) {
  if (error instanceof Error) {
    console.error("Error caught:", error.message)
  }
}

try {
  divide(10, 0)
} catch (error) {
  if (error instanceof Error) {
    console.log("Error:", error.message)
  }
}`,
  },
  {
    id: 42,
    title: "Async/Await and Promises",
    level: "basic",
    content:
      "TypeScript fully supports typed async/await. Async functions return Promises, " +
      "and you can type the resolved value.",
    task: "Create an async function that returns a typed user.",
    hint: "async function fetchUser(): Promise<User> { }",
    starterCode: `interface User {
  id: number
  name: string
  email: string
}

async function fetchUser(userId: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "User " + userId,
        email: "user" + userId + "@example.com"
      })
    }, 1000)
  })
}

async function main() {
  console.log("Fetching user data...")
  const userData = await fetchUser(1)
  console.log("User:", JSON.stringify(userData))

  const users = await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
  ])
  console.log("All users:", JSON.stringify(users))
}

main()`,
  },
  {
    id: 43,
    title: "this in Types",
    level: "basic",
    content:
      "TypeScript allows typing `this` in methods. Use `this` as the first parameter " +
      "to ensure methods are called in the correct context (fluent API).",
    task: "Create a fluent API with methods that return `this`.",
    hint: "add(name: string): this { }",
    starterCode: `class Builder {
  private parts: string[] = []

  add(name: string): this {
    this.parts.push(name)
    return this
  }

  build(): string {
    return this.parts.join(" -> ")
  }
}

const result = new Builder()
  .add("Header")
  .add("Body")
  .add("Footer")
  .build()

console.log("Built:", result)

class Calculator {
  private value: number = 0

  add(n: number): this {
    this.value += n
    return this
  }

  subtract(n: number): this {
    this.value -= n
    return this
  }

  multiply(n: number): this {
    this.value *= n
    return this
  }

  result(): number {
    return this.value
  }
}

const calc = new Calculator()
  .add(10)
  .subtract(3)
  .multiply(2)
console.log("Calc result:", calc.result())`,
  },
  {
    id: 44,
    title: "Optional Chaining and Nullish Coalescing",
    level: "basic",
    content:
      "`?.` accesses deep properties without error if something is null/undefined. " +
      "`??` returns the right operand if the left is null/undefined.",
    task: "Use optional chaining to access a nested property.",
    hint: "user?.address?.city",
    starterCode: `interface User {
  name: string
  address?: {
    city: string
    zip?: string
  }
}

const user1: User = {
  name: "Alice",
  address: {
    city: "São Paulo",
    zip: "01000-000"
  }
}

const user2: User = {
  name: "Bob"
}

console.log("User1 city:", user1.address?.city)
console.log("User2 city:", user2.address?.city)
console.log("User2 zip:", user2.address?.zip ?? "N/A")

const value = null ?? "default"
console.log("Nullish:", value)

const zero = 0 ?? "default"
console.log("Zero:", zero)`,
  },
  {
    id: 45,
    title: "Non-null Assertion Operator",
    level: "basic",
    content:
      "`!` tells TypeScript that a value is not null/undefined. Use with caution — " +
      "only when you are sure the value exists.",
    task: "Use non-null assertion to access a guaranteed property.",
    hint: "element!.value",
    starterCode: `function getElement(): HTMLInputElement | null {
  return document.createElement("input")
}

const element = getElement()

console.log("Value:", element.value)

function process(data: string | null): string {
  return data!.toUpperCase()
}

const result = process("hello")
console.log("Result:", result)`,
  },
  {
    id: 46,
    title: "Type Casting vs Assertion",
    level: "basic",
    content:
      "Type assertions (`as`) convert types. Use them when you know more about the type " +
      "than TypeScript does. Different from casting in other languages, it doesn't convert the value.",
    task: "Use assertion to convert one type to another.",
    hint: "const num = value as number",
    starterCode: `let input: unknown = "123"

const strLength1 = (input as string).length
const strLength2 = (<string>input).length

console.log("Length 1:", strLength1)
console.log("Length 2:", strLength2)

interface Dog {
  kind: "dog"
  bark(): void
}

interface Cat {
  kind: "cat"
  meow(): void
}

function processAnimal(animal: Dog | Cat) {
  if (animal.kind === "dog") {
    animal.bark()
  } else {
    animal.meow()
  }
}

const dog = { kind: "dog" as const, bark: () => console.log("Woof!") }
processAnimal(dog)`,
  },
  {
    id: 47,
    title: "Template Literal Types",
    level: "advanced",
    content:
      "Template literal types create new types using string templates. " +
      "Combine with infer to extract and manipulate strings in types.",
    task: "Create a type that automatically creates getters.",
    hint: "type Getters<T> = { [K in keyof T as `get${K}`]: () => T[K] }",
    starterCode: `type World = "world"
type Greeting = \`hello \${World}\`

type EventName = \`on\${Capitalize<string>}\`
type Handler = \`handle\${Capitalize<string>}\`

type PropKeys = "name" | "age" | "email"
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
}

interface User {
  name: string
  age: number
}

type UserGetters = Getters<User>

const getters: UserGetters = {
  getName: () => "Alice",
  getAge: () => 25
}

console.log(getters.getName())
console.log(getters.getAge())`,
  },
  {
    id: 48,
    title: "Discriminated Unions",
    level: "basic",
    content:
      "Create unions with a common property (discriminator) to make it easier for TypeScript " +
      "to identify which union member is in use. Very useful for state management.",
    task: "Create a discriminated union for file formats.",
    hint: 'type File = { type: "image", data: ... } | { type: "video", data: ... }',
    starterCode: `type Loading = { status: "loading" }
type Success = { status: "success"; data: string }
type Error = { status: "error"; error: Error }

type Result = Loading | Success | Error

function handleResult(result: Result) {
  switch (result.status) {
    case "loading":
      console.log("Loading...")
      break
    case "success":
      console.log("Data:", result.data)
      break
    case "error":
      console.log("Error:", result.error.message)
      break
  }
}

const loading: Result = { status: "loading" }
const success: Result = { status: "success", data: "Hello!" }
const errorResult: Result = { status: "error", error: new Error("Failed!") }

handleResult(loading)
handleResult(success)
handleResult(errorResult)`,
  },
  {
    id: 49,
    title: "Mixin Classes",
    level: "advanced",
    content:
      "Mixins are functions that take a class and return a new class with extra functionality. " +
      "Useful for composition when single inheritance is not enough.",
    task: "Create a `Serializable` mixin that adds a toJSON method.",
    hint: "function Serializable<T extends Constructor<{}>>(Base: T)",
    starterCode: `type Constructor<T = {}> = new (...args: any[]) => T

function Serializable<T extends Constructor<{}>>(Base: T) {
  return class extends Base {
    toJSON() {
      const obj: any = {}
      for (const key of Object.keys(this)) {
        obj[key] = (this as any)[key]
      }
      return obj
    }
  }
}

function Timestamped<T extends Constructor<{}>>(Base: T) {
  return class extends Base {
    createdAt = new Date()
    updatedAt = new Date()
  }
}

@Serializable
@Timestamped
class User {
  constructor(public name: string, public age: number) {}
}

const user = new User("Alice", 25)
console.log("User:", JSON.stringify(user, null, 2))`,
  },
  {
    id: 50,
    title: "Declaration Merging",
    level: "advanced",
    content:
      'TypeScript allows interfaces and namespaces with the same name to be "merged". ' +
      "Interfaces are merged automatically, namespaces require `export`.",
    task: "Create an interface that is merged with another.",
    hint: "interface Animal { name: string; } interface Animal { age: number; }",
    starterCode: `interface User {
  name: string
}

interface User {
  age: number
}

const user: User = {
  name: "Alice",
  age: 25
}

console.log("Merged User:", JSON.stringify(user))

namespace Animals {
  export function walk(): void {
    console.log("Walking...")
  }
}

namespace Animals {
  export function run(): void {
    console.log("Running...")
  }
}

Animals.walk()
Animals.run()

console.log("Declaration merging works!")`,
  },
  {
    id: 51,
    title: "Type-safe Event Emitter",
    level: "advanced",
    content:
      "Create a type-safe event emitter that guarantees listeners and events match. " +
      "Use generics to map event names to their payloads.",
    task: "Create an EventMap type and implement an emitter.",
    hint: "type Events = { event: payload }",
    starterCode: `type EventMap = {
  userJoined: { userId: number; name: string }
  userLeft: { userId: number }
  message: { from: string; text: string }
  connected: void
}

type EventKey = keyof EventMap
type EventReceiver<T> = (params: T) => void

class EventEmitter<T> {
  private listeners: { [K in keyof T]?: Array<EventReceiver<T[K]>> } = {}

  on<K extends EventKey>(eventName: K, fn: EventReceiver<T[K]>): void {
    this.listeners[eventName] = this.listeners[eventName] || []
    this.listeners[eventName]!.push(fn)
  }

  emit<K extends EventKey>(eventName: K, params: T[K]): void {
    const listeners = this.listeners[eventName]
    if (listeners) {
      listeners.forEach(fn => fn(params))
    }
  }
}

const emitter = new EventEmitter<EventMap>()

emitter.on("userJoined", ({ userId, name }) => {
  console.log(\`User \${name} (\${userId}) joined\`)
})

emitter.on("message", ({ from, text }) => {
  console.log(\`\${from}: \${text}\`)
})

emitter.emit("userJoined", { userId: 1, name: "Alice" })
emitter.emit("message", { from: "Bob", text: "Hello!" })`,
  },
  {
    id: 52,
    title: "Builder Pattern with Generics",
    level: "advanced",
    content:
      "The Builder pattern allows you to construct complex objects step by step. " +
      "With generics, we can ensure methods return the correct builder.",
    task: "Implement a builder to create users with validation.",
    hint: "Use this return for method chaining.",
    starterCode: `class UserBuilder {
  private user: { name?: string; age?: number; email?: string } = {}

  name(value: string): this {
    if (value.length < 2) throw new Error("Name too short")
    this.user.name = value
    return this
  }

  age(value: number): this {
    if (value < 0 || value > 150) throw new Error("Invalid age")
    this.user.age = value
    return this
  }

  email(value: string): this {
    if (!value.includes("@")) throw new Error("Invalid email")
    this.user.email = value
    return this
  }

  build(): { name: string; age: number; email: string } {
    if (!this.user.name || !this.user.age || !this.user.email) {
      throw new Error("Missing required fields")
    }
    return this.user as { name: string; age: number; email: string }
  }
}

const user = new UserBuilder()
  .name("Alice")
  .age(25)
  .email("alice@example.com")
  .build()

console.log("Built user:", JSON.stringify(user))`,
  },
  {
    id: 53,
    title: "Currying and Function Composition",
    level: "basic",
    content:
      "Currying transforms multi-arg functions into sequences of single-arg functions. " +
      "Composition combines functions to create data pipelines.",
    task: "Create curried functions and compose them.",
    hint: "const add = (a: number) => (b: number) => a + b",
    starterCode: `const add = (a: number) => (b: number): number => a + b
const multiply = (a: number) => (b: number): number => a * b
const subtract = (a: number) => (b: number): number => a - b
const divide = (a: number) => (b: number): number => a / b

const add5 = add(5)
const multiply3 = multiply(3)

console.log("add5(3):", add5(3))
console.log("multiply3(4):", multiply3(3))

const pipe = <T>(...fns: Array<(arg: T) => T>) =>
  (value: T): T => fns.reduce((acc, fn) => fn(acc), value)

const add10 = add(10)
const double = multiply(2)
const subtract5 = subtract(5)

const processNumber = pipe(add10, double, subtract5)

console.log("pipe(add10, double, subtract5)(0):", processNumber(0))
console.log("pipe(add10, double, subtract5)(5):", processNumber(5))`,
  },
  {
    id: 54,
    title: "Type-safe API Client",
    level: "advanced",
    content:
      "Create an HTTP client that automatically infers response types. " +
      "Use generics to type endpoints and responses.",
    task: "Create a client with types for GET and POST.",
    hint: "class ApiClient<T> { get<U>(url): Promise<U> }",
    starterCode: `interface User {
  id: number
  name: string
  email: string
}

interface Post {
  id: number
  title: string
  body: string
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async get<T>(endpoint: string): Promise<T> {
    console.log(\`GET \${this.baseUrl}\${endpoint}\`)
    return {} as T
  }

  async post<T, B>(endpoint: string, body: B): Promise<T> {
    console.log(\`POST \${this.baseUrl}\${endpoint}\`, body)
    return {} as T
  }
}

const api = new ApiClient("https://api.example.com")

async function fetchUsers(): Promise<User[]> {
  return api.get<User[]>("/users")
}

async function createUser(user: Omit<User, "id">): Promise<User> {
  return api.post<User, Omit<User, "id">>("/users", user)
}

fetchUsers().then(users => console.log("Users:", users))
createUser({ name: "Alice", email: "alice@example.com" })
  .then(user => console.log("Created:", user))`,
  },
  {
    id: 55,
    title: "Flattened Union Types",
    level: "advanced",
    content:
      "Create complex union types and use distribution to transform them. " +
      "Useful for automatically creating literal string unions.",
    task: "Create a union of HTTP methods from an array.",
    hint: "type Method = typeof methods[number]",
    starterCode: `const methods = ["get", "post", "put", "delete", "patch"] as const

type HttpMethod = typeof methods[number]

type Route = {
  method: HttpMethod
  path: string
  handler: () => string
}

const routes: Route[] = [
  { method: "get", path: "/users", handler: () => "get users" },
  { method: "post", path: "/users", handler: () => "create user" },
  { method: "get", path: "/posts", handler: () => "get posts" },
  { day: "delete", path: "/posts/:id", handler: () => "delete post" },
]

function handleRoute(route: Route): string {
  return route.handler()
}

routes.forEach(route => {
  console.log(\`\${route.method.toUpperCase()} \${route.path} -> \${handleRoute(route)}\`)
})

type Color = "red" | "green" | "blue"
type Size = "small" | "medium" | "large"

type ProductVariant = \`\${Color}-\${Size}\`

const variants: ProductVariant[] = [
  "red-small",
  "green-medium",
  "blue-large",
]

console.log("Variants:", variants)`,
  },
  {
    id: 56,
    title: "Immutable Update Patterns",
    level: "basic",
    content:
      "Update objects and arrays immutably to avoid accidental mutations. " +
      "Use spread operator and methods that return new arrays.",
    task: "Update a nested object immutably.",
    hint: "Use spread to create new references.",
    starterCode: `interface State {
  user: {
    profile: {
      name: string
      address: {
        city: string
        zip: string
      }
    }
  }
  items: string[]
}

const state: State = {
  user: {
    profile: {
      name: "Alice",
      address: {
        city: "São Paulo",
        zip: "01000-000"
      }
    }
  },
  items: ["apple", "banana"]
}

const newState = {
  ...state,
  user: {
    ...state.user,
    profile: {
      ...state.user.profile,
      address: {
        ...state.user.profile.address,
        city: "Rio de Janeiro"
      }
    }
  },
  items: [...state.items, "orange"]
}

console.log("Original city:", state.user.profile.address.city)
console.log("New city:", newState.user.profile.address.city)
console.log("Original items:", state.items)
console.log("New items:", newState.items)
console.log("Same reference?", state === newState)`,
  },
  {
    id: 57,
    title: "Recursive Types",
    level: "advanced",
    content:
      "Recursive types allow you to represent hierarchical structures like trees and lists. " +
      "Useful for JSON, ASTs, and nested data structures.",
    task: "Create a type for a directory tree.",
    hint: "interface TreeNode { name: string; children?: TreeNode[] }",
    starterCode: `interface TreeNode {
  name: string
  type: "file" | "folder"
  children?: TreeNode[]
}

const fileSystem: TreeNode = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        { name: "index.ts", type: "file" },
        { name: "utils.ts", type: "file" },
      ]
    },
    {
      name: "package.json",
      type: "file"
    },
    {
      name: "README.md",
      type: "file"
    }
  ]
}

function printTree(node: TreeNode, indent = 0): void {
  const prefix = "  ".repeat(indent)
  console.log(\`\${prefix}\${node.type === "folder" ? "📁" : "📄"} \${node.name}\`)
  node.children?.forEach(child => printTree(child, indent + 1))
}

printTree(fileSystem)

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue }

const json: JsonValue = {
  "name": "test",
  "values": [1, 2, 3],
  "nested": { "a": true }
}

console.log("JSON:", JSON.stringify(json, null, 2))`,
  },
  {
    id: 58,
    title: "Branded Types",
    level: "advanced",
    content:
      'Branded types add "tags" to existing types to distinguish primitive types. ' +
      "Useful for IDs, currencies, and values that need semantic validation.",
    task: "Create branded types for UserId and OrderId.",
    hint: 'type UserId = string & { __brand: "UserId" }',
    starterCode: `type UserId = string & { readonly __brand: "UserId" }
type OrderId = string & { readonly __brand: "OrderId" }
type Email = string & { readonly __brand: "Email" }

function createUserId(id: string): UserId {
  return id as UserId
}

function createOrderId(id: string): OrderId {
  return id as OrderId
}

function createEmail(email: string): Email {
  if (!email.includes("@")) throw new Error("Invalid email")
  return email as Email
}

function getUserById(id: UserId): void {
  console.log(\`Fetching user \${id}\`)
}

function getOrderById(id: OrderId): void {
  console.log(\`Fetching order \${id}\`)
}

const userId = createUserId("usr_123")
const orderId = createOrderId("ord_456")
const email = createEmail("alice@example.com")

getUserById(userId)
getOrderById(orderId)

console.log("Email:", email)`,
  },
  {
    id: 59,
    title: "Finite State Machines",
    level: "advanced",
    content:
      "State machines define a finite number of states and transitions between them. " +
      "TypeScript can ensure only valid transitions occur.",
    task: "Create a state machine for an order.",
    hint: 'type State = "pending" | "shipped" | "delivered"',
    starterCode: `type OrderState = "pending" | "confirmed" | "shipped" | "delivered" | "cancelled"

type OrderEvent =
  | { type: "CONFIRM" }
  | { type: "SHIP" }
  | { type: "DELIVER" }
  | { type: "CANCEL" }

type Order = {
  state: OrderState
  events: OrderEvent[]
}

const transitions: Record<OrderState, OrderEvent["type"][]> = {
  pending: ["CONFIRM", "CANCEL"],
  confirmed: ["SHIP", "CANCEL"],
  shipped: ["DELIVER"],
  delivered: [],
  cancelled: []
}

function transition(order: Order, event: OrderEvent): Order {
  const allowed = transitions[order.state]

  if (!allowed.includes(event.type)) {
    throw new Error(\`Cannot \${event.type} from \${order.state}\`)
  }

  const nextState: OrderState = {
    CONFIRM: "confirmed",
    SHIP: "shipped",
    DELIVER: "delivered",
    CANCEL: "cancelled"
  }[event.type]

  return {
    state: nextState,
    events: [...order.events, event]
  }
}

let order: Order = { state: "pending", events: [] }
order = transition(order, { type: "CONFIRM" })
console.log("After confirm:", order.state)

order = transition(order, { type: "SHIP" })
console.log("After ship:", order.state)

order = transition(order, { type: "DELIVER" })
console.log("After deliver:", order.state)`,
  },
  {
    id: 60,
    title: "Weak Types and Type Guards",
    level: "advanced",
    content:
      "Weak types are types with all properties optional. " +
      "TypeScript has special checking to ensure at least one property is provided.",
    task: "Create a function that accepts only valid options.",
    hint: 'Use "at least one" constraint with keyof',
    starterCode: `type Options = {
  timeout?: number
  retries?: number
  onError?: (error: Error) => void
  onSuccess?: () => void
}

type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T]

function configure(options: AtLeastOne<Options>): void {
  console.log("Options provided:", Object.keys(options))
}

configure({ timeout: 5000 })
configure({ retries: 3 })
configure({ onError: (err) => console.error(err) })
configure({ timeout: 1000, retries: 5 })`,
  },
  {
    id: 61,
    title: "Proxy and Interception",
    level: "advanced",
    content:
      "Proxy allows you to intercept operations like reading, writing, and method invocation. " +
      "Useful for logging, validation, and lazy loading.",
    task: "Create a proxy to validate properties.",
    hint: "new Proxy(target, { get, set })",
    starterCode: `interface User {
  name: string
  age: number
}

function createValidatedProxy<T extends object>(target: T): T {
  return new Proxy(target, {
    get(obj, prop) {
      console.log(\`Getting \${String(prop)}\`)
      return (obj as any)[prop]
    },
    set(obj, prop, value) {
      if (prop === "age" && typeof value === "number" && value < 0) {
        throw new Error("Age cannot be negative")
      }
      console.log(\`Setting \${String(prop)} to \${value}\`)
      ;(obj as any)[prop] = value
      return true
    }
  })
}

const user = createValidatedProxy<User>({
  name: "Alice",
  age: 25
})

console.log("Name:", user.name)
user.age = 30
console.log("Age updated:", user.age)

try {
  user.age = -5
} catch (e) {
  console.log("Error:", (e as Error).message)
}`,
  },
  {
    id: 62,
    title: "Symbol and Metadata",
    level: "basic",
    content:
      "Symbols are unique values that can serve as property keys. " +
      'Useful for creating "hidden" properties and for reflection.',
    task: "Use Symbol to create a private property.",
    hint: 'const privateKey = Symbol("private")',
    starterCode: `const nameKey = Symbol("name")
const ageKey = Symbol("age")

const user = {
  [nameKey]: "Alice",
  [ageKey]: 25,
  publicField: "I am public"
}

console.log("Public:", user.publicField)
console.log("Name:", user[nameKey])
console.log("Age:", user[ageKey])

const symbols = Object.getOwnPropertySymbols(user)
console.log("Symbols:", symbols)

class Cache {
  private cache = new Map<symbol, any>()

  set(key: symbol, value: any): void {
    this.cache.set(key, value)
  }

  get(key: symbol): any {
    return this.cache.get(key)
  }
}

const cache = new Cache()
const key1 = Symbol("user")
cache.set(key1, { name: "Alice" })
console.log("Cached:", cache.get(key1))`,
  },
  {
    id: 63,
    title: "Asserts Type Guards",
    level: "advanced",
    content:
      "Asserts type guards are functions that verify and refine types, " +
      "throwing an error if the condition is not met.",
    task: "Create an assert that checks if a value is a positive number.",
    hint: "function assert(condition, message)",
    starterCode: `function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new Error(message)
  }
}

function assertNonNull<T>(value: T, message: string): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error(message)
  }
}

function processValue(value: string | number) {
  assert(typeof value === "number", "Value must be a number")
  assert(value > 0, "Value must be positive")

  console.log("Value is positive number:", value * 2)
}

processValue(10)

try {
  processValue(-5)
} catch (e) {
  console.log("Caught:", (e as Error).message)
}

let data: string | null = "hello"
assertNonNull(data, "Data cannot be null")
console.log("Data length:", data.length)`,
  },
  {
    id: 64,
    title: "Infer with Conditional Types",
    level: "advanced",
    content:
      "`infer` extracts types from inside other types. " +
      "It can extract types from functions, arrays, promises, and objects.",
    task: "Extract the element type from an array.",
    hint: "type ArrayElement<T> = T extends (infer U)[] ? U : never",
    starterCode: `type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never
type ParametersOf<T> = T extends (...args: infer P) => any ? P : never
type ArrayElement<T> = T extends (infer U)[] ? U : never
type PromiseValue<T> = T extends Promise<infer U> ? U : T

function getUser() {
  return { id: 1, name: "Alice" }
}

function saveUser(name: string, age: number) {
  return { success: true }
}

type Return = ReturnTypeOf<typeof getUser>
type Params = ParametersOf<typeof saveUser>
type Strings = ArrayElement<string[]>
type Numbers = ArrayElement<number[]>
type PromiseResult = PromiseValue<Promise<{ data: string }>>

const ret: Return = { id: 1, name: "Bob" }
const params: Params = ["test", 25]
const elem: Strings = "hello"
const num: Numbers = 42
const pv: PromiseResult = { data: "test" }

console.log("Return:", ret)
console.log("Params:", params)
console.log("Element:", elem)
console.log("Promise:", pv)`,
  },
  {
    id: 65,
    title: "Type-safe Event Bus",
    level: "advanced",
    content:
      "Create an event bus that guarantees type safety for events and handlers. " +
      "Use mapped types to derive event types.",
    task: "Implement an event bus with type-safe subscribe and emit.",
    hint: "Use keyof and generics for inference.",
    starterCode: `type Events = {
  login: { userId: number; timestamp: Date }
  logout: { userId: number }
  purchase: { userId: number; amount: number }
  error: Error
}

type EventBus = {
  on<K extends keyof Events>(event: K, handler: (data: Events[K]) => void): void
  off<K extends keyof Events>(event: K, handler: (data: Events[K]) => void): void
  emit<K extends keyof Events>(event: K, data: Events[K]): void
}

function createEventBus(): EventBus {
  const handlers: { [K in keyof Events]?: Array<(data: Events[K]) => void> } = {}

  return {
    on(event, handler) {
      handlers[event] = handlers[event] || []
      handlers[event]!.push(handler)
    },

    off(event, handler) {
      const list = handlers[event]
      if (list) {
        const index = list.indexOf(handler)
        if (index > -1) list.splice(index, 1)
      }
    },

    emit(event, data) {
      const list = handlers[event]
      if (list) {
        list.forEach(h => h(data))
      }
    }
  }
}

const bus = createEventBus()

bus.on("login", ({ userId, timestamp }) => {
  console.log(\`User \${userId} logged in at \${timestamp}\`)
})

bus.on("purchase", ({ userId, amount }) => {
  console.log(\`User \${userId} purchased for $\${amount}\`)
})

bus.emit("login", { userId: 1, timestamp: new Date() })
bus.emit("purchase", { userId: 1, amount: 99.99 })`,
  },
  {
    id: 66,
    title: "Deep Readonly",
    level: "advanced",
    content:
      "Create a type that makes all nested properties readonly recursively. " +
      "Useful for ensuring immutability in complex objects.",
    task: "Create a DeepReadonly<T> type.",
    hint: "type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] }",
    starterCode: `type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}

interface Company {
  name: string
  address: {
    city: string
    zip: string
  }
  employees: Array<{ name: string; role: string }>
}

type ImmutableCompany = DeepReadonly<Company>

const company: ImmutableCompany = {
  name: "Acme Inc",
  address: {
    city: "São Paulo",
    zip: "01000-000"
  },
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" }
  ]
}

console.log("Company:", JSON.stringify(company, null, 2))`,
  },
  {
    id: 67,
    title: "Strict Null Checks in Filters",
    level: "basic",
    content:
      "Filtering arrays can create union types with undefined. " +
      "Learn to use type guards to properly refine them.",
    task: "Filter null values and refine the type.",
    hint: "arr.filter((x): x is Type => x !== null)",
    starterCode: `interface User {
  id: number
  name: string
}

const users: (User | null)[] = [
  { id: 1, name: "Alice" },
  null,
  { id: 2, name: "Bob" },
  null,
  { id: 3, name: "Charlie" }
]

const nonNull = users.filter((u): u is User => u !== null)

nonNull.forEach(user => {
  console.log(user.name.toUpperCase())
})

const maybeNumber: (number | null)[] = [1, null, 2, null, 3]
const numbers = maybeNumber.filter((n): n is number => n !== null)
const sum = numbers.reduce((a, b) => a + b, 0)
console.log("Sum:", sum)

function findUser(users: User[], id: number): User | undefined {
  return users.find(u => u.id === id)
}

const result = findUser(nonNull, 1)
if (result) {
  console.log("Found:", result.name)
}`,
  },
  {
    id: 68,
    title: "Enum vs Union vs Const Object",
    level: "basic",
    content:
      "Compare enums, union types, and const objects to understand when to use each. " +
      "Each approach has pros and cons in terms of runtime and type safety.",
    task: "Convert an enum to a union type and compare.",
    hint: 'type Direction = "N" | "S" | "E" | "W"',
    starterCode: `enum DirectionEnum {
  North = "N",
  South = "S",
  East = "E",
  West = "W"
}

type DirectionType = "N" | "S" | "E" | "W"

const DirectionConst = {
  North: "N",
  South: "S",
  East: "E",
  West: "W"
} as const

type DirectionConstType = typeof DirectionConst[keyof typeof DirectionConst]

function move(dir: DirectionType): void {
  console.log("Moving", dir)
}

move("N")
move(DirectionEnum.North as DirectionType)
move(DirectionConst.North as DirectionConstType)

const dirs: DirectionType[] = ["N", "S", "E", "W"]
dirs.forEach(d => move(d))

console.log("All approaches work!")`,
  },
  {
    id: 69,
    title: "Type-safe CSV Parser",
    level: "advanced",
    content:
      "Create a CSV parser that infers column types. " + "Use generics to map headers to types.",
    task: "Parse CSV and infer column types.",
    hint: "function parseCSV<T>(csv: string): T[]",
    starterCode: `interface User {
  id: number
  name: string
  email: string
  age: number
}

const csvData = \`id,name,email,age
1,Alice,alice@example.com,25
2,Bob,bob@example.com,30
3,Charlie,charlie@example.com,28\`

function parseCSV<T>(csv: string): T[] {
  const lines = csv.trim().split("\\n")
  const headers = lines[0].split(",")

  return lines.slice(1).map(line => {
    const values = line.split(",")
    const obj: any = {}

    headers.forEach((header, i) => {
      let value: string | number = values[i]
      if (!isNaN(Number(value))) {
        value = Number(value)
      }
      obj[header] = value
    })

    return obj as T
  })
}

const users = parseCSV<User>(csvData)

users.forEach(user => {
  console.log(\`\${user.name} (\${user.email}) - \${user.age} years old\`)
})

const [first, ...rest] = users
console.log("First user:", first)`,
  },
  {
    id: 70,
    title: "Schema Validation with Mapped Types",
    level: "advanced",
    content:
      "Create a schema validator that checks objects against type definitions. " +
      "Use mapped types to transform the schema into validators.",
    task: "Validate an object against a schema.",
    hint: "Use Record to map fields to validators.",
    starterCode: `type Validator<T> = (value: unknown) => T

type Schema<T> = {
  [K in keyof T]: Validator<T[K]>
}

function string(): Validator<string> {
  return (value) => {
    if (typeof value !== "string") throw new Error("Not a string")
    return value
  }
}

function number(): Validator<number> {
  return (value) => {
    if (typeof value !== "number") throw new Error("Not a number")
    return value
  }
}

function min(n: number): Validator<number> {
  return (value) => {
    if (value < n) throw new Error(\`Must be at least \${n}\`)
    return value
  }
}

function max(n: number): Validator<number> {
  return (value) => {
    if (value > n) throw new Error(\`Must be at most \${n}\`)
    return value
  }
}

function validate<T>(schema: Schema<T>, data: unknown): T {
  const result = {} as T
  for (const key in schema) {
    result[key] = schema[key]((data as any)[key])
  }
  return result
}

const userSchema: Schema<{ name: string; age: number }> = {
  name: string(),
  age: number()
}

const data = { name: "Alice", age: 25 }
const validated = validate(userSchema, data)
console.log("Validated:", validated)`,
  },
  {
    id: 71,
    title: "Polymorphic this Types",
    level: "advanced",
    content:
      "Use `this` as return type to create fluent APIs where methods return " +
      "the concrete class, not the base class. Useful for inheritance.",
    task: "Create a fluent API with polymorphic this.",
    hint: "class Builder { add(): this { } }",
    starterCode: `class Builder {
  protected parts: string[] = []

  add(part: string): this {
    this.parts.push(part)
    return this
  }

  build(): string {
    return this.parts.join("-")
  }
}

class DetailedBuilder extends Builder {
  withName(name: string): this {
    this.parts.unshift(\`[\${name}]\`)
    return this
  }

  withTimestamp(): this {
    this.parts.push(\`@\${Date.now()}\`)
    return this
  }
}

const builder = new DetailedBuilder()
const result = builder
  .add("part1")
  .add("part2")
  .withName("MyBuild")
  .withTimestamp()
  .build()

console.log("Built:", result)

class Calculator {
  constructor(public value: number = 0) {}

  add(n: number): this {
    this.value += n
    return this
  }

  multiply(n: number): this {
    this.value *= n
    return this
  }

  result(): number {
    return this.value
  }
}

const calc = new Calculator()
  .add(10)
  .multiply(2)
  .add(5)

console.log("Result:", calc.result())`,
  },
  {
    id: 72,
    title: "Tuple Types in Functions",
    level: "basic",
    content:
      "Tuples can be used to type function parameters with multiple values. " +
      "Useful for functions that return multiple values.",
    task: "Create a function that returns name and age as a tuple.",
    hint: "function getPerson(): [string, number] { }",
    starterCode: `function getUser(): [string, number, boolean] {
  return ["Alice", 25, true]
}

const [name, age, active] = getUser()
console.log(name, age, active)

type Result<T, E> = [T] | [E, true]

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return ["Cannot divide by zero", true]
  }
  return [a / b]
}

const [ok, err] = divide(10, 0)
if (err) {
  console.log("Error:", ok)
} else {
  console.log("Result:", ok)
}

function parseDate(input: string): Result<Date, Error> {
  const date = new Date(input)
  if (isNaN(date.getTime())) {
    return [new Error("Invalid date"), true]
  }
  return [date]
}

const [date] = parseDate("2024-01-01")
console.log("Parsed:", date)`,
  },
  {
    id: 73,
    title: "Interface vs Type Alias",
    level: "basic",
    content:
      "Interfaces are better for objects and classes, allowing extends and merge. " +
      "Type aliases are better for unions, intersections, and primitive types.",
    task: "Compare interface and type for the same object.",
    hint: "interface for objects, type for unions",
    starterCode: `interface UserI {
  name: string
  age: number
}

type UserT = {
  name: string
  age: number
}

interface AnimalI {
  name: string
}

interface AnimalI {
  age: number
}

const animal: AnimalI = { name: "Dog", age: 3 }

type Status = "pending" | "active" | "done"

type Maybe<T> = T | null

type Pair<T, U> = {
  first: T
  second: U
}

const pair: Pair<string, number> = { first: "age", second: 25 }

console.log("Animal:", animal)
console.log("Pair:", pair)`,
  },
  {
    id: 74,
    title: "Module Resolution",
    level: "advanced",
    content:
      "TypeScript resolves modules in different ways: classic, node, node16, nodenext. " +
      "Understand the differences to configure projects correctly.",
    task: "Configure paths and baseUrl for imports.",
    hint: 'Configure "baseUrl" and "paths" in tsconfig.json',
    starterCode: `// Simulating tsconfig paths
// {
//   "compilerOptions": {
//     "baseUrl": "./src",
//     "paths": {
//       "@/*": ["./*"],
//       "@components/*": ["./components/*"],
//       "@utils/*": ["./utils/*"]
//     }
//   }
// }

// Import these as:
// import { Button } from "@components/Button"
// import { formatDate } from "@utils/date"

console.log("Module resolution configured!")
console.log("baseUrl: ./src")
console.log("paths: { '@/*': ['./*'] }")

const paths = {
  "@/components": "./src/components",
  "@/utils": "./src/utils",
  "@/api": "./src/api"
}

function resolvePath(alias: string): string {
  return paths[alias as keyof typeof paths] || alias
}

console.log("Resolved @/components:", resolvePath("@/components"))`,
  },
  {
    id: 75,
    title: "Ambient Modules and Triple-Slash",
    level: "advanced",
    content:
      "Use triple-slash directives to declare module dependencies. " +
      "Useful for including types and modules in compiled files.",
    task: "Use triple-slash to declare a module.",
    hint: '/// <reference types="node" />',
    starterCode: `/// <reference types="node" />

/// <reference path="./other-file.d.ts" />

declare namespace MyLib {
  function greet(name: string): string
  const version: string
}

console.log(MyLib.version)

import { promises as fs } from "fs"

async function readFile(path: string): Promise<string> {
  return fs.readFile(path, "utf-8")
}

console.log("Ambient declarations loaded!")`,
  },
  {
    id: 76,
    title: "Union Narrowing with never",
    level: "advanced",
    content:
      "Use `never` in unions to force TypeScript to check all cases. " +
      "Useful in exhaustive switch statements.",
    task: "Create an exhaustive switch.",
    hint: "default: const _: never = value",
    starterCode: `type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number }

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.side ** 2
    case "rectangle":
      return shape.width * shape.height
    default:
      const _exhaustive: never = shape
      throw new Error(\`Unhandled shape: \${_exhaustive}\`)
  }
}

const shapes: Shape[] = [
  { kind: "circle", radius: 5 },
  { kind: "square", side: 4 },
  { kind: "rectangle", width: 3, height: 6 }
]

shapes.forEach(s => console.log(\`Area: \${area(s).toFixed(2)}\`))`,
  },
  {
    id: 77,
    title: "Type-safe Event Listeners",
    level: "advanced",
    content:
      "Create functions that add event listeners with full type safety. " +
      "The handler should have the correct type based on the event.",
    task: "Create a type-safe addEventListener function.",
    hint: "Use generics to infer the handler type.",
    starterCode: `type EventMap = {
  click: { x: number; y: number }
  keydown: { key: string }
  focus: void
}

function addEventListener<K extends keyof EventMap>(
  type: K,
  handler: (event: EventMap[K]) => void
): void {
  console.log(\`Added listener for \${type}\`)
}

addEventListener("click", ({ x, y }) => {
  console.log(\`Clicked at (\${x}, \${y})\`)
})

addEventListener("keydown", ({ key }) => {
  console.log(\`Key pressed: \${key}\`)
})

addEventListener("focus", () => {
  console.log("Focused!")
})

type Handler<T> = T extends void ? () => void : (data: T) => void

function on<K extends keyof EventMap>(event: K, handler: Handler<EventMap[K]>): void {
  console.log(\`Registered: \${event}\`)
}

on("click", (data) => console.log(data.x))
on("focus", () => console.log("focused"))`,
  },
  {
    id: 78,
    title: "Intersection Types with Mixins",
    level: "advanced",
    content:
      "Intersection types combine multiple types into one. " +
      "Useful for adding functionality via mixins or creating complex types.",
    task: "Create a type that is both Serializable and Validatable.",
    hint: "type T = Serializable & Validatable",
    starterCode: `interface Serializable {
  toJSON(): Record<string, any>
}

interface Validatable {
  validate(): boolean
}

interface Timestamped {
  createdAt: Date
  updatedAt: Date
}

type Entity = Serializable & Validatable & Timestamped

class User implements Entity {
  constructor(
    public name: string,
    public email: string
  ) {}

  toJSON() {
    return { name: this.name, email: this.email }
  }

  validate() {
    return this.name.length > 0 && this.email.includes("@")
  }

  createdAt = new Date()
  updatedAt = new Date()
}

function processEntity(entity: Entity): void {
  console.log("JSON:", entity.toJSON())
  console.log("Valid:", entity.validate())
  console.log("Created:", entity.createdAt)
}

const user = new User("Alice", "alice@example.com")
processEntity(user)

type ReadWrite = { read: () => void } & { write: (data: string) => void }

const io: ReadWrite = {
  read: () => console.log("Reading"),
  write: (data) => console.log("Writing:", data)
}

io.read()
io.write("hello")`,
  },
  {
    id: 79,
    title: "Type-safe Console Methods",
    level: "basic",
    content:
      "TypeScript doesn't check console by default. " +
      "Create type-safe wrappers for consistent logging.",
    task: "Create type-safe logging functions.",
    hint: "function log<T>(message: T): void",
    starterCode: `function log<T>(message: T): void {
  console.log(\`[LOG] \${message}\`)
}

function error(message: string, code?: number): void {
  console.error(\`[ERROR] \${code ? \`[\${code}] \` : ""}\${message}\`)
}

function group<T>(title: string, fn: () => T): T {
  console.group(\`[GROUP] \${title}\`)
  const result = fn()
  console.groupEnd()
  return result
}

log("Application started")

error("Failed to connect", 500)

const result = group("User Setup", () => {
  log("Creating user")
  log("Sending email")
  return { id: 1, name: "Alice" }
})

console.log("Result:", result)`,
  },
  {
    id: 80,
    title: "Simple Pattern Matching",
    level: "basic",
    content:
      "Implement simple pattern matching with generics. " +
      "Similar to match in functional languages.",
    task: "Create a match function that executes patterns.",
    hint: "function match<T, R>(value: T, patterns: Record<T, R>): R",
    starterCode: `function match<T, R>(value: T, patterns: Record<T, R>): R {
  if (value in patterns) {
    return patterns[value]
  }
  throw new Error(\`No pattern match for \${value}\`)
}

const statusLabels = match<"pending" | "success" | "error", string>(undefined as any, {
  pending: "Waiting...",
  success: "Success!",
  error: "Error occurred"
})

console.log(statusLabels)

const binary = match(true, {
  true: "1",
  false: "0"
})

console.log(binary)

type Action =
  | { type: "increment"; amount: number }
  | { type: "decrement"; amount: number }
  | { type: "reset" }

function reduce(action: Action): number {
  let state = 0
  switch (action.type) {
    case "increment":
      return state + action.amount
    case "decrement":
      return state - action.amount
    case "reset":
      return 0
  }
}

console.log(reduce({ type: "increment", amount: 5 }))
console.log(reduce({ type: "reset" }))`,
  },
  {
    id: 81,
    title: "Variadic Tuple Types",
    level: "advanced",
    content:
      "Variadic tuples allow creating types that accept a variable number of elements. " +
      "Useful for type concatenation and tail recursion.",
    task: "Create a type that concatenates tuples.",
    hint: "type Concat<T extends any[], U extends any[]> = [...T, ...U]",
    starterCode: `type Concat<T extends any[], U extends any[]> = [...T, ...U]

type A = Concat<[1, 2], [3, 4]>
type B = Concat<[string], [number, boolean]>

const a: A = [1, 2, 3, 4]
const b: B = ["test", 42, true]

console.log("A:", a)
console.log("B:", b)

type Prepend<E, T extends any[]> = [E, ...T]

type C = Prepend<0, [1, 2, 3]>

const c: C = [0, 1, 2, 3]

type DropFirst<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never

type D = DropFirst<[1, 2, 3]>

const d: D = [2, 3]`,
  },
  {
    id: 82,
    title: "Awaited Type for Promises",
    level: "advanced",
    content:
      "The utility type `Awaited` extracts the resolved type of a Promise. " +
      "It works recursively for nested Promises.",
    task: "Use Awaited to type the result of async functions.",
    hint: "type Result = Awaited<Promise<T>>",
    starterCode: `type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T

async function fetchUser(): Promise<{ id: number; name: string }> {
  return { id: 1, name: "Alice" }
}

async function fetchUsers(): Promise<Array<{ id: number; name: string }>> {
  return [{ id: 1, name: "Alice" }]
}

type UserResult = Awaited<ReturnType<typeof fetchUser>>
type UsersResult = Awaited<ReturnType<typeof fetchUsers>>

const singleUser: UserResult = { id: 1, name: "Bob" }
const userList: UsersResult = [{ id: 1, name: "Alice" }]

console.log("User:", singleUser)
console.log("Users:", userList)

async function getData() {
  const data = await fetchUser()
  console.log("Got data:", data)
}

getData()`,
  },
  {
    id: 83,
    title: "Brand Keys in Mapped Types",
    level: "advanced",
    content:
      "Use template literal types in mapped types to create key transformations. " +
      "Useful for adding prefixes/suffixes or converting conventions.",
    task: "Create a mapped type that adds 'get' prefix to methods.",
    hint: "type WithGetters<T> = { [K in keyof T as 'get' + K]: () => T[K] }",
    starterCode: `type WithGetters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
}

interface User {
  name: string
  age: number
  email: string
}

type Getters = WithGetters<User>

const getters: Getters = {
  getName: () => "Alice",
  getAge: () => 25,
  getEmail: () => "alice@example.com"
}

console.log(getters.getName())
console.log(getters.getAge())

type WithSetters<T> = {
  [K in keyof T as \`set\${Capitalize<string & K>}\`]: (value: T[K]) => void
}

type Setters = WithSetters<User>

const setters: Setters = {
  setName: (value) => console.log("Setting name to", value),
  setAge: (value) => console.log("Setting age to", value),
  setEmail: (value) => console.log("Setting email to", value)
}

setters.setName("Bob")`,
  },
  {
    id: 84,
    title: "Type-safe React-like setState",
    level: "advanced",
    content:
      "Implement a state hook similar to React's useState. " +
      "The setter should allow partial updates and infer types correctly.",
    task: "Create a simplified useState with inferred types.",
    hint: "function useState<T>(initial: T): [() => T, (value: T | ((prev: T) => T)) => void]",
    starterCode: `function useState<T>(initial: T) {
  let state = initial

  const getState = () => state

  const setState = (value: T | ((prev: T) => T)) => {
    if (typeof value === "function") {
      state = (value as (prev: T) => T)(state)
    } else {
      state = value
    }
    console.log("State updated:", state)
  }

  return [getState, setState] as const
}

const [name, setName] = useState("Alice")
const [count, setCount] = useState(0)

console.log("Initial name:", name())
console.log("Initial count:", count())

setName("Bob")
setCount(5)
setCount(prev => prev + 10)

console.log("Final name:", name())
console.log("Final count:", count())`,
  },
  {
    id: 85,
    title: "Deep Partial Type",
    level: "advanced",
    content:
      "Partial makes first-level properties optional. " +
      "DeepPartial makes ALL nested properties optional recursively.",
    task: "Create a DeepPartial<T> type.",
    hint: "type DeepPartial<T> = { [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }",
    starterCode: `type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

interface Company {
  name: string
  address: {
    city: string
    zip: string
  }
  employees: Array<{
    name: string
    contact: {
      email: string
      phone: string
    }
  }>
}

type PartialCompany = DeepPartial<Company>

const update: PartialCompany = {
  name: "New Company",
  address: {
    city: "São Paulo"
  },
  employees: [
    {
      name: "John",
      contact: {
        email: "john@example.com"
      }
    }
  ]
}

console.log("Partial update:", JSON.stringify(update, null, 2))

function updateCompany(current: Company, updates: PartialCompany): Company {
  return {
    ...current,
    ...updates,
    address: { ...current.address, ...updates.address },
    employees: updates.employees?.map((e, i) => ({
      ...current.employees[i],
      ...e,
      contact: { ...current.employees[i].contact, ...e.contact }
    })) || current.employees
  }
}`,
  },
  {
    id: 86,
    title: "Extract Keys by Value Type",
    level: "advanced",
    content:
      "Create a type that extracts keys from an object based on the type of its values. " +
      "Useful for finding fields of a certain type.",
    task: "Extract keys whose values are of type string.",
    hint: "type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T]",
    starterCode: `type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T]

interface User {
  id: number
  name: string
  email: string
  age: number
  createdAt: Date
}

type StringKeys = KeysOfType<User, string>
type NumberKeys = KeysOfType<User, number>

const strKeys: StringKeys[] = ["name", "email"]
const numKeys: NumberKeys[] = ["id", "age"]

function pickByType<T, U>(obj: T, keys: KeysOfType<T, U>[]): Pick<T, KeysOfType<T, U>> {
  const result = {} as Pick<T, KeysOfType<T, U>>
  keys.forEach(key => {
    result[key] = obj[key]
  })
  return result
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  createdAt: new Date()
}

const strings = pickByType(user, strKeys)
const numbers = pickByType(user, numKeys)

console.log("Strings:", strings)
console.log("Numbers:", numbers)`,
  },
  {
    id: 87,
    title: "Type-safe Redux-like Reducer",
    level: "advanced",
    content:
      "Implement a type-safe reducer similar to Redux. " +
      "The action type determines which payloads are valid.",
    task: "Create a reducer with type-safe actions.",
    hint: 'type Action = { type: "TYPE"; payload: T }',
    starterCode: `type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "set"; payload: number }
  | { type: "reset" }

type State = {
  count: number
  history: number[]
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
        history: [...state.history, state.count + action.payload]
      }
    case "decrement":
      return {
        count: state.count - action.payload,
        history: [...state.history, state.count - action.payload]
      }
    case "set":
      return {
        count: action.payload,
        history: [...state.history, action.payload]
      }
    case "reset":
      return {
        count: 0,
        history: [...state.history, 0]
      }
  }
}

const initialState: State = { count: 0, history: [] }

let state = reducer(initialState, { type: "increment", payload: 5 })
console.log("After increment:", state.count)

state = reducer(state, { type: "set", payload: 10 })
console.log("After set:", state.count)

state = reducer(state, { type: "reset" })
console.log("After reset:", state.count)`,
  },
  {
    id: 88,
    title: "Constructor Parameters Type",
    level: "advanced",
    content:
      "`ConstructorParameters<T>` extracts the parameter types of T's constructor. " +
      "Useful for creating factories and dependency injection.",
    task: "Use ConstructorParameters to create a factory.",
    hint: "type CtorParams = ConstructorParameters<typeof MyClass>",
    starterCode: `type ConstructorParameters<T extends new (...args: any[]) => any> =
  T extends new (...args: infer P) => any ? P : never

class User {
  constructor(
    public name: string,
    public email: string,
    public age: number
  ) {}
}

type UserCtorParams = ConstructorParameters<typeof User>

function createUser(...args: UserCtorParams): User {
  return new User(...args)
}

const user1 = createUser("Alice", "alice@example.com", 25)
const user2 = createUser("Bob", "bob@example.com", 30)

console.log("User 1:", user1.name, user1.email)
console.log("User 2:", user2.name, user2.email)

class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number
  ) {}
}

type ProductCtorParams = ConstructorParameters<typeof Product>

const createProduct = (...args: ProductCtorParams) => new Product(...args)

const product = createProduct(1, "Widget", 29.99)
console.log("Product:", product.name, product.price)`,
  },
  {
    id: 89,
    title: "Optional Keys and Required Keys",
    level: "advanced",
    content:
      "`Required<T>` makes all properties required. " +
      "`Optional<T>` (custom) can do the opposite, or create types that have only optionals.",
    task: "Extract optional and required keys separately.",
    hint: "type OptionalKeys<T> = { [K in keyof T]: T extends { [K]: T[K] } ? never : K }[keyof T]",
    starterCode: `type OptionalKeys<T> = {
  [K in keyof T]: {} extends Pick<T, K> ? K : never
}[keyof T]

type RequiredKeys<T> = {
  [K in keyof T]: {} extends Pick<T, K> ? never : K
}[keyof T]

interface Config {
  host: string
  port: number
  ssl?: boolean
  timeout?: number
  retries?: number
}

type OptKeys = OptionalKeys<Config>
type ReqKeys = RequiredKeys<Config>

const optional: OptKeys[] = ["ssl", "timeout", "retries"]
const required: ReqKeys[] = ["host", "port"]

console.log("Optional:", optional)
console.log("Required:", required)

function validate(config: Config): { required: string[]; missing: string[] } {
  const requiredKeys = required as (keyof Config)[]
  const missing = requiredKeys.filter(key => config[key] === undefined)
  const filled = requiredKeys.filter(key => config[key] !== undefined)
  return { required: filled, missing }
}

const result = validate({ host: "localhost", port: 8080 })
console.log("Validation:", result)`,
  },
  {
    id: 90,
    title: "Type-safe Event Bus Final",
    level: "advanced",
    content:
      "Combine everything: generics, conditional types, and mapped types " +
      "to create a completely type-safe event bus.",
    task: "Create an event bus with inferred handlers.",
    hint: "Use infer to extract event types.",
    starterCode: `type EventMap = Record<string, any>

type EventReceiver<T> = (params: T) => void

class TypedEventBus<T extends EventMap> {
  private handlers: {
    [K in keyof T]?: Set<EventReceiver<T[K]>>
  } = {}

  on<K extends keyof T>(eventName: K, handler: EventReceiver<T[K]>): () => void {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = new Set()
    }
    this.handlers[eventName]!.add(handler)

    return () => this.off(eventName, handler)
  }

  off<K extends keyof T>(eventName: K, handler: EventReceiver<T[K]>): void {
    this.handlers[eventName]?.delete(handler)
  }

  emit<K extends keyof T>(eventName: K, data: T[K]): void {
    this.handlers[eventName]?.forEach(handler => handler(data))
  }
}

interface AppEvents {
  userLogin: { userId: number; timestamp: Date }
  userLogout: { userId: number }
  purchase: { amount: number; item: string }
}

const bus = new TypedEventBus<AppEvents>()

const unsub = bus.on("userLogin", ({ userId, timestamp }) => {
  console.log(\`User \${userId} logged in at \${timestamp}\`)
})

bus.emit("userLogin", { userId: 1, timestamp: new Date() })

setTimeout(() => unsub(), 0)

bus.on("purchase", ({ amount, item }) => {
  console.log(\`Purchased \${item} for $\${amount}\`)
})

bus.emit("purchase", { amount: 99.99, item: "E-book" })`,
  },
  {
    id: 91,
    title: "Omit vs Exclude",
    level: "basic",
    content:
      "`Omit<T, K>` removes properties from an object type. " +
      "`Exclude<T, U>` removes types from a union. Understand the difference.",
    task: "Use Omit for objects and Exclude for unions.",
    hint: "Omit for objects, Exclude for unions",
    starterCode: `interface User {
  id: number
  name: string
  email: string
  password: string
}

type PublicUser = Omit<User, "password">

const user: PublicUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
}

console.log("Public user:", user)

type Status = "pending" | "loading" | "success" | "error" | "cancelled"

type LoadingStates = Exclude<Status, "pending" | "success" | "error">

const states: LoadingStates[] = ["loading", "cancelled"]
console.log("Loading states:", states)

type Colors = "red" | "green" | "blue" | "yellow" | "purple"

type PrimaryColors = Exclude<Colors, "yellow" | "purple">

const primaries: PrimaryColors[] = ["red", "green", "blue"]
console.log("Primary colors:", primaries)`,
  },
  {
    id: 92,
    title: "Typed Object.entries and Object.keys",
    level: "basic",
    content:
      "Object.entries and Object.keys return `string[]` by default. " +
      "Use assertion or generics to type them correctly.",
    task: "Iterate over an object with correct types.",
    hint: "Use as Array<[keyof T, T[keyof T]]>",
    starterCode: `interface User {
  id: number
  name: string
  email: string
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
}

const entries = Object.entries(user) as Array<[keyof User, User[keyof User]]>

entries.forEach(([key, value]) => {
  console.log(\`\${key}: \${value} (\${typeof value})\`)
})

const keys = Object.keys(user) as Array<keyof User>

keys.forEach(key => {
  console.log(\`\${key}: \${user[key]}\`)
})

function typedEntries<T extends object>(obj: T): Array<[keyof T, T[keyof T]]> {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>
}

typedEntries({ a: 1, b: 2, c: 3 }).forEach(([k, v]) => {
  console.log(\`\${k} = \${v}\`)
})`,
  },
  {
    id: 93,
    title: "Strict Property Initialization",
    level: "basic",
    content:
      "With strictPropertyInitialization, class properties must be initialized " +
      "in the constructor or with initialization shorthand.",
    task: "Initialize properties correctly.",
    hint: "Use constructor or initialization shorthand.",
    starterCode: `class User {
  name: string
  age: number
  email: string = "default@example.com"

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet(): string {
    return \`Hi, I'm \${this.name}!\`
  }
}

const user = new User("Alice", 25)
console.log(user.greet())
console.log("Email:", user.email)

class Config {
  constructor(
    public host: string,
    public port: number,
    public protocol: string = "https"
  ) {}
}

const config = new Config("localhost", 3000)
console.log(\`\${config.protocol}://\${config.host}:\${config.port}\`)

class Optional {
  name?: string

  setName(name: string): void {
    this.name = name
  }
}

const opt = new Optional()
opt.setName("Test")
console.log("Name:", opt.name)`,
  },
  {
    id: 94,
    title: "Type-safe Fetch Wrapper",
    level: "advanced",
    content:
      "Create a type-safe wrapper for fetch that infers the response type. " +
      "Supports JSON, text, and status checking.",
    task: "Create a type-safe fetchJson function.",
    hint: "async function fetchJson<T>(url: string): Promise<T>",
    starterCode: `async function fetchJson<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  })

  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`)
  }

  return response.json() as Promise<T>
}

interface User {
  id: number
  name: string
  email: string
}

interface Post {
  id: number
  title: string
  body: string
}

async function main() {
  try {
    const users = await fetchJson<User[]>("https://jsonplaceholder.typicode.com/users")
    console.log("Users:", users.slice(0, 2))

    const post = await fetchJson<Post>("https://jsonplaceholder.typicode.com/posts/1")
    console.log("Post:", post.title)

    const user = await fetchJson<User>("https://jsonplaceholder.typicode.com/users/1")
    console.log("User:", user.name)
  } catch (error) {
    console.error("Error:", error)
  }
}

main()`,
  },
  {
    id: 95,
    title: "Type-safe Route Handler",
    level: "advanced",
    content:
      "Create a type-safe router where each route has its handler with specific types. " +
      "The handler receives only the parameters defined for that route.",
    task: "Create type-safe route handlers.",
    hint: "Use Record to map routes to handlers.",
    starterCode: `type RouteHandler<T = any> = (params: T) => string | Promise<string>

interface Route<T = any> {
  path: string
  handler: RouteHandler<T>
}

type Routes = {
  "/users": Route<{ page: number }>
  "/users/:id": Route<{ id: string }>
  "/posts": Route<{ tag?: string }>
  "/posts/:id": Route<{ id: string; draft?: boolean }>
}

const routes: Routes = {
  "/users": ({ page }) => \`Showing users page \${page}\`,
  "/users/:id": ({ id }) => \`User \${id}\`,
  "/posts": ({ tag }) => tag ? \`Posts tagged \${tag}\` : "All posts",
  "/posts/:id": ({ id, draft }) => draft ? \`Draft: \${id}\` : \`Post \${id}\`
}

function matchRoute(path: string, routes: Routes): string {
  for (const routePath in routes) {
    const routeParts = routePath.split("/")
    const pathParts = path.split("/")

    if (routeParts.length !== pathParts.length) continue

    const params: any = {}
    let matched = true

    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(":")) {
        params[routeParts[i].slice(1)] = pathParts[i]
      } else if (routeParts[i] !== pathParts[i]) {
        matched = false
        break
      }
    }

    if (matched) {
      return routes[routePath as keyof Routes].handler(params)
    }
  }

  return "404 Not Found"
}

console.log(matchRoute("/users?page=2", routes))
console.log(matchRoute("/users/123", routes))
console.log(matchRoute("/posts/456?draft=true", routes))`,
  },
  {
    id: 96,
    title: "Generic Record Factory",
    level: "advanced",
    content:
      "Create a factory that generates typed objects with useful methods. " +
      "The return type should be completely inferred.",
    task: "Create a factory to generate objects with IDs.",
    hint: 'function create<T>(data: Omit<T, "id">): T & { id: string }',
    starterCode: `function createEntity<T extends { name: string }>(
  data: T
): T & { id: string; createdAt: Date; updatedAt: Date } {
  const id = crypto.randomUUID()
  const now = new Date()

  return {
    ...data,
    id,
    createdAt: now,
    updatedAt: now
  }
}

interface Product {
  name: string
  price: number
}

interface User {
  name: string
  email: string
}

const product = createEntity<Product>({ name: "Laptop", price: 2999 })
const user = createEntity<User>({ name: "Alice", email: "alice@example.com" })

console.log("Product:", product)
console.log("User:", user)

function createList<T>(items: T[]): T[] & {
  add: (item: T) => void
  remove: (index: number) => void
} {
  const list = [...items]

  return {
    ...list,
    add(item: T) {
      list.push(item)
    },
    remove(index: number) {
      list.splice(index, 1)
    }
  }
}

const numbers = createList([1, 2, 3])
numbers.add(4)
numbers.remove(0)
console.log("Numbers:", [...numbers])`,
  },
  {
    id: 97,
    title: "Reverse Engineering Types",
    level: "advanced",
    content:
      "Given an object, derive its type automatically. " +
      "Use `typeof` to create types from values.",
    task: "Use typeof to create types from objects.",
    hint: "type T = typeof myObject",
    starterCode: `const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: true
}

type User = typeof user

const newUser: User = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
  isActive: false
}

console.log("User:", newUser)

const apiConfig = {
  baseUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
  headers: {
    "Content-Type": "application/json"
  }
} as const

type ApiConfig = typeof apiConfig

function createClient(config: ApiConfig) {
  return {
    ...config,
    request: (path: string) => console.log(\`Request to \${config.baseUrl}\${path}\`)
  }
}

const client = createClient(apiConfig)

const constObj = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
} as const

type Method = typeof constObj.GET | typeof constObj.POST`,
  },
  {
    id: 98,
    title: "Chaining Optionals",
    level: "basic",
    content:
      "When accessing nested optional properties, you can use optional chaining " +
      "to avoid errors. Learn to handle undefined at depth.",
    task: "Access deep properties with safety.",
    hint: 'user?.address?.city ?? "unknown"',
    starterCode: `interface User {
  name: string
  address?: {
    city?: {
      name: string
      zip?: string
    }
  }
}

const user1: User = {
  name: "Alice",
  address: {
    city: {
      name: "São Paulo",
      zip: "01000-000"
    }
  }
}

const user2: User = {
  name: "Bob"
}

const user3: User = {
  name: "Charlie",
  address: {}
}

console.log("User1 city:", user1.address?.city?.name ?? "unknown")
console.log("User2 city:", user2.address?.city?.name ?? "unknown")
console.log("User3 city:", user3.address?.city?.name ?? "unknown")
console.log("User3 zip:", user3.address?.city?.zip ?? "no zip")

function getCity(user: User): string {
  return user.address?.city?.name ?? "Unknown city"
}

console.log("getCity:", getCity(user1), getCity(user2))`,
  },
  {
    id: 99,
    title: "Type-safe Event-Driven Architecture",
    level: "advanced",
    content:
      "Create an event system where emitters and listeners are type-safe. " +
      "The event type determines the available data.",
    task: "Implement subscribe/publish with derived types.",
    hint: "Use generic to relate event and data.",
    starterCode: `type EventMap = {
  userCreated: { id: number; email: string }
  userUpdated: { id: number; changes: Record<string, any> }
  userDeleted: { id: number }
}

class EventEmitter<Events extends Record<string, any>> {
  private listeners: {
    [K in keyof Events]?: Array<(payload: Events[K]) => void>
  } = {}

  subscribe<K extends keyof Events>(
    event: K,
    callback: (payload: Events[K]) => void
  ): () => void {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event]!.push(callback)

    return () => {
      const idx = this.listeners[event]!.indexOf(callback)
      if (idx > -1) this.listeners[event]!.splice(idx, 1)
    }
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]): void {
    this.listeners[event]?.forEach(cb => cb(payload))
  }
}

const emitter = new EventEmitter<EventMap>()

const unsub = emitter.subscribe("userCreated", ({ id, email }) => {
  console.log(\`User \${id} created with email \${email}\`)
})

emitter.emit("userCreated", { id: 1, email: "alice@example.com" })

setTimeout(() => unsub(), 0)

emitter.on("userUpdated", ({ id, changes }) => {
  console.log(\`User \${id} updated:\`, changes)
})

emitter.emit("userUpdated", { id: 1, changes: { name: "Alice", age: 26 } })`,
  },
  {
    id: 100,
    title: "Conclusion: Next Steps",
    level: "basic",
    content:
      "Congratulations on completing 100 TypeScript lessons! You now have a solid foundation. " +
      "Next steps: contribute to open source projects, explore libraries like React/Next.js, " +
      "and practice with coding challenges.",
    task: "Review what you've learned and keep practicing!",
    hint: "Practice leads to mastery!",
    starterCode: `console.log("🎉 Congratulations!")
console.log("")
console.log("You completed 100 TypeScript lessons!")
console.log("")
console.log("Topics learned:")
console.log("- Basic and advanced types")
console.log("- Interfaces and Type Aliases")
console.log("- Classes and Object-Oriented Programming")
console.log("- Generics and Constraints")
console.log("- Utility Types")
console.log("- Conditional Types and Mapped Types")
console.log("- Decorators")
console.log("- Async/Await and Promises")
console.log("- Type Guards and Assertions")
console.log("- Pattern Matching")
console.log("- Event Systems")
console.log("")
console.log("Next steps:")
console.log("1. Contribute to open source projects")
console.log("2. Explore React/Next.js with TypeScript")
console.log("3. Practice with LeetCode/CodeWars")
console.log("4. Study libraries like Zod, Prisma, tRPC")
console.log("")
console.log("Good journey! 🚀")`,
  },
  {
    id: 101,
    title: "typeof with Objects",
    level: "medium",
    content:
      "Use `typeof` to get the type of a variable or object. " +
      "This automatically creates a type based on the value.",
    task: "Get the type of an object using typeof.",
    hint: "type T = typeof myObject",
    starterCode: `const user = {
  name: "Alice",
  age: 25,
  isActive: true
}

type User = typeof user

const newUser: User = {
  name: "Bob",
  age: 30,
  isActive: false
}

console.log("New user:", newUser)`,
  },
  {
    id: 102,
    title: "&& and || Operators",
    level: "medium",
    content:
      "Logical operators work like in JavaScript. " + "Learn to use them with conditional types.",
    task: "Use logical operators in expressions.",
    hint: "const result = a && b || c",
    starterCode: `const a = true
const b = false
const c = true

console.log("a && b:", a && b)
console.log("a || b:", a || b)
console.log("!a:", !a)

const value = null
const result = value ?? "default"
console.log("Nullish coalescing:", result)

const num = 0
const orResult = num || 10
console.log("OR result:", orResult)`,
  },
  {
    id: 103,
    title: "Ternary Operator",
    level: "medium",
    content:
      "The ternary operator `condition ? value1 : value2` is useful for simple conditions. " +
      "It can also be used in types with conditional types.",
    task: "Use the ternary operator to choose values.",
    hint: "const result = condition ? value1 : value2",
    starterCode: `const age = 18
const status = age >= 18 ? "adult" : "minor"
console.log("Status:", status)

function getMessage(success: boolean): string {
  return success ? "Success!" : "Failed!"
}

console.log(getMessage(true))
console.log(getMessage(false))

const items = []
const hasItems = items.length > 0 ? "has items" : "empty"
console.log(hasItems)`,
  },
  {
    id: 104,
    title: "Arrow Functions",
    level: "medium",
    content:
      "Arrow functions are more concise anonymous functions. " +
      "TypeScript infers parameter and return types.",
    task: "Create typed arrow functions.",
    hint: "const fn = (x: number): number => x * 2",
    starterCode: `const add = (a: number, b: number): number => a + b
const greet = (name: string): string => \`Hello, \${name}!\`
const double = (x: number) => x * 2

console.log(add(5, 3))
console.log(greet("Alice"))
console.log(double(10))

const process = (arr: number[], fn: (n: number) => number): number[] => {
  return arr.map(fn)
}

const numbers = [1, 2, 3, 4, 5]
console.log(process(numbers, double))`,
  },
  {
    id: 105,
    title: "Spread in Objects",
    level: "medium",
    content:
      "The spread operator `...` copies properties from objects. " +
      "Useful for creating copies and merging objects.",
    task: "Use spread to merge objects.",
    hint: "const merged = { ...obj1, ...obj2 }",
    starterCode: `const defaults = { theme: "dark", language: "pt-BR" }
const userPrefs = { theme: "light" }

const config = { ...defaults, ...userPrefs }
console.log("Config:", config)

const original = { name: "Alice", age: 25 }
const copy = { ...original }
console.log("Copy:", copy)
console.log("Same reference?", original === copy)

const partial = { name: "Bob" }
const full = { ...partial, age: 30, city: "São Paulo" }
console.log("Full:", full)`,
  },
  {
    id: 106,
    title: "Spread in Arrays",
    level: "medium",
    content:
      "Spread in arrays creates new copies or concatenates arrays. " +
      "Does not modify the original array (immutability).",
    task: "Use spread to manipulate arrays.",
    hint: "const combined = [...arr1, ...arr2]",
    starterCode: `const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const combined = [...arr1, ...arr2]
console.log("Combined:", combined)

const original = [1, 2, 3]
const added = [...original, 4, 5]
console.log("Added:", added)

const removed = original.filter(n => n !== 2)
console.log("Removed 2:", removed)

const updated = original.map(n => n * 2)
console.log("Doubled:", updated)`,
  },
  {
    id: 107,
    title: "Object Destructuring",
    level: "medium",
    content:
      "Destructuring extracts properties from objects into variables. " +
      "Can use default values for optional properties.",
    task: "Extract properties from an object.",
    hint: "const { name, age } = user",
    starterCode: `const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
}

const { name, age } = user
console.log(\`\${name} has \${age} years old\`)

const { name: userName, age: userAge = 0 } = user
console.log("UserName:", userName, "UserAge:", userAge)

function greet({ name, age }: { name: string; age: number }) {
  return \`Hello, \${name}!\`
}

console.log(greet(user))`,
  },
  {
    id: 108,
    title: "Array Destructuring",
    level: "medium",
    content:
      "Array destructuring uses position, not names. " +
      "Can ignore elements or use rest parameters.",
    task: "Extract elements from an array by position.",
    hint: "const [first, second] = arr",
    starterCode: `const coords = [10, 20, 30]
const [x, y, z] = coords
console.log("Coords:", x, y, z)

const [first, ...rest] = [1, 2, 3, 4, 5]
console.log("First:", first)
console.log("Rest:", rest)

const [, second, , fourth] = [1, 2, 3, 4]
console.log("Second:", second, "Fourth:", fourth)

function sum([a, b]: number[]): number {
  return a + b
}

console.log("Sum:", sum([5, 3]))`,
  },
  {
    id: 109,
    title: "Array Methods - map",
    level: "medium",
    content:
      "map creates a new array transforming each element. " +
      "TypeScript infers the type of the resulting array.",
    task: "Use map to transform an array.",
    hint: "const doubled = nums.map(n => n * 2)",
    starterCode: `const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map(n => n * 2)
console.log("Doubled:", doubled)

const strings = numbers.map(n => \`Item \${n}\`)
console.log("Strings:", strings)

interface User {
  name: string
  age: number
}

const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
]

const names = users.map(user => user.name)
console.log("Names:", names)

const birthdays = users.map(user => ({
  ...user,
  birthday: new Date()
}))
console.log("Birthdays:", birthdays)`,
  },
  {
    id: 110,
    title: "Array Methods - filter",
    level: "medium",
    content:
      "filter creates a new array with elements that pass the test. " +
      "TypeScript automatically refines the type.",
    task: "Filter an array using filter.",
    hint: "const evens = nums.filter(n => n % 2 === 0)",
    starterCode: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evens = numbers.filter(n => n % 2 === 0)
console.log("Evens:", evens)

const odds = numbers.filter(n => n % 2 !== 0)
console.log("Odds:", odds)

const greaterThan5 = numbers.filter(n => n > 5)
console.log("Greater than 5:", greaterThan5)

interface Product {
  name: string
  price: number
  inStock: boolean
}

const products: Product[] = [
  { name: "Laptop", price: 3000, inStock: true },
  { name: "Mouse", price: 100, inStock: false },
  { name: "Keyboard", price: 200, inStock: true }
]

const available = products.filter(p => p.inStock)
console.log("Available:", available)

const affordable = products.filter(p => p.price < 1000)
console.log("Under 1000:", affordable)`,
  },
  {
    id: 111,
    title: "Array Methods - reduce",
    level: "medium",
    content: "reduce reduces an array to a single value. " + "The accumulator can be any type.",
    task: "Sum all numbers in an array.",
    hint: "const sum = arr.reduce((acc, n) => acc + n, 0)",
    starterCode: `const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((acc, n) => acc + n, 0)
console.log("Sum:", sum)

const product = numbers.reduce((acc, n) => acc * n, 1)
console.log("Product:", product)

const max = numbers.reduce((acc, n) => n > acc ? n : acc, numbers[0])
console.log("Max:", max)

interface User {
  name: string
  age: number
}

const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
]

const totalAge = users.reduce((acc, u) => acc + u.age, 0)
console.log("Total age:", totalAge)

const byAge = users.reduce((acc, u) => {
  acc[u.age] = u.name
  return acc
}, {} as Record<number, string>)
console.log("By age:", byAge)`,
  },
  {
    id: 112,
    title: "Array Methods - find and findIndex",
    level: "medium",
    content:
      "find returns the first element that satisfies the condition. " +
      "findIndex returns its position.",
    task: "Find an element in the array.",
    hint: "const found = arr.find(x => x.id === 1)",
    starterCode: `const numbers = [10, 20, 30, 40, 50]

const found = numbers.find(n => n > 25)
console.log("First > 25:", found)

const index = numbers.findIndex(n => n > 25)
console.log("Index of first > 25:", index)

interface User {
  id: number
  name: string
}

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
]

const user = users.find(u => u.id === 2)
console.log("Found:", user)

const userIndex = users.findIndex(u => u.id === 2)
console.log("Index:", userIndex)`,
  },
  {
    id: 113,
    title: "Array Methods - some and every",
    level: "medium",
    content:
      "some returns true if any element passes the test. " + "every returns true if all pass.",
    task: "Check conditions in arrays.",
    hint: "const hasEvens = arr.some(n => n % 2 === 0)",
    starterCode: `const numbers = [1, 3, 5, 7, 9]

const hasEvens = numbers.some(n => n % 2 === 0)
console.log("Has evens:", hasEvens)

const allOdd = numbers.every(n => n % 2 !== 0)
console.log("All odd:", allOdd)

const allPositive = numbers.every(n => n > 0)
console.log("All positive:", allPositive)

interface Product {
  name: string
  price: number
  inStock: boolean
}

const products: Product[] = [
  { name: "A", price: 10, inStock: true },
  { name: "B", price: 20, inStock: false }
]

const hasAvailable = products.some(p => p.inStock)
console.log("Has available:", hasAvailable)

const allAvailable = products.every(p => p.inStock)
console.log("All available:", allAvailable)`,
  },
  {
    id: 114,
    title: "Array Methods - includes and indexOf",
    level: "medium",
    content:
      "includes checks if a value exists in the array. " +
      "indexOf returns the position or -1 if not found.",
    task: "Check if a value exists in the array.",
    hint: "const exists = arr.includes(value)",
    starterCode: `const fruits = ["apple", "banana", "orange"]

console.log("Has banana:", fruits.includes("banana"))
console.log("Has grape:", fruits.includes("grape"))

console.log("Index of banana:", fruits.indexOf("banana"))
console.log("Index of grape:", fruits.indexOf("grape"))

const numbers = [1, 2, 3, 4, 5]

const has3 = numbers.includes(3)
console.log("Has 3:", has3)

const pos = numbers.indexOf(3)
console.log("Position of 3:", pos)

function unique<T>(arr: T[]): T[] {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log("Unique:", unique([1, 2, 2, 3, 3, 3]))`,
  },
  {
    id: 115,
    title: "Array Methods - sort",
    level: "medium",
    content:
      "sort sorts elements in place. " + "For correct sorting, provide a comparator function.",
    task: "Sort an array of numbers.",
    hint: "const sorted = arr.sort((a, b) => a - b)",
    starterCode: `const numbers = [5, 2, 8, 1, 9]

const ascending = [...numbers].sort((a, b) => a - b)
console.log("Ascending:", ascending)

const descending = [...numbers].sort((a, b) => b - a)
console.log("Descending:", descending)

interface User {
  name: string
  age: number
}

const users: User[] = [
  { name: "Charlie", age: 35 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
]

const byName = [...users].sort((a, b) => a.name.localeCompare(b.name))
console.log("By name:", byName.map(u => u.name))

const byAge = [...users].sort((a, b) => a.age - b.age)
console.log("By age:", byAge.map(u => u.name))`,
  },
  {
    id: 116,
    title: "Array Methods - slice and splice",
    level: "medium",
    content:
      "slice returns a copy of a portion of the array. " +
      "splice removes/replaces elements in place.",
    task: "Extract and modify arrays.",
    hint: "const portion = arr.slice(1, 3)",
    starterCode: `const numbers = [0, 1, 2, 3, 4, 5]

const portion = numbers.slice(1, 4)
console.log("Slice 1-4:", portion)

const first3 = numbers.slice(0, 3)
console.log("First 3:", first3)

const last2 = numbers.slice(-2)
console.log("Last 2:", last2)

const copy = numbers.slice()
console.log("Copy:", copy)

const arr = [1, 2, 3, 4, 5]
arr.splice(1, 2)
console.log("After splice:", arr)

const arr2 = [1, 2, 3]
arr2.splice(1, 0, 99)
console.log("After insert:", arr2)`,
  },
  {
    id: 117,
    title: "Array Methods - flat",
    level: "medium",
    content: "flat flattens nested arrays. " + "flatMap combines map and flat in one operation.",
    task: "Flatten nested arrays.",
    hint: "const flat = nested.flat()",
    starterCode: `const nested = [1, [2, 3], [4, [5, 6]]]

const flat1 = nested.flat()
console.log("Flat 1 level:", flat1)

const flat2 = nested.flat(2)
console.log("Flat 2 levels:", flat2)

const flatDeep = nested.flat(Infinity)
console.log("Flat deep:", flatDeep)

const words = ["hello", "world"]
const chars = words.flatMap(w => w.split(""))
console.log("Chars:", chars)

const nums = [1, 2, 3]
const doubledAndPlusOne = nums.flatMap(n => [n * 2, n * 2 + 1])
console.log("Doubled + 1:", doubledAndPlusOne)`,
  },
  {
    id: 118,
    title: "String Methods",
    level: "medium",
    content:
      "Strings have useful methods like split, join, trim, etc. " +
      "TypeScript treats them as string methods.",
    task: "Manipulate a string.",
    hint: "str.split(',').join('-')",
    starterCode: `const text = "  Hello, World!  "

console.log("Trim:", text.trim())
console.log("Upper:", text.toUpperCase())
console.log("Lower:", text.toLowerCase())

const words = text.trim().split(", ")
console.log("Split:", words)

const joined = words.join(" - ")
console.log("Joined:", joined)

const email = "user@example.com"
console.log("Includes @:", email.includes("@"))
console.log("Starts with user:", email.startsWith("user"))
console.log("Ends with .com:", email.endsWith(".com"))

console.log("Index of @:", email.indexOf("@"))
console.log("Slice:", email.slice(0, 4))`,
  },
  {
    id: 119,
    title: "Math and Number",
    level: "medium",
    content:
      "Math provides useful mathematical functions. " +
      "Number has constants and methods for conversion.",
    task: "Use Math and Number for operations.",
    hint: "Math.floor(Math.random() * 10)",
    starterCode: `console.log("Round:", Math.round(4.5))
console.log("Floor:", Math.floor(4.9))
console.log("Ceil:", Math.ceil(4.1))
console.log("Abs:", Math.abs(-5))
console.log("Min:", Math.min(1, 2, 3))
console.log("Max:", Math.max(1, 2, 3))

console.log("PI:", Math.PI)
console.log("E:", Math.E)

console.log("Random:", Math.random())
console.log("Random 0-9:", Math.floor(Math.random() * 10))

console.log("ParseInt:", Number.parseInt("42"))
console.log("ParseFloat:", Number.parseFloat("3.14"))
console.log("IsNaN:", Number.isNaN(NaN))
console.log("IsFinite:", Number.isFinite(Infinity))`,
  },
  {
    id: 120,
    title: "Date",
    level: "medium",
    content: "Date represents dates and times. " + "Methods get individual components.",
    task: "Work with dates.",
    hint: "const now = new Date()",
    starterCode: `const now = new Date()
console.log("Now:", now)
console.log("ISO:", now.toISOString())

const date = new Date("2024-01-15")
console.log("Year:", date.getFullYear())
console.log("Month:", date.getMonth())
console.log("Day:", date.getDate())

const formatted = date.toLocaleDateString("pt-BR")
console.log("Formatted:", formatted)

const timestamp = date.getTime()
console.log("Timestamp:", timestamp)

const afterWeek = new Date(timestamp + 7 * 24 * 60 * 60 * 1000)
console.log("After week:", afterWeek.toDateString())`,
  },
  {
    id: 121,
    title: "JSON parse and stringify",
    level: "medium",
    content:
      "JSON.stringify converts objects to string. " + "JSON.parse converts string to object.",
    task: "Serialize and deserialize JSON.",
    hint: "JSON.parse(jsonString)",
    starterCode: `const obj = {
  name: "Alice",
  age: 25,
  skills: ["TypeScript", "React"]
}

const json = JSON.stringify(obj)
console.log("JSON string:", json)

const parsed = JSON.parse(json)
console.log("Parsed:", parsed)

const pretty = JSON.stringify(obj, null, 2)
console.log("Pretty:", pretty)

const data = '{"id":1,"name":"Bob"}'
const user = JSON.parse(data)
console.log("User:", user.name)`,
  },
  {
    id: 122,
    title: "Promise.all and Promise.race",
    level: "medium",
    content:
      "Promise.all waits for all promises to resolve. " +
      "Promise.race returns the first one to resolve.",
    task: "Work with multiple promises.",
    hint: "Promise.all([p1, p2])",
    starterCode: `const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

Promise.all([p1, p2, p3]).then(results => {
  console.log("All:", results)
})

const slow = new Promise(r => setTimeout(() => r("slow"), 100))
const fast = new Promise(r => setTimeout(() => r("fast"), 50))

Promise.race([slow, fast]).then(result => {
  console.log("Race winner:", result)
})

const fail = Promise.reject(new Error("failed"))
const success = Promise.resolve("ok")

Promise.allSettled([fail, success]).then(results => {
  console.log("Settled:", results.map(r => r.status))
})`,
  },
  {
    id: 123,
    title: "try/catch/finally",
    level: "medium",
    content:
      "try executes code, catch handles errors, finally always executes. " +
      "TypeScript infers the error type as unknown.",
    task: "Handle errors with try/catch.",
    hint: "try { } catch (e) { }",
    starterCode: `function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Division by zero")
  return a / b
}

try {
  console.log("Result:", divide(10, 2))
  console.log("Result2:", divide(10, 0))
} catch (e) {
  console.log("Error:", (e as Error).message)
} finally {
  console.log("Cleanup")
}

function safeParse(json: string): unknown {
  try {
    return JSON.parse(json)
  } catch {
    return null
  }
}

console.log(safeParse('{"a":1}'))
console.log(safeParse("invalid"))`,
  },
  {
    id: 124,
    title: "throw and Error",
    level: "medium",
    content: "throw throws exceptions. " + "The Error type has message and name.",
    task: "Throw custom errors.",
    hint: "throw new Error('message')",
    starterCode: `function validateAge(age: number): void {
  if (age < 0) {
    throw new Error("Age cannot be negative")
  }
  if (age > 150) {
    throw new Error("Invalid age")
  }
  console.log("Valid age:", age)
}

validateAge(25)
validateAge(-5)

class ValidationError extends Error {
  constructor(message: string, public field: string) {
    super(message)
    this.name = "ValidationError"
  }
}

try {
  throw new ValidationError("Invalid email", "email")
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(e.field, e.message)
  }
}`,
  },
  {
    id: 125,
    title: "setTimeout and setInterval",
    level: "medium",
    content: "setTimeout executes after a delay. " + "setInterval executes repeatedly.",
    task: "Schedule code execution.",
    hint: "setTimeout(() => {}, 1000)",
    starterCode: `console.log("Before timeout")

setTimeout(() => {
  console.log("After 100ms")
}, 100)

console.log("After scheduling")

let count = 0
const interval = setInterval(() => {
  count++
  console.log("Count:", count)
  if (count >= 3) {
    clearInterval(interval)
    console.log("Stopped")
  }
}, 500)`,
  },
  {
    id: 126,
    title: "clearTimeout and clearInterval",
    level: "medium",
    content: "clearTimeout cancels a setTimeout. " + "clearInterval stops a setInterval.",
    task: "Cancel timers.",
    hint: "clearTimeout(timerId)",
    starterCode: `const timeoutId = setTimeout(() => {
  console.log("This won't print")
}, 1000)

clearTimeout(timeoutId)
console.log("Timeout cancelled")

let count = 0
const intervalId = setInterval(() => {
  count++
  console.log("Count:", count)

  if (count === 2) {
    clearInterval(intervalId)
    console.log("Stopped at 2")
  }
}, 500)`,
  },
  {
    id: 127,
    title: "Object.keys, values, entries",
    level: "medium",
    content:
      "Object.keys returns keys, values returns values, " + "entries returns [key, value] pairs.",
    task: "Iterate over object properties.",
    hint: "Object.keys(obj)",
    starterCode: `const user = {
  name: "Alice",
  age: 25,
  city: "São Paulo"
}

console.log("Keys:", Object.keys(user))
console.log("Values:", Object.values(user))
console.log("Entries:", Object.entries(user))

Object.keys(user).forEach(key => {
  console.log(\`\${key}: \${user[key as keyof typeof user]}\`)
})

Object.entries(user).forEach(([key, value]) => {
  console.log(\`\${key}: \${value}\`)
})`,
  },
  {
    id: 128,
    title: "Object.assign",
    level: "medium",
    content:
      "Object.assign copies properties from source objects to a destination. " +
      "Similar to the spread operator.",
    task: "Copy properties between objects.",
    hint: "Object.assign(target, source)",
    starterCode: `const target = { a: 1 }
const source = { b: 2, c: 3 }

const result = Object.assign(target, source)
console.log("Result:", result)
console.log("Target modified:", target === result)

const defaults = { theme: "dark", lang: "pt" }
const userPrefs = { theme: "light" }

const merged = Object.assign({}, defaults, userPrefs)
console.log("Merged:", merged)

const clone = Object.assign({}, user)
console.log("Clone:", clone)`,
  },
  {
    id: 129,
    title: "Object.freeze and seal",
    level: "medium",
    content:
      "Object.freeze prevents adding/modifying properties. " +
      "Object.seal prevents adding but allows modification.",
    task: "Make an object immutable.",
    hint: "Object.freeze(obj)",
    starterCode: `const obj = { name: "Alice", age: 25 }

Object.freeze(obj)

try {
  obj.age = 30
  console.log("Modified:", obj.age)
} catch {
  console.log("Cannot modify frozen object")
}

obj.newProp = "value"
console.log("New prop:", obj.newProp)

const sealed = { name: "Bob" }
Object.seal(sealed)

sealed.name = "Charlie"
console.log("Sealed modify:", sealed.name)

sealed.newProp = "value"
console.log("Sealed new prop:", sealed.newProp)`,
  },
  {
    id: 130,
    title: "Array.isArray",
    level: "medium",
    content: "Array.isArray checks if a value is an array. " + "Useful for type guards.",
    task: "Check if something is an array.",
    hint: "Array.isArray(value)",
    starterCode: `console.log("Is array:", Array.isArray([1, 2, 3]))
console.log("Not array:", Array.isArray("hello"))
console.log("Not array:", Array.isArray({ length: 3 }))

function process(value: unknown): void {
  if (Array.isArray(value)) {
    console.log("Array length:", value.length)
    value.forEach(v => console.log("Item:", v))
  } else {
    console.log("Not an array:", value)
  }
}

process([1, 2, 3])
process("hello")
process({ 0: "a", 1: "b", length: 2 })`,
  },
  {
    id: 131,
    title: "Boolean Coercion",
    level: "medium",
    content:
      "Values can be converted to boolean with !! or Boolean(). " +
      'Understand falsy values: false, 0, "", null, undefined, NaN.',
    task: "Convert values to boolean.",
    hint: "const bool = !!value",
    starterCode: `console.log("Boolean of 1:", Boolean(1))
console.log("Boolean of 0:", Boolean(0))
console.log("Boolean of '':", Boolean(""))
console.log("Boolean of 'text':", Boolean("text"))
console.log("Boolean of null:", Boolean(null))
console.log("Boolean of {}:", Boolean({}))

console.log("!! 1:", !!1)
console.log("!! 0:", !!0)
console.log("!! '':", !!"")
console.log("!! 'hello':", !!"hello")

const value = "test"
const bool = !!value
console.log("Bool:", bool)`,
  },
  {
    id: 132,
    title: "Number Coercion",
    level: "medium",
    content:
      "Convert strings to numbers with Number(), parseInt(), parseFloat(). " +
      "Understand the difference between them.",
    task: "Convert strings to numbers.",
    hint: "Number('42') or parseInt('42')",
    starterCode: `console.log("Number('42'):", Number("42"))
console.log("Number('3.14'):", Number("3.14"))
console.log("Number('hello'):", Number("hello"))
console.log("Number(''):", Number(""))

console.log("parseInt('42'):", parseInt("42"))
console.log("parseInt('42.5'):", parseInt("42.5"))
console.log("parseInt('42px'):", parseInt("42px"))
console.log("parseInt('hello'):", parseInt("hello"))

console.log("parseFloat('3.14'):", parseFloat("3.14"))
console.log("parseFloat('3.14.15'):", parseFloat("3.14.15"))

console.log("+ '42':", +"42")
console.log("+ '3.14':", +"3.14")`,
  },
  {
    id: 133,
    title: "String Coercion",
    level: "medium",
    content:
      "Convert values to string with String() or toString(). " +
      "Template literals also convert automatically.",
    task: "Convert values to string.",
    hint: "String(42) or 42 + ''",
    starterCode: `console.log("String(42):", String(42))
console.log("String(true):", String(true))
console.log("String(null):", String(null))
console.log("String(undefined):", String(undefined))

const obj = { name: "Alice" }
console.log("obj.toString():", obj.toString())

const num = 42
console.log("num + '':", num + "")

console.log("\`Number: \${42}\`:", \`Number: \${42}\`)

const bool = true
console.log("\`Bool: \${bool}\`:", \`Bool: \${bool}\`)`,
  },
  {
    id: 134,
    title: "Default Parameters",
    level: "medium",
    content:
      "Parameters with default values are used when the argument is undefined. " +
      "Different from optional (?), which can be omitted completely.",
    task: "Use parameters with default values.",
    hint: "function fn(a: number = 10)",
    starterCode: `function greet(name: string = "World"): string {
  return \`Hello, \${name}!\`
}

console.log(greet())
console.log(greet("Alice"))

function multiply(a: number, b: number = 1): number {
  return a * b
}

console.log(multiply(5))
console.log(multiply(5, 3))

function createUser(name: string, age: number = 18) {
  return { name, age }
}

console.log(createUser("Bob"))
console.log(createUser("Charlie", 25))`,
  },
  {
    id: 135,
    title: "Rest Parameters",
    level: "medium",
    content:
      "Rest parameters collect multiple arguments into an array. " +
      "Useful for functions with variable number of parameters.",
    task: "Create a function with rest parameters.",
    hint: "function fn(...args: number[])",
    starterCode: `function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0)
}

console.log("Sum 1:", sum(1))
console.log("Sum 1+2:", sum(1, 2))
console.log("Sum all:", sum(1, 2, 3, 4, 5))

function printAll(prefix: string, ...items: string[]): void {
  items.forEach(item => console.log(prefix, item))
}

printAll("-", "a", "b", "c")

const arr = [1, 2, 3]
console.log("Spread:", sum(...arr))`,
  },
  {
    id: 136,
    title: "Arguments Object",
    level: "medium",
    content:
      "arguments is an array-like object available in regular functions. " +
      "Arrow functions don't have arguments.",
    task: "Access arguments via arguments.",
    hint: "function fn() { console.log(arguments) }",
    starterCode: `function sum(): number {
  let total = 0
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

console.log("Sum:", sum(1, 2, 3))

function showArgs(...args: any[]): void {
  console.log("Args:", args)
  console.log("Arguments:", arguments)
}

showArgs(1, "hello", true)`,
  },
  {
    id: 137,
    title: "IIFE - Immediately Invoked Function",
    level: "medium",
    content:
      "IIFE is a function that executes immediately. " + "Useful for creating private scope.",
    task: "Create an IIFE.",
    hint: "(() => { })()",
    starterCode: `(function() {
  const privateVar = "I'm private"
  console.log("IIFE executed:", privateVar)
})()

const result = (() => {
  const x = 10
  const y = 20
  return x + y
})()

console.log("Result:", result)

const counter = (() => {
  let count = 0
  return {
    increment: () => ++count,
    get: () => count
  }
})()

console.log("Counter:", counter.get())
counter.increment()
console.log("Counter:", counter.get())`,
  },
  {
    id: 138,
    title: "Callback Functions",
    level: "medium",
    content:
      "Callbacks are functions passed as arguments to other functions. " +
      "Commonly used in event listeners and array methods.",
    task: "Pass a function as a callback.",
    hint: "arr.forEach((item) => { })",
    starterCode: `function processArray(
  arr: number[],
  callback: (n: number) => number
): number[] {
  return arr.map(callback)
}

const numbers = [1, 2, 3, 4, 5]

const doubled = processArray(numbers, n => n * 2)
console.log("Doubled:", doubled)

const squared = processArray(numbers, n => n * n)
console.log("Squared:", squared)

function withCallback(name: string, cb: (err: Error | null, result?: string) => void) {
  if (name.length < 3) {
    cb(new Error("Name too short"))
  } else {
    cb(null, \`Hello, \${name}!\`)
  }
}

withCallback("Alice", (err, result) => {
  if (err) {
    console.log("Error:", err.message)
  } else {
    console.log("Result:", result)
  }
})`,
  },
  {
    id: 139,
    title: "for...in and for...of",
    level: "medium",
    content: "for...in iterates over object keys. " + "for...of iterates over values of iterables.",
    task: "Iterate over objects and arrays.",
    hint: "for...of for arrays",
    starterCode: `const user = { name: "Alice", age: 25, city: "SP" }

console.log("for...in:")
for (const key in user) {
  console.log(\`\${key}: \${user[key as keyof typeof user]}\`)
}

const numbers = [10, 20, 30]

console.log("for...of:")
for (const num of numbers) {
  console.log("Number:", num)
}

console.log("for...of with index:")
for (const [index, num] of numbers.entries()) {
  console.log(\`\${index}: \${num}\`)
}`,
  },
  {
    id: 140,
    title: "while and do...while",
    level: "medium",
    content: "while executes while the condition is true. " + "do...while executes at least once.",
    task: "Use while loops.",
    hint: "while (condition) { }",
    starterCode: `let count = 0

while (count < 5) {
  console.log("Count:", count)
  count++
}

let sum = 0
let num = 1

while (num <= 10) {
  sum += num
  num++
}

console.log("Sum 1-10:", sum)

let input = "hello"
let chars = 0

do {
  console.log("Char:", input[chars])
  chars++
} while (chars < input.length)

console.log("Length:", chars)`,
  },
  {
    id: 141,
    title: "break and continue",
    level: "medium",
    content: "break exits the loop completely. " + "continue skips to the next iteration.",
    task: "Control loop flow.",
    hint: "break to exit, continue to skip",
    starterCode: `for (let i = 1; i <= 10; i++) {
  if (i === 5) break
  console.log("i:", i)
}
console.log("Broke at 5")

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue
  console.log("i:", i)
}
console.log("Skipped 3")

let found = false

for (const num of [1, 2, 3, 4, 5]) {
  if (num === 3) {
    found = true
    break
  }
}

console.log("Found:", found)`,
  },
  {
    id: 142,
    title: "Labeled Statements",
    level: "medium",
    content: "Labels identify loops for break/continue. " + "Useful for nested loops.",
    task: "Use labels to control nested loops.",
    hint: "label: for (...)",
    starterCode: `outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(\`i=\${i}, j=\${j}\`)
    if (i === 2 && j === 2) {
      break outer
    }
  }
}
console.log("Broke outer loop")

let i = 0
outer2: while (i < 3) {
  i++
  let j = 0
  while (j < 3) {
    j++
    if (j === 2) continue outer2
    console.log(\`i=\${i}, j=\${j}\`)
  }
}`,
  },
  {
    id: 143,
    title: "typeof operator",
    level: "medium",
    content: "typeof returns the type of a value as a string. " + "Useful for basic type guards.",
    task: "Use typeof to check types.",
    hint: "typeof value === 'string'",
    starterCode: `console.log("typeof 'hello':", typeof "hello")
console.log("typeof 42:", typeof 42)
console.log("typeof true:", typeof true)
console.log("typeof {}:", typeof {})
console.log("typeof []:", typeof [])
console.log("typeof undefined:", typeof undefined)
console.log("typeof null:", typeof null)
console.log("typeof (() => {}):", typeof (() => {}))

function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase()
  }
  return value * 2
}

console.log(process("hello"))
console.log(process(42))`,
  },
  {
    id: 144,
    title: "instanceof",
    level: "medium",
    content:
      "instanceof checks if an object is an instance of a class. " +
      "Also works for built-in objects like Array, Date.",
    task: "Use instanceof to check classes.",
    hint: "value instanceof Array",
    starterCode: `class Dog {
  bark() { return "Woof!" }
}

class Cat {
  meow() { return "Meow!" }
}

const pet = new Dog()

console.log("pet instanceof Dog:", pet instanceof Dog)
console.log("pet instanceof Cat:", pet instanceof Cat)

console.log("[] instanceof Array:", [] instanceof Array)
console.log("{} instanceof Object:", {} instanceof Object)
console.log("new Date() instanceof Date:", new Date() instanceof Date)

function process(value: unknown) {
  if (value instanceof Error) {
    console.log("Error message:", value.message)
  } else if (value instanceof Array) {
    console.log("Array length:", value.length)
  }
}

process(new Error("oops"))
process([1, 2, 3])`,
  },
  {
    id: 145,
    title: "in operator",
    level: "medium",
    content:
      "in checks if a property exists in an object. " +
      "Returns true for own and inherited (use hasOwnProperty for own only).",
    task: "Use in to check properties.",
    hint: "'prop' in object",
    starterCode: `const user = { name: "Alice", age: 25 }

console.log("'name' in user:", "name" in user)
console.log("'email' in user:", "email" in user)

console.log("user.hasOwnProperty('name'):", user.hasOwnProperty("name"))
console.log("user.hasOwnProperty('toString'):", user.hasOwnProperty("toString"))

console.log("'length' in 'hello':", "length" in "hello")
console.log("'0' in [1,2,3]:", "0" in [1, 2, 3])

interface Car {
  brand: string
  model: string
}

const car: Car = { brand: "Toyota", model: "Corolla" }

function hasProp(obj: object, prop: string): boolean {
  return prop in obj
}

console.log(hasProp(car, "brand"))
console.log(hasProp(car, "year"))`,
  },
  {
    id: 146,
    title: "delete operator",
    level: "medium",
    content:
      "delete removes properties from objects. " + "Does not work on variables or functions.",
    task: "Remove properties from objects.",
    hint: "delete object.property",
    starterCode: `const user = { name: "Alice", age: 25, city: "SP" }

console.log("Before delete:", user)
delete user.age
console.log("After delete:", user)

console.log("'age' in user:", "age" in user)

const arr = [1, 2, 3, 4, 5]
console.log("Array before:", arr)
delete arr[2]
console.log("Array after delete:", arr)
console.log("arr[2]:", arr[2])
console.log("'2' in arr:", "2" in arr)`,
  },
  {
    id: 147,
    title: "void operator",
    level: "medium",
    content:
      "void evaluates an expression and returns undefined. " +
      "Useful for IIFEs or preventing navigation in links.",
    task: "Use void operator.",
    hint: "void expression",
    starterCode: `console.log("void 0:", void 0)
console.log("void 1+1:", void 1 + 1)

function logAndReturn<T>(value: T): T {
  console.log("Logging:", value)
  return void console.log("Side effect")
}

const result = logAndReturn(42)
console.log("Result:", result)

const fn = void (async () => {})
console.log("fn:", fn)

console.log("Click link to void")
console.log("Use void for preventDefault")`,
  },
  {
    id: 148,
    title: "Comma Operator",
    level: "medium",
    content:
      "The comma evaluates expressions from left to right and returns the last one. " +
      "Useful in for loops and compact expressions.",
    task: "Use comma operator.",
    hint: "(a, b, c) - returns c",
    starterCode: `const result = (1, 2, 3)
console.log("Result:", result)

let i = 0
const j = (i++, i++)
console.log("i:", i, "j:", j)

for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log(\`i=\${i}, j=\${j}\`)
}

const getCoords = (x: number, y: number) => (console.log(\`\${x},\${y}\`), { x, y })
const coords = getCoords(10, 20)
console.log("Coords:", coords)`,
  },
  {
    id: 149,
    title: "Bitwise Operators",
    level: "medium",
    content:
      "Bitwise operators manipulate bits of numbers. " +
      "Useful for flags, encryption, optimization.",
    task: "Use bitwise operators.",
    hint: "& | ^ ~ << >>",
    starterCode: `console.log("5 & 3:", 5 & 3)
console.log("5 | 3:", 5 | 3)
console.log("5 ^ 3:", 5 ^ 3)
console.log("~5:", ~5)

console.log("5 << 1:", 5 << 1)
console.log("5 >> 1:", 5 >> 1)
console.log("5 >>> 1:", 5 >>> 1)

const FLAG_A = 1
const FLAG_B = 2
const FLAG_C = 4

let flags = 0
flags |= FLAG_A
flags |= FLAG_C

console.log("Has A:", (flags & FLAG_A) > 0)
console.log("Has B:", (flags & FLAG_B) > 0)
console.log("Has C:", (flags & FLAG_C) > 0)

flags &= ~FLAG_A
console.log("After removing A:", flags)`,
  },
  {
    id: 150,
    title: "eval",
    level: "medium",
    content:
      "eval executes a string as JavaScript code. " +
      "Avoid using in production code for security.",
    task: "Use eval carefully.",
    hint: "eval('code string')",
    starterCode: `const code = "2 + 2"
console.log("Result:", eval(code))

const expression = "(1 + 2) * 3"
console.log("Expression:", eval(expression))

const fnBody = "return 42"
const fn = new Function(fnBody)
console.log("Function result:", fn())

const json = '{"name":"Alice","age":25}'
const obj = eval("(" + json + ")")
console.log("Parsed:", obj)

console.log("Note: Avoid eval in production!")`,
  },
];
