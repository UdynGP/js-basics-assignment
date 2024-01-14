// 1. Write a function to find the area of a triangle where lengths of the three of its sides are given
let calcArea = (sides) => {
  const [a, b, c] = sides;
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area.toFixed(2);
};
const sides = [10, 12, 15];
const area = calcArea(sides);
console.log(`The area of the given triangle is ${area} sq. units`);

// 2. Write a function to return the absolute difference between 2 numbers.
let diff = (a, b) => {
  return a > b ? a - b : b - a;
};
console.log(
  `The absolute differnce between the given numbers is ${diff(10, 20)}`
);

// 3. Write a function to determine whether a given year is a leap year or not.
let checkly = (year) => {
  if (year % 4 == 0 || year % 40 == 0 || year % 400 == 0) {
    return "Leap year";
  } else {
    return "Not a leap year";
  }
};
let yr = prompt("Enter a year : ");
console.log(checkly(yr));

// 4. Write a function to return the sum of all the elements in the array.
let ar = [345, 123213, 234, 1, 98];
let sum = 0;
for (let i in ar) {
  sum += ar[i];
}
console.log(sum);

// 5. Write a function to swap pairs of adjacent digits of a given integer of even length.
let swapadj = (num) => {
  let str = num.toString();
  let swstr = "";
  for (let i = 0; i < str.length; i += 2) {
    swstr += str[i + 1] + str[i];
  }
  let newnum = parseInt(swstr);
  return newnum;
};
let num = prompt("Enter a number of even length : ");
console.log(swapadj(num));

// 6. Write a function to get the largest even number from an array of integers.
let arr = [231, 32321, 42374, 12, 5000];
let evenMax = (arr) => {
  let evenArr = arr.filter((num) => num % 2 == 0);
  let max = evenArr[0];
  for (let i in evenArr) {
    if (evenArr[i] > max) {
      max = evenArr[i];
    }
  }
  return max;
};
console.log(`Largest even number in the given array is : ${evenMax(arr)}`);

// 7. Write a function to delete the rollno property from the following object. Also print the object before or after deleting the property.
let student = {
  name: "John Doe",
  class: "VI",
  rollno: 12,
};
let deleteRollNo = (obj) => {
  delete obj.rollno;
  return obj;
};
console.log(deleteRollNo(student));
