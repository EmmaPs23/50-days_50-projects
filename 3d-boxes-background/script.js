const cards = document.querySelectorAll(".cards")
let areCardsActive = false

cards.forEach ((card) => 
    card.addEventListener("click", () => {
    removeActiveClasses()
    card.classList.add("active-card")
    })
)

function removeActiveClasses() {
    cards.forEach((card) => 
        card.classList.remove("active-card")
    )
}