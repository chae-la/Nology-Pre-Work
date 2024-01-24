// Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
function isNumberPositive(n) {
    if (n > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));

// Write a function that takes a number of days and converts it into an age.
function convertDaysToAge (n) {
    return(n / 365);
}

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));

// Write a function that takes three numbers and returns the largest of the three numbers.
function getLargestNumber(num1, num2, num3){
    return Math.max(num1, num2, num3);
}


console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 3));

// Write a function that takes an array of names and returns the last name from the array of names.
function getLastName(lastName){
    let lastNameIndex = lastName.length - 1;
    return lastName[lastNameIndex];
}


console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash", "Stu"]));

// Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.
function allNumbersPositive(num1, num2, num3) {
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(allNumbersPositive(2, 4, 5)); 
console.log(allNumbersPositive(-5, 4, 6));
