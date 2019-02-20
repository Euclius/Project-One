$(document).ready(function () {
    console.log('js connected')

    let hangmanwords = ["chicken", "vampire", "abdomens", "scrutiny", "sphinx", "iceboxing", "tranquilizer"]
    let word = ''
    let fullWord 
    let score = 6
// how the game begins
    $('.begin').on('click', getRandomWord = () => {
        let subm = Math.floor(Math.random() * hangmanwords.length) 
        word = hangmanwords[subm]
        fullWord = word
        console.log(word.length)
        console.log(word)
        // let undsc = []
        for (let i = 0; i < word.length; i++) {
            console.log(word[i])

            $('.keyword').append(`<div class="${word[i]}"> _ </div>`)


        }


    })
    

    $('.score').html(score)

    resetFunc = () => {
        document.location.reload()
    }  
    function lose () {
            alert('you have lost the game. :[. The page will now reload.')    
resetFunc()
    }
    function win () {
        confirm({
            title:"You saved the man!",
            content:"Would you enjoy playing again?",
            buttons: {
                Yes: function (){
                    resetFunc()
                },
                No: function (){
                    preventDefault()

                }
            }
        })
    }

//function of guessing

    function attemptedGuess() {
        const sub = ($('.input').val())
        console.log(sub)
        $(`.${sub}`).text(sub)
        $('#attempts').append(`<li>${sub}</li>`)
        console.log('fullWord: ', fullWord);
        console.log('sub: ', sub);
        if (fullWord.includes(sub) !== true) {
            score--
            $(`.${'score'}`).text(score)
            console.log(score)
        if (score === 0) {
            lose()
        }
        if (fullWord)
        } 
        }
    
    // if attempted guess does not match the div class, then score is subtracted by one
    //and if score reaches zero, then inflict gameover function




//what happens when the submit button is clicked

    $('.guessbutn').on('click', function () {
        if ($('.input').val().length !== 1) {
            alert('please enter only one character')
        }
        else {
            attemptedGuess()
        }

    })
})
