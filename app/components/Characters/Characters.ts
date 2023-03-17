export enum Attribute6{
    "name"= "name",
    "image"= "image"
}

class MyCharacters extends HTMLElement{

    name?: string
    image?: string

    static get observedAttributes(){
        const attrs : Record<Attribute6,null> ={
            name : null,
            image :null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute6,oldValue: undefined,newValue: string){
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
            <link rel="stylesheet" href="./app/components/Characters/Characters.css">
            <div class="characters">
            <img src="${this.image}" alt="holu">
            <h5>${this.name}</h5>
            </div>
            `
        }
    }
}

customElements.define("my-characters", MyCharacters)
export default MyCharacters;