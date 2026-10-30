// =====================================================================
//  inTEN Web Programming · JavaScript Basics Practice
//  Topics: console.log, variables, data types, operators, if / else
//
//  HOW TO WORK
//  - Write your code on the empty lines under each task.
//  - Save (Ctrl + S) and look at the Console (F12 → Console).
//  - Your output should match the EXPECTED OUTPUT under each task.
//  - If you see red text, read it! It gives the line number of the problem.
//  - To keep the Console tidy, each task starts by printing its own title.
//    Do not delete those lines.
// =====================================================================

// =====================================================================
//  PART A · VARIABLES AND DATA TYPES
// =====================================================================

console.log("--- Task 1 ---");
// ---------------------------------------------------------------------
//  TASK 1 · About me                                          (5 min)
//  a) Make a CONSTANT called firstName with your first name.
//  b) Make a VARIABLE (let) called age with your age (a number).
//  c) Make a CONSTANT called town with your home town.
//  d) Print ONE sentence by joining them with + :
//
//  EXPECTED OUTPUT (with your own details):
//    My name is Amina, I am 17 years old and I live in Meru.
// ---------------------------------------------------------------------
let first_name = "nelly";
let age = 28;
let town = "nkubu";
console.log(
  "my name is " +
    first_name +
    " i am " +
    age +
    " years old and live in " +
    town,
);

console.log("--- Task 2 ---");
// ---------------------------------------------------------------------
//  TASK 2 · What type is it?                                  (5 min)
//  typeof tells you the type of a value.  Example: typeof 42  →  "number"
//  Make these four constants, then print the typeof of each one:
//    product   = "Mandazi"
//    price     = 20
//    inStock   = true
//    priceText = "20"        ← careful! look at the quotes
//
//  EXPECTED OUTPUT:
//    string
//    number
//    boolean
//    string
// ---------------------------------------------------------------------
const product = "mandazi";
console.log(typeof product);
const price = 20;
console.log(typeof price);
const inStock = true;
console.log(typeof inStock);
const priceText = "20";
console.log(typeof priceText);

console.log("--- Task 3 ---");
// ---------------------------------------------------------------------
//  TASK 3 · Variables that change                             (5 min)
//  a) Make a variable:  let score = 10;
//  b) Add 5 to it using  +=
//  c) Add 1 more to it using  ++
//  d) Print it.
//  e) Now try this: make  const goals = 3;  and on the next line write
//     goals = 4;   Save and read the red error in the Console.
//     Then turn that line into a comment so your code runs again.
//     In a comment, explain why the error happened.
//
//  EXPECTED OUTPUT:
//    Score: 16
// ---------------------------------------------------------------------
let score = 10;
score += 5;
score++;
console.log(score);

// =====================================================================
//  PART B · OPERATORS
// =====================================================================

console.log("--- Task 4 ---");
// ---------------------------------------------------------------------
//  TASK 4 · Shopping at the duka                              (8 min)
//  You buy: 1 loaf of bread (KSh 65), 1 packet of milk (KSh 60)
//  and 6 eggs (KSh 25 each). You pay with a KSh 500 note.
//  a) Make constants for bread, milk, eggPrice and eggCount.
//  b) Work out the total with maths operators (do NOT type 275 yourself!)
//  c) Work out the change from 500.
//
//  EXPECTED OUTPUT:
//    Total: KSh 275
//    Change: KSh 225
// ---------------------------------------------------------------------
const bread = 65;
const milk = 60;
const eggPrice = 25;
const eggCount = 6;
const cash = 500;
const total = bread + milk + eggPrice * eggCount;
const change = cash - total;
console.log("total: Ksh" + total);
console.log("total: Ksh" + change);

console.log("--- Task 5 ---");
// ---------------------------------------------------------------------
//  TASK 5 · The remainder operator %                          (5 min)
//  % gives what is LEFT OVER after dividing.  Example: 10 % 3 → 1
//  There are 23 students and the teacher makes groups of 4.
//  a) How many students are left over without a full group?
//  b) There are 47 counties in Kenya. If you visit 5 counties a week,
//     how many are left for the final, shorter week?
//
//  EXPECTED OUTPUT:
//    Students left over: 3
//    Counties in the last week: 2
// ---------------------------------------------------------------------
const studentsLeft = 23 % 4;
const countiesVisit = 47 % 5;
console.log("students left over:" + studentsLeft);
console.log("counties in the last week" + countiesVisit);

