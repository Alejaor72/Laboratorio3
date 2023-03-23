import * as components from "./components/index.js";
import dataDestacados from "./data/dataDestacados.js";
import dataLanzamiento from "./data/dataLanzamiento.js";
import dataNovedades from "./data/dataNovedades.js";
import dataNovedades2 from "./data/dataNovedades2.js";
import dataTienda from "./data/dataTienda.js";
import dataVendidos from "./data/dataVendidos.js";
import MyDestacados, { Attribute } from "./components/Destacados/Destacados.js";
import MyLanzamientos, {Attribute1} from "./components/Lanzamientos/Lanzamientos.js";
import MyNovedades, {Attribute2} from "./components/Novedades/Novedades.js";
import MyNews, {Attribute3} from "./components/News/News.js";
import MyTienda, {Attribute4} from "./components/Tienda/Tienda.js";
import MyVendidos, {Attribute5} from "./components/Vendidos/Vendidos.js";
import MyCharacters, {Attribute6} from "./components/Characters/Characters.js";
import dataCharacters from "./data/dataCharacters.js";

class AppContainer extends HTMLElement{
    profiles: MyDestacados[] = []

     constructor(){
        super()
        this.attachShadow({mode: 'open'})

        dataDestacados.forEach((user)=>{
            const profileCard=this.ownerDocument.createElement('my-destacados') as MyDestacados
            profileCard.setAttribute(Attribute.image,user.image)
            profileCard.setAttribute(Attribute.description,user.description)
            this.profiles.push(profileCard);
        }
        )
     }

    connectedCallback(){
       this.render();
    }

    render(){
       if(this.shadowRoot){
        this.shadowRoot.innerHTML=``
       }

       this.profiles.forEach((profile) => {
        this.shadowRoot?.appendChild(profile);
      });
    }

}
customElements.define("app-container", AppContainer);
///////////////

class AppContainer2 extends HTMLElement{
    profiles: MyLanzamientos[] = []

     constructor(){
        super()
        this.attachShadow({mode: 'open'})

        dataLanzamiento.forEach((user)=>{
            const profileCard=this.ownerDocument.createElement('my-lanzamientos') as MyLanzamientos
            profileCard.setAttribute(Attribute1.image,user.image)
            profileCard.setAttribute(Attribute1.tittle,user.title)
            profileCard.setAttribute(Attribute1.date,user.date)
            profileCard.setAttribute(Attribute1.description,user.description)
            profileCard.setAttribute(Attribute1.price, String(user.price));
            this.profiles.push(profileCard);
        }
        )
     }

     
    connectedCallback(){
       this.render();
    }

    render(){
       if(this.shadowRoot){
        this.shadowRoot.innerHTML=``
       }

       this.profiles.forEach((profile) => {
        this.shadowRoot?.appendChild(profile);
      });
    }

}
customElements.define("app-container2", AppContainer2);

//////////
class AppContainer3 extends HTMLElement{
   profiles: MyNovedades[] = []

    constructor(){
       super()
       this.attachShadow({mode: 'open'})

       dataNovedades.forEach((user)=>{
           const profileCard=this.ownerDocument.createElement('my-novedades') as MyNovedades
           profileCard.setAttribute(Attribute2.image,user.image)
           profileCard.setAttribute(Attribute2.date,user.date)
           profileCard.setAttribute(Attribute2.tittle,user.title)
           profileCard.setAttribute(Attribute2.description,user.description);
           this.profiles.push(profileCard);
       }
       )
    }

    
   connectedCallback(){
      this.render();
   }

   render(){
      if(this.shadowRoot){
       this.shadowRoot.innerHTML=``
      }

      this.profiles.forEach((profile) => {
       this.shadowRoot?.appendChild(profile);
     });
   }

}
customElements.define("app-container3", AppContainer3);
//////////////

class AppContainer4 extends HTMLElement{
   profiles: MyNews[] = []

    constructor(){
       super()
       this.attachShadow({mode: 'open'})

       dataNovedades2.forEach((user)=>{
           const profileCard=this.ownerDocument.createElement('my-news') as MyNews
           profileCard.setAttribute(Attribute3.image,user.image)
           profileCard.setAttribute(Attribute3.date,user.date)
           profileCard.setAttribute(Attribute3.tittle,user.title)
           this.profiles.push(profileCard);
       }
       )
    }

    
   connectedCallback(){
      this.render();
   }

   render(){
      if(this.shadowRoot){
       this.shadowRoot.innerHTML=``
      }

      this.profiles.forEach((profile) => {
       this.shadowRoot?.appendChild(profile);
     });
   }

}
customElements.define("app-container4", AppContainer4);
/////

class AppContainer5 extends HTMLElement{
   profiles: MyTienda[] = []

    constructor(){
       super()
       this.attachShadow({mode: 'open'})

       dataTienda.forEach((user)=>{
           const profileCard=this.ownerDocument.createElement('my-tienda') as MyTienda
           profileCard.setAttribute(Attribute4.tittle,user.title)
           profileCard.setAttribute(Attribute4.image,user.image)
           profileCard.setAttribute(Attribute4.description,user.description)
           profileCard.setAttribute(Attribute4.buttontext,user.buttonText);
           this.profiles.push(profileCard);
       }
       )
    }

    
   connectedCallback(){
      this.render();
   }

   render(){
      if(this.shadowRoot){
       this.shadowRoot.innerHTML=``
      }

      this.profiles.forEach((profile) => {
       this.shadowRoot?.appendChild(profile);
     });
   }

}
customElements.define("app-container5", AppContainer5);
//////

class AppContainer6 extends HTMLElement{
   profiles: MyVendidos[] = []

    constructor(){
       super()
       this.attachShadow({mode: 'open'})

       dataLanzamiento.forEach((user)=>{
           const profileCard=this.ownerDocument.createElement('my-vendidos') as MyVendidos
           profileCard.setAttribute(Attribute5.image,user.image)
           profileCard.setAttribute(Attribute5.tittle,user.title)
           profileCard.setAttribute(Attribute5.date,user.date)
           profileCard.setAttribute(Attribute5.price, String(user.price));
           this.profiles.push(profileCard);
       }
       )
    }

    
   connectedCallback(){
      this.render();
   }

   render(){
      if(this.shadowRoot){
       this.shadowRoot.innerHTML=``
      }

      this.profiles.forEach((profile) => {
       this.shadowRoot?.appendChild(profile);
     });
   }

}
customElements.define("app-container6", AppContainer6);
/////

class AppContainer7 extends HTMLElement{
   profiles: MyCharacters[] = []

    constructor(){
       super()
       this.attachShadow({mode: 'open'})

       dataCharacters.forEach((user)=>{
           const profileCard=this.ownerDocument.createElement('my-characters') as MyCharacters
           profileCard.setAttribute(Attribute6.image,user.image)
           profileCard.setAttribute(Attribute6.name,user.name)
           this.profiles.push(profileCard);
       }
       )
    }

   connectedCallback(){
      this.render();
   }

   render(){
      if(this.shadowRoot){
       this.shadowRoot.innerHTML=``
      }

      this.profiles.forEach((profile) => {
       this.shadowRoot?.appendChild(profile);
     });
   }

}
customElements.define("app-container7", AppContainer7);