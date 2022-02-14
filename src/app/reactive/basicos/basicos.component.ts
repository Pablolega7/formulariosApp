import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

 // miFormulario: FormGroup= new FormGroup({
    //nombre: new FormControl("Nvidia Gt Force"),
    //precio: new FormControl(100),
    //existencias: new FormControl(3),
  //})
  miFormulario:FormGroup= this.fb.group({
    nombre:[ ,[Validators.required, Validators.minLength(3)]],
    precio:[ ,[Validators.required,Validators.min(0)]],
    existencias:[ ,[Validators.min(0),Validators.required]]
  });

  constructor( private fb:FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre:"Nvidia Gt Force",
      precio:500,
      existencias:5
    })
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  };

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
    }

};

