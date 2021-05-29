const people = [
  { name: "Владилен", age: 25, budget: 42500 },
  { name: "Елена", age: 17, budget: 3400 },
  { name: "Игооооорь", age: 49, budget: 50000 },
  { name: "Михаил", age: 15, budget: 1800 },
  { name: "Василиса", age: 24, budget: 25000 },
  { name: "Виктория", age: 38, budget: 2300 },
];

console.log(
  `for (let person of people) {
        console.log(person);
      }

person переменная которая создается и ей присваивается каждый элемент массива который она отображает
people название массива который передали в цикл `
);

console.log("   ");

for (let person of people) {
  console.log(person);
}

console.log(
  "--------------------------------------------------------------------------"
);

console.log(
  `
people.forEach(function (person, index, pArr) {
  console.log(person);
});

people.forEach((person) => console.log(person));
`
);

console.log("");

people.forEach((person) => console.log(person));

console.log(
  "----------------------------------------------------------------------------"
);

console.log(
  `
    let newPeople = people.map((people) => {
        return { Imya: people.name, lovandos: people.budget };
      });
    `
);

let newPeople = people.map((people) => {
  return { Imya: people.name, lovandos: people.budget };
});

console.log(newPeople);

console.log(
  "----------------------------------------------------------------------------"
);

console.log(
  `
    let newAgeOfPeople = people.map((person) => {
        return { starost: person.age * 3 };
      });
    `
);

let newAgeOfPeople = people.map((person) => {
  return { starost: person.age * 3 };
});

console.log(newAgeOfPeople);

console.log(
  "----------------------------------------------------------------------------"
);

console.log(`const adults = people.filter((person) => person.age >= 18);`);

const adults = people.filter((person) => person.age >= 18);
console.log(adults);

console.log(
  "----------------------------------------------------------------------------"
);

console.log(
  `const amount = people.reduce((total, person) => total + person.budget, 0);`
);

const amount = people.reduce((total, person) => total + person.budget, 0);
console.log(amount);

console.log(
  "------------------------------------------------------------------------------"
);

console.log(`const elena = people.find((person) => person.name === "Елена");`);
const elena = people.find((person) => person.name === "Елена");
console.log(elena);
console.log(
  "------------------------------------------------------------------------------"
);

console.log(
  `const elenaIndex = people.findIndex((person) => person.name === "Елена");`
);
const elenaIndex = people.findIndex((person) => person.name === "Елена");
console.log(elenaIndex);
console.log(
  `----------------------------------------------------------------------------------------`
);

const amountDon = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: person.name,
      budget: person.budget,
    };
  })
  .reduce((total, person) => total + person.budget, 0);

console.log(amountDon);

console.log("  ");
console.log("THE END");
