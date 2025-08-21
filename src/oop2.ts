// Private constructor and singleton

// Singleton - GoF | Factory Method - GoF
// export class Database {
//   private static database: Database;

//   private constructor(
//     private host: string,
//     private user: string,
//     private password: string,
//   ) {}

//   connect(): void {
//     console.log(`Connected: ${this.host}, ${this.user}, ${this.password}`);
//   }

//   static getDB(host: string, user: string, password: string): Database {
//     if (Database.database) {
//       console.log('Returning existing instance');
//       return Database.database;
//     }
//     console.log('Creating new instance')
//     Database.database = new Database(host, user, password);
//     return Database.database;
//   }
// }

// const db1 = Database.getDB('localhost', 'root', '123456');
// db1.connect();

// const db2 = Database.getDB('localhost', 'root', '123456');
// db2.connect();

// Abstract classes, methods and attributes

// export abstract class Character {
//   protected abstract emoji: string;

//   constructor(
//     protected name: string,
//     protected attack: number,
//     protected hp: number,
//   ) {}

//   attackEnemy(character: Character): void {
//     console.log(`${this.name} is attacking...`);
//     character.loseHP(this.attack);
//   }

//   loseHP(attackPower: number): void {
//     this.hp -= attackPower;
//     console.log(`${this.name} now has ${this.hp} HP...`);
//   }

//   abstract attackPhrase(): void;
// }

// export class Warrior extends Character {
//   protected emoji = '\u{1F9DD}';

//   attackPhrase(): void {
//     console.log(this.emoji + 'Warrior attacks!');
//   }
// }

// export class Monster extends Character {
//     protected emoji = '\u{1F9DF}'

//     attackPhrase(): void {
//     console.log(this.emoji + 'Monster attacks!');
//   }
// }

// const warrior = new Warrior('Warrior', 100, 1000);
// const monster = new Monster('Monster', 85, 1000);

// warrior.attackEnemy(monster);
// monster.attackEnemy(warrior);
// warrior.attackEnemy(monster);
// monster.attackEnemy(warrior);
