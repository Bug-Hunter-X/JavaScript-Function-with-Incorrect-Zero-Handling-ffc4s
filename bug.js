function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //Incorrect: should handle case where either or both a and b are 0
  } else {
    return a / b; 
  }
}