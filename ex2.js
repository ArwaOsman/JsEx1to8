//Ex1
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
  }
  
  

  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  console.log(filtered); 
  console.log(arr);      

  //Ex2
  let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 }; 
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);

console.log(names); 

//Ex3
function getAverageAge(users) {
    let totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
  }
  
  // Example usage:
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  
  let arr = [john, pete, mary];
  
  alert(getAverageAge(arr)); 