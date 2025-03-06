//Ex1

let user = {
    name: "John",
    years: 30
  };
  
  let { name, years: age, isAdmin = false } = user;
  
  console.log(name);  
  console.log(age);    
  console.log(isAdmin); 

//Ex2
let planetName = "Earth";

let currentVisitorName = "John";

//Ex3
  // The code will result in a ReferenceError when calling sayHi()
  //  because the function is declared inside the if block and is not accessible outside of it.

  //Ex4:
  let user = {};               
user.name = "John";          
user.surname = "Smith";      
user.name = "Pete";          
delete user.name;            

//Ex5: Yes, it works: 
const user = { name: "John" }; 
user.name = "Pete";  
console.log(user.name); 

//Ex6:
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
};

let sum = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);

console.log(sum); 

//Ex7:
result = (a + b < 4) ? 'Below' : 'Over';

//Ex8:
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' :;