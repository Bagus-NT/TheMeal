import './beef-item.js';

class BeefMenu extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set beefs(beefs) {
        this._beefs = beefs;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._beefs.forEach(beef => {
            const beefItemElement = document.createElement("beef-item");
            beefItemElement.beef = beef;
            this.shadowDOM.appendChild(beefItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("beef-menu", BeefMenu);