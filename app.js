//! Chapter # 38 - 44

// ? Question # 1

// function power(){
//     let baseValue = + prompt("Enter base value :")
//     let powerValue = + prompt("Enter power value: ")
//     let result = baseValue**powerValue
//     console.log(baseValue + "^" + powerValue + "=" + result )
// }  
// power();


// ? Question # 2

// function isLeapYear() {
//     let yearInput = + prompt("Enter a Year : ")
//     if ((yearInput % 4 === 0 && yearInput % 100 != 0) || yearInput % 400 === 0) {
//         console.log("Its a leap year ")
//     } else {
//         console.log("not a leap year.")
//     } 
// }
// isLeapYear();


// ? Question # 3

// let sideA = + prompt("Enter value for side a : ")
// let sideB = + prompt("Enter value for side b : ")
// let sideC = + prompt("Enter value for side c : ")
// function semiParameter(a,b,c){
//     return (a+b+c)/2;
// }
// function calculateArea(a,b,c){
//     let s = semiParameter(a,b,c);
//     let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
//     return area
// }
// area = calculateArea(sideA,sideB,sideC)
// console.log("The area of a triangle whose side a is "+ sideA +","+"side b is " + sideB+ " and side c is " + sideC + " is " +area)


// ? Question # 4

// let subject1 = +prompt("Enter marks of English")
// let subject2 = +prompt("Enter marks of Maths")
// let subject3 = +prompt("Enter marks of Science")
// let total =  +prompt("Enter total marks of three subjects:")
// function average(a,b,c){
//     return ((a+b+c) / 3);
// }
// function percentage (a,b,c){
//     return (((a+b+c) * 100) / total) ;
// }
// function mainFuntion (a,b,c){
//     let ave = average(a,b,c)
//     let per = percentage(a,b,c)
//     let result1 = ave
//     let result2 = per
//     return [result1 , result2] ;
// }
// result1 = mainFuntion(subject1,subject2,subject3)
// result2 = mainFuntion(subject1,subject2,subject3)
// console.log("Average is " + result1[0] +" and the percentage is " + result2[1])


// ? Question # 5

// function index (){
//     let word = "A quick brown fox"
//     let lowerCase = word.toLowerCase()
//     let result =  lowerCase.indexOf("a")
//     console.log(result)
// }
// index();


// ? Question # 6

// let sentence = prompt("Enter a sentence: ")
// function removeVowels(){
//     vowels = /[aeiouAEIOU]/g
//     result = sentence.replace(vowels , "")
//     console.log(result)
// }
// removeVowels();


// ? Question # 7

// function countVowelPair(text){
//     count = 0;
//     for(let i = 0 ; i < text.length -1 ; i++){
//         let currentCharacter = text[i]
//         let nextCharacter = text[i + 1]
//         switch(currentCharacter.toLowerCase()){
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//             if ("aeiou".includes(nextCharacter.toLowerCase())){
//                 count++
//                 i++
//             }
//             break;
//             default:
//             break;
//         }
//     }
//     return count ;
// }
// let inputText = prompt("Enter a sentence: ")
// let result = countVowelPair(inputText)
// console.log("Number of vowel pair in a sentence is " + result)


// ? Question # 8

// function kmToMeters(kilometers){
//     return kilometers * 1000
// }
// function kmToFeet(kilometers){
//     return kilometers * 3280.84
// }
// function kmToInches(kilometers){
//     return kilometers * 39370.1
// }
// function kmToCentimeters(kilometers){
//     return kilometers * 100000
// }
// let kilometers = +prompt("Enter distance in kilometers: ")
// let meter = kmToMeters(kilometers)
// let feet = kmToFeet(kilometers)
// let inches = kmToInches(kilometers)
// let centimeters = kmToCentimeters(kilometers)
// console.log(kilometers + "km" + " is equal to " + meter + "m")
// console.log(kilometers + "km" + " is equal to " + feet + "ft")
// console.log(kilometers + "km" + " is equal to " + inches + "inch")
// console.log(kilometers + "km" + " is equal to " + centimeters + "cm")


// ? Question # 9

// hoursWorked = +prompt("Enter work hours for employee : ");
// function calculateOverTimePay(hoursWorked){
//     let standardHours = 40;
//     let overTimeRate = 12;
//     if(hoursWorked <= standardHours){
//         return 0;
//     }else{
//         let overtimeHours = hoursWorked - standardHours
//         let overtimePay = overtimeHours * overTimeRate
//         return overtimePay; 
//     }
// }
// let overtimePay = calculateOverTimePay(hoursWorked)
// console.log("Overtime pay for " + hoursWorked + "hrs" + " is " + overtimePay)

// ? Question # 10

// function calculateCurrencyNotes(amountInHundreds) {
//     const amount = amountInHundreds * 100;
//     const denominations = [100, 50, 10]; 
  
//     const notesCount = {};
  
//     for (const denomination of denominations) {
//       const count = Math.floor(amount / denomination);
//       notesCount[denomination] = count;
//       amount -= count * denomination; 
//     }
//     return notesCount;
//   }
// const amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));
// const notesCount = calculateCurrencyNotes(amountInHundreds);
// console.log("Cashier will give the following currency notes:");
// console.log(`${notesCount[100]} x 100 Rupees`);
// console.log(`${notesCount[50]} x 50 Rupees`);
// console.log(`${notesCount[10]} x 10 Rupees`);
  
