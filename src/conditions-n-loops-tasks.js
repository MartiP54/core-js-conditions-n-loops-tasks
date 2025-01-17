/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = 0;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    king.x + king.y === queen.x + queen.y ||
    king.y - king.x === queen.y - queen.x
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (
    (a === b && c < a + b && c > 0) ||
    (a === c && b < a + c && b > 0) ||
    (b === c && a < b + c && a > 0)
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let rezult = '';
  let temp = num;
  while (temp > 9) {
    rezult += 'X';
    temp -= 10;
  }
  if (temp === 9) {
    rezult += 'IX';
    temp -= 9;
  }
  if (temp >= 5) {
    rezult += 'V';
    temp -= 5;
  }
  if (temp === 4) {
    rezult += 'IV';
    temp -= 4;
  }
  if (temp < 4) {
    while (temp > 0) {
      rezult += 'I';
      temp -= 1;
    }
  }

  return rezult;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const strTemp = `${numberStr}`;
  let strRezult = '';
  let rezult = '';
  for (let i = 0; i < strTemp.length; i += 1) {
    switch (strTemp[i]) {
      case '0':
        strRezult += 'zero ';
        break;
      case '1':
        strRezult += 'one ';
        break;
      case '2':
        strRezult += 'two ';
        break;
      case '3':
        strRezult += 'three ';
        break;
      case '4':
        strRezult += 'four ';
        break;
      case '5':
        strRezult += 'five ';
        break;
      case '6':
        strRezult += 'six ';
        break;
      case '7':
        strRezult += 'seven ';
        break;
      case '8':
        strRezult += 'eight ';
        break;
      case '9':
        strRezult += 'nine ';
        break;
      case '.':
        strRezult += 'point ';
        break;
      case ',':
        strRezult += 'point ';
        break;
      case '-':
        strRezult += 'minus ';
        break;
      default:
        strRezult += '';
    }
  }
  for (let i = 0; i < strRezult.length - 1; i += 1) {
    rezult += strRezult[i];
  }
  return rezult;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let strRev = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    strRev += str[i];
  }
  return strRev === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let rezult = false;
  const strTemp = `${num}`;
  const digitTemp = `${digit}`;
  for (let i = 0; i < strTemp.length; i += 1) {
    if (strTemp[i] === digitTemp) {
      rezult = true;
    }
  }
  return rezult;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let left;
  let right;
  let rez = -1;
  for (let num = 0; num < arr.length; num += 1) {
    left = 0;
    right = 0;
    for (let i = 0; i < num; i += 1) {
      left += arr[i];
    }
    for (let i = arr.length - 1; i > num; i -= 1) {
      right += arr[i];
    }
    if (left === right) {
      rez = num;
      num = arr.length;
    }
  }
  return rez;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let count = 1;
  let stColumn = 0;
  let endColumn = size - 1;
  let stRow = 0;
  let endRow = size - 1;
  for (let a = 0; a < size; a += 1) {
    matrix[a] = [];
    for (let b = 0; b < size; b += 1) {
      matrix[a][b] = 0;
    }
  }
  for (let m = 0; m < size; m += 1) {
    for (let i = stColumn; i <= endColumn; i += 1) {
      matrix[stRow][i] = count;
      count += 1;
    }
    stRow += 1;
    for (let j = stRow; j <= endRow; j += 1) {
      matrix[j][endColumn] = count;
      count += 1;
    }
    endColumn -= 1;
    for (let k = endColumn; k >= stColumn; k -= 1) {
      matrix[endRow][k] = count;
      count += 1;
    }
    endRow -= 1;
    for (let l = endRow; l >= stRow; l -= 1) {
      matrix[l][stColumn] = count;
      count += 1;
    }
    stColumn += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rezmatrix = [];
  const rezmatrix1 = matrix;
  for (let m = 0; m < matrix.length; m += 1) {
    rezmatrix[m] = [];
    for (let n = 0; n < matrix.length; n += 1) {
      rezmatrix[m][n] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      rezmatrix[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      rezmatrix1[i][j] = rezmatrix[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function sortByAsc(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const resultArr = arr;
  const opor = arr[0];
  const greaterArr = [];
  const smallerArr = [];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] >= opor) {
      greaterArr[greaterArr.length] = arr[i];
    } else {
      smallerArr[smallerArr.length] = arr[i];
    }
  }
  const tempArr = [...sortByAsc(smallerArr), opor, ...sortByAsc(greaterArr)];
  for (let i = 0; i < tempArr.length; i += 1) {
    resultArr[i] = tempArr[i];
  }
  return resultArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */

function shuffleChar(str, iterations) {
  let rezult = str;
  let factor = 0;
  const shank = [];
  function shuffle(str1) {
    let tempEven = '';
    let tempOdd = '';
    for (let i = 0; i < str1.length; i += 1) {
      if (i % 2 === 0) {
        tempEven += str1[i];
      } else {
        tempOdd += str1[i];
      }
    }
    rezult = tempEven + tempOdd;
  }
  for (let n = 0; n < iterations; n += 1) {
    shuffle(rezult);
    shank[n] = rezult;
    if (rezult === str) {
      factor = n + 1;
      n = iterations;
    }
  }
  return factor ? shank[(iterations % factor) - 1] : rezult;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
