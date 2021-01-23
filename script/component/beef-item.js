class BeefItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set beef(beef) {
        this._beef = beef;
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
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(245, 61, 61, 0.747);
            border-radius: 10px;
            overflow: hidden;
            background-color: #412e1c;
        }
        
        .preview-beef {
            width: 100%;
            max-height: 400px;
            object-fit: cover;
            object-position: center;
        }
        
        .beef-info {
            padding: 24px;
        }
        
        .beef-info > h2 {
            font-weight: lighter;
            color: #d57d1f;
        }
        
        .beef-info > p {
            margin-top: 10px;
            color: white;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 28;
        }
        </style>
        <img class="preview-beef" src="${this._beef.strMealThumb}" alt="preview">
        <div class="beef-info">
            <h2>${this._beef.strMeal}</h2>
            <p>${this._beef.strIngredient1}, ${this._beef.strIngredient2}, ${this._beef.strIngredient3}, ${this._beef.strIngredient4}, ${this._beef.strIngredient5}, ${this._beef.strIngredient6}, ${this._beef.strIngredient7}, ${this._beef.strIngredient8}, ${this._beef.strIngredient9}, ${this._beef.strIngredient10}, ${this._beef.strIngredient11}, ${this._beef.strIngredient12}, ${this._beef.strIngredient13}, ${this._beef.strIngredient14}, ${this._beef.strIngredient15}</p>
            <p>${this._beef.strInstructions}</p>
        </div>`;
    }
}

customElements.define("beef-item", BeefItem);