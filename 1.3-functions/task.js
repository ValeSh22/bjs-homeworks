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

