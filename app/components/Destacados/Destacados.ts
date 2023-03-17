export enum Attribute{
    "description"= "description",
    "image"= "image"
}

class MyDestacados extends HTMLElement{

    description?: string
    image?: string

    static get observedAttributes(){
        const attrs : Record<Attribute,null> ={
            description : null,
            image :null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute,oldValue: undefined,newValue: string){
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
            <img src="${this.image}" alt="holu">
            <h1>${this.description}</h1>
            </section>
            `
        }
    }
}

customElements.define("my-destacados", MyDestacados)
export default MyDestacados;