// export function add(a: unknown, b: unknown): number | string {
//   return typeof a === 'number' && typeof b === 'number' ? a + a : `${a}${b}`;
// }

// console.log(add(1, 5));
// console.log(add('a', 'b'));

// type Person = { type: 'person'; name: string };
// type Animal = { type: 'animal'; color: string};
// type PersonOrAnimal = Person | Animal;

// export class Student implements Person {
//   type: 'person' = 'person';
//   constructor(public name: string) {}
// }

// function showName(obj: PersonOrAnimal): void {
//   // if ('name' in obj) console.log(obj.name);
//   // if (obj instanceof Student) console.log(obj.name);
//   switch (obj.type) {
//     case 'person':
//       console.log(obj.name);
//       return;
//     case 'animal':
//       console.log('Animal', obj.color);
//       return;
//   }
// }

// showName(new Student('John'));

// type ColorsObj = typeof colorsObj;
// type ColorsKeys = keyof ColorsObj;

// const colorsObj = {
//   red: 'red',
//   green: 'green',
//   blue: 'blue'
// };

// function showColor(color: 'green' | 'red' | 'blue', colors: typeof colorsObj) {
//   return colors[color];
// }

// console.log(showColor('red', colorsObj));
