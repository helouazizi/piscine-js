function get(src,path){
    let test = path.split('.')
    if (test.length === 1){
        return src[test[0]]
    }
    if (test[0] in src){
        return get(src[test[0]],test.slice(1).join('.'))
    }
    return undefined
}
const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
console.log(get(src,path));
