export enum Attribute3{
    "date" = "date",
    "tittle"= "tittle",
    "image"= "image"
}

class MyNews extends HTMLElement{
    date? :string
    tittle?: string
    image?: string

    static get observedAttributes(){
        const attrs : Record<Attribute3,null> ={
            date : null,
            tittle : null,
            image :null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute3,oldValue: undefined,newValue: string){
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
            <p>${this.date}</p>
            <h5>${this.tittle}</h5>
            <h6>Read more</h6>
            </section>
            `
        }
    }
}

customElements.define("my-news", MyNews)
export default MyNews;