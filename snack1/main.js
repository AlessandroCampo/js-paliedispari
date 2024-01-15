let user_wordHTML = document.getElementById("user_word")
let button = document.querySelector("button")




button.addEventListener("click", () => {
    let user_word = user_wordHTML.value
    let result = isPalyndrome(user_word)
    console.log(result)


})
let palyCheck = false

function isPalyndrome(word) {
    let wordArray = Array.from(word.toUpperCase())
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
            return false
        }
    }
    if (palyCheck == true) {
        return true
    }
}
