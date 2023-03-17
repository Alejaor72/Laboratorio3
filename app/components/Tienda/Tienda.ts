export enum Attribute4{
    "tittle"= "tittle",
    "description"= "description",
    "buttontext" = "buttontext",
    "image"= "image"
}

class MyTienda extends HTMLElement{
    tittle?: string
    description?: string
    buttontext? : string
    image?: string

    static get observedAttributes(){
        const attrs : Record<Attribute4,null> ={
            tittle : null,
            description : null,
            buttontext : null,
            image :null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute4,oldValue: undefined,newValue: string){
        switch(propName){
         default:
         this[propName] = newValue;
         this.render();
         break;
        }
        this.render()
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Destacados/Destacados.css">
            <section>
            <h3>${this.tittle}</h3>
            <img src="${this.image}" alt="holu">
            <h4>${this.description}</h4>
            <button>${this.buttontext}</button>
            </section>
            `
        }
    }
}

customElements.define("my-tienda", MyTienda)
export default MyTienda;