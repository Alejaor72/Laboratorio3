export var Attribute1;
(function (Attribute1) {
    Attribute1["tittle"] = "tittle";
    Attribute1["date"] = "date";
    Attribute1["description"] = "description";
    Attribute1["price"] = "price";
    Attribute1["image"] = "image";
})(Attribute1 || (Attribute1 = {}));
class MyLanzamientos extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            tittle: null,
            date: null,
            description: null,
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
            case Attribute1.price:
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
            <section id="releases">
             <img src="${this.image}" alt="holu">
             <h6>${this.tittle}</h6>
             <p>${this.date}</p>
             <p>${this.description}</p>
             <p>${this.price}</p>
            </section>
            `;
        }
    }
}
customElements.define("my-lanzamientos", MyLanzamientos);
export default MyLanzamientos;
