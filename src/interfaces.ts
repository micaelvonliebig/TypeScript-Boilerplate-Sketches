interface TypeName {
  name: string;
};

interface TypeLastName {
  lastName: string;
}

interface TypeFullName {
  fullName(): string;
}

type TypePerson = TypeName & TypeLastName & TypeFullName;
interface TypePerson2 extends TypeName, TypeLastName,TypeFullName {}

export class Person implements TypeName, TypeLastName, TypeFullName {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const personObj: TypePerson2 = {
  fullName() {
    return this.name + ' ' + this.lastName;
  },
  name: 'John',
  lastName: 'Doe'
}

const person = new Person('John', 'Doe');
console.log(person.fullName());
console.log(personObj.fullName());
