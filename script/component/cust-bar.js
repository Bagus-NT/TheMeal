class CustBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                padding: 16px;
                width: 100%;
                background: linear-gradient(#eea77e, #d57d1f);
                color: white;
                text-shadow: 3px 2px 1px #24143d;
                box-shadow: 0 4px 8px 0 rgba(196, 194, 194, 0.2);
           }
           h2 {
               padding: 16px;
           }
        </style>
        <h2>Beef Meals</h2>`;
    }
}

customElements.define("cust-bar", CustBar);