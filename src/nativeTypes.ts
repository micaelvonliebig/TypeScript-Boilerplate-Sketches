// Records
const object1: Record<string, string | number> = {
  name: 'John',
  lastname: 'Doe',
  age: 30,
}
console.log(object1);

type PersonProtocol = {
  name?: string;
  lastname?: string;
  age?: 30;
}

// Required
type PersonRequired = Required<PersonProtocol>;
// Partial
type PersonPartial = Partial<PersonProtocol>;
// Readonly
type PersonReadonly = Readonly<PersonRequired>;

const object2: PersonProtocol = {
  name: 'Johnny',
  lastname: 'Dooey'
}
console.log(object2)

// Module mode
export default 1;
