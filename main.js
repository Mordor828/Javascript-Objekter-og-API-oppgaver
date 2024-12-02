//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------------------------------
//Answer:

const persons = [
  { firstName: "Tom", lastName: "Damien", age: 84, job: true },
  { firstName: "Eirik", lastName: "Horneland", age: 49, job: false },
  { firstName: "Clark", lastName: "Kent", age: 35, job: true },
  { firstName: "Bruce", lastName: "Wayne", age: 45, job: false },
  { firstName: "Vladimir", lastName: "Harkonnen", age: 58, job: true },
];

console.log(persons);

//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
//------------------------------------------------------------------------------------------------------------------------------------------------
//Answer:

const person = [{ firstName: "Tom", lastName: "Damien", age: 84, job: true }];

const firstName = person[0].firstName;

const lastName = person[0]["lastName"];

console.log(`First Name: ${firstName}, Last Name: ${lastName}`);

//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.
//------------------------------------------------------------------------------------------------------------------------------------------------
//Answer:

const fullName = [
  {
    firstName: "Tom",
    lastName: "Damien",
    age: 84,
    job: true,
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  {
    firstName: "Eirik",
    lastName: "Horneland",
    age: 49,
    job: false,
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  {
    firstName: "Clark",
    lastName: "Kent",
    age: 35,
    job: true,
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  {
    firstName: "Bruce",
    lastName: "Wayne",
    age: 45,
    job: false,
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  {
    firstName: "Vladimir",
    lastName: "Harkonnen",
    age: 58,
    job: true,
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
];

//console.log(firstName[1].fullName());

//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.
//------------------------------------------------------------------------------------------------------------------------------------------------
//Answer:
const change = [{ firstName: "Clark", lastName: "Kent", age: 35, job: true }];

person[0].age = 36;
person[0].job = false;

console.log(change[0]);

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.
//------------------------------------------------------------------------------------------------------------------------------------------------
//Answer:
function fotballPubben(person) {
  if (person.age > 18) {
    console.log(`${person.firstName} ${person.lastName}: party time`);
  } else {
    console.log(`${person.firstName} ${person.lastName}: too young`);
  }
}

persons.forEach(fotballPubben);
//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.
//------------------------------------------------------------------------------------------------------------------------------------------------
// Answer:
function sendToUniversity(person, degree) {
  if (degree === "bachelors") {
    person.age += 3; 
    person.degree = "Bachelors";
    person.studentLoan = 20000; 
  } else if (degree === "masters") {
    person.age += 2; 
    person.degree = "Masters";
    person.studentLoan = 30000; 
  } else {
    console.log("Invalid degree type");
    return;
  }
  console.log(person);
}

//let person = { name: "Vladimir Harkonnen", age: 58 };
//sendToUniversity(person, "bachelors");

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.
//------------------------------------------------------------------------------------------------------------------------------------------------
//Answer:

fetch("https://dog.ceo/api/breed/hound/images/random")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.message);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------

