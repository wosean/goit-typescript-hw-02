/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

// let person = ['Max', 21];

// export {};

let person: [string, number];
person = ['Max', 21];

export {};