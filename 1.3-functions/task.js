function getSolutions( a, b, c ){
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
}


function showSolutionsMessage( a, b, c ){
  let result = getSolutions( a, b, c );
  console.log ("Вычисляем корни квадратного уравнения ax² + bx + c");
  console.log (`Значение дискриминанта: ${result}`);
  D = Math.pow(b,2) - 4 * (a * c);
  
  if (result < 0) {
  console.log ("Уравнение не имеет вещественных корней");
}
else if (result == 0) {
  let x1 = [-b / 2 * a];
  console.log (`Уравнение имеет один корень X₁ = ${x1}`);
}
else if (result > 0) {
  let x1 = (-b + Math.sqrt(D) / 2 * a);
  let x2 = (-b - Math.sqrt(D) / 2 * a);
  console.log (`Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`);
  }
}
