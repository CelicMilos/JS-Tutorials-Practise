// CHALLENGE 1 -  convert Fahrenhiet into Celsius

function getCelsius(f) {
  let c = ((f - 32) * 5) / 9;
  let rounC = Math.round(c);
  console.log(`Temperature is ${rounC}\xB0C`);
}
getCelsius(90);

// One line version

const getCel = (f) => Math.round(((f - 32) * 5) / 9);
console.log(`Teperature is ${getCel(32)}\xB0C`);

// Challenge 2 - min and max values of  an array

function minMax(arr) {
  const min = Math.round(...arr);
  const max = Math.max(...arr);
  const extremes = {
    minNum: min,
    maxNum: max,
  };
  console.log(extremes);
}
minMax([4, 34, 63, 65365, 3345, 356]);
minMax([23, 345, 67, 799, 24525.3, 23262, 5656, 322, 23325]);

// Challenge 3 - area of a rectangle

(function (length, width) {
  const area = length * width;
  console.log(`The area of the rectangle is ${area} cm\u00B2`);
})(2.5, 4);

// Challange 4 - Calculator!

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      console.log(`The result is ${result}.`);
      break;
    case "-":
      result = num1 - num2;
      console.log(`The result is ${result}.`);
      break;
    case "*":
      result = num1 * num2;
      console.log(`The result is ${result}.`);
      break;
    case "/":
      result = num1 / num2;
      console.log(`The result is ${result}.`);
      break;
    default:
      console.log("Invalid Operator!");
  }
  return result;
}
calculator(7, 4, "-");
calculator(54, 523, "+");
calculator(425, 67, "/");
calculator(7, 4, "*");
calculator(7, 4, "hhf");

//Break and Continue in for loops

for (let i = 0; i <= 21; i++) {
  if (i === 1 || i % 7 === 0) {
    console.log(`HOP!`);
    continue;
  } else {
    console.log(i);
  }
}

for (let j = 0; j <= 15; j++) {
  if (j === 10) {
    console.log(`CLAM FANDANGOOO!`);
    continue;
  }
  console.log(j);
}

for (x = 0; x <= 20; x++) {
  if (x === 12) {
    console.log(`STOP!`);
    break;
  }
  console.log(x);
}

// while loop ---ista funkcija kao for loop samo malo drugacija sintaksa
// ali je bolji ako ne znamo koliko iteracija treba program daa uradi
// kod array koja se popunjava dinamicki tj. npr. kada arr puni sa korisnicke strane

let n = 0;
while (n <= 10) {
  console.log(`Number ${n}`);
  n++;
}

const num = [23, 34, 545, 56, 566, 97];
let a = 0;
while (a < num.length) {
  console.log(num[a]);
  a++;
}
let m = 1;
while (m <= 5) {
  console.log(`Number ${m}`);
  let m1 = 1;
  while (m1 <= 5) {
    console.log(`${m}*${m1} = ${m * m1}`);
    m1++;
  }
  m++;
}

 // do while loop --- ce pokrenuti kod barem jednom iako uslov nije ispostovan

e = 10;
do {
  console.log("NUmber " + e);
} while (e <= 9);

// Challange no. 5 ---FIZZBUZZ

for (i = 0; i <= 35; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ!");
    continue;
  } else if (i % 3 === 0) {
    console.log("FIZZ!");
    continue;
  } else if (i % 5 === 0) {
    console.log("BUZZ!");
    continue;
  }
  console.log(i);
}

// for of loop ---moderniji od for i while.Nema iteracija sa i=0;i<=arr.length;i++

const users = [
  "Steven Weinberg",
  "Steven Hoking",
  "Nevil Shute",
  "Fjodor Dostojevski",
];

for (user of users) {
  console.log(user);
}
const items = ["Rubix Cube", "Wallet", "Flopy Disk", "Lamp", "Books"];
console.log(`There are ${items.length} on the desk:`);
for (item of items) {
  console.log(item);
}

const greating = "Hello World";
for (letters of greating) {
  console.log(letters);
}

// for in loop

const colorObj = {
  color1: "green",
  color2: "blue",
  color3: "yellow",
  color4: "salmon",
  color5: "purple",
};
for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

// .forEach loop

const books = [
  "On the beach",
  "Big silente",
  "brief history of time",
  "Gambler",
  "Project:Hail Marry",
];
books.forEach(function (book) {
  console.log(book);
});

books.forEach((book)=> {
  console.log(book);
})
books.forEach((book) => console.log(book));

function getBooks(book) {
  console.log(book);
}

books.forEach(getBooks); // bez incijacije funcije, bez ()!!!

const socialNet = [
  { name: "Instagram", url: "https://instagram.com" },
  { name: "FaceBook", url: "https://FaceBook.com" },
  { name: "LinkedIn", url: "https://LinkedIn.com" },
  { name: "TikTok", url: "https://TikTok.com" },
  { name: "YouTube", url: "https://YouTube.com" },
];

socialNet.forEach((network) => console.log(network.name, network.url));

//.filter i .map --- od vec postojeceg niza,daje nov niz(array) sa clanovima koji
//zadovaljavaju uslov koji smo mi postavili.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
evenNumbers = [];
evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(numbers);
console.log(evenNumbers);

