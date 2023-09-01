//Harry Potter Titles
/*var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for (let i = 0; i< harryPotterTitles.length; i++) {
    console.log(harryPotterTitles[i])
}
*/ 

//Student Grades 
/*
let aGrades = {
    score: 0,
    actualGrade: "A"
}
let bGrades = {
    score: 0,
    actualGrade: "B"
}
let cGrades = {
    score: 0,
    actualGrade: "C"
}
let dGrades = {
    score: 0,
    actualGrade: "D"
}
let fGrades = {
    score: 0,
    actualGrade: "F"
}

let percentageGrades = 0

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for(let taco = 0; taco < grades.length; taco++){

if(grades[taco] <= 69){
console.log("You got an F")
fGrades.score++
} else if(grades[taco] >= 70 && grades[taco] <= 76){
    console.log("You got a D")
    dGrades.score++
} else if(grades[taco] >= 77 && grades[taco] <= 84) {
    console.log("You got a C")
    cGrades.score++
} else if (grades[taco] >= 85 && grades[taco] <= 92){
    console.log("You got a B")
    bGrades.score++
} else if(grades[taco] >= 93 && grades[taco] <= 100){  
    console.log("You got an A")
    aGrades.score++
}
}

let letterGrades = [aGrades, bGrades, cGrades, dGrades, fGrades]
let highScore = {
score: 0,
actualGrade: ""
}
for(let i = 0; i < letterGrades.length; i++){
    if(letterGrades[i].score > highScore.score)
    {
        highScore = letterGrades[i]
    }
}
console.log(highScore)
console.log(aGrades, "This is A grades")
console.log(bGrades, "This is B Grades")
*/
//Two four six eight 
/*
let s = ""
for( let i = 2; i <= 8; i += 2 ){

    s += i + " ";
}
console.log(s + "Who do we appreciate?!") 

*/
//Interrupting cow

let sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let sentence = ' '; 
for (let i = 0; i < sentenceArray.length; i++) {
    sentence += sentenceArray[i];
    if((i + 1) % 3 === 0 && i !== sentenceArray.length - 1) {
        sentence += " MOOOO!" ; 
    } else if ( i !== sentenceArray.length - 1) {
        sentence += " "
    }
}
console.log(sentence) 
    





/*
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
//${name} was in the Beatles from ${year} to ${year}. He was born in ${year}. He contributed heavily to the ${albumName} Album.

//Please note that these values are not correct. They're just placeholders that you will need to correctly fill out. 
let string = ''
for( let i = 0; i < beatles.members.length; i++ ) {
    string += `${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[i].birth}. He contributed heavily to the ${beatles.albums[i]} Album.`;

  
if(beatles.members[i].death){
    string += ` He died in ${beatles.members[i].death}. `
} else{
    string += " He is still alive"
}}
console.log(string)


*/



