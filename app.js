$(document).ready(function(){
console.log('js connected')

let hangmanwords = ["chicken", "vampire", "abdomens", "scrutiny", "sphinx", "iceboxing", "tranquilizer"]
let word = ''
let attempts = ''

$('.begin').on('click', getRandomWord = () => {
let subm = Math.floor(Math.random() * hangmanwords.length)
word = hangmanwords[subm]
console.log(word.length)
// var undsc = ["<div class='underline'</div>"]
// for (let i = 0; i < word.length;i++) {
//     $('.underline').append(undsc)
    // var undsc = word.length
let undsc = []
for (let i = 0; i < word.length;i++) {
undsc[i] = "_"
}
})
var undsc1 = word.length
// var undsc = word.length
// })

// })

$('#field .guessbutn').on('click', function (){
    console.log('jppo')
    const sub = ($('.guessbutn').val())
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