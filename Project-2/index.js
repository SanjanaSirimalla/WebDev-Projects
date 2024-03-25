const cards=document.querySelectorAll(".card") //we are storing all card classes into a constant

cards.forEach((card) => {
    card.addEventListener('click',() => { //adding a functionality of click, and on clicking below functions take place
        removeActiveClasses() //function name
        card.classList.add('active') //it adds active class to that particular card
    })
})

function removeActiveClasses(){
    cards.forEach((card) => {
        card.classList.remove('active') //removing active for the previous ones
    })
}
