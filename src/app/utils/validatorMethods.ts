import { ValidatorFn, Validators } from "@angular/forms"
import { IntegratedValidator, globalValidators } from "src/assets/globals"

export function getValidator(fieldName:string):IntegratedValidator{
    return globalValidators.get(fieldName)!
    }

export function buildValidatorList(fieldNameOrValidator: string|IntegratedValidator):ValidatorFn[]{
    
    const validator=(typeof fieldNameOrValidator =='string')?getValidator(fieldNameOrValidator):fieldNameOrValidator
    let validatorList=[]
    
    if(validator.required)
    validatorList.push(Validators.required)
    if(validator.minLength)
    validatorList.push(Validators.minLength(validator.minLength))
    if(validator.maxLength)
    validatorList.push(Validators.maxLength(validator.maxLength))

    validatorList.push(...(validator?.patterns?.map(pattern=>Validators.pattern(pattern))||[]))
    return validatorList
}