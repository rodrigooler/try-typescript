import type { Lesson } from "./types";
export type { Level, Lesson } from "./types";

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Bem-vindo ao TypeScript",
    level: "basic",
    content:
      "TypeScript é um superconjunto de JavaScript que adiciona tipagem estática. " +
      'Com ele, você define o "formato" dos seus dados usando interfaces, evitando ' +
      "erros em tempo de execução. Veja o exemplo: criamos uma interface `User` com " +
      "dois campos tipados e instanciamos um objeto que a respeita.",
    task: "Altere o nome do usuário de 'TypeScript Explorer' para outro nome qualquer.",
    hint: "Mude o valor de `name` dentro do objeto `user`.",
    starterCode: `interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "TypeScript Explorer",
  id: 1
};

console.log(\`Olá, \${user.name}! Seu ID é \${user.id}.\`);`,
  },
  {
    id: 2,
    title: "Tipagem Estática e Inferência",
    level: "basic",
    content:
      "TypeScript infere tipos automaticamente em muitos casos. Quando você define uma variável " +
      "com um valor inicial, TypeScript deduz seu tipo. Isso é chamado de inferência de tipo e " +
      "torna o código mais conciso enquanto mantém a segurança.",
    task: "Observe como o TypeScript infere o tipo da variável `message`.",
    hint: "O tipo é inferido a partir do valor inicial.",
    starterCode: `let message = "Hello, TypeScript!"
let count = 42
let isActive = true

// TypeScript infere:
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
      "Interfaces definem a estrutura que objetos devem seguir. São fundamentais em TypeScript " +
      "para garantir que objetos tenham as propriedades corretas com os tipos certos.",
    task: "Adicione uma propriedade `email` à interface `Person` e ao objeto.",
    hint: "Adicione `email: string` na interface.",
    starterCode: `interface Person {
  name: string
  age: number
}

const person: Person = {
  name: "Alice",
  age: 25
}

console.log(\`\${person.name} tem \${person.age} anos\`)`,
  },
  {
    id: 4,
    title: "Enums",
    level: "basic",
    content:
      "Enums permitem definir um conjunto de constantes nomeadas. São úteis para " +
      "representar estados, direções, papéis de usuário, etc. TypeScript suporta " +
      "enums numéricos (padrão) e de string.",
    task: "Adicione um valor `ADMIN` ao enum `Role` e crie um usuário com esse papel.",
    hint: 'Adicione `ADMIN = "ADMIN"` ao enum e use `Role.ADMIN` no objeto.',
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

console.log(\`\${player.name} (\${player.role}) está olhando para \${player.facing}\`)`,
  },
  {
    id: 5,
    title: "Type Aliases e Union Types",
    level: "basic",
    content:
      "Type aliases criam nomes para tipos complexos. Union types (`|`) permitem " +
      "que uma variável aceite mais de um tipo. Isso é muito mais seguro do que usar " +
      "`any` e ainda mantém a flexibilidade.",
    task: "Crie um type alias `Result` que seja `string | number | boolean`.",
    hint: "type Result = string | number | boolean;",
    starterCode: `type ID = string | number
type Status = "active" | "inactive" | "pending"

function formatId(id: ID): string {
  return typeof id === "number" ? \`#\${id.toString().padStart(4, "0")}\` : id
}

function getStatusLabel(status: Status): string {
  const labels = {
    active: "✅ Ativo",
    inactive: "❌ Inativo",
    pending: "⏳ Pendente"
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
      "Type assertions dizem ao TypeScript para tratar um valor como um tipo específico. " +
      'Use `as` ou sintaxe de colchete angular. É como um "cast" em outras linguagens, ' +
      "mas não converte o valor em tempo de execução.",
    task: "Use type assertion para tratar `input` como `string`.",
    hint: "const str = input as string;",
    starterCode: `let input: unknown = "hello world"

const length1 = (input as string).length
const length2 = (<string>input).length

console.log("Length 1:", length1)
console.log("Length 2:", length2)`,
  },
  {
    id: 7,
    title: "Tipos Básicos",
    level: "basic",
    content:
      "TypeScript suporta todos os tipos primitivos do JavaScript: `string`, `number`, " +
      "`boolean`, `null`, `undefined`. Além disso, oferece `symbol`, `bigint` e o " +
      "tipo `void` para funções que não retornam nada.",
    task: "Crie variáveis dos tipos aprendidos.",
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
    title: "Arrays e Tuplas",
    level: "basic",
    content:
      "Arrays em TypeScript podem ser tipados como `number[]` ou `Array<number>`. " +
      "Tuplas são arrays com tamanho fixo e tipos específicos em cada posição: `[string, number]`.",
    task: "Crie uma tupla com o nome e idade de uma pessoa.",
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
    title: "Funções - Tipagem de Parâmetros e Retorno",
    level: "basic",
    content:
      "Funções em TypeScript podem ter tipos definidos para parâmetros e retorno. " +
      "Isso garante que a função seja chamada com os argumentos corretos e retorne o valor esperado.",
    task: "Adicione o tipo de retorno `number` à função `soma`.",
    hint: "function soma(a: number, b: number): number",
    starterCode: `function greet(name: string): string {
  return \`Olá, \${name}!\`
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
    title: "Parâmetros Opcionais e Default",
    level: "basic",
    content:
      "Parâmetros opcionais usam `?` (ex: `name?: string`). Parâmetros com valor padrão " +
      "são automaticamente opcionais. A diferença é que `undefined` é passado para opcionais, " +
      "enquanto o valor default é usado para parâmetros com默认值.",
    task: "Torne o parâmetro `age` opcional na função `introduce`.",
    hint: "function introduce(name: string, age?: number)",
    starterCode: `function greet(name: string, greeting?: string): string {
  return greeting ? \`\${greeting}, \${name}!\` : \`Olá, \${name}!\`
}

function introduce(name: string, age?: number): string {
  if (age !== undefined) {
    return \`\${name} tem \${age} anos\`
  }
  return \`\${name}\`
}

console.log(greet("Alice"))
console.log(greet("Bob", "Oi"))
console.log(introduce("Charlie", 30))
console.log(introduce("Diana"))`,
  },
  {
    id: 11,
    title: "Utility Types - Partial, Required, Pick, Omit",
    level: "advanced",
    content:
      "TypeScript inclui utility types embutidos que transformam tipos existentes: " +
      "`Partial<T>` torna todos os campos opcionais, `Required<T>` os torna obrigatórios, " +
      "`Pick<T, K>` seleciona campos, `Omit<T, K>` remove campos.",
    task: 'Use `Omit<User, "password">` para criar um tipo `PublicUser`.',
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

const update: UserUpdate = { name: "Novo Nome" }
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
    level: "advanced",
    content:
      "Mapped types permitem criar novos tipos transformando cada propriedade de um tipo existente. " +
      "Usam a sintaxe `{ [K in keyof T]: ... }`. Combinados com `keyof` e modificadores " +
      "(`readonly`, `?`), são extremamente poderosos.",
    task: "Crie um mapped type `Nullable<T>` que torne todas as propriedades opcionais.",
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
    level: "advanced",
    content:
      "Conditional types seguem a sintaxe `T extends U ? X : Y` — se `T` é atribuível a `U`, " +
      "o tipo resultante é `X`, caso contrário `Y`. Com `infer`, você pode extrair tipos " +
      "de dentro de outros tipos.",
    task: "Crie um conditional type `IsArray<T>` que retorne `true` se T for array.",
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
    level: "advanced",
    content:
      "Decorators são funções especiais que podem ser aplicadas a classes, métodos, " +
      "propriedades e parâmetros usando a sintaxe `@decorator`. São amplamente usados " +
      "em frameworks como Angular, NestJS e TypeORM.",
    task: "Crie um decorator `@readonly` que torne uma propriedade não-editável.",
    hint: "Use Object.defineProperty no descriptor.",
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
    console.log(\`\${key} executou em \${(end - start).toFixed(2)}ms\`)
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
    title: "Generics - Introdução",
    level: "basic",
    content:
      "Generics permitem criar componentes que funcionam com qualquer tipo, mantendo " +
      "a segurança de tipos. São representados por `<T>` e permitem criar funções, " +
      "classes e interfaces reutilizáveis.",
    task: "Crie uma função `identity` que retorne o mesmo valor passado.",
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
    title: "Tipos Literais",
    level: "basic",
    content:
      "TypeScript permite especificar valores exatos que uma variável pode ter usando tipos literais. " +
      "Isso é útil quando você quer restringir um valor a um conjunto específico de strings ou números.",
    task: "Crie uma variável que possa ter apenas os valores 'pending', 'loading' ou 'success'.",
    hint: "type Status = 'pending' | 'loading' | 'success';",
    starterCode: `type Status = "pending" | "loading" | "success"

let currentStatus: Status = "pending"
currentStatus = "loading"

console.log("Status atual:", currentStatus)`,
  },
  {
    id: 17,
    title: "Funções Sobrescritas (Overloads)",
    level: "basic",
    content:
      "TypeScript suporta sobrescrita de funções, permitindo que você defina múltiplas assinaturas. " +
      "O TypeScript escolhe a assinatura correta com base nos argumentos fornecidos.",
    task: "Crie uma função `format` que possa formatar números e datas.",
    hint: "Use múltiplas assinaturas antes da implementação.",
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
    title: "Módulos e Imports/Exports",
    level: "basic",
    content:
      "TypeScript dá suporte total ao sistema de módulos ES6. Organize seu código em arquivos " +
      "separados com importações e exportações explícitas para melhor encapsulamento.",
    task: "Crie e exporte uma função de um módulo, e importe-a em outro.",
    hint: "Use `export` e `import` no padrão ES6.",
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
      "Namespaces agrupam código relacionado sem poluir o escopo global. Use `namespace` " +
      "para organizar código internamente e `export` para expor membros.",
    task: "Crie um namespace `MathUtils` com funções `add` e `multiply`.",
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

console.log("Soma:", MathUtils.add(5, 3))
console.log("Multiplicação:", MathUtils.multiply(4, 7))
console.log("PI:", MathUtils.PI)`,
  },
  {
    id: 20,
    title: "Iteradores e Geradores",
    level: "basic",
    content:
      "TypeScript dá suporte total aos protocolos iteradores e geradores do ES6. " +
      "Geradores (`function*`) fornecem uma maneira fácil de criar funções que retornam sequências.",
    task: "Crie uma função geradora que produza números de 1 a N.",
    hint: "Use function* e yield.",
    starterCode: `function* counter(limit: number) {
  let count = 1
  while (count <= limit) {
    yield count
    count++
  }
}

console.log("Contagem até 5:")
for (const num of counter(5)) {
  console.log(num)
}

const nums = [...counter(3)]
console.log("Como array:", nums)`,
  },
  {
    id: 21,
    title: "Inferência de Tipo Avançada",
    level: "advanced",
    content:
      "TypeScript infere tipos automaticamente em muitos contextos. A inferência funciona " +
      "em variáveis, parâmetros, retornos e usa análise de fluxo de controle e contextual typing.",
    task: "Observe como o TypeScript infere tipos diferentes no mesmo exemplo.",
    hint: "O tipo de retorno muda baseado no parâmetro.",
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
    title: "Compatibilidade Estrutural de Tipos",
    level: "advanced",
    content:
      "TypeScript usa compatibilidade estrutural — dois tipos são compatíveis se têm a mesma estrutura. " +
      "Isso é diferente de sistemas nominativos e torna o TypeScript mais flexível.",
    task: "Veja como objetos com estruturas compatíveis podem ser usados interchangeably.",
    hint: "Se as propriedades batem, o tipo é compatível.",
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
    title: "Trabalhando com JavaScript",
    level: "basic",
    content:
      "TypeScript foi projetado para adotar gradualmente JavaScript existente. " +
      "Use `@ts-check` ou `checkJs: true` no tsconfig.json para verificar arquivos .js.",
    task: "Entenda como TypeScript verifica código JavaScript.",
    hint: "Use JSDoc para adicionar tipos em arquivos .js.",
    starterCode: `// Simulando verificação em arquivo .js
// Para habilitar: use // @ts-check no topo

/**
 * Calcula o fatorial de um número
 * @param {number} n - O número
 * @returns {number} O fatorial de n
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

console.log("Fatorial de 5:", factorial(5))`,
  },
  {
    id: 24,
    title: "Arquivos de Declaração (.d.ts)",
    level: "advanced",
    content:
      "Arquivos de declaração (.d.ts) fornecem informações de tipo para bibliotecas JavaScript. " +
      "Definições de tipo para bibliotecas populares estão no DefinitelyTyped (@types/*).",
    task: "Crie um arquivo de declaração simples para uma função.",
    hint: "declare function nome(params): returnType;",
    starterCode: `// Simulando um arquivo de declaração

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

console.log("Arquivo de declaração criado!")
console.log("Instale tipos: npm install @types/lodash")`,
  },
  {
    id: 25,
    title: "Classes - Introdução",
    level: "basic",
    content:
      "Classes em TypeScript funcionam como em JavaScript moderno, mas com tipagem completa. " +
      "Você pode definir propriedades, métodos, construtores e modificadores de acesso.",
    task: "Adicione um método `sayHello` à classe `Person`.",
    hint: "sayHello() { return 'Olá, ' + this.name; }",
    starterCode: `class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet(): string {
    return \`Olá, me chamo \${this.name} e tenho \${this.age} anos\`
  }
}

const person = new Person("Alice", 25)
console.log(person.greet())`,
  },
  {
    id: 26,
    title: "Modificadores de Acesso",
    level: "basic",
    content:
      "TypeScript oferece `public`, `private` e `protected` para controlar o acesso a membros. " +
      "Também há `readonly` para propriedades que não podem ser alteradas após inicialização.",
    task: "Torne a propriedade `balance` privada e adicione um getter.",
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
    title: "Herança de Classes",
    level: "basic",
    content:
      "Classes podem herdar de outras usando `extends`. A classe filha tem acesso a " +
      "métodos e propriedades públicas/protegidas da classe pai, e pode sobrescrevê-los.",
    task: "Crie uma classe `Student` que herde de `Person`.",
    hint: "class Student extends Person { }",
    starterCode: `class Person {
  constructor(public name: string, public age: number) {}

  greet(): string {
    return \`Olá, sou \${this.name}\`
  }
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age)
  }

  study(): string {
    return \`\${this.name} está estudando\`
  }
}

const student = new Student("Alice", 20, "A")
console.log(student.greet())
console.log(student.study())`,
  },
  {
    id: 28,
    title: "Classes Abstratas",
    level: "basic",
    content:
      "Classes abstratas não podem ser instanciadas diretamente, servem como base para outras classes. " +
      "Podem conter métodos abstratos (sem implementação) que as classes filhas devem implementar.",
    task: "Crie uma classe abstrata `Shape` com método abstrato `area`.",
    hint: "abstract class Shape { abstract area(): number; }",
    starterCode: `abstract class Shape {
  abstract area(): number
  abstract perimeter(): number

  describe(): string {
    return \`Área: \${this.area()}, Perímetro: \${this.perimeter()}\`
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
    title: "Getters e Setters",
    level: "basic",
    content:
      "Getters e setters permitem controle preciso sobre o acesso a propriedades. " +
      "Úteis para validação, computação de valores, ou manter invariantes de classe.",
    task: "Crie um getter `fullName` que retorne nome completo.",
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
      console.log("Password deve ter pelo menos 6 caracteres")
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
      "Membros estáticos pertencem à classe em si, não às instâncias. " +
      "Acessados via `ClassName.property`, são úteis para constantes ou funções utilitárias.",
    task: "Adicione um método estático `createDefault` à classe `User`.",
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
      "`Record<K, V>` cria um tipo objeto com chaves K e valores V. " +
      "`Partial<T>` torna todas as propriedades opcionais. " +
      "`Readonly<T>` torna todas as propriedades apenas leitura.",
    task: "Crie um tipo `UserRecord` usando Record<string, User>.",
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

const partial: PartialUser = { name: "Novo Nome" }
const readonly: ReadonlyUser = { id: 1, name: "Alice", email: "alice@example.com" }

console.log("Users:", JSON.stringify(users))
console.log("Partial:", JSON.stringify(partial))`,
  },
  {
    id: 32,
    title: "Utility Types - Extract e Exclude",
    level: "advanced",
    content:
      "`Extract<T, U>` extrai de T os tipos que são atribuíveis a U. " +
      "`Exclude<T, U>` remove de T os tipos que são atribuíveis a U.",
    task: "Use Extract para obter apenas strings de um union type.",
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
    title: "Utility Types - ReturnType e Parameters",
    level: "advanced",
    content:
      "`ReturnType<T>` obtém o tipo de retorno de uma função. " +
      "`Parameters<T>` obtém os tipos dos parâmetros como tupla.",
    task: "Obtenha o tipo de retorno e parâmetros de uma função.",
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
      "Type guards são expressões que refinam o tipo de uma variável. " +
      "Use `typeof`, `instanceof`, ou personalizados com `is` para filtrar tipos em unions.",
    task: "Crie um type guard para verificar se um valor é string.",
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
    title: "unknown e any",
    level: "basic",
    content:
      "`any` desabilita a verificação de tipos completamente. " +
      '`unknown` é o tipo "seguro" que representa qualquer valor — você deve refiná-lo antes de usar.',
    task: "Refine um tipo `unknown` para usá-lo com segurança.",
    hint: "Use type guards para verificar o tipo.",
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
      "`never` representa valores que nunca ocorrem. Funções que sempre lançam erros " +
      "ou loops infinitos têm tipo de retorno `never`. Também é usado em unions exaustivas.",
    task: "Crie uma função que lança erro e tem retorno never.",
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
      return "Norte"
    case "South":
      return "Sul"
    case "East":
      return "Leste"
    case "West":
      return "Oeste"
    default:
      const _exhaustive: never = direction
      return _exhaustive
  }
}

console.log(getDirection("North"))`,
  },
  {
    id: 37,
    title: "keyof e Index Access Types",
    level: "advanced",
    content:
      "`keyof` obtém as chaves de um tipo como union. " +
      "Use `T[K]` para acessar o tipo de uma propriedade específica.",
    task: "Obtenha as chaves de User e o tipo da propriedade 'name'.",
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
      "Constraints (restrições) usam `extends` para limitar os tipos que podem ser usados com generics. " +
      "Isso garante que o tipo tenha as propriedades necessárias.",
    task: "Crie um generic que só aceita objetos com propriedade `length`.",
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
      "Classes genéricas permitem criar componentes reutilizáveis que funcionam com diferentes tipos. " +
      "O tipo é especificado ao criar uma instância da classe.",
    task: "Crie uma classe `Box<T>` que armazena um valor.",
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
      "Interfaces genéricas definem contratos que funcionam com múltiplos tipos. " +
      "São a base de bibliotecas como React, Zod e Prisma.",
    task: "Crie uma interface `Repository<T>` com métodos CRUD.",
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
    title: "Tipagem de Error Handling",
    level: "basic",
    content:
      "TypeScript melhora o tratamento de erros com melhor inferência em blocos try/catch. " +
      "Especifique o tipo do erro para melhor autocomplete.",
    task: "Crie uma função que pode lançar erros e trate-os.",
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
    title: "Async/Await e Promises",
    level: "basic",
    content:
      "TypeScript suporta async/await completamente tipado. Funções async retornam Promises, " +
      "e você pode tipar o valor resolvido.",
    task: "Crie uma função async que retorna um usuário tipado.",
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
    title: "this em Tipos",
    level: "basic",
    content:
      "TypeScript permite tipar `this` em métodos. Use `this` como primeiro parâmetro " +
      "para garantir que métodos sejam chamados no contexto correto (fluent API).",
    task: "Crie uma fluent API com métodos que retornam `this`.",
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
    title: "Optional Chaining e Nullish Coalescing",
    level: "basic",
    content:
      "`?.` acessa propriedades profundas sem erro se algo for null/undefined. " +
      "`??` retorna o operando direito se o esquerdo for null/undefined.",
    task: "Use optional chaining para acessar propriedade aninhada.",
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
      "`!` diz ao TypeScript que um valor não é null/undefined. Use com cautela — " +
      "só quando você tem certeza que o valor existe.",
    task: "Use non-null assertion para acessar propriedade garantida.",
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
      "Type assertions (`as`) convertem tipos. Use-as quando você sabe mais sobre o tipo " +
      "do que o TypeScript. Diferente de casting em outras linguagens, não converte o valor.",
    task: "Use assertion para converter um tipo para outro.",
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
      "Template literal types criam novos tipos usando strings templates. " +
      "Combine com infer para extrair e manipular strings em tipos.",
    task: "Crie um tipo que cria getters automaticamente.",
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
      "Crie unions com uma propriedade em comum (discriminador) para facilitar o TypeScript " +
      "identificar qual membro da union está em uso. Muito útil para state management.",
    task: "Crie uma discriminated union para formatos de arquivo.",
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
      "Mixins são funções que recebem uma classe e retornam uma nova classe com funcionalidades extras. " +
      "Útil para composição quando herança simples não é suficiente.",
    task: "Crie um mixin `Serializable` que adiciona método toJSON.",
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
      'TypeScript permite que interfaces e namespaces com o mesmo nome sejam "mesclados". ' +
      "Interfaces são mescladas automaticamente, namespaces requerem `export`.",
    task: "Crie uma interface que é mesclada com outra.",
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
      "Crie um emissor de eventos type-safe que garante que listeners e eventos correspondam. " +
      "Use generics para mapear nomes de eventos para seus payloads.",
    task: "Crie um tipo EventMap e implemente um emitter.",
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
    title: "Builder Pattern com Generics",
    level: "advanced",
    content:
      "O padrão Builder permite construir objetos complexos passo a passo. " +
      "Com generics, podemos garantir que os métodos retornem o builder correto.",
    task: "Implemente um builder para criar usuários com validation.",
    hint: "Use this возврате para method chaining.",
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
    title: "Currying e Function Composition",
    level: "basic",
    content:
      "Currying transforma funções multi-arg em sequências de funções single-arg. " +
      "Composition combina funções para criar pipelines de dados.",
    task: "Crie funções curried e as compõe.",
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
      "Crie um cliente HTTP que infere tipos de resposta automaticamente. " +
      "Use generics para tipar endpoints e responses.",
    task: "Crie um cliente com tipos para GET e POST.",
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
      "Crie tipos union complexos e use distribuição para transformá-los. " +
      "Útil para criar unions de strings literais automaticamente.",
    task: "Crie uma union de métodos HTTP a partir de um array.",
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
  { method: "delete", path: "/posts/:id", handler: () => "delete post" },
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
      "Atualize objetos e arrays de forma imutável para evitar mutações acidentais. " +
      "Use spread operator e métodos que retornam novos arrays.",
    task: "Atualize um objeto aninhado de forma imutável.",
    hint: "Use spread para criar novas referências.",
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
      "Types recursivos permitem representar estruturas hierárquicas como árvores e listas. " +
      "Útil para JSON, ASTs, e estruturas de dados aninhadas.",
    task: "Crie um tipo para uma árvore de diretórios.",
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
      'Branded types adicionam "tags" a tipos existentes para区分 tipos primitivos. ' +
      "Útil para IDs, currencies, e valores que precisam de validação semântica.",
    task: "Crie branded types para UserId e OrderId.",
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
      "State machines definem um número finito de estados e transições entre eles. " +
      "TypeScript pode garantir que apenas transições válidas ocorram.",
    task: "Crie um state machine para um pedido.",
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
    title: "Weak Types e Type Gards",
    level: "advanced",
    content:
      "Weak types são tipos com todas propriedades opcionais. " +
      "TypeScript tem verificação especial para garantir que pelo menos uma propriedade seja fornecida.",
    task: "Crie uma função que aceita apenas opções válidas.",
    hint: 'Use "at least one" constraint com keyof',
    starterCode: `type Options = {
  timeout?: number
  retries?: number
  onError?: (error: Error) => void
  onSuccess?: () => void
}

type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T]

function configure(options: AtLeastOne<Options>): Options {
  return {
    timeout: 5000,
    retries: 3,
    ...options
  }
}

const config1 = configure({ timeout: 3000 })
const config2 = configure({ retries: 5, onSuccess: () => console.log("OK") })

console.log("Config1:", config1)
console.log("Config2:", config2)

type Point = { x: number; y: number }
type NamedPoint = { name: string } & Partial<Point>

function processPoint(point: NamedPoint): string {
  if (point.x !== undefined && point.y !== undefined) {
    return \`Point at (\${point.x}, \${point.y})\`
  }
  return \`Named: \${point.name}\`
}

console.log(processPoint({ name: "Origin" }))
console.log(processPoint({ name: "A", x: 10, y: 20 }))`,
  },
  {
    id: 61,
    title: "Proxy e Interceptação",
    level: "advanced",
    content:
      "Proxy permite interceptar operações como leitura, escrita, e invocação de métodos. " +
      "Útil para logging, validation, e lazy loading.",
    task: "Crie um proxy para validar propriedades.",
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
    title: "Symbol e Metadata",
    level: "basic",
    content:
      "Symbols são valores únicos que podem servir como chaves de propriedades. " +
      'Úteis para criar propriedades "escondidas" e para reflection.',
    task: "Use Symbol para criar uma propriedade privada.",
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
      "Asserts type guards são funções que verificam e refinam tipos, " +
      "lançando erro se a condição não for atendida.",
    task: "Crie um assert que verifica se um valor é número positivo.",
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
    title: "Infer com Conditional Types",
    level: "advanced",
    content:
      "`infer` extrai tipos de dentro de outros tipos. " +
      "Pode extrair tipos de funções, arrays, promises, e objetos.",
    task: "Extraia o tipo de elemento de um array.",
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
      "Crie um event bus que garante type safety para eventos e handlers. " +
      "Use mapped types para derivar tipos de eventos.",
    task: "Implemente um event bus com subscribe e emit type-safe.",
    hint: "Use keyof e generics para inferência.",
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
    title: "Readonly Deep",
    level: "advanced",
    content:
      "Crie um tipo que torna todas as propriedades aninhadas readonly recursivamente. " +
      "Útil para garantir imutabilidade em objetos complexos.",
    task: "Crie um tipo DeepReadonly<T>.",
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

console.log("Company:", JSON.stringify(company, null, 2))

company.name = "New Name"
company.address.city = "Rio"
company.employees.push({ name: "New", role: "Manager" })`,
  },
  {
    id: 67,
    title: "Strict Null Checks em filters",
    level: "basic",
    content:
      "Filtrar arrays pode criar tipos union com undefined. " +
      "Aprenda a usar type guards para refiná-los corretamente.",
    task: "Filtre valores nulos e refine o tipo.",
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
      "Compare enums, union types, e objetos const para entender quando usar cada um. " +
      "Cada abordagem tem prós e contras em termos de runtime e type safety.",
    task: "Converta um enum para union type e compare.",
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
      "Crie um parser de CSV que infere tipos de colunas. " +
      "Use generics para mapear headers para tipos.",
    task: "Parse CSV e infira tipos das colunas.",
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
    title: "Schema Validation com Mapped Types",
    level: "advanced",
    content:
      "Crie um schema validator que verifica objetos contra definições de tipos. " +
      "Use mapped types para transformar o schema em validadores.",
    task: "Valide um objeto contra um schema.",
    hint: "Use Record para mapear campos para validadores.",
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
      "Use `this` como tipo de retorno para criar fluent APIs onde métodos retornam " +
      "a classe concreta, não a classe base. Útil para herança.",
    task: "Crie uma fluent API com this polimórfico.",
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
    title: "Tuple Types em Funções",
    level: "basic",
    content:
      "Tuplas podem ser usadas para tipar parâmetros de funções com múltiplos valores. " +
      "Útil para funções que retornam múltiplos valores.",
    task: "Crie uma função que retorna nome e idade como tupla.",
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
      "Interfaces são melhores para objetos e classes, permitindo extends e merge. " +
      "Type aliases são melhores para unions, intersections, e tipos primitivos.",
    task: "Compare interface e type para o mesmo objeto.",
    hint: "interface para objetos, type para unions",
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
      "TypeScript resolve módulos de diferentes formas: classic, node, node16, nodenext. " +
      "Entenda as diferenças para configurar projetos corretamente.",
    task: "Configure paths e baseUrl para imports.",
    hint: 'Configure "baseUrl" e "paths" no tsconfig.json',
    starterCode: `// Simulando paths do tsconfig
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
    title: "Ambient Modules e Triple-Slash",
    level: "advanced",
    content:
      "Use triple-slash directives para declarar dependências de módulos. " +
      "Útil para incluir tipos e módulos em arquivos compilados.",
    task: "Use triple-slash para declarar um módulo.",
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
    title: "Union Narrowing com never",
    level: "advanced",
    content:
      "Use `never` em unions para forçar o TypeScript a verificar todos os casos. " +
      "Útil em switch statements exaustivos.",
    task: "Crie um switch exaustivo.",
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
      "Crie funções que adicionam event listeners com type safety total. " +
      "O handler deve ter o tipo correto baseado no evento.",
    task: "Crie uma função addEventListener type-safe.",
    hint: "Use generics para inferir o handler type.",
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
    title: "Intersection Types com Mixins",
    level: "advanced",
    content:
      "Intersection types combinam múltiplos tipos em um. " +
      "Útil para adicionar funcionalidades via mixins ou criar tipos compuestos.",
    task: "Crie um tipo que é both Serializable e Validatable.",
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
      "TypeScript não verifica console por padrão. " +
      "Crie wrappers type-safe para logging consistente.",
    task: "Crie funções de log type-safe.",
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
    title: "Pattern Matching Simples",
    level: "basic",
    content:
      "Implemente um pattern matching simples com generics. " +
      "Similar ao match em linguagens funcionais.",
    task: "Crie uma função match que execute patterns.",
    hint: "function match<T, R>(value: T, patterns: Record<T, R>): R",
    starterCode: `function match<T, R>(value: T, patterns: Record<T, R>): R {
  if (value in patterns) {
    return patterns[value]
  }
  throw new Error(\`No pattern match for \${value}\`)
}

const statusLabels = match<"pending" | "success" | "error", string>(undefined as any, {
  pending: "Aguardando...",
  success: "Sucesso!",
  error: "Erro occurred"
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
      "Variadic tuples permitem criar tipos que aceitam número variável de elementos. " +
      "Útil para concatenação de tipos e tail recursion.",
    task: "Crie um tipo que concatena tuplas.",
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
    title: "Awaited Type para Promises",
    level: "advanced",
    content:
      "O utility type `Awaited` extrai o tipo resolvido de uma Promise. " +
      "Funciona recursivamente para Promises aninhadas.",
    task: "Use Awaited para tipar o resultado de async functions.",
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
    title: "Brand Keys em Mapped Types",
    level: "advanced",
    content:
      "Use template literal types em mapped types para criar transformações de chaves. " +
      "Útil para adicionar prefixos/sufixos ou converter convenções.",
    task: "Crie um mapped type que adiciona prefixo 'get' a métodos.",
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
      "Implemente um hook de estado similar ao useState do React. " +
      "O setter deve permitir update parcial e inferir tipos corretamente.",
    task: "Crie um useState simplificado com tipos inferidos.",
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
      "Partial torna propriedades de primeiro nível opcionais. " +
      "DeepPartial torna TODAS as propriedades aninhadas opcionais recursivamente.",
    task: "Crie um tipo DeepPartial<T>.",
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
    title: "Extract Keys por Tipo de Valor",
    level: "advanced",
    content:
      "Crie um tipo que extrai chaves de um objeto baseado no tipo de seus valores. " +
      "Útil para encontrar campos de um certo tipo.",
    task: "Extraia chaves cujos valores são do tipo string.",
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
      "Implemente um reducer type-safe similar ao Redux. " +
      "O tipo de ação determina quais payloads são válidos.",
    task: "Crie um reducer com actions type-safe.",
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
      "`ConstructorParameters<T>` extrai os tipos de parâmetros do construtor de T. " +
      "Útil para criar factories e injeção de dependência.",
    task: "Use ConstructorParameters para criar uma factory.",
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
    title: "Optional Keys e Required Keys",
    level: "advanced",
    content:
      "`Required<T>` torna todas as propriedades obrigatórias. " +
      "`Optional<T>` (custom) pode fazer o oposto, ou criar tipos que têm apenas opcionais.",
    task: "Extraia chaves opcionais e obrigatórias separadamente.",
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
      "Combine tudo: generics, conditional types, e mapped types " +
      "para criar um event bus completamente type-safe.",
    task: "Crie um event bus com inferred handlers.",
    hint: "Use infer para extrair tipos de eventos.",
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
      "`Omit<T, K>` remove propriedades de um tipo objeto. " +
      "`Exclude<T, U>` remove tipos de uma union. Entenda a diferença.",
    task: "Use Omit para objeto e Exclude para union.",
    hint: "Omit para objetos, Exclude para unions",
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
    title: "Object.entries e Object.keys Tipados",
    level: "basic",
    content:
      "Object.entries e Object.keys retornam `string[]` por padrão. " +
      "Use assertion ou generics para tipá-los corretamente.",
    task: "Itere sobre um objeto com tipos corretos.",
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
      "Com strictPropertyInitialization, propriedades de classe devem ser inicializadas " +
      "no construtor ou com initialization shorthand.",
    task: "Inicialize propriedades corretamente.",
    hint: "Use constructor ou initialization shorthand.",
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
      "Crie um wrapper type-safe para fetch que infere o tipo de resposta. " +
      "Suporta JSON, texto, e verificação de status.",
    task: "Crie uma função fetchJson type-safe.",
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
      "Crie um router type-safe onde cada rota tem seu handler com tipos específicos. " +
      "O handler recebe apenas os parâmetros definidos para aquela rota.",
    task: "Crie handlers de rota type-safe.",
    hint: "Use Record para mapear rotas para handlers.",
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
      "Crie uma factory que gera objetos tipados com métodos úteis. " +
      "O tipo de retorno deve ser completamente inferido.",
    task: "Crie uma factory para gerar objetos com IDs.",
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
      "Dado um objeto, derive seu tipo automaticamente. " +
      "Use `typeof` para criar tipos a partir de valores.",
    task: "Use typeof para criar tipos a partir de objetos.",
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
      "Ao acessar propriedades opcionais aninhadas, você pode usar optional chaining " +
      "para evitar erros. Aprenda a lidar com undefined em profundidades.",
    task: "Acesse propriedades profundas com safety.",
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
      "Crie um sistema de eventos onde emissores e listeners são type-safe. " +
      "O tipo de evento determina os dados disponíveis.",
    task: "Implemente subscribe/publish com tipos derivados.",
    hint: "Use generic para relacionar evento e dados.",
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
    title: "Conclusão: Próximos Passos",
    level: "basic",
    content:
      "Parabéns por completar 100 lições de TypeScript! Agora você tem uma base sólida. " +
      "Próximos passos: contribua com projetos open source, explore bibliotecas como React/Next.js, " +
      "e pratique com desafios de código.",
    task: "Revise o que aprendeu e continue praticando!",
    hint: "Prática leva à maestria!",
    starterCode: `console.log("🎉 Parabéns!")
console.log("")
console.log("Você completou 100 lições de TypeScript!")
console.log("")
console.log("Tópicos aprendidos:")
console.log("- Tipos básicos e avançados")
console.log("- Interfaces e Type Aliases")
console.log("- Classes e Orientação a Objetos")
console.log("- Generics e Constraints")
console.log("- Utility Types")
console.log("- Conditional Types e Mapped Types")
console.log("- Decorators")
console.log("- Async/Await e Promises")
console.log("- Type Guards e Assertions")
console.log("- Pattern Matching")
console.log("- Event Systems")
console.log("")
console.log("Próximos passos:")
console.log("1. Contribua em projetos open source")
console.log("2. Explore React/Next.js com TypeScript")
console.log("3. Pratique com LeetCode/CodeWars")
console.log("4. Estude bibliotecas como Zod, Prisma, tRPC")
console.log("")
console.log("Boa jornada! 🚀")`,
  },
  {
    id: 101,
    title: " typeof com Objetos",
    level: "medium",
    content:
      "Use `typeof` para obter o tipo de uma variável ou objeto. " +
      "Isso cria um tipo automaticamente baseado no valor.",
    task: "Obtenha o tipo de um objeto usando typeof.",
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
    title: " Operador && e ||",
    level: "medium",
    content:
      "Operadores lógicos funcionam como em JavaScript. " +
      "Aprenda a usá-los com tipos condicionais.",
    task: "Use operadores lógicos em expressões.",
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
    title: " Ternary Operator",
    level: "medium",
    content:
      "O operador ternário `condição ? valor1 : valor2` é útil para condições simples. " +
      "Também pode ser usado em tipos com conditional types.",
    task: "Use o operador ternário para escolher valores.",
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
    title: " Arrow Functions",
    level: "medium",
    content:
      "Arrow functions são funções anônimas mais sintéticas. " +
      "TypeScript infere tipos de parâmetros e retorno.",
    task: "Crie arrow functions tipadas.",
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
    title: " Spread em Objetos",
    level: "medium",
    content:
      "O spread operator `...` copia propriedades de objetos. " +
      "Útil para criar cópias e mesclar objetos.",
    task: "Use spread para mesclar objetos.",
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
    title: " Spread em Arrays",
    level: "medium",
    content:
      "Spread em arrays cria novas cópias ou concatena arrays. " +
      "Não modifica o array original (imutabilidade).",
    task: "Use spread para manipular arrays.",
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
    title: " Destructuring de Objetos",
    level: "medium",
    content:
      "Destructuring extrai propriedades de objetos em variáveis. " +
      "Pode usar valores padrão para propriedades opcionais.",
    task: "Extraia propriedades de um objeto.",
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
    title: " Destructuring de Arrays",
    level: "medium",
    content:
      "Destructuring de arrays usa posição, não nomes. " +
      "Pode ignorar elementos ou usar rest parameters.",
    task: "Extraia elementos de um array por posição.",
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
    title: " Array Methods - map",
    level: "medium",
    content:
      "map cria um novo array transformando cada elemento. " +
      "TypeScript infere o tipo do array resultante.",
    task: "Use map para transformar um array.",
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
    title: " Array Methods - filter",
    level: "medium",
    content:
      "filter cria um novo array com elementos que passam no teste. " +
      "TypeScript refina o tipo automaticamente.",
    task: "Filtre um array usando filter.",
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
    title: " Array Methods - reduce",
    level: "medium",
    content: "reduce reduz um array a um único valor. " + "O acumulador pode ser qualquer tipo.",
    task: "Some todos os números de um array.",
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
    title: " Array Methods - find e findIndex",
    level: "medium",
    content:
      "find retorna o primeiro elemento que satisfaz a condição. " +
      "findIndex retorna sua posição.",
    task: "Encontre um elemento no array.",
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
    title: " Array Methods - some e every",
    level: "medium",
    content:
      "some retorna true se algum elemento passar no teste. " +
      "every retorna true se todos passarem.",
    task: "Verifique condições em arrays.",
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
    title: " Array Methods - includes e indexOf",
    level: "medium",
    content:
      "includes verifica se um valor existe no array. " +
      "indexOf retorna a posição ou -1 se não encontrar.",
    task: "Verifique se um valor existe no array.",
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
    title: " Array Methods - sort",
    level: "medium",
    content:
      "sort ordena elementos no lugar. " +
      "Para ordenação correta, forneça uma função comparadora.",
    task: "Ordene um array de números.",
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
    title: " Array Methods - slice e splice",
    level: "medium",
    content:
      "slice retorna uma cópia de uma porção do array. " +
      "splice remove/substitui elementos no lugar.",
    task: "Extraia e modifique arrays.",
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
    title: " Array Methods - flat",
    level: "medium",
    content: "flat nivela arrays aninhados. " + "flatMap combina map e flat em uma operação.",
    task: "Nivele arrays aninhados.",
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
    title: " String Methods",
    level: "medium",
    content:
      "Strings têm métodos úteis como split, join, trim, etc. " +
      "TypeScript os trata como métodos de string.",
    task: "Manipule uma string.",
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
    title: " Math e Number",
    level: "medium",
    content:
      "Math fornece funções matemáticas úteis. " +
      "Number tem constantes e métodos para converter.",
    task: "Use Math e Number para operações.",
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
    title: " Date",
    level: "medium",
    content: "Date representa datas e tempos. " + "Métodos obtêm componentes individuais.",
    task: "Trabalhe com datas.",
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
    title: " JSON parse e stringify",
    level: "medium",
    content:
      "JSON.stringify converte objetos para string. " + "JSON.parse converte string para objeto.",
    task: "Serialize e deserialize JSON.",
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
    title: " Promise.all e Promise.race",
    level: "medium",
    content:
      "Promise.all espera todas as promises resolverem. " +
      "Promise.race retorna a primeira que resolver.",
    task: "Trabalhe com múltiplas promises.",
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
    title: " try/catch/finally",
    level: "medium",
    content:
      "try executa código, catch trata erros, finally executa sempre. " +
      "TypeScript infere o tipo do erro como unknown.",
    task: "Trate erros com try/catch.",
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
    title: " throw e Error",
    level: "medium",
    content: "throw lança exceções. " + "O tipo Error tem message e name.",
    task: "Lance erros personalizados.",
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
    title: " setTimeout e setInterval",
    level: "medium",
    content: "setTimeout executa após um delay. " + "setInterval executa repetidamente.",
    task: "Agende execução de código.",
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
    title: " clearTimeout e clearInterval",
    level: "medium",
    content: "clearTimeout cancela um setTimeout. " + "clearInterval para um setInterval.",
    task: "Cancele timers.",
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
    title: " Object.keys, values, entries",
    level: "medium",
    content:
      "Object.keys retorna chaves, values retorna valores, " +
      "entries retorna pares [key, value].",
    task: "Itere sobre as propriedades de um objeto.",
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
    title: " Object.assign",
    level: "medium",
    content:
      "Object.assign copia propriedades de objetos fonte para um destino. " +
      "É similar ao spread operator.",
    task: "Copie propriedades entre objetos.",
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
    title: " Object.freeze e seal",
    level: "medium",
    content:
      "Object.freeze impede adição/modificação de propriedades. " +
      "Object.sele impede adição mas permite modificação.",
    task: "Torne um objeto imutável.",
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
    title: " Array.isArray",
    level: "medium",
    content: "Array.isArray verifica se um valor é um array. " + "Útil para type guards.",
    task: "Verifique se algo é um array.",
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
    title: " Boolean Coercion",
    level: "medium",
    content:
      "Valores podem ser convertidos para boolean com !! ou Boolean(). " +
      'Entenda falsy values: false, 0, "", null, undefined, NaN.',
    task: "Converta valores para boolean.",
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
    title: " Number Coercion",
    level: "medium",
    content:
      "Converta strings para números com Number(), parseInt(), parseFloat(). " +
      "Entenda a diferença entre eles.",
    task: "Converta strings para números.",
    hint: "Number('42') ou parseInt('42')",
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
    title: " String Coercion",
    level: "medium",
    content:
      "Converta valores para string com String() ou toString(). " +
      "Template literals também convertem automaticamente.",
    task: "Converta valores para string.",
    hint: "String(42) ou 42 + ''",
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
    title: " Default Parameters",
    level: "medium",
    content:
      "Parâmetros com valor padrão são usados quando o argumento é undefined. " +
      "Diferente de opcionais (?), que podem ser omitidos completamente.",
    task: "Use parâmetros com valor padrão.",
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
    title: " Rest Parameters",
    level: "medium",
    content:
      "Rest parameters收集 múltiplos argumentos em um array. " +
      "Útil para funções com número variável de parâmetros.",
    task: "Crie uma função com rest parameters.",
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
    title: " Arguments Object",
    level: "medium",
    content:
      "arguments é um objeto array-like disponível em funções normais. " +
      "Arrow functions não têm arguments.",
    task: "Acesse argumentos via arguments.",
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
    title: " IIFE - Immediately Invoked Function",
    level: "medium",
    content: "IIFE é uma função que executa imediatamente. " + "Útil para criar escopo privado.",
    task: "Crie uma IIFE.",
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
    title: " Callback Functions",
    level: "medium",
    content:
      "Callbacks são funções passadas como argumento para outras funções. " +
      "Comumente usados em event listeners e array methods.",
    task: "Passe uma função como callback.",
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
    title: " for...in e for...of",
    level: "medium",
    content:
      "for...in itera sobre chaves de objetos. " + "for...of itera sobre valores de iteráveis.",
    task: "Itere sobre objetos e arrays.",
    hint: "for...of para arrays",
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
    title: " while e do...while",
    level: "medium",
    content:
      "while executa enquanto a condição for verdadeira. " +
      "do...while executa pelo menos uma vez.",
    task: "Use loops while.",
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
    title: " break e continue",
    level: "medium",
    content: "break sai do loop completamente. " + "continue pula para a próxima iteração.",
    task: "Controle o fluxo de loops.",
    hint: "break para sair, continue para pular",
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
    title: " Labeled Statements",
    level: "medium",
    content: "Labels identificam loops para break/continue. " + "Útil para loops aninhados.",
    task: "Use labels para controlar loops aninhados.",
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
    title: " typeof operator",
    level: "medium",
    content: "typeof retorna o tipo de um valor como string. " + "Útil para type guards básicos.",
    task: "Use typeof para verificar tipos.",
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
    title: " instanceof",
    level: "medium",
    content:
      "instanceof verifica se um objeto é instância de uma classe. " +
      "Também funciona para objetos built-in como Array, Date.",
    task: "Use instanceof para verificar classes.",
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
    title: " in operator",
    level: "medium",
    content:
      "in verifica se uma propriedade existe em um objeto. " +
      "Retorna true para próprias e herdadas (com hasOwnProperty para só próprias).",
    task: "Use in para verificar propriedades.",
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
    title: " delete operator",
    level: "medium",
    content: "delete remove propriedades de objetos. " + "Não funciona em variáveis ou funções.",
    task: "Remova propriedades de objetos.",
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
    title: " void operator",
    level: "medium",
    content:
      "void avalia uma expressão e retorna undefined. " +
      "Útil para IIFEs ou previnir navegação em links.",
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
    title: " Comma Operator",
    level: "medium",
    content:
      "A vírgula avalia expressões da esquerda para direita e retorna a última. " +
      "Útil em loops for e expressões compactas.",
    task: "Use operador vírgula.",
    hint: "(a, b, c) - retorna c",
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
    title: " Bitwise Operators",
    level: "medium",
    content:
      "Operadores bitwise manipulam bits de números. " +
      "Útil para flags, criptografia, otimização.",
    task: "Use operadores bitwise.",
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
    title: " eval",
    level: "medium",
    content:
      "eval executa uma string como código JavaScript. " +
      "Evite usar em código de produção por segurança.",
    task: "Use eval com cuidado.",
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
