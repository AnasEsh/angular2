export const apiUri="http://localhost:3000/"
const emailPattern:RegExp=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


export interface IntegratedValidator{
required:boolean,    
patterns?:RegExp[],
minLength?:number,
maxLength?:number,
invalidMessage(str?:string):string
}
export const globalValidators:Map<string,IntegratedValidator>=new Map<string, IntegratedValidator>([
    ['email', <IntegratedValidator>{
        required:true,
        patterns:[emailPattern],
        invalidMessage:(s)=>{
            if(!s?.length)
            return 'Email is Required'
            return 'Invalid email format'
        },
    }],  
     ['pswd', <IntegratedValidator>{
        required:true,
        minLength:6,
        invalidMessage:(s)=>{
            if(!s?.length)
            return 'Password is Required'
            return 'Password must be of 6 or more characters'
        },
    }],
    ['name', <IntegratedValidator>{
        required:true,
        minLength:8,
        maxLength:100,
        invalidMessage:(s)=>{
            if(!s?.length)
            return 'Your Name is Required'
            return 'Name should be of 8 or more characters'
        },
    }],
    
])