//EX1
const checkAge = age => age > 18 || confirm('Do you have your parents permission to access this page?');

//Ex2
function pow(x, n) {
    let result = 1;  
  
    for (let i = 0; i < n; i++) {
      result *= x; 
    }
  
    return result;
  }
  
  // Examples
  console.log(pow(3, 2)); 
  console.log(pow(3, 3)); 
  console.log(pow(1, 100)); 

  //Ex3
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),  
    () => alert("You canceled the execution.")  
  );

  //Ex4:
  let calculator = {

    read() {
      this.a = +prompt("Enter the first number:", 0);  
      this.b = +prompt("Enter the second number:", 0);  
    },
  
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    }
  };
  
  //Ex5:
  const min = (a, b) => a < b ? a : b;

