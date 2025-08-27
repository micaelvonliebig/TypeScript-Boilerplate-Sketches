// type Adder = {
//   (x: number): number;
//   (x: number, y: number): number;
//   (...arg: number[]): number;
// };

// const adder: Adder = (x: number, y: number, ...args: number[]) => {
//   if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
//   return x + (y || 0);
// };

// console.log(adder(1));
// console.log(adder(1, 2));
// console.log(adder(1, 2, 3));

type DocumentObj = {
  title: string;
  text: string;
  date?: Date;
}

const document1: DocumentObj = {
  title: 'Title',
  text: 'Text',
};

// console.log(document1.date?.toDateString() ?? 'No date found');
// console.log(undefined ?? 'No date found');
// console.log(null ?? 'No date found');
// console.log(false ?? 'No date found');
// console.log(0 ?? 'No date found');
// console.log(document1.date?.toDateString() ?? 'No date found');
