$(document).ready(function(){
console.log('js connected')

let hangmanwords = ["chicken", "vampire", "abdomens", "scrutiny", "sphinx", "iceboxing", "tranquilizer"]
let word = ''
let attempts = ''

$('.begin').on('click', getRandomWord = () => {
let subm = Math.floor(Math.random() * hangmanwords.length)      //I don't like that this is random rn, but when I finally compplete the basic logic, I'll make it go in order of the array from simpliest to most difficult
word = hangmanwords[subm]
console.log(word.length)
// var undsc = ["<div class='underline'</div>"]
// for (let i = 0; i < word.length;i++) {     //looked at Seth's code because he has his underscores performing what I'd like, but it does nothing. Leaving it here for now.
//     $('.underline').append(undsc)
    // var undsc = word.length
let undsc = []
for (let i = 0; i < word.length;i++) {
undsc[i] = "_"
$('.keyword').append(undsc)
}
})
var undsc1 = word.length
// var undsc = word.length
// })

// })
// down below is my attempt to move the guesses to the attempted location. it currently fails
$('#field .guessbutn').on('click', function (){
    console.log('jppo')
    const sub = ($('.input').val())
    $('#attempts').append(`<li>${sub}</li>`)
}) //when I get this damn thing to work, I'll try to limit the characters
// if ('.input' === null) {
// } else if ('.input'.length !==1) {
//     alert("hjk")
//     // tremble($('.input'))
// } else {

// }
// })

// const alphabet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z']
})