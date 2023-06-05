// console.log(String.fromCharCode(65)); // A
// console.log(String.fromCharCode(53)); // 5

// 1. Write a JavaScript program to display numbers as worlds using ASCII code.
// example: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// output: hello world
// example: [83, 97, 108, 97, 109, 32, 65, 122, 101, 114, 98, 97, 121, 99, 97, 110]
// output: Salam Azerbaycan
// example: [106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 32, 105, 115, 32, 98, 111, 109, 98, 97]
// output: javascript is bomba

/* var result = ''
function convertToString(asciiCodes){
  for(let i=0;i<asciiCodes.length;i++){
    let ascii=asciiCodes[i]
    let char=String.fromCharCode(ascii)
    result+=char
    console.log(result)
  }

}
var asciiCodes = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100] */




// 'H'.charCodeAt(0); // 72
// 2. Write a JavaScript program to convert a string to an array of ASCII codes.
// example: hello world
// output: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// example: Salam Azerbaycan
// example: javascript is bomba

// // let word = 'hello world';
/*  var word = 'Salam Azerbaycan';
// let word = 'javascript is bomba';
var asciiCodes=[]
function convertToAscii(word){
  for(let i=0;i<word.length;i++){
    let ascii=word.charCodeAt(i)
    asciiCodes=ascii
    console.log(asciiCodes)    
} 
} */

// 3. Write a JavaScript program to convert a string to an array of characters.
// example: hello world
// output: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]


/* 
function converToArray(str){
  var letter=[]
  for(let i=0;i<str.length;i++){
    letter.push(str.charAt(i))
  }
  return letter
} */
/* var str = "hello world";
var letter = converToArray(str);
console.log(letter.join('", "')); */


// 4. Write a JavaScript program to drop the vowels from a string.
// example: hello world
// output: hll wrld

/* const str = 'hello world';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let result = '';

for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    let isVowel = false;
    
    for (let j = 0; j < vowels.length; j++) {
        let vowel = vowels[j];
        
        if (letter === vowel) {
            isVowel = true;
            break;
        }
    }
    
    if (!isVowel) {
        result += letter;
    }
}

console.log({ str, result }); */


// 5. Write a JavaScript program to check if a string contains only digits.
// example: 1234567890  // true
// example: 1234567890a // false

/* const str = '1234567890abc';
const numbers = ['1', '2', '3', '4', '5','6','7','8','9','0'];
let result = '';

for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    let isNumb = false;
    
    for (let j = 0; j < numbers.length; j++) {
        let number = numbers[j];
        
        if (letter === number ) {
            isNumb = true;
            break;
        }
    }
    
    if (!isNumb) {
        result=false;
          
    }
  else result=true  
}

console.log({ str, result }); */





// 6. Write a JavaScript program to check if a string contains only digits and letters.
// example: 1234567890  // true
// example: 1234567890a // true
// example: 1234567890a!@#$%^&*()_+ // false

/* const str = '1234567890abc#';
const characters = ['!', '@', '#', '%', '^','&','*','()','-','_','+','/'];
let result = '';

for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    let isChar = true;
    
    for (let j = 0; j < characters.length; j++) {
        let character = characters[j];
        
        if (letter === character ) {
            isChar = false;
        }
      
    }
     if (isChar) {
        result=true;
          
    }
  else{
    result=false 
    break
  }
}

console.log({ str, result }); */


// 7. Write a JavaScript program to check if a string contains only uppercase letters.
// example: HELLO WORLD // true
// example: HELLO WORLD! // true
// example: HELLO WORLD!@#$%^&*()_+ // true
// example: HELLO WORLD!@#$%^&*()_+a // false

/* var char=('ADERQ$')

function isUppercase(char) {
  return char === char.toUpperCase();
}
 */

// 8. Write a JavaScript program to UpperCase the first letter of each word of a given string without spaces.
// example: hello world
// output: HelloWorld
// example: a man who thinks about the end, can not be a hero

/* const str = ' hello world';
const space = ' ';
let result = '';

function convertUpperCase(str) {
 let test=true
  for (let i = 0; i < str.length; i++) {
     
    let letter = str[i];
    if (letter === space){
      test=true
    }
    else if(test){
      letter=letter.toUpperCase()
      test=false
    }
    result+=letter
  }
  console.log(result);
}

convertUpperCase(str);
  */

// 9. Write a JavaScript program to remove duplicate characters from a string.
// example: hello world
// output: helo wrd
// example: javascript is bomba
// example: a man who thinks about the end, can not be a hero

/* const str = "hello world";
let result = '';

for (let i = 0; i < str.length; i++) {
  let letter = str[i];
  let isDuplicate = false;

  for (let j = 0; j < i; j++) {
    let prevLetter = str[j];

    if (letter === prevLetter) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    result += letter;
  }
}

console.log(result); */


// 10. Write a JavaScript program to convert a string into camel case.
// example: hello world
// output: helloWorld
// example: javascript is bomba
// example: a man who thinks about the end, can not be a hero

/* function toCamelCase(str) {
  let words = str.split(' ');
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join('');
}
     */

// 11. Write a JavaScript program to convert a string into snake case.
// example: hello world
// output: hello_world
// example: a man who thinks about the end, can not be a hero

/*
function toSnakeCase(str) {
  return str.replace(/ /g, '_').toLowerCase();
}

console.log(toSnakeCase('hello world')); // Output: hello_world
console.log(toSnakeCase('a man who thinks about the end, can not be a hero')); 



// 12. Write a JavaScript program to convert a string into kebab case.
// example: hello world
// output: hello-world
// example: a man who thinks about the end, can not be a hero
// example: javascript is bomba

*/
/*function kebabCase(str) {
  return str.toLowerCase().replace(/ /g, "-");
}

console.log(kebabCase("hello world"));

*/

// 13. Write a JavaScript program to check if a given string is a palindrome.
// palindromes: madam, civic, radar, level, rotor, kayak, reviver, racecar, redder, madam, refer
// example: hello world // false
// example: madam // true
// example: racecar // true
``
/* function isPalindrome(str) {
  let reversedStr = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  
  return str === reversedStr;
}

console.log(isPalindrome("hello world"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar")); */

// 14. Write a JavaScript program to check if a given string is a pangram.
// pangram: a sentence containing every letter in the English alphabet.
// example: The quick brown fox jumps over the lazy dog. // true
// example: The quick brown fox jumps over the dog. // false

/* function isPangram(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let lowercaseStr = str.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i];
    if (lowercaseStr.indexOf(letter) === -1) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("The quick brown fox jumps over the dog.")); */



// 15. Write a JavaScript program to check if a given string is a anagram.
// anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// example: cinema // iceman // true
// example: listen // silent // true
// example: hello // world // false