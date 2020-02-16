function getSolutions(a, b, c){
  let D = Math.pow(b,2) - 4 * (a * c);
  
  if (D < 0) {
  console.log ({D: D, roots: [] });
}
  else if (D == 0) {
  let x1 = [-b / 2 * a];
  console.log ({D: D, roots: [x1]});
}
  else if (D > 0) {
  let x1 = (-b + Math.sqrt(D) / 2 * a);
  let x2 = (-b - Math.sqrt(D) / 2 * a);
  console.log ({D: D, roots: [x1, x2]});
}
  return getSolutions;
}

function showSolutionsMessage(a, b, c){
  let result = getSolutions(a, b, c);
  console.log ("Вычисляем корни квадратного уравнения ax² + bx + c");
  console.log (`Значение дискриминанта: ${result}`);
  
  if (result < 0) {
  console.log ("Уравнение не имеет вещественных корней");
}
  else if (result == 0) {
  console.log (`Уравнение имеет один корень X₁ = ${x1}`);
}
  else if (result > 0) {
  console.log (`Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`);
  }
  return showSolutionsMessage;
}


function getAverageScore(data){
   function getAverageMark(marks){
   let algebra = [5, 5, 4, 2];
   let russian = [5, 4, 4, 1];
   let english = [5, 5, 4, 5];
   let resultAlgebra = algebra.reduce(function(sum, current) {
    return sum + current;
  }, 0);
   let averageMarkAlgebra = resultAlgebra / algebra.length;
   console.log (averageMarkAlgebra);
  
   let resultRussian = russian.reduce(function(sum, current) {
     return sum + current;
  }, 0);
   let averageMarkRussian = resultRussian / russian.length;
    console.log (averageMarkRussian);

   let resultEnglish = english.reduce(function(sum, current) {
     return sum + current;
  }, 0);

    let averageMarkEnglish = resultEnglish / english.length;
    console.log (averageMarkEnglish);
 }
  console.log ({algebra: averageMarkAlgebra, russian: averageMarkRussian, english: averageMarkEnglish});
   
  if (marks = []) {
    averageMarks = 0;
    console.log(averageMarks);
  }
   return getAverageScore;
}








