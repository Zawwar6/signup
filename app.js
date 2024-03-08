let userNames = ["Safwan","Ahsan","Eihan"];

let signUp = prompt("Do you want to signup yes or no");
if(signUp=="yes"){
    let userName = prompt("Enter your name");
    userNames.push(userName);
}
console.log("Updated username array",userNames);