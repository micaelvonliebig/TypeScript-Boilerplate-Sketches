type MapStringCallback = (item: string) => string;

export function mapStrings(arr: string[], callbackfn: MapStringCallback): string[] {
  const newArr: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArr.push(callbackfn(item));
  }

  return newArr;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
