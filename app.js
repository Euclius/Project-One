$(document).ready(function () {
    console.log('js connected')

    let hangmanwords = ["chicken", "vampire", "abdomens", "scrutiny", "sphinx", "iceboxing", "tranquilizer"]
    let word = ''
    let tree

    $('.begin').on('click', getRandomWord = () => {
        let subm = Math.floor(Math.random() * hangmanwords.length)      //I don't like that this is random rn, but when I finally compplete the basic logic, I'll make it go in order of the array from simpliest to most difficult
        word = hangmanwords[subm]
        tree = word
        console.log(word.length)
        console.log(word)
        // let undsc = []
        for (let i = 0; i < word.length; i++) {
            console.log(word[i])

            $('.keyword').append(`<div class="${word[i]}"> _ </div>`)


        }


    })
    let score = 6
    // $('.begin').click(function(){
    //     $(subm)[0].reset()
    // })
    resetFunc = () => {
        document.location.reload()
    }

    $('.score').html(score)

    // function lose () {
    //     if (score = 0) {    
    // resetFunc = () => {
    //     document.location.reload()
    // }

    // }
    // }



    function attemptedGuess() {
        const sub = ($('.input').val())
        console.log(sub)
        $(`.${sub}`).text(sub)
        $('#attempts').append(`<li>${sub}</li>`)
        console.log('tree: ', tree);
        console.log('sub: ', sub);
        if (tree !== sub) {
            score--
            $(`.${'score'}`).text(score)
           var indexOf(tree)
            console.log(score)
        }
    }
    // if attempted guess does not match the div class, then score is subtracted by one
    //and if score reaches zero, then inflict gameover function






    $('.guessbutn').on('click', function () {
        if ($('.input').val().length !== 1) {
            alert('please enter only one character')
        }
        else {
            attemptedGuess()
        }

    })
})



//seth has for if(count === wordArr.length){
    //alert you win
//}

//and for his scoring
// if(letter !==word[i]) {
// amountOfTimesLetterIsNotInWord += 1
// if (amountOfTimesLetterIsNotInWord ===word.length) {
    //limit -=1
//}
//}
//with limit defined globablly