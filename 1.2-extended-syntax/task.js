function getResult(a,b,c){
    "use strict";
    let a = 2;
    let b = 4;
    let c = 3;
    let x;
    let equation = a * x ** 2 + b * x - c == 0;
    let discriminant = Math.pow(b,2) - 4 * (a * c);

   if (discriminant < 0) {
    let emptyArray = []
    console.log (emptyArray);
 }
   else if (discriminant == 0) {
    let arrayX = [-b / 2 * a];
    console.log (arrayX1);
 }
   else if (discriminant > 0) {
    let arrayX2 = [-b + Math.sqrt(discriminant) / 2 * a, -b - Math.sqrt(discriminant) / 2 * a];
    console.log (arrayX2);
}
    return x;
}

function getAverageMark(marks){
    let marks = [5, 2, 4, 3, 2, 4];
    console.log (marks.length);

    if (marks.length >  5) {
    console.log (marks.splice(1, 5));
  }

    let newMarks = [2, 4, 3, 2, 4];
    let result = newMarks.reduce(function(sum, current) {
    return sum + current;
  }, 0);
    console.log (result);
    let averageMarks = result / newMarks.length;
    console.log (averageMarks);
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}
