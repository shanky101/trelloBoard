function Button(size, variant, label, id) {
    this.size = size;
    this.variant = variant;
    this.label = label;
    this.id = id;
}

Button.prototype.PrimaryButton  = function(){
    switch(this.size) {
        case 'small':
            return `
                <button class='btn-small btn-primary' id=${this.id}>
                    ${this.label}
                </button>
            `
            break;
        case 'medium':
            return `
                <button class='btn-medium btn-primary' id=${this.id}>
                    ${this.label}
                </button>
            `
            break;
        case 'large':
            return `
                <button class='btn-large btn-primary' id=${this.id}>
                    ${this.label}
                </button>
            `
            break;
    }
}

Button.prototype.SecondaryButton  = function(){
    switch(this.size) {
        case 'small':
            return `
                <button class='btn-small btn-secondary' id=${this.id}>
                    ${this.label}
                </button>
            `
            break;
        case 'medium':
            return `
                <button class='btn-medium btn-secondary' id=${this.id}>
                    ${this.label}
                </button>
            `
            break;
        case 'large':
            return `
                <button class='btn-large btn-secondary' id=${this.id}>
                    ${this.label}
                </button>
            `
            break;
        case 'short':
        return `
            <button class='btn-secondary btn-short' id=${this.id}>
                ${this.label}
            </button>
        `
        break;
    }
}