// Set up initial UI on page Load
function InitialLayout() {}

InitialLayout.prototype.addHeader = function() {
    let header = document.querySelector('.headerRight');
    let addContainerBtn = new Button('medium','primary','Add List','add-list-btn')
    header.innerHTML = addContainerBtn.PrimaryButton()
}

InitialLayout.prototype.addBody = function() {
    const initialSeed = ['Todo', 'Doing', 'Done']
    initialSeed.map(_ => addContainer(_))

    //Setup event listener for Adding list containers
    document.querySelector('#add-list-btn').addEventListener('click', function() {
        let name = handlePrompt()
        if(name === 'Cancelled') {
            alert('Please enter a valid name')
        } else {
            addContainer(name)
        }
    })
}


InitialLayout.prototype.addCard = function() {
    let testCard = new Card('card-one', 'This is a test card')
    document.querySelector('#todo-container-body').innerHTML = testCard.createCard()
    let testTwoCard = new Card('card-two', 'This is a complex card')
    document.querySelector('#todo-container-body').insertAdjacentHTML('beforeend', testTwoCard.createCard())
    attachDragEvents()
}

let setupUI = new InitialLayout()
setupUI.addHeader()
setupUI.addBody()
setupUI.addCard()


//Drag and drop events
function attachDragEvents() {
    const isDraggable = document.querySelectorAll('.cardOuter')
    const containers = document.querySelectorAll('.containerBody')
    isDraggable.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
            console.log('Draggin start')
        })

        draggable.addEventListener('dragend', function() {
            console.log('Drag End')
            draggable.classList.remove('dragging')
        })
    })

    containers.forEach(container => {
        container.addEventListener('dragover', () => {
            event.preventDefault()
            const draggable = document.querySelector('.dragging')
            container.appendChild(draggable)
        })
    })
}

//Add container
function addContainer(val) {

    //Grab the mainContainer for attaching the card containers
    let initialiseMainContainer = document.querySelector('.mainContainer')

    //Create new instances of card containers - cardContainer.js
    let newContainer = new CardContainer(`${val}-container`, `${val}`)

    //Append the created containers to the DOM
    initialiseMainContainer.insertAdjacentHTML('beforeend', newContainer.addContainer())

    //Attach drag events
    attachDragEvents()

    //Set up UI Event Listeners
    document.querySelector(`#${val}-container-add-btn`).addEventListener('click', function() {
        handleAddItems(`#${val}-container-body`,`${val}-container`)
    })

    //Select the card containers
    //Setup Event listeners on the card containers
    document.querySelector(`#${val}-container-delete-btn`).addEventListener('click', function() {
        handleDeleteContainer(`${val}-container`)
    })

    const newContainerBody = document.querySelector(`#${val}-container-body`)
    newContainerBody.addEventListener('click', function() {  
        if(event.target.className === 'card') {
            handleEdit(event.target.id,`${val}-container`)
        }

        if(event.target.tagName === 'BUTTON') {
            handleDeleteItem(event)
        }
    })


}

//Delete Individual item
function handleDeleteItem(event) {
    event.target.parentElement.parentElement.remove()
}

//Delete Container
function handleDeleteContainer(id) {
    document.querySelector(`#${id}`).remove()
}

function handleEdit(id,containerID) {
    //Show prompt and get the value
    let promptValue = handlePrompt()
    if(promptValue === 'Cancelled') {
        alert('Please enter valid text')
    } else {
        //Change the data on the UI
        document.getElementById(`${id}`).textContent = promptValue
    }
}

function handleAddItems(containerID,itemID) {
    let newID = uuid.v4()

    // UI Operation
    let newCard = new Card(`${newID}`, '')
    document.querySelector(containerID).insertAdjacentHTML('beforeend', newCard.createCard())
    attachDragEvents()
}

function handlePrompt() {
    let newText;
    let promptValue = prompt('Enter Text')
    if(promptValue == null || promptValue == '') {
        newText = 'Cancelled'
    } else {
        newText = promptValue
    }
    return newText
}



