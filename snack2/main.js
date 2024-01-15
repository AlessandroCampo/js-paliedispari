// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const user_choiceHTML = document.getElementById("choice")

const user_numberHTML = document.getElementById("user_number")
const pc_numberHTML = document.getElementById("pc_number")
const pc_winsHTML = document.getElementById("pc_wins")
const button = document.querySelector("button")
const myHandIMG = document.getElementById("myHand")
const pcHandIMG = document.getElementById("pcHand")
const p = document.querySelector("p")
let pc_wins = 0
button.addEventListener("click", () => {
    let comp_num = Math.floor(Math.random() * 5 + 1)
    let player_number = Number(user_numberHTML.value)
    let sum = comp_num + player_number
    let result = isEvenOrOdd(sum)
    pc_numberHTML.innerText = comp_num

    console.log(user_choiceHTML.value)
    if (player_number > 5 || player_number < 1) {
        window.alert("Inserisci un numero da 1 a 5")
        console.log("yo")
        return

    } else if (user_choiceHTML.value == result) {
        p.innerHTML = `il tuo numero è ${player_number} mentre il numero del pc è ${comp_num}, la loro somma è ${sum}. Avevi selezionato ${user_choiceHTML.value}, <span class= "text-success">HAI VINTO </span>`
    } else {
        pc_wins++
        pc_winsHTML.innerText = pc_wins
        p.innerHTML = `il tuo numero è ${player_number} mentre il numero del pc è ${comp_num}, la loro somma è ${sum}. Avevi selezionato ${user_choiceHTML.value}, <span class= "text-danger">HAI PERSO </span>`

    }

    myHandIMG.setAttribute("src", `./img/${player_number}.png`)
    pcHandIMG.setAttribute("src", `./img/${comp_num}.png`)


})

function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}