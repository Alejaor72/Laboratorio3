export var Attribute6;
(function (Attribute6) {
    Attribute6["name"] = "name";
    Attribute6["image"] = "image";
})(Attribute6 || (Attribute6 = {}));
class MyCharacters extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            name: null,
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
            <link rel="stylesheet" href="./app/components/Characters/Characters.css">
            <div id="characters">
            <img src="${this.image}" alt="holu">
            <h5>${this.name}</h5>
            </div>
            `;
        }
    }
}
customElements.define("my-characters", MyCharacters);
export default MyCharacters;
