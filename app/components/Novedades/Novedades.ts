export enum Attribute2{
    "date" = "date",
    "tittle" = "tittle",
    "description"= "description",
    "image"= "image"
}

class MyNovedades extends HTMLElement{
    date?: string
    tittle?: string
    description?: string
    image?: string

    static get observedAttributes(){
        const attrs : Record<Attribute2,null> ={
            date : null,
            tittle : null,
            description : null,
            image :null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute2,oldValue: undefined,newValue: string){
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
            <link rel="stylesheet" href="./app/components/Novedades/Novedades.css">
            <section id="news1">
             <img src="${this.image}" alt="holu">
              <p>${this.date}</p>
              <h5>${this.tittle}</h5>
             <p>${this.description}</p>
             <a>Read More</a>
            </section>
            `
        }
    }
}

customElements.define("my-novedades", MyNovedades)
export default MyNovedades;