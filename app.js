$(document).ready(function () {
    console.log('js connected')

    let hangmanwords = ["chicken", "vampire", "abdomens", "scrutiny", "sphinx", "iceboxing", "tranquilizer"]
    let word = ''

    $('.begin').on('click', getRandomWord = () => {
        let subm = Math.floor(Math.random() * hangmanwords.length)      //I don't like that this is random rn, but when I finally compplete the basic logic, I'll make it go in order of the array from simpliest to most difficult
        word = hangmanwords[subm]
        console.log(word.length)
        console.log(word)
        // var undsc = ["<div class='underline'</div>"]
        // for (let i = 0; i < word.length;i++) {     //looked at Seth's code because he has his underscores performing what I'd like, but it does nothing. Leaving it here for now as reference.
        //     $('.underline').append(undsc)
        // var undsc = word.length
        let undsc = []
        for (let i = 0; i < word.length; i++) {
            console.log(word[i])
            undsc[i] = "_" + " "
            console.log(undsc)
        }
        $('.keyword').append(undsc)
    })
    var undsc = word.length
// for (i = 0; i < undsc; i++) {
//     hangmanwords = [hangmanwords.slice(0, i*2+1), '', hangmanwords.slice(i*2+1)].join('')   saw this online, but I didn't quite understand it
// }
    // })
    // function correctGuess() {
    //     const mub = ($('.input').val())
    //     $('.keyword').indexOf(`${undsc[i]}`)
    // }
    // })
    // down below is my attempt to move the guesses to the attempted location. it currently succeeds
    function attemptedGuess() {
        const sub = ($('.input').val())
        $('#attempts').append(`<li>${sub}</li>`)
        //when I get this damn thing to work, I'll try to limit the characters
    }
// function alterUndsc() {
//     let gu = .input.value[0]
//     var dub = ($('.input').val())
//     $('.keyword').join(`${dub}`)
// }

    // if input is not one character, then I want it to decline input
    //if input is one character, I want it to accept the input
    // if ('.input'.length === 1) {
    //     return
    // } else if ('.input'.length !==1) {
    //     alert("hjk")
    //     // shake($('.input'))
    // } else { ('input'.length === null) 
    // }
    $('.guessbutn').on('click', function () {
        if ($('.input').val().length !== 1) {
            alert('please enter only one character')
        }
        else {
            attemptedGuess()
        } 

})
})
//pseudo code for correct guess
// if attempted guess = undsc join the attempted guess
// I think I need nother loop for this, but ignore tht for now becuse i'm not sure how to write it, but it must becuse it will need to loop through the empty underscores
//somehow I need the letter to be reveeeeeeled, which i think i could use join/ push/ or pop
// push will push it to the end or in the correct index order, but the word is not predictible (sp wrong, I know).
// peter told me about contain and splice/ slice
    // $('.guessbutn').on('click', function () {
    // if ($(attemptedGuess() == undsc)
    //          
    //         join(" ") 

    // for (var i = 0; i <word.length; i++) {             but do I need to make a new index?
//      if(word[i] ===#attempts) {
//      undsc[i] = #attempts
// }
//    }
    // })