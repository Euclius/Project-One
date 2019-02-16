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

    // })

    // })
    // down below is my attempt to move the guesses to the attempted location. it currently succeeds
    function attemptedGuess() {
        const sub = ($('.input').val())
        $('#attempts').append(`<li>${sub}</li>`)
        //when I get this damn thing to work, I'll try to limit the characters
    }

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
        } else {
            attemptedGuess()
            // const sub = ($('.input').val())
            // $('#attempts').append(`<li>${sub}</li>`)
        }
    })

})


// const alphabet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z']