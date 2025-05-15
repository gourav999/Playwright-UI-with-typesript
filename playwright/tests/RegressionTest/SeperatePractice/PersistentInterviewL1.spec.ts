import { test, expect } from '@playwright/test';

test('Right shift the array element with three postion', async ({ page }) => {
console.log('Right shift the array element with three postion');
const originalArray= [1, 2, 3, 4, 5];
const numberOfPositions = 3;
const shiftedArray = rightShiftArray(originalArray, numberOfPositions);
console.log(`This is array: ${originalArray}`);
console.log(`this isa shifted Array: ${shiftedArray}`);
function rightShiftArray(arr: number[], positions: number): number[] {

   const length = arr.length;
  // if (length === 0) return arr; 
  positions = positions % length; 
  const shiftedPart = arr.slice(-positions); 
  const remainingPart = arr.slice(0, length - positions); 
  return [...shiftedPart, ...remainingPart]; 
}


});