console.log("--- Task 6 ---");
// ---------------------------------------------------------------------
//  TASK 6 · The text trap                                     (5 min)
//  Numbers that come from a web page are often TEXT.
//  a) Make  const tea = "200";  and  const coffee = "250";
//  b) Print tea + coffee. What happens? Why?
//  c) Fix it with Number() so it prints 450.
//
//  EXPECTED OUTPUT:
//    200250
//    450
// ---------------------------------------------------------------------
const tea = "200";
const coffe = "250";
console.log(tea + coffe);
console.log(250 + 200);
// =====================================================================
//  PART C · COMPARING (every answer is true or false)
// =====================================================================

console.log("--- Task 7 ---");
// ---------------------------------------------------------------------
//  TASK 7 · Predict, then check                               (8 min)
//  FIRST write your guess (true or false) at the end of each line
//  below, THEN remove the  //  in front of console.log to check.
//  Score yourself: how many did you get right?
//
//  console.log(10 > 5);                       // my guess:
//  console.log(7 === "7");                    // my guess:
//  console.log("Meru" === "meru");            // my guess:
//  console.log(18 >= 18);                     // my guess:
//  console.log(100 !== 99);                   // my guess:
//  console.log(5 > 3 && 2 > 4);               // my guess:
//  console.log(5 > 3 || 2 > 4);               // my guess:
//  console.log(20 % 2 === 0);                 // my guess:
//
//  EXPECTED OUTPUT:
//    true  false  false  true  true  false  true  true   (one per line)
// ---------------------------------------------------------------------
console.log(10 > 5); // true
console.log(7 === "7"); //  false
console.log("meru" === "meru"); //true
console.log(18 >= 18); //true
console.log(100 !== 99); //true
console.log(5 > 3 && 2 > 4); //false
console.log(5 > 3 || 2 > 4); //true
console.log(20 % 2 === 0); //true

// =====================================================================
//  PART D · DECISIONS WITH if / else
// =====================================================================

console.log("--- Task 8 ---");
// ---------------------------------------------------------------------
//  TASK 8 · Old enough to vote?                               (5 min)
//  In Kenya you can vote from the age of 18.
//  Make  let voterAge = 17;  then write an if / else:
//    18 or older → "You can register to vote."
//    otherwise   → "Too young to vote. Wait 1 more year(s)."
//                  (work out the number of years with maths!)
//  Then change voterAge to 21 and check the other message.
//
//  EXPECTED OUTPUT (voterAge = 17):
//    Too young to vote. Wait 1 more year(s).
// ---------------------------------------------------------------------
let voterAge = 17;
if (voterAge >= 18) {
  console.log("you can register to vote");
} else {
  console.log("too young to vote.wait 1 more years");
}

console.log("--- Task 9 ---");
// ---------------------------------------------------------------------
//  TASK 9 · Even or odd?                                      (5 min)
//  Make  const number = 37;
//  Use % and if / else to print whether it is even or odd.
//  HINT: a number is even when  number % 2 === 0
//
//  EXPECTED OUTPUT:
//    37 is odd
// ---------------------------------------------------------------------

const number = 37;

