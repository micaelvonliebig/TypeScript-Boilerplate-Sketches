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

export class Pessoa {
  constructor (
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastName;
  }
}


