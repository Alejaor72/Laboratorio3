export var Attribute3;
(function (Attribute3) {
    Attribute3["date"] = "date";
    Attribute3["tittle"] = "tittle";
    Attribute3["image"] = "image";
})(Attribute3 || (Attribute3 = {}));
class MyNews extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            date: null,
            tittle: null,
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
            <h6>Read more</h6>
            </section>
            `;
        }
    }
}
customElements.define("my-news", MyNews);
export default MyNews;
