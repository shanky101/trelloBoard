function CardContainer(id,label) {
    this.id = id;
    this.label = label;
}

function addItemBtn(id) {
    let addItemBtn = new Button(`small`, `primary`, `Add Item`, `${id}-add-btn`)
    return addItemBtn.PrimaryButton()
}

function deleteListBtn(id) {
    let deleteListBtn = new Button(`small`, `secondary`, `Delete List`, `${id}-delete-btn`)
    return deleteListBtn.SecondaryButton()
}

CardContainer.prototype.addContainer = function() {
    return `
        <div class='cardContainer' id='${this.id}'>
            <div class='containerHeader'>
                <div class='containerLabel'> ${this.label}</div>
                <div class='containerBtn'> ${addItemBtn(this.id)} ${deleteListBtn(this.id)}</div>
            </div>
            <div class='containerBody' id=${this.id}-body></div>
        </div>
    `
}