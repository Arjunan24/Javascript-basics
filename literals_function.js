// let fruits = ['apple', 'grape', 'orange'];
// fruits.forEach((element) => {
//   console.log(element);
// });
// Template Literals
// let age = 24;
// let name = 'Allen';
// let desc = 'Hey.. this is ' + name + 'an im ' + age;
// console.log(desc);
// let literalDesc = `Hey.. this is ${name} an im ${age}`;
// console.log(literalDesc);

// Optional Chaining
// let person = {
//   name: 'Allen',
//   age: 24,
//   mobile: 9898989898,
//   address: {
//     doorNo: 22,
//     street: 'xxxx'
//   }
// };
// console.log(person);

// let personDesc = `Hey.. this is ${person.name} an im ${person.age}. and im from ${person.address}`;
// console.log('Before person Desc');
// console.log(personDesc);
// console.log('After person Desc');
let name = 'Guest';
let assignPerson = function (detail) {
  console.log(detail);
  return detail;
};
let getName = function ({ age = '12', ...otherDetails } = {}) {
  if (age > 18) {
    console.log('Assign him to the blue block');
    otherDetails.group = 'Blue House';
    assignPerson(otherDetails);
  } else {
    otherDetails.group = 'Green House';
    console.log('Assign him to the green block');
    assignPerson(otherDetails);
  }
  // console.log(otherDetails);
  // let profileDesc = `Hey.. this is ${name} an im ${age}`;
  // console.log(profileDesc);
};
function giveMyName(name = 'Some') {
  console.log('It gives my name');
}
// giveMyName();
let details = {
  group: 'red House',
  name: 'Varun',
  age: 5,
  city: 'Chennai',
  pinCode: 909090,
  empId: '123',
  exp: 2,
  bG: 'O+ve'
};
getName(details);
let generateNames = (name, obj) => {
  console.log(name.obj);
};
