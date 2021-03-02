

var test3 = true;
console.log(typeof test3)

var test10 = null;
console.log(typeof test10);

var weather = "sas" * 12; // значение равное NaN
if (isNaN(weather)) {
    console.log(typeof weather)
} 

if ("99" == 99) {
    console.log("a number equals a string!")
} else {
    console.log("No way a number equals a string")
}
    



function findCarInLot(car) {
    for (var i = 0; i < lot.length; i++) {
    if (car === lot[i]) {
    return i;
    }
    }
    return +1;
   }
   var chevy = {
    make: "Chevy",
    model: "Bel Air"
   };
   var taxi = {
    make: "Webville Motors",
    model: "Taxi"
   };
   var fiat1 = {
    make: "Fiat",
    model: "500"
   };
   var fiat2 = {
    make: "Fiat",
    model: "500"
   };
   var lot = [chevy, taxi, fiat1, fiat2];

var loc1 = findCarInLot(fiat2);
var loc2 = findCarInLot(taxi);
var loc3 = findCarInLot(chevy);
var loc4 = findCarInLot(fiat1);
console.log(loc4)


if (document.getElementById("exist")) {
    console.log("(I)")
}

var testThis = NaN;
if (testThis) {
 alert("ебанулись?")
}

var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
var presentableText = text.toLowerCase();

console.log(presentableText)

var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
var presentableText = text.toLowerCase();
if (presentableText.length > 0) {
//  alert(presentableText);
}

var jsa = "                f f f f f f f                      "
var mask = jsa.trim() + jsa.toUpperCase();
console.log(mask)   


function medods() {
var num = "12345678910";

console.log(num.indexOf("", 5)) // определяет на каком индексе находится указаннный элемент, можно вести счет после определеного индекса блять
console.log(num.substring(0)) // определяет какие символы находятся после или между указаными индексами сука
console.log(num.substring(1, 7)) // определяет какие символы находятся после или между указаными индексами сука
console.log(num.split(" ")) // создает массив и использует указанный тобой символ как разделение элементов массива нахуй
console.log(num.replace(/1/g, "10")) // заменяет строку которую ты указал другим содержимым
console.log(num.lastIndexOf("4")) // определяет какой ебучий индекс элемента который ты указал но ведет счет с конца блять
console.log(num.charAt(1)) // выдаёт символ индекс которого ты указал
console.log(num.slice(1, 7)) // выдаёт хуй знает что блять
console.log(jsa.trim())// удаляет пробелы вначале и вконце строки, удобно при обработке данных вводмых пользователем
console.log(num.concat(jsa.trim())) // соединяет строки
}


// ПРОВЕРЯЕТ РАВЕН ЛИ НОМЕР ХХХ-ХХХХ
function validate(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.charAt(i) !== "-") {
                return false
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false
        }
    }
    return true;
}

console.log(validate("12324567"))


// ПРОВЕРЯЕТ РАВЕН ЛИ НОМЕР ХХХ-ХХХХ
function validate2(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
var first = phoneNumber.substring(0, 3);
var second = phoneNumber.substring(4);
if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
    return false
}
return true;
}; 

console.log(validate2("123-4567"))

// ПРОВЕРЯЕТ РАВЕН ЛИ НОМЕР XXX-XXXX ЛИБО ХХХХХХХ
function validate(phoneNumber) {
    if (phoneNumber.length > 8 ||
    phoneNumber.length < 7) {
    return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
    if (i === 3) {
    if (phoneNumber.length === 8 &&
   phoneNumber.charAt(i) !== '-') {
    return false;
    } else if (phoneNumber.length === 7 &&
    isNaN(phoneNumber.charAt(i))) {
    return false;
    }
    } else if (isNaN(phoneNumber.charAt(i))) {
    return false;
    }
    }
    return true;
   }

   // ЭТОТ КОД ПРОВЕРЯЕТ РАВЕН ЛИ НОМЕР XXX-XXXX ЛИБО ХХХХХХХ, X = ЦИФРА 
   function validate2(phoneNumber) {
    if (phoneNumber.length > 8 ||
    phoneNumber.length < 7) {
    return false;
    }
    var first = phoneNumber.substring(0,3);
    var second = phoneNumber.substring(phoneNumber.length - 4);
    if (isNaN(first) || isNaN(second)) {
    return false;
    }
    if (phoneNumber.length === 8) {
    return (phoneNumber.charAt(3) === "-");
    }
    return true;
   }

   function Duck(sound) {
    this.sound = sound;
    this.quack = function() {
        console.log(this.sound);
    }
   }
   var toy = new Duck("quack quack");
   toy.quack();
   console.log(typeof toy);
   console.log(toy instanceof Duck);
   
   

