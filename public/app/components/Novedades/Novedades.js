export var Attribute2;
(function (Attribute2) {
    Attribute2["date"] = "date";
    Attribute2["tittle"] = "tittle";
    Attribute2["description"] = "description";
    Attribute2["image"] = "image";
})(Attribute2 || (Attribute2 = {}));
class MyNovedades extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            date: null,
            tittle: null,
            description: null,
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
            <link rel="stylesheet" href="./app/components/Destacados/Destacados.css">
            <section>
            <img src="${this.image}" alt="holu">
            <p>${this.date}</p>
            <h5>${this.tittle}</h5>
            <p>${this.description}</p>
            <h6>Read more</h6>
            </section>
            `;
        }
    }
}
customElements.define("my-novedades", MyNovedades);
export default MyNovedades;
