const escapeStr = "\"\`\\\/'"
const arr =[4,"2"]
const num = 4 , str = "2" , bool = true , undef = undefined

const obj = {str:str,num:num,bool:bool,undef:undef}

const nested = {arr:[num,undef,str],obj:{str:str,num:num,bool:bool}}
Object.freeze(nested,obj,arr)

