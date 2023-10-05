import { ValidatorFn, Validators } from "@angular/forms"
import { IntegratedValidator, globalValidators } from "src/assets/globals"

export function getValidator(fieldName:string):IntegratedValidator{
    return globalValidators.get(fieldName)!
    }

export function buildValidatorList(fieldName: string):ValidatorFn[]{
    const validator=getValidator(fieldName)
    let validatorList=[]
    
    if(validator.required)
    validatorList.push(Validators.required)
    if(validator.minLength)
    validatorList.push(Validators.minLength(validator.minLength))
    if(validator.maxLength)
    validatorList.push(Validators.minLength(validator.maxLength))

    validatorList.push(...(validator?.patterns?.map(pattern=>Validators.pattern(pattern))||[]))
    return validatorList
}