const num = 4 , str = "2" , bool = true , undef = undefined
const escapeStr = "\"\`\\\/'"
const arr =[num,str]
const obj = {str:str,num:num,bool:bool,undef:undef}
const nested = {arr:[num,undef,str],obj:{str:str,num:5,bool:bool}}
Object.freeze(nested,obj,arr)

