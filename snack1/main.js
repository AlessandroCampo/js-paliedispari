let user_wordHTML = document.getElementById("user_word")
let button = document.querySelector("button")



let palyCheck = false
button.addEventListener("click", () => {

    let user_word = user_wordHTML.value
    let wordArray = Array.from(user_word)
    let checkArray = []

    for (let i = wordArray.length - 1; i >= 0; i--) {
        checkArray.push(wordArray[i])
        console.log(checkArray)
    }


    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] == checkArray[i]) {
            palyCheck = true
            console.log(wordArray[i], checkArray[i])
        }
        else {
            palyCheck = false
            console.log(wordArray[i], checkArray[i])
            break
        }
    }

    console.log(palyCheck)


})


