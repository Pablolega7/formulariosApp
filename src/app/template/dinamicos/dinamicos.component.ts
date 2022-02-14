import { Component, } from '@angular/core';


interface persona{
  nombre:string,
  favoritos:favorito[]
};

interface favorito{
  id:number;
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego:string="";

  persona:persona={
    nombre:"Pablo",
    favoritos:[
    { id:1,
      nombre:"Fifa"
    },

    {
      id:2,
      nombre:"formula 1"
    },
    ]
  };

  guardar(){
    console.log("formulario posteado")
  };

  eliminar(index:number){
    this.persona.favoritos.splice(index,1);
  };

  agregarJuego(){

    const nuevoFavorito:favorito={
      id:this.persona.favoritos.length +1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego=""
  };

}
