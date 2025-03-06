function get(src,path){
    let keys = path.split('.')
    if (keys.length === 1){x
        return src[keys[0]]
    }
    if (keys[0] in src ){
     return get(src[keys[0]],keys.slice(1).join('.'))
    }
    
    return undefined
}
const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
let obj = {k : "v"}
console.log(get(src, path));
