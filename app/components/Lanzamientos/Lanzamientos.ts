export enum Attribute1{
    "tittle"= "tittle",
    "date"= "date",
    "description"= "description",
    "price" = "price",
    "image"= "image"
}

class MyLanzamientos extends HTMLElement{
    tittle?: string
    date?: string
    description?: string
    price?: number
    image?: string

    static get observedAttributes(){
        const attrs : Record<Attribute1,null> ={
            tittle: null,
            date: null,
            description : null,
            price: null,
            image :null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(
        propName: Attribute1,
        _: string | undefined,
        newValue: string | undefined
        ) {
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

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Lanzamientos/Lanzamientos.css">
            <div>
             <img src="${this.image}" alt="holu">
             <h1>${this.tittle}</h1>
             <p>${this.date}</p>
             <p>${this.description}</p>
             <p>${this.price}</p>
             <div>
                <p>Nintendo Switch</p>
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="love">
             </div>
            </div>
            `
        }
    }
}

customElements.define("my-lanzamientos", MyLanzamientos)
export default MyLanzamientos;