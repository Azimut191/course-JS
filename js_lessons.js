console.log ('Задача 1');
const userInfo = {
   name: "Вася",
   age: 30,
}
console.log ('Задача 2');
let userInfo2 = {
   name: "Вася",
   age: 30,
   "58": 'Значение свойства'
} 
console.log(userInfo2[58]);

console.log ("Задача 3");
let userInfo3 = {
   name:"Вася",
   age: 30,
}
let user = userInfo3;
user.age = 45;
console.log(userInfo3.age);

console.log("Задача 4");
let userInfo4 = {
   name: "Вася",
   age: 30,
   showInfo (){
      console.log (`${this.name}`);
   }
}
let user4 = userInfo4;
userInfo4 = null;
user4.showInfo();

console.log ('Задача 5');
let userInfo5 = {
   name:"вася",
   age: 30,
}
for (const data in userInfo5) {
   const value = userInfo5[data];
   console.log(value);
}
console.log ("Задача 6");
let userInfo6 = {
   name: "Денис",
   age: 36,
   address: {
      city:"Одесса",
   }
}
for (const data in userInfo6) {
   console.log (userInfo6.address.city);
   console.log (userInfo6);
}
// console.log("Задача 7");
// const userInfo7 = {
//    name:"Денис",
//    age: 36,
//    "likes js": true, 
// };
// consol.log(userInfo7["likes js"]);
console.log("задача 8");
let userInfo8 = {};
userInfo8.name ="Денис";
userInfo8.age = 36;
console.log (userInfo8);
userInfo8.name = "лена";
console.log (userInfo8);
delete userInfo8.name;
console.log (userInfo8);
