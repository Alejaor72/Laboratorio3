export enum Attribute5{
    "tittle"= "tittle",
    "date"= "date",
    "price" = "price",
    "image"= "image"
}

class MyVendidos extends HTMLElement{
    tittle?: string
    date?: string
    price?: number
    image?: string

    static get observedAttributes(){
        const attrs : Record<Attribute5,null> ={
            tittle: null,
            date: null,
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
        propName: Attribute5,
        _: string | undefined,
        newValue: string | undefined
        ) {
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

customElements.define("my-vendidos", MyVendidos)
export default MyVendidos;