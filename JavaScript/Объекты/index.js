function name(params) {
    
    
var chevy = {
    make: "sasdasd", model: "14"
};
console.log(chevy)

var cadilac = {
    model: "GM",
    year: 1955,
    color: "tan",
    parazits: 5
}

chevy.model = 15; // Изминение значения свойства
console.log(chevy)

chevy.fatCock = true; // Добавление нового свойства в объект

delete chevy.make; // Удаление свойства
console.log(chevy)

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false
    }
    return true
}

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
   };

var worthALook = prequal(taxi); 

if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

function makeCar() {
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];
    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);
    var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0
    };
    return car;
    }
    function displayCar(car) {
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
    }
    var carToSell = makeCar();
    displayCar(carToSell);


feat.drive()

var cadi = {
        make: "GM",
        model: "Cadillac",
        year: 1955,
        color: "tan",
        passengers: 5,
        convertible: false,
        mileage: 12892,
        started: false,
start: function() {
 this.started = true;
},
stop: function() {
 this.started = false;
},
drive: function() {
 if (this.started) {
 alert(this.make + " " +
 this.model + " goes zoom zoom!");
 } else {
 alert("You need to start the engine first.");
 }
}
};
    
       var chevy = {
        make: "Chevy",
        model: "Bel Air",
        year: 1957,
        color: "red",
        passengers: 2,
        convertible: false,
        mileage: 1021,
        started: true,

start: function() {
 this.started = true;
},
stop: function() {
 this.started = false;
},
drive: function() {
 if (this.started) {
 alert(this.make + " " +
 this.model + " goes zoom zoom!");
 } else {
 alert("You need to start the engine first.");
 }
}
       };    

       var taxi = {
        make: "Webville Motors",
        model: "Taxi",
        year: 1955,
        color: "yellow",
        passengers: 4,
        convertible: false,
        mileage: 281341,
        started: false,

start: function() {
 this.started = true;
},
stop: function() {
 this.started = false;
},
drive: function() {
 if (this.started) {
 alert(this.make + " " +
 this.model + " goes zoom zoom!");
 } else {
 alert("You need to start the engine first.");
 }
}
       };

       cadi.start();
       cadi.drive();
       cadi.stop();


       var arrayNahoi = [
           "sasda", "sasdasdas", "sda",
       ]

    
for (var prop in chevy) {
    console.log(prop + ": " + chevy[prop]);
}

console.log(chevy["model"])
}

var feat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function() {
        if (this.fuel > 0) {
        this.started == true
        } else {
            console.log("иди нахуй пожалуйста ")
        }
    },

    stop: function() {
        this.started == false
    },
    
    drive: function() {
      if (this.fuel > 0) {
          alert(this.make + "" + this.model + " goes zoom zoom!");
          this.fuel = this.fuel - 1;
        }  else {
            alert("Uh oh, out of fuel.");
            this.stop();
        }
    },

    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }   
}

feat.addFuel(1500);

