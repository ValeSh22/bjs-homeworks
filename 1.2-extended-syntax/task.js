"use strict";
function getResult(a,b,c){
   let discriminant = Math.pow(b,2) - 4 * (a * c);
   let x = [];

   if (discriminant < 0) {
    console.log (x);
 }
   else if (discriminant == 0) {
    console.log (x([-b / 2 * a]));
 }
   else if (discriminant > 0) {
    console.log (x([-b + Math.sqrt(discriminant) / 2 * a, -b - Math.sqrt(discriminant) / 2 * a]));
}
    return x;
}

function getAverageMark(marks){
    marks = [2, 3, 4, 5, 5, 2]
    console.log (marks.length);

    if (marks.length >  5) {
    console.log (marks.splice(1, 5));
  }
    marks = [3, 4, 5, 5, 2]
    let result = marks.reduce(function(sum, current) {
    return sum + current;
  }, 0);

    let averageMark = result / marks.length;
    console.log (averageMark);
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let today = new Date();
    dateOfBirthday = today.getFullYear();
    name = "Катя";

    if (dateOfBirthday >  18) {
    let result = `Не желаете ли олд-фэшн, ${name}?`;
    console.log (result);
   }
    else if (dateOfBirthday <  18) {
    let result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    console.log (result);
   }
  return result;
}
