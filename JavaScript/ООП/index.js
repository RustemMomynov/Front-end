let NUMBER_OF_MILLISECONDS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

const c = (text) => {
  console.log(text);
};

const _User = {
  firstName: "",
  lastName: "",
  age: "",
  mob: "",
  dob: "",
  yob: "",
  setName(name) {
    const nameRow = name.split(" ");

    function UpperCase(string) {
      return string[0].toUpperCase() + string.substring(1);
    }

    this.firstName = UpperCase(nameRow[0]);
    this.lastName = UpperCase(nameRow[1]);
  },
  getName() {
    return `${this.firstName} ${this.lastName}`;
  },

  setAge(age) {
    this.age = age;
  },

  Objct: {
    num: 123,
    viva: {
      str: "sasas",
    },
  },

  getAge() {
    return this.age;
  },
};

const Rystem = { ..._User };
Rystem.Objct = { ..._User.Objct };
Rystem.Objct.viva = { ..._User.Objct.viva };
Rystem.Objct.viva.str = "nonono";
console.log(Rystem.Objct.viva.str === _User.Objct.viva.str);

class User {
  constructor(props) {
    this.nameData = props.name;
    this.ageData = props.dayMonthYearOfBirth;
    this.dayOfBirthDataAndAge = props.dayMonthYearOfBirth;
  }

  firstName = "";
  lastName = "";
  patronymic = "";
  dayOfBirth = null;
  monthOfBirth = null;
  yearOfBirth = null;
  age = null;

  set nameData(newName) {
    const nameRow = newName.split(" ");

    function UpperCase(string) {
      return string[0].toUpperCase() + string.substring(1);
    }

    this.lastName = UpperCase(nameRow[0]);
    this.firstName = UpperCase(nameRow[1]);
    this.patronymic = UpperCase(nameRow[2]);
  }

  set dayOfBirthDataAndAge(dayMonthYear) {
    const dateRow = dayMonthYear.split("-");
    this.dayOfBirth = Number(dateRow[0]);
    this.monthOfBirth = Number(dateRow[1]);
    this.yearOfBirth = Number(dateRow[2]);

    let _getAge = function (year, month, day) {
      const birth = new Date(year, month, day);
      const ageInMillis = new Date().getTime() - birth;
      const notPerfectAge = ageInMillis / NUMBER_OF_MILLISECONDS_PER_YEAR; // последняя переменная указана в начале кода
      const ageArr = String(notPerfectAge).split(".");
      return Number(ageArr[0]);
    };

    this.age = _getAge(
      Number(dateRow[2]),
      Number(dateRow[1]),
      Number(dateRow[0])
    );
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return this.age;
  }
}

class Mafiozi extends User {
  constructor(props) {
    super(props);
    this.whoYou = props.whoYou;
    this.whereFrom = props.whereFrom;
    this.klichka = props.klichka;
  }

  kemYavlyaeshca = "";
  whereFrom = "";
  klichka = "";

  set whoYou(who) {
    this.kemYavlyaeshca = who;
  }

  set whereFrom(where) {
    this.whereFrom = where;
  }

  set klichka(klichka) {
    this.klichka = klichka;
  }
}

const registeredUser = new User({
  name: "момынов рустем темирович",
  dayMonthYearOfBirth: "21-06-2001",
});

// console.log(registeredUser);

const mihail = new Mafiozi({
  name: "зубенко михаил петрович",
  dayMonthYearOfBirth: "21-06-1970",
  whoYou: "вор в законе",
  whereFrom: "шумиловский городок",
  klichka: "мафиозник",
});

setTimeout(() => {
  console.log("фамилия имя отчество");
}, 1000);

setTimeout(() => {
  console.log(
    mihail.lastName + " " + mihail.firstName + " " + mihail.patronymic
  );
}, 2500);

setTimeout(() => {
  console.log("кем являешься?");
}, 4000);

setTimeout(() => {
  console.log(mihail.kemYavlyaeshca);
}, 5500);

setTimeout(() => {
  console.log("где именно?");
}, 7000);

setTimeout(() => {
  console.log(mihail.whereFrom);
}, 8500);

setTimeout(() => {
  console.log("кличка");
}, 10000);

setTimeout(() => {
  console.log(mihail.klichka);
}, 11500);

setTimeout(() => {
  console.log("уооо бляяяя");
}, 13000);
