document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
    {
        name: 'carprofen',
        img: 'Images/carprofen.jpg'
    },  
    {
        name: 'carprofen',
        img: 'Images/carprofen.jpg'
    },  
    {
        name: 'flurbiprofen',
        img: 'Images/flurbiprofen.jpg'
    },  
    {
        name: 'flurbiprofen',
        img: 'Images/flurbiprofen.jpg'
    }, 
    {
        name: 'ibuprofen',
        img: 'Images/ibuprofen.jpg'
    }, 
    {
        name: 'ibuprofen',
        img: 'Images/ibuprofen.jpg'
    }, 
    {
        name: 'ketoprofen',
        img: 'Images/ketoprofen.jpg'
    }, 
    {
        name: 'ketoprofen',
        img: 'Images/ketoprofen.jpg'
    }, 
    {
        name: 'loxoprofen',
        img: 'Images/loxoprofen.jpg'
    }, 
    {
        name: 'loxoprofen',
        img: 'Images/loxoprofen.jpg'
    }, 
    {
        name: 'naproxen',
        img: 'Images/naproxen.jpg'
    }, 
    {
        name: 'naproxen',
        img: 'Images/naproxen.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())
 
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'Images/cover.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
//check for matches
function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(cardsChosen[0] === cardsChosen[1]){
        alert ('You found a match')
        cards[optionOneId].setAttribute('src', 'Images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/blank.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'Images/cover.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/cover.jpg')
        alert('Sorry try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congrats'
    }
}

 //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }


createBoard();


})