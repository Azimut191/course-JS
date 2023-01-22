// синтаксис
let message = "Привет Фрилансер";
let first = 5;
let second = 6;
 if (2>1) {
  // тут мы напишем код который должен выполниться ксли сработет if 
  // и благодаря скобкам он относиться только к if
  console.log(message); 
 }
 else {
 console.log("условие 1 не выполнено");
 }
 if (first===second) {
 console.log(message);
 } 
 else{
 console.log("Условие 2 не выполнено");
 }
let number = 40;
 if (number>50) {
    console.log(number + " больше 50");
 }
 else if (number>30) {
    console.log(number + " больше 30");
 }
 else if (number>10) {
    console.log(number + " больше 10");
 }
 else if (number >1){
    console.log (number +" больше 1");
 }
 else  {
    console.log ("не одно из условий не выполнилось");
 }
let messagePrivet = "Привет";
let messageEnd;
 if (5>50) {
    messageEnd = " Вася";
 }
 else if (5>30){
    messageEnd = " Оля";
 }
 else if (5>10) {
    messageEnd = " Миша";
 }
 else if (5>1) {
    messageEnd = " Денис";
 }
 else {
    messageEnd = " незнакомец";
 }
 messagePrivet += messageEnd;
 console.log (messagePrivet);
 
 
console.log ("Домашка- ");
let istina = ("Истина");
let logh = ("ложь");
 console.log ("вариант 1")
  if (1==="1") {
    console.log(istina);
  }
  else {
    console.log(logh);
}
 console.log ("Вариант 2");
  if (5 == "5") {
    console.log(istina);
  }
  else {
    console.log (logh);
  }
 console.log ("вариант 3");
  let message2 = (92>'11' && 58 < 100) ? istina : logh;
  console.log(message2);