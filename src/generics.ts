// type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

// export function myFilter<T>(array: T[], callback: FilterCallback<T>): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }

// const array = [1, 2, 3, 4, 5];

// const filteredArray = array.filter((num) => num < 5);
// console.log(filteredArray); // [1, 2, 3, 4]

// const filteredArray2 = myFilter(array, (num) => num < 5);
// console.log(filteredArray2); // [1, 2, 3, 4]

// type MyType = number;

// const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
// console.log(arrayNumbers);

// async function promiseAsync() {
//   return 1;
// }

// async function myPromise(): Promise<MyType> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });
// }

// promiseAsync().then((result) => console.log(result + 1));
// myPromise().then((result) => console.log(result + 1));

// interface PersonProtocol<T = string, U = number> {
//   name: T;
//   lastNatme: T;
//   age: U;
// }

// const student: PersonProtocol<number, number> = {
//   name: 'John',
//   lastname: 'Doe',
//   age: 30,
// };

// Constraint

// type getKeyFn = <O, K extends keyof O>(object: K) => O[K];

// const getKey: getKeyFn = (object, key) => object[key];

// const person = {
//   color: 'Pink',
//   vaccine: ['Vaccine 1', 'Vaccine 2'],
// };

// const vaccine = getKey(animal, 'vaccines');
// const color = getKey(animal, 'color');

// Generics with classes

// export class Person<T, U> {
//   constructor(public name: T, public age: U) {}
// }

// const person1 = new Person('John', 25);

// export class Stack<T> {
//   private counter = 0;
//   private elements: { [k: number]: T } = {};

//   push(element: T): void {
//     this.elements[this.counter] = element;
//     this.counter++;
//   }

//   pop(): T | void {
//     if (this.isEmpty()) return undefined;

//     this.counter--;
//     const element = this.elements[this.counter];
//     delete this.elements[this.counter]
//   }

//   isEmpty(): boolean {
//     return this.counter === 0;
//   }

//   size(): number {
//     return this.counter;
//   }

//   showStack(): void {
//     for (const key in this.elements) {
//       console.log(this.elements[key]);
      
//     }
//   }
// }

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// const element1 = stack.pop();

// while (!stack.isEmpty()) {
//   console.log(stack.pop());
// }

// Intersection

// function gatherObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
//   return { ...obj1, ...obj2 };
// }

// const obj1 = { key1: 'value1'};
// const obj2 = { key2: 'value2'};
// const accumulator = gatherObjects(obj1, obj2);
// console.log(accumulator);

