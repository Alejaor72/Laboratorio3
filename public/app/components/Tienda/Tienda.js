export var Attribute4;
(function (Attribute4) {
    Attribute4["tittle"] = "tittle";
    Attribute4["description"] = "description";
    Attribute4["buttontext"] = "buttontext";
    Attribute4["image"] = "image";
})(Attribute4 || (Attribute4 = {}));
class MyTienda extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            tittle: null,
            description: null,
            buttontext: null,
            image: null
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                this.render();
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
            <link rel="stylesheet" href="./app/components/Tienda/Tienda.css">
            <section id="store">
            <h3>${this.tittle}</h3>
            <img src="${this.image}" alt="holu" width="80%">
            <div id="infostore">
            <h4>${this.description}</h4>
            <button>${this.buttontext}</button>
            </div>
            <hr>
            </section>
            `;
        }
    }
}
customElements.define("my-tienda", MyTienda);
export default MyTienda;