if (number % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

console.log("--- Task 10 ---");
// ---------------------------------------------------------------------
//  TASK 10 · Grade calculator                                 (8 min)
//  Make  const mark = 68;  and print the grade:
//    80 and above → A      50 to 59 → C      Below 40 → E
//    60 to 79     → B      40 to 49 → D
//  Use if / else if / else. Think about the ORDER of your conditions!
//  Test with: 68, 80, 39, 50.
//
//  EXPECTED OUTPUT (mark = 68):
//    Mark 68 = Grade B
// ---------------------------------------------------------------------
const mark = 68;
let grade;
if (mark >= 80) {
  grade = "A";
} else if (mark >= 60) {
  grade = "B";
} else if (mark >= 50) {
  grade = "C";
} else if (mark >= 40) {
  grade = "D";
} else {
  grade = "E";
}
console.log("mark " + mark + "= grade" + grade);

console.log("--- Task 11 ---");
// ---------------------------------------------------------------------
//  TASK 11 · Matatu fare                                      (10 min)
//  A matatu charges by distance:
//    up to 5 km     → KSh 50
//    up to 10 km    → KSh 80
//    more than 10   → KSh 120
//  Students in uniform pay HALF fare.
//  a) Make  const distance = 8;  and  const isStudent = true;
//  b) Use  let fare;  then an if / else if / else to set the fare.
//  c) Use a second if to halve the fare when isStudent is true.
//  d) Print the fare.
//  Test with: 8 km student, 3 km not student, 15 km student.
//
//  EXPECTED OUTPUT (8 km, student):
//    Your fare is KSh 40
// ---------------------------------------------------------------------
const distance = 8;
const isStudent = true;
if (distance <= 5) {
  fare = "50";
} else if (distance <= 10) {
  fare = "80";
} else {
  fare = 120;
}
if (isStudent) {
  fare = fare / 2;
}
console.log("your fare is ksh ", +fare);

console.log("--- Task 12 ---");
// ---------------------------------------------------------------------
//  TASK 12 · Weather advice                                   (5 min)
//  Make  const temperature = 28;  and print advice:
//    above 30         → "Very hot! Drink plenty of water."
//    20 up to 30      → "Warm and pleasant. Enjoy your day!"
//    10 up to 19      → "Cool. Carry a sweater."
//    below 10         → "Cold! Wear a jacket."
//
//  EXPECTED OUTPUT (temperature = 28):
//    Warm and pleasant. Enjoy your day!
// ---------------------------------------------------------------------
const temperature = 28;
if (temperature > 30) {
  advice = "very hot!Drink plenty of water";
} else if (temperature >= 20) {
  advice = "warm and pleasant.Enjoy your day!";
} else if (temperature >= 10) {
  advice = "cool.carry a sweater";
} else {
  ("cold! Wear a jacket");
}
console.log(
  "temperature =" + temperature + " warm and pleasant.Enjoy your day",
);

// =====================================================================
//  PART E · FIX THE BUGS                                      (10 min)
//  The code below has 5 bugs. Remove the  //  at the start of each line
//  (select the lines and press Ctrl + / ), save, and fix the bugs one by
//  one using the red errors in the Console.
//
//  WARNING: one of the bugs is a missing bracket. Until you fix it,
//  NONE of your earlier answers will show in the Console, because the
//  browser cannot read the file at all. That is how SYNTAX errors work.
//
//  WHAT IT SHOULD DO: a shop gives a 10% discount on orders of
//  KSh 1000 or more.
//  EXPECTED OUTPUT:
//    Order total: KSh 1200
//    You get a discount of KSh 120
//    You pay KSh 1080
// =====================================================================

console.log("--- Part E ---");

const shirt = 700;
const socks = 500;
const orderTotal = shirt + socks;
console.log("Order total: KSh " + orderTotal);

let discount = 0;
if (orderTotal >= 1000) {
  discount = (orderTotal * 10) / 100;
}
console.log("You get a discount of KSh " + discount);
console.log("You pay KSh " + (orderTotal - discount));

// =====================================================================
//  STRETCH TASKS (fast finishers)
//
//  STRETCH A · Login check
//  Make  const username = "admin";  and  const password = "1234";
//  If BOTH are correct (use &&), print "Welcome back!"
//  Otherwise print "Wrong username or password."
//
//  STRETCH B · Leap year
//  A year is a leap year if:  it divides by 4 AND not by 100,
//                             OR it divides by 400.
//  Print whether 2024, 1900 and 2000 are leap years.
//  (Answers: 2024 yes, 1900 no, 2000 yes)
//
//  STRETCH C · Ask the user
//  prompt() opens a box where the user can type. Try:
//      const markText = prompt("Enter your mark:");
//      const userMark = Number(markText);
//  Then reuse your Task 10 grade code with userMark.
//  Why do we need Number() here?
// =====================================================================
