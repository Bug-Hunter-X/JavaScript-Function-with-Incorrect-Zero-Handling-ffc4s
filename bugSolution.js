function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Handle both zero case
  } else if (b === 0) {
    return NaN; // Handle division by zero
  } else if (a === 0) {
    return 0; // Handle zero numerator
  } else {
    return a / b; 
  }
}