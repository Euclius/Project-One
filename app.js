$(document).ready(function(){
console.log('working')

let hangmanwords = ["chicken", "vampire", "abdomens", "scrutiny", "sphinx", "iceboxing", "tranquilizer"]
let word = ' '
let iput = ''

$('.begin').on('click', getRandomWord = () => {
let subm = Math.floor(Math.random() * hangmanwords.length)
word = hangmanwords[subm]
console.log(word.length)
let undsc = []
for (let i = 0; i < word.length;i++) {
    undsc[i] = "_"
}
var letters = word.length
})

$('#field .guessbutn').on('click', function (){
    console.log('jppo')
    let smit = $('#field .guessbutn').val()
    iput = smit
    $('#field .')
    // if ('.input .guessbutn')
})
// if ('.input' === null) {
// } else if ('.input'.length !==1) {
//     shake('.input')
// } else {

// }


// const alphabet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z']





})