import { FormControl } from "@angular/forms";



 export const noPuedeSerStrider=(control:FormControl)=>{
    const valor:string=control.value?.trim.lowerCase;

    if (valor==="strider") {
      return {
        noStrider: true
      }
    }
    return null;
  };