console.log('Our script is running!')

console.dir(document)

// let instructionsElement = document.getElementById('instructions')
// console.log(instructionsElement)

let instructionsElement = document.querySelector('#instructions')
instructionsElement.innerText = 'Choose a theme:'
// console.log(instructionsElement.className)
// console.log(instructionsElement.classList)
instructionsElement.style.color = 'rebeccapurple'

const buttons = document.querySelectorAll('button')
// console.log(buttons[0])

function clicked() {
    console.log('Hit our clicked')
    alert('Clicked!')
}

let faceBookButton = document.getElementById('facebook')
faceBookButton.addEventListener('click', function(event){
    event.preventDefault()
    // event.stopPropagation()
    clicked()
})

