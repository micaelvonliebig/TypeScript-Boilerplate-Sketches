// Type Void
// function noReturn(...args: string[]): void {
//   console.log(args.join(''));
// }

// const person = {
//   name: 'John',
//   lastName: 'Doe',

//   showName(): void {
//     console.log(`${this.name} ${this.lastName}`);
//   },
// };

// noReturn('John', 'Doe');
// person.showName();

// export { person };

// const object1: {
//   key1: string;
//   key2: string;
//   [key: string]: unknown;
// } = {
//   key1: 'Value',
//   key2: 'Value',
// }

// Array<T> / T[]

// export function multiplyArgs(...args: Array<number>): number {
// return args.reduce((acc, value) => acc * value, 1);
// }
//
// export function concatString(...args: string[]): string {
// return args.reduce((acc, value) => acc + value);
// }
//
// export function toUpperCase(...args: string[]): string[] {
// return args.map((value) => value.toUpperCase());
// }
//
// const result = multiplyArgs(1, 2, 3);
// const concat = concatString('a', 'b', 'c');
// const upper = toUpperCase('a', 'b', 'c');
//
// console.log(result);
// console.log(concat);
// console.log(upper);

// Tuple
// const customerData: readonly [number, string] = [1, 'John'];

// customerData[0] = 100;
// customerData[1] = 'Johnny';

// readonly array
// const arr1: readonly string[] = ['Jane', 'Doe'];
// const arr2: ReadonlyArray<string> = ['Johnny', 'Johnson'];

// console.log(arr1);
// console.log(arr2);

// Null and undefined
//
// let x;
//
// if (typeof x === 'undefined') x = 20;
// console.log(x * 2);
//
// export function createPerson(
// firstName: string,
// lastName: string,
// ): {
// firstName: string;
// lastName: string;
// } {
// return {
// firstName,
// lastName,
// };
// }
//
// export function squareOf(x: any) {
// if (typeof x === 'number') return x * x;
// return null;
// }
//
// const squareOfTwoNumber = squareOf(2);
// const squareOfTwoString = squareOf('2');
//
// if (squareOfTwoNumber === null) {
// console.log('Invalid account');
// }

// type Never

// function createError(): never {
// throw new Error('Error');
// }

// type Enum

// enum Colors {
//   RED, // 0
//   BLUE, // 1
//   YELLOW, // 2
// }

// console.log(Colors);

// Unknown

// let x: unknown;

// x = 100;
// x = 'Luiz';
// x = 900;
// x = 10;
// const y = 800;

// if (typeof x === 'number') console.log(x + y);

// Union Types

// function addOrConcat(a: number | string, b: number | string): number | string {
//   if (typeof a === 'number' && typeof b === 'number') return a + b;
//   return '${a}${b}';
// }

// console.log(10, 20);
// console.log('10', 20);
// console.log(10, '20');
// console.log('10', '20');

// Literal Types

// let x = 10;
// x = 0b1010;
// const y = 10;
// const a = 100;

// const person = {
//   name: 'John' as const,
//   lastName: 'Doe',
// };

// function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
//   return color;
// }
// console.log(chooseColor('Red'));

// Module mode
// export default 1;

// Type Alias

// type Age = number;
// type Person = {
//   name: string;
//   age: Age;
//   salary: number;
//   favoriteColor?: string;
// };
// type RGBColor = 'Red' | 'Green' | 'Blue';
// type CMYKColor = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
// type FavoriteColor = RGBColor | CMYKColor;

// const person: Person = {
//   age: 30,
//   name: 'John',
//   salary: 200_000, // 200000
// };

// export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
//   return { ...person, favoriteColor: color };
// }

// console.log(setFavoriteColor(person, 'Blue'));

// Intersection Types

// type HasName = { name: string };
// type HasLastName = { lastname: string };
// type HasAge = { age: number };
// type Person = HasName & HasLastName & HasAge;

// type AB = 'A' | 'B';
// type AC = 'A' | 'C';
// type AD = 'D' | 'A';
// type Intersection = AB & AC & AD;

// const person: Person = {
//   name: 'John',
//   lastname: 'Doe',
//   age: 30,
// };

// console.log(person);

// // Module mode
// export { person };

// Structural Typing

// type VerifyUserFn = (user: User, sentValue: User) => boolean;
// type User = { username: string; password: string };

// const verifyUser: VerifyUserFn = (user, sentValue) => {
//   return user.username === sentValue.username && user.password === sentValue.password;
// };

// const dbUser = { username: 'John', password: '123456' };
// const sentUser = { username: 'John', password: '123456'};
// const loggedIn = verifyUser(dbUser, sentUser);
// console.log(loggedIn);

// Type Assertion

// const body = document.querySelector('body');
// if (body) body.style.background = 'red';

// // Non-null assertion (!);
// const body2 = document.querySelector('body')!;
// body2.style.background = 'blue';

// // Type assertion
// const body3 = document.querySelector('body') as HTMLBodyElement;
// body3.style.background = 'green';

// // HTMLElement
// const input = document.querySelector('.input') as HTMLInputElement;
// input.value = 'Value';
// input.focus();

// // Wrong? type assertion
// const body4 = (document.querySelector('body') as unknown) as number;
