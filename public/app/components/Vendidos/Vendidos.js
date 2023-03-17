export var Attribute5;
(function (Attribute5) {
    Attribute5["tittle"] = "tittle";
    Attribute5["date"] = "date";
    Attribute5["price"] = "price";
    Attribute5["image"] = "image";
})(Attribute5 || (Attribute5 = {}));
class MyVendidos extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            tittle: null,
            date: null,
            price: null,
            image: null
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            case Attribute5.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Lanzamientos/Lanzamientos.css">
            <div>
             <img src="${this.image}" alt="holu">
             <h1>${this.tittle}</h1>
             <p>${this.date}</p>
             <p>${this.price}</p>
             <div>
                <p>Nintendo Switch</p>
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="love">
             </div>
            </div>
            `;
        }
    }
}
customElements.define("my-vendidos", MyVendidos);
export default MyVendidos;