const deskItems = [
  "Rubix Cube",
  "Medal",
  "Mouse",
  "Bottle",
  "Pin",
  "Wallet",
  "Cable",
  "Book",
];
newDeskItems = [];
newDeskItems = deskItems.filter((item) => {
  return item.length >= 5;
});
console.log(deskItems);
console.log(newDeskItems);

const companies = [
  { name: "Company One", category: "finance", founded: 1982 },
  { name: "Company Two", category: "retail", founded: 1934 },
  { name: "Company Three", category: "technology", founded: 2001 },
  { name: "Company Four", category: "retail", founded: 1991 },
  { name: "Company Five", category: "technology", founded: 1982 },
  { name: "Company Six", category: "finance", founded: 2009 },
  { name: "Company Seven", category: "Auto", founded: 1987 },
];
console.log(companies);

const companyCategories = companies.filter((company) => {
  return company.category === "finance";
});
console.log(companyCategories);
const youngComapnies = companies.filter((company) => company.founded >= 2000);
console.log(youngComapnies);

const technoComapnies = companies.filter(
  (company) => company.category === "technology"
);
console.log(youngComapnies);

const oldCompanies = companies.filter((company) => company.founded <= 2000);
console.log(oldCompanies);

const oldRetailCompanies = companies.filter(
  (company) => company.founded <= 2000 && company.category === "retail"
);
console.log(oldRetailCompanies);

//.map

const companiesName = companies.map((company) => {
  return company.name;
});
console.log(companiesName);
let date = new Date();
const year = date.getFullYear();
console.log(year);
console.log(date);
const companiesAge = companies.map((company) => {
  return `${company.name} -- ${year - company.founded}`;
});
console.log(companiesAge);

// chain filter and .map mathods

const oldCompaniesNames = companies
  .filter((company) => {
    //(company) parameter za .filter, moze da bude sta god
    return company.founded <= 2000;
  })
  .map((oldCompanies) => {
    //(oldCompanies) ---nov parameter za .map u lancu
    return oldCompanies.name;
  });
console.log(oldCompaniesNames);

const arr = [2, 23, 3, 12, 45, 66, 76, 54];
console.log(arr);
const squaredAndDoudled = arr
  .map((number) => {
    return Math.sqrt(number);
  })
  .map((squared) => {
    //(sqared) ---nov parametar za sl. map u lancu
    return squared * 2;
  });
console.log(squaredAndDoudled);

// short version

const squaredAndDoudled2 = arr
  .map((number) => Math.sqrt(number))
  .map((squared) => squared * 2);
console.log(squaredAndDoudled2);

//.reduce  ----dobar sabiranje vrednosti u arr tj. sazimanja vise vrednosti u jendu
//u callback funkciji unose se dva parametra:accumulator-predhodna vrednost(zbir vrednosti)
//i currentValue-vrednost koja se sledeca dodaje
//i vrednost od koje se pocinje sabiranje koja se ubacuje na kraju funkcije


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);

const shoppingCart = [
  { product: "Item 1", price: 12 },
  { product: "Item 2", price: 135 },
  { product: "Item 3", onSale: 20, price: 5 },
  { product: "Item 4", onSale: 10, price: 15 },
  { product: "Item 4", price: 15 },
  { product: "Item 4", price: 15 },
  { product: "Item 4", onSale: 10, price: 15 },
];
const totalPrice = shoppingCart.reduce(function (acc, curr) {
  return acc + curr.price;
}, 0);
console.log(totalPrice);

// vezanje sa drugim metodama

const itemsOnSale = shoppingCart
  .filter((itemOnSale) => itemOnSale.onSale)
  .reduce((acc, curr) => acc + curr.price, 0);
console.log(itemsOnSale);

//Challenge 6,array mathods--sort young people

const people = [
  {
    firstName: "Clam",
    lastName: "Fandango",
    email: "clam@gmail.com",
    age: 25,
  },
  {
    firstName: "Steven",
    lastName: "hoking",
    email: "clam@gmail.com",
    age: 23,
  },
  {
    firstName: "Matt",
    lastName: "Barry",
    email: "barry@gmail.com",
    age: 43,
  },
  {
    firstName: "Suzy",
    lastName: "Sue",
    email: "suzy@gmail.com",
    age: 21,
  },
  {
    firstName: "Clif",
    lastName: "Ferrario",
    email: "clif@gmail.com",
    age: 32,
  },
  {
    firstName: "Robin",
    lastName: "Banks",
    email: "robin@gmail.com",
    age: 22,
  },
];
console.log(people);
const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + ` ` + person.lastName,
    emali: person.email,
  }));
console.log(youngPeople);
namesOfPeople = youngPeople.map((person) => person.name);
console.log(namesOfPeople);

Challenge 7 array methods --add all positive numbers an all nagative numbers

const numbers = [1, 2, -4, 23, -13, 33, -56, 45, -42, 78, -98];
console.log(numbers);

const positiveSum = numbers
  .filter((num) => num >= 0)
  .reduce((acc, num) => acc + num, 0);
console.log(positiveSum);

const negativeSum = numbers
  .filter((num) => num <= 0)
  .reduce((acc, num) => acc + num, 0);
console.log(negativeSum);

// Challenge 8 array metods--capitalized words

const words = ["developer", "programer", "coder"];
console.log(words);
const capitalWords = words.map((word) => word[0].toUpperCase() + word.slice(1));
console.log(capitalWords);


