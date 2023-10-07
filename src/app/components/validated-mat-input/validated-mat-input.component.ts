import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { buildValidatorList, getValidator } from 'src/app/utils/validatorMethods';
import { IntegratedValidator } from 'src/assets/globals';

@Component({
  selector: 'app-validated-mat-input',
  templateUrl: './validated-mat-input.component.html',
  styleUrls: ['./validated-mat-input.component.css']
})
export class ValidatedMatInputComponent implements OnInit {
@Input() control?:FormControl
@Input() fieldName?:string
@Input() type:string='text'


validator?:IntegratedValidator 
get errorText():string{
  if(!this.validator?.invalidMessage)
  return ""
 return this.validator.invalidMessage(this.control?.value)
}

ngOnInit(): void {
  const y=function customValidator(control: FormControl): { [key: string]: any } | null {
    // Validation logic
    const value = control.value;
    if (value && value.length < 3) {
      return { customValidation: true };
    }
  
    return null;
  }
  
  if(this.fieldName)
  this.validator=getValidator(this.fieldName)
  if(this.validator){
  this.control?.addValidators(buildValidatorList(this.validator));  
}
}

assigned(key:keyof IntegratedValidator):string|void{
  if(!this.validator)
    return 
  const value=this.validator[key]
  if(typeof value === 'string')
  return value
}

get counter(){
  if(!this.validator?.showCounter
    //  || this.control?.invalid
     )
  return ""
    return `${this.control?.value?.length||0}/${this.validator?.maxLength}`
}

}
