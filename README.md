# JavaScript Function with Incorrect Zero Handling

This repository demonstrates a subtle bug in a JavaScript function involving zero handling, along with its solution.  The original function incorrectly handles cases where one or both inputs are zero, leading to potential errors.

## Bug Description
The `foo` function is designed to perform division. However, it fails to correctly handle cases where either or both input parameters (`a` and `b`) are equal to zero.  The current implementation only accounts for one of the inputs being zero and returns 0.  If both inputs are zero, it should ideally return a different value (e.g., NaN or throw an error).  If only one input is zero, the function should return Infinity or -Infinity (depending on values). 

## Bug Solution
The solution addresses the bug by adding comprehensive checks to handle zero values in all possible scenarios.  The solution will return NaN for a / 0, and 0 for 0 / 0 scenarios.