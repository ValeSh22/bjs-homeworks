"use strict";
function getResult(a,b,c){
   let a, b, c;
   let discriminant = Math.pow(b,2) - 4 * (a * c);
   let array = [];

   if (discriminant < 0) {
    console.log (array);
 }
   else if (discriminant == 0) {
    console.log (array([-b / 2 * a]));
 }
   else if (discriminant > 0) {
    console.log (array([-b + Math.sqrt(discriminant) / 2 * a, -b - Math.sqrt(discriminant) / 2 * a]));
}
    return x;
}

function getAverageMark(marks){
    let marks = [5, 2, 4, 3, 2, 4];
    console.log (marks.length);

    if (marks.length >  5) {
    console.log (marks.splice(1, 5));
  }

    let result = marks.reduce(function(sum, current) {
    return sum + current;
  }, 0);
    let averageMarks = result / marks.length;
    console.log (averageMarks);
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let name = "Катя";
    let today = new Date();
    let dateOfBirthday = today.getFullYear();

    if (dateOfBirthday >  18) {
    console.log (`Не желаете ли олд-фэшн, ${name}?`);
   }
    else if (dateOfBirthday <  18) {
    console.log (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
 }
  return result;
}
