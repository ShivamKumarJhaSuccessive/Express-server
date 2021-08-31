import { equilateral, diamond } from "./patterns/index";

import {
  hasPermission,        // from permissions.js
  validateUsers,        // from validation.js
  validUsers,           // list of valid users
  invalidUsers,         // list of invalid users
} from "./utils/index";


const rows = 5;

console.log();
console.log("Equilateral Triangle: ");
equilateral(rows);

console.log();

console.log("Diamond:");
diamond(rows);

console.log();

console.log(
  "Output of permissions.js:",
  hasPermission("getUsers", "trainer", "read")
);

console.log();

// users data for validation.js
const users = [

  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech",
  },

  {
    traineeEmail: "trainee2@gmail.com",
    reviewerEmail: "reviewer3@successive.tech",
  },

  {
    traineeEmail: "trainee3@successive.tech",
    reviewerEmail: "reviewer3@gmail.com",
  },
];

console.log("Output of validation.js:");

validateUsers(users); // calling validateUsers ()

console.log("Valid Users: "); 

validUsers.forEach((element) => {   // list of valid users
  console.log(element);
});

console.log("Number of Valid Users: ");

console.log(validUsers.length); //  total valid users

console.log();

console.log("Invalid Users: "); 

invalidUsers.forEach((element) => { // list of invalid users
  console.log(element);
});

console.log("Number of Invalid Users: ");

console.log(invalidUsers.length); // total invalid users
