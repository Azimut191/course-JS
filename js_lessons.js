let num = 0;
while (num < 5) {
   console.log(num);
   num++;
}
console.log ('--------');
let num1 = 5;
while (num1) {
   console.log(num1);
   num1--;
} 
console.log ("----------")
let num3 = 0;
for (; num3 <5; num3++) {
   console.log(num3);
}
console.log (`Вывод вне цикла: ${num3}`);
console.log ("---Деректива стоп (break)----");
let num4= 0;
for (; num4 < 10; num4++) {
   console.log(num4);
   if (num4 == 7) break;
}
console.log(`Работа закончена потому что мы достиги нужного в условии значения ${num4}`);
console.log ('---Деректива пропустить (continue)---');
for (num = 0; num<5; num++) {
   if (num==2) continue;
   console.log(num);
}
console.log("-- Работа с метками цикла--")
let num5 = 0;
firstfor: for (; num5<5; num5++) {
   for (size = 0; size <3; size++) {
      if (size==5) {
         break firstfor;
      }
      console.log(`${num5} ${size}`);
   }
}
console.log ("ДОМАШКА");
console.log ("Задача1");
let dz =0;
while (dz<5) {
   console.log(dz);
   dz++
}
while (dz) {
   console.log(dz);
   dz--
}
do {
   console.log(dz);
   // dz++;
} while (dz==5);
for (; dz<6; dz++) {
   console.log (dz);
}
console.log ("Задача 2 - тут должно быть от 8-1");
dz =8;
while (dz) {
   console.log(dz);
   dz--;
}
console.log ('Задача 3');
dz =0 
while (dz<3){
   console.log (`Число: ${dz}`);
   dz++;
}
console.log("Задача 4");
dz=0
twofor: for (; dz<2; dz++){
   for (size=0; size<3; size++) {
     if (size==1) {
      break twofor;
   }
   console.log(size);
}
}