const people = [
  {
    name: "Jamie Williams",
    age: 26,
    gender: "female",
    location: "Los Angeles, CA",
    imageURL: "https://randomuser.me/api/portraits/women/1.jpg",
    looking: "Female looking for male",
  },
  {
    name: "John Smith",
    age: 35,
    gender: "male",
    location: "New York, NY",
    imageURL: "https://randomuser.me/api/portraits/men/1.jpg",
    looking: "Male looking for female",
  },
  {
    name: "Bob Johnson",
    age: 42,
    gender: "male",
    location: "Chicago, IL",
    imageURL: "https://randomuser.me/api/portraits/men/2.jpg",
    looking: "Male looking for male",
  },
  {
    name: "Shannon Jackson",
    age: 29,
    gender: "female",
    location: "Los Angeles, CA",
    imageURL: "https://randomuser.me/api/portraits/women/2.jpg",
    looking: "Female looking for female",
  },
];

const conatiner = document.querySelector(".container");
const img = document.querySelector("img");
const profileInfo = document.querySelector(".profile-info");
const nextBtn = document.querySelector("#next");

function* createPeopleIterator() {
  let index = 0;
  while (true) {
    yield people[index++ % people.length];
  }
}
const iterator = createPeopleIterator();
// console.log(iterator.next());

nextBtn.addEventListener("click", () => {
  const person = iterator.next().value;
  // console.log(person);
  img.src = person.imageURL;
  profileInfo.querySelector("h3").textContent = person.name;
  profileInfo.querySelectorAll("p")[0].innerText = `${person.age} years old`;
  profileInfo.querySelectorAll("p")[1].innerText = `From ${person.location}`;
  profileInfo.querySelectorAll("p")[2].innerText = person.looking;
});
nextBtn.click();
