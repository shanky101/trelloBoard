function Card(id,text) {
    this.id = id;
    this.text = text;
}

function deleteItemBtn(id) {
    let deleteItemBtn = new Button(`short`, `secondary`, `X`, `${id}-deleteItem-btn`)
    return deleteItemBtn.SecondaryButton()
}

Card.prototype.createCard = function() {
    return `
        <div class="cardOuter" draggable="true">
        <div class="card" id=${this.id}>
            ${this.text}
        </div>
        <div class="card-del">${deleteItemBtn(this.id)}</div>
        </div>
    `
}