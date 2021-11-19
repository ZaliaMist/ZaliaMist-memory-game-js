const cardArray = [
    {
        name: "background",
        img: 'images/background.png'
    },
    {
        name: "blank",
        img: 'images/blank.png'
    },
    {
        name: "desert",
        img: 'images/desert.png'
    },
    {
        name: "flower",
        img: 'images/flower.png'
    },
    {
        name: "flowers2",
        img: 'images/flowers2.png'
    },
    {
        name: "mountain",
        img: 'images/mountain.png'
    },
    {
        name: "tree",
        img: 'images/tree.png'
    },
    {
        name: "wave",
        img: 'images/wave.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector( ".grid" )
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement( 'img' )
        card.setAttribute( "src", "images/blank.png" )
        card.setAttribute( "data-id", i )
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch() {
    var cards = document.querySelectorAll( 'img' )
    const optionOneId = cardsChosenId[ 0 ]
    const optionTwoId = cardsChosenId[ 1 ]
    if ( cardsChosen[ 0 ] === cardsChosen[ 1 ] ) {
        alert( 'you found a match!' )
        cards[optionOneId].setAttribute('src', 'images/background.png')
        cards[optionTwoId].setAttribute('src', 'images/background.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert( 'Nice try!' )
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if ( cardsWon.length === cardArray.length / 2 ) {
        resultDisplay.textContent = "Gratz! You found the matching cards!"
    }
}

function flipCard() {
    var cardId = this.getAttribute( 'data-id' )
    cardsChosen.push( cardArray[ cardId ].name )
    cardsChosenId.push( cardId )
    this.setAttribute( 'src', cardArray[ cardId ].img )
    if (cardsChosenId.length==2) {
       if (cardsChosenId[0]===cardsChosenId[1]) {
          alert("Oops! You are choosing the same card twice. :)")
          cardsChosenId.pop()
          cardsChosen.pop()
          return
       }
      setTimeout(checkForMatch, 500)
    }
}

createBoard()
