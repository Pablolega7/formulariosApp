import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { noPuedeSerStrider } from '../../../shared/validators/validaciones';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario:FormGroup=this.fb.group({
    nombre:["", [Validators.required, Validators.pattern]],
    email:["",[Validators.required, Validators.email],[this.EmailValidator]],
    userName:["",[Validators.required, this.vs.noPuedeSerStrider]],
    password:["",[Validators.required,Validators.minLength(6)]],
    password2:["",[Validators.required]],
  },{
    validators:[this.vs.camposIguales("password1","password2")]});

  constructor(private fb:FormBuilder, private vs:ValidatorsService, private EmailValidator: EmailValidatorService) { 
  };

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:"Pablo Pulido Lopez",
      email:"pablolega7@gmail.com",
      userName:"pablolega7",
      password:"123456",
      password2:"123456",
    });
  }

  campoNoValido(campo:string){
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].errors
  };

  emailRequired(){
    return this.miFormulario.get("email")?.touched && this.miFormulario.get("email")?.errors?.required
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  };

}
