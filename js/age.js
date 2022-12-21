// Write a program that will print the age category, given a variable with an age. Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", for an age that is an integer between 0 and 20.

//let age = {
    //infant: 0,
    //toddler: 2,
    //child: 6,
    //preteen: 11,
    //teen: 13,
   // youngAdult: 18
 // }
  
 // console.log(age.infant)
  // console.log(age.toddler)
  // console.log(age.child)
  // console.log(age.preteen)
  // console.log(age.teen)
  // console.log(age.youngAdult)

let age = 10 
if (age < 0) {
    console.log('This is an infant.')
} else if (age < 2) {
    console.log('This is a toddler.')
} else if (age < 6) {
    console.log('This is a child.')
} else if (age > 11) {
    console.log('This is a preteen.')
} else if (age > 12) {
    console.log('This is a teen.')
} else if (age > 18) {
    console.log('This is a young adult.')
}