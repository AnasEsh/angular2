export const apiUri="http://localhost:3000/"
const emailPattern:RegExp=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


export interface IntegratedValidator{
required:boolean,    
patterns?:RegExp[],
minLength?:number,
maxLength?:number,
invalidMessage(str?:string):string,
hint?:string,
showCounter?:boolean,
icon?:string,
label:string,
helper?:string,
}
export const globalValidators:Map<string,IntegratedValidator>=new Map<string, IntegratedValidator>([
    ['email', <IntegratedValidator>{
        icon:"mail",
        label:"Email",
        required:true,
        hint:"user@example.com",
        patterns:[emailPattern],
        invalidMessage:(s)=>{
            if(!s?.length)
            return 'Email is Required'
            return 'Invalid email format'
        },
    }],  
     ['pswd', <IntegratedValidator>{
        required:true,
        icon:"password",
        label:"Password",
        minLength:6,
        invalidMessage:(s)=>{
            // if(!s?.length)
            // return 'Password is Required'
            return 'Password must be of 6 or more characters'
        },
    }], 
    ['confPswd', <IntegratedValidator>{
        required:true,
        icon:"enhanced_encryption",
        label:"Re-type Password",
        invalidMessage:(s)=>"",
    }],
    ['name', <IntegratedValidator>{
        required:true,
        icon:"person",
        label:"Name",
        minLength:8,
        hint:"Anas Eshtaiwi",
        maxLength:100,
        showCounter:true,
        invalidMessage:(s)=>{
            if(!s?.length)
            return 'Your Name is Required'
            return (s.length<8||s.length>100)?'Name should be of 8 or more characters':null
        },
    }],
    
])
