$(document).ready(function () {
    console.log('js connected')

    let hangmanwords = ["chicken", "vampire", "abdomens", "scrutiny", "sphinx", "iceboxing", "tranquilizer"]
    let word = ''


    $('.begin').on('click', getRandomWord = () => {
        let subm = Math.floor(Math.random() * hangmanwords.length)      //I don't like that this is random rn, but when I finally compplete the basic logic, I'll make it go in order of the array from simpliest to most difficult
        word = hangmanwords[subm]
        console.log(word.length)
        console.log(word)
        // let undsc = []
        for (let i = 0; i < word.length; i++) {     
            console.log(word[i])
            // undsc[i] = "_" + " "
            // console.log(undsc)
            $('.keyword').append(`<div class="${word[i]}"> _ </div>`)
        }
        // $('.keyword').append(undsc)
    })
    var undsc = word.length
// }
    // })
    // function correctGuess() {
    //     let right = ($('.input').val())
    //     $('.keyword').indexOf(`${undsc[i]}`)
    // }


    // })
    function attemptedGuess() {
        const sub = ($('.input').val())
        console.log(sub)
        $(`.${sub}`).text(sub)
        $('#attempts').append(`<li>${sub}</li>`)
    }
// function alterUndsc() {
//     let guess = ($('.input').value[0])
//     let undsc = ($('.input').val())
//     $('.keyword').join(`${undsc}`)
// }


//  function alterUndsc() {
//     if {
//     for (let i = 0; i > hangmanwords.length. i++){
//          if ($('.input').val() == undsc[i])
//          $('.keyword')indexOf(undsc[i].toString())
//      }
//     } else {

//     }
// }
    $('.guessbutn').on('click', function () {
        if ($('.input').val().length !== 1) {
            alert('please enter only one character')
        }
        else {
            attemptedGuess()
        }
    //     } else {alterUndsc () 
    // } else {}
        // else {
        //     let right = $(this).text
        //     ($(attemptedGuess()== undsc.length))
        //     $('.keyword')indexOf(right).toString()
        // }
        // { else if
        // }
        
        
        // } else if {(
        //     ($('.input').val() == undsc[]
        //     ($('.keyword')join(undsc).toString()))})
        
        })
    })
// for (i = 0; i < undsc; i++) {
    //     hangmanwords = [hangmanwords.slice(0, i*2+1), '', hangmanwords.slice(i*2+1)].join('')

// $('.guessbutn').on('click', function () {
// for (i = 0; i < hangmanwords.length. i++) {
//     var right = $(this).text
//     var index = word.indexOf(right)

//     if ($('.input').val() == undsc[i])
//     undsc[i] = right
//     $('.keyword')after(right).toString()
//  } else {

//     }
// })
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
// code below is how to not be correct. using it as a reference to not repet myself
     // } else {
        //     for (i = 0; i < word.length; i++) {
        //         var right = $(this).text
        //         var index = word.indexOf(right)
        //         if (index !==-1) {
        //             undsc[index] = right
        //             $('.keyword')after(right).toString()
        //         }
        //     }
        // }
        
// for (i=0; i < hangmanwords.length; i++) {
//     var guess = $(this).text
//     var undscArray = [undsc]
//     var index = hangmanwords.indexOf(guess)
//     if (index !== -1) {
//         undscArray[index] = guess
//         $('.keyword').after(undscArray).toString()
//     }
// }