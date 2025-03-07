function defaultCurry(obj1) {
    return function (obj2) {
        let newone = { ...obj1 }
        let new2 = { ...obj2 }
        if (new2) {
            for (const [key, _] of Object.entries(newone)) {
                if (new2[key] !== undefined) {
                    newone[key] = new2[key]
                }
            }
            for (const [key, _] of Object.entries(new2)) {
                if (newone[key] === undefined) {
                    newone[key] = new2[key]
                }
            }
        }
        return (newone);

    }
}

function mapCurry(func) {
    return function (obj) {
        let res = {}
        for (const [key,val] of Object.entries(obj)){
            const  [nekey,newval] = func( [key,val] )
            res [nekey] = newval
        }
        return res
    }
}
// defaultCurry({ http: 403, age: 0, connection: 'close' })({
//     http: 200,
//     age: 30,
//     connection: 'keep-alive',
//     content_type: 'text/css',
//   })
// defaultCurry({
//     http: 403,
//     connection: 'close',
//     contentType: 'multipart/form-data',
//   },{
//     http: 200,
//     connection: 'open',
//     requestMethod: 'GET'
//   })