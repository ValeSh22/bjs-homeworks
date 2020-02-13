function getSolutions( a, b, c ){
  let a, b, c;
  let D = Math.pow(b,2) - 4 * (a * c);
  
  if (D < 0) {
  console.log ({ D: Math.pow(b,2) - 4 * (a * c), roots: [] });
}
else if (D == 0) {
  let x1 = [-b / 2 * a];
  console.log ({ D: значение_дискриминанта, roots: [ значение_x1 ]);
}
else if (D > 0) {
  let arrayX2 = [-b + Math.sqrt(discriminant) / 2 * a, -b - Math.sqrt(discriminant) / 2 * a];
  console.log (arrayX2);
}

}
