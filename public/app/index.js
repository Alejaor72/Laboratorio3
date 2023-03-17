import dataDestacados from "./data/dataDestacados.js";
import dataLanzamiento from "./data/dataLanzamiento.js";
import dataNovedades from "./data/dataNovedades.js";
import dataNovedades2 from "./data/dataNovedades2.js";
import dataTienda from "./data/dataTienda.js";
import { Attribute } from "./components/Destacados/Destacados.js";
import { Attribute1 } from "./components/Lanzamientos/Lanzamientos.js";
import { Attribute2 } from "./components/Novedades/Novedades.js";
import { Attribute3 } from "./components/News/News.js";
import { Attribute4 } from "./components/Tienda/Tienda.js";
import { Attribute5 } from "./components/Vendidos/Vendidos.js";
import { Attribute6 } from "./components/Characters/Characters.js";
import dataCharacters from "./data/dataCharacters.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: 'open' });
        dataDestacados.forEach((user) => {
            const profileCard = this.ownerDocument.createElement('my-destacados');
            profileCard.setAttribute(Attribute.image, user.image);
            profileCard.setAttribute(Attribute.description, user.description);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
        }
        this.profiles.forEach((profile) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
        });
    }
}
customElements.define("app-container", AppContainer);
///////////////
class AppContainer2 extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: 'open' });
        dataLanzamiento.forEach((user) => {
            const profileCard = this.ownerDocument.createElement('my-lanzamientos');
            profileCard.setAttribute(Attribute1.image, user.image);
            profileCard.setAttribute(Attribute1.tittle, user.title);
            profileCard.setAttribute(Attribute1.date, user.date);
            profileCard.setAttribute(Attribute1.description, user.description);
            profileCard.setAttribute(Attribute1.price, String(user.price));
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
        }
        this.profiles.forEach((profile) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
        });
    }
}
customElements.define("app-container2", AppContainer2);
//////////
class AppContainer3 extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: 'open' });
        dataNovedades.forEach((user) => {
            const profileCard = this.ownerDocument.createElement('my-lanzamientos');
            profileCard.setAttribute(Attribute2.image, user.image);
            profileCard.setAttribute(Attribute2.date, user.date);
            profileCard.setAttribute(Attribute2.tittle, user.title);
            profileCard.setAttribute(Attribute2.description, user.description);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
        }
        this.profiles.forEach((profile) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
        });
    }
}
customElements.define("app-container3", AppContainer3);
//////////////
class AppContainer4 extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: 'open' });
        dataNovedades2.forEach((user) => {
            const profileCard = this.ownerDocument.createElement('my-news');
            profileCard.setAttribute(Attribute3.image, user.image);
            profileCard.setAttribute(Attribute3.date, user.date);
            profileCard.setAttribute(Attribute3.tittle, user.title);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
        }
        this.profiles.forEach((profile) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
        });
    }
}
customElements.define("app-container4", AppContainer4);
/////
class AppContainer5 extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: 'open' });
        dataTienda.forEach((user) => {
            const profileCard = this.ownerDocument.createElement('my-tienda');
            profileCard.setAttribute(Attribute4.tittle, user.title);
            profileCard.setAttribute(Attribute4.image, user.image);
            profileCard.setAttribute(Attribute4.description, user.description);
            profileCard.setAttribute(Attribute4.buttontext, user.buttonText);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
        }
        this.profiles.forEach((profile) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
        });
    }
}
customElements.define("app-container5", AppContainer5);
//////
class AppContainer6 extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: 'open' });
        dataLanzamiento.forEach((user) => {
            const profileCard = this.ownerDocument.createElement('my-vendidos');
            profileCard.setAttribute(Attribute5.image, user.image);
            profileCard.setAttribute(Attribute5.tittle, user.title);
            profileCard.setAttribute(Attribute5.date, user.date);
            profileCard.setAttribute(Attribute5.price, String(user.price));
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
        }
        this.profiles.forEach((profile) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
        });
    }
}
customElements.define("app-container6", AppContainer6);
/////
class AppContainer7 extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: 'open' });
        dataCharacters.forEach((user) => {
            const profileCard = this.ownerDocument.createElement('my-characters');
            profileCard.setAttribute(Attribute6.image, user.image);
            profileCard.setAttribute(Attribute6.name, user.name);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
        }
        this.profiles.forEach((profile) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
        });
    }
}
customElements.define("app-container7", AppContainer7);
