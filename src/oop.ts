// Classes
// export class Company {
// readonly name: string; // public not necessary
// private readonly collaborators: Collaborator[] = [];
// protected readonly companyId: string;
//
// constructor(name: string, companyId: string) {
// this.name = name;
// this.companyId = companyId;
// }
//
// addCollaborator(collaborator: Collaborator): void {
// this.collaborators.push(collaborator);
// }
//
// showCollaborators(): void {
// for (const collaborator of this.collaborators) {
// console.log(collaborator);
// }
// }
// }
//
// export class Collaborator {
// constructor(
// readonly name: string,
// readonly lastName: string,
// ) {}
// }
//
// const company1 = new Company('Company1', '00.000.000/0001-11');
// const collaborator1 = new Collaborator('C1', 'Collaborator');
// const collaborator2 = new Collaborator('C2', 'Collaborator');
// const collaborator3 = new Collaborator('C3', 'Collaborator');
// console.log(company1);
// company1.showCollaborators();

// Heritage

// export class Person {
// constructor(
// public name: string,
// public lastName: string,
// private age: number,
// protected id: string,
// ) {}
//
// getAge(): number {
// return this.age;
// }
//
// getId(): string {
// return this.id;
// }
//
// getFullName(): string {
// return this.name + ' ' + this.lastName;
// }
// }
//
// export class Student extends Person {
// getFullName(): string {
// return `Student: ${this.name} ${this.lastName}`;
// }
// }
// export class Customer extends Person {
// getFullName(): string {
// return `Customer: ${this.name} ${this.lastName}`;
// }
// }
//
// const person = new Person('John', 'Doe', 30, '000.000.000-00');
// const student = new Student('John', 'Doe S', 30, '000.000.000-00');
// const customer = new Customer('John', 'Doe C', 30, '000.000.000-00');
//
// console.log(person.getFullName());
// console.log(student.getFullName());
// console.log(customer.getFullName());
//

// Access Modifier - Protected

// export class Company {
//   readonly name: string; // public not necessary
//   protected readonly collaborators: Collaborator[] = [];
//   private readonly companyId: string;

//   constructor(name: string, companyId: string) {
//     this.name = name;
//     this.companyId = companyId;
//   }

//   addCollaborator(collaborator: Collaborator): void {
//     this.collaborators.push(collaborator);
//   }

//   showCollaborators(): void {
//     for (const collaborator of this.collaborators) {
//       console.log(collaborator);
//     }
//   }
// }

// export class Udemy extends Company {
//   constructor() {
//     super('Udemy', '00.000.000/0001-11');
//   }

//   popCollaborator(): Collaborator | null {
//     const collaborator = this.collaborators.pop();
//     if (collaborator) return collaborator;
//     return null;
//   }
// }

// export class Collaborator {
//   constructor(
//     readonly name: string,
//     readonly lastName: string,
//   ) {}
// }

// const company1 = new Company('Company1', '00.000.000/0001-11');
// const collaborator1 = new Collaborator('C1', 'Collaborator');
// const collaborator2 = new Collaborator('C2', 'Collaborator');
// const collaborator3 = new Collaborator('C3', 'Collaborator');
// const removedCollaborator = company1.popCollaborator();
// console.log(company1);

// export class Person {
// static defaultAge = 0;
// static defaultId = '000.000.000-00';
//
// constructor(
// private name: string,
// private lastName: string,
// private age: number,
// private _id: string,
// ) {}
//
// defaultMethod(): void {
// console.log(Person.defaultAge, Person.defaultId);
// }
//
// static createPerson(name: string, lastName: string): Person {
// return new Person(name, lastName, 0, '000.000.000-00');
// }
// }
//
// const person = new Person('John', 'Doe', 30, '000.000.000-00');
// const person2 = Person.createPerson('Jane', 'Doe');
// console.log(person);
// console.log(person2);
// person.defaultMethod();
// console.log(Person.defaultAge, Person.defaultId);
