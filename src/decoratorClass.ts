function reverseNameAndColor(param1: string, param2: string) {
  return function<T extends new (...args: any[]) => any>(target: T): T {
    console.log('Decorator received ', target);

    return class extends target {
      color: string;
      name: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverse(args[0]);
        this.color = this.reverse(args[1]);
      }

      reverse(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  }
}

@reverseNameAndColor('Value1', 'Value2')
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {
    console.log('Hello Class Animal');
  }
}

const animal = new Animal('Flamingo', 'purple');
console.log(animal);
