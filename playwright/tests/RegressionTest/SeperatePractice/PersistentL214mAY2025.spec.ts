import { test, expect } from '@playwright/test';

test('string is present and you have to rotate string right side and validate the string ', async ({ page }) => {
let string = "jaingourav";
//write a code, if we rotate the string iit will be vjaingoura. so write the code.
const numberOfPositions = 1;
const shiftedString = rightShiftString(string, numberOfPositions);
console.log(`This is string: ${string}`);
console.log(`this is a shifted string: ${shiftedString}`);
function rightShiftString(str: string, positions: number): string {
    const length = str.length;
    // if (length === 0) return str; 
    positions = positions % length; 
    const shiftedPart = str.slice(-positions); 
    const remainingPart = str.slice(0, length - positions); 
    return `${shiftedPart}${remainingPart}`; 
}
// Validate the shifted string
expect(shiftedString).toBe('vjaingoura');

isRotationManual(string, shiftedString);

function isRotationManual(original: string, shifted: string): boolean {
  if (original.length !== shifted.length) return false;

  for (let i = 0; i < original.length; i++) {
    const rotated = original.slice(i) + original.slice(0, i);
    if (rotated === shifted) {
      return true;
    }
  }
  return false;
}





});

test('this is string a1b2c3dxyz9, extract the number and sum them all', async ({ page }) => {
    let string = "a1b2c3dxyz9";
    let sum = 0;
    //FOR LOOP PELASE
     for (let i = 0; i < string.length; i++) {
         if (string[i] >= '0' && string[i] <= '9') {
             sum += parseInt(string[i],10);//WHY ,10 IS THERE? EVEN IF YOU REMOVE ,10 IT WILL WORK. The second argument to parseInt is the radix, which tells JavaScript what number system you're working with.
//10 means decimal (base 10), which is what we usually use.
//If you don’t provide it, JavaScript might guess based on the input:
//If the string starts with "0x", it assumes hexadecimal (base 16).
//If it starts with "0" (in older JavaScript), it might assume octal (base 8) — this can cause unexpected behavior.
         }
     }
    console.log(`The sum of the numbers in the string is: ${sum}`);
    /* 

    //BELOWCODE IS ALSO WORKS WITH REGEX
    const numbers = string.match(/\d+/g);
    if (numbers) {
        for (const num of numbers) {
        sum += parseInt(num, 10);
        }
    }
    console.log(`The sum of the numbers in the string is: ${sum}`);
     */
    }

   /* SAME CODE IN JAVA 
   public class SumDigitsInString {
    public static void main(String[] args) {
        String input = "a1b2c3dxyz9";
        int sum = 0;

        for (char ch : input.toCharArray()) {
            if (Character.isDigit(ch)) {
                sum += Character.getNumericValue(ch);
            }
        }

        System.out.println("Sum of digits: " + sum);
    }
} */
);
