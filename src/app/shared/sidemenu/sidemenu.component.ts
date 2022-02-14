import { Component } from '@angular/core';


interface menuItem{

  texto:string,
  ruta:string
};

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
    li{
      cursor:pointer
    }
    `
  ]
})

export class SidemenuComponent{

  templateMenu:menuItem[]=[
    {
      texto:"basicos",
      ruta:'./template/basicos'
    },
    {
      texto:"dinamicos",
      ruta:'./template/dinamicos'
    },
    {
      texto:"switches",
      ruta:"./template/switches"
    }
  ];

  reactiveMenu:menuItem[]=[
    {
      texto:"basicos",
      ruta:'./reactive/basicos'
    },
    {
      texto:"dinamicos",
      ruta:'./reactive/dinamicos'
    },
    {
      texto:"switches",
      ruta:"./reactive/switches"
    }
  ];
  
  authMenu:menuItem[]=[
    {
      texto:"registro",
      ruta:"./auth/registro"
    },
    {
      texto:"login",
      ruta:"./auth/login"
    }
  ];



}
