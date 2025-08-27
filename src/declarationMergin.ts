interface Person {
  name: string;
}

interface Person {
  lastName: string;
}

interface Person {
  readonly address: string[],
}

interface Person {
  readonlyage?: number;
}

const person: Person = {
  name: 'John',
  lastName: 'Doe',
  address: ['AnyName st.']
};
