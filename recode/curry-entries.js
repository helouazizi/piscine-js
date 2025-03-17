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
function reduceCurry(func){
    return function (obj={},acc = ""){
        let res = acc
        for (const [key,vla] of Object.entries(obj)){
            res = func(res ,[key,vla])
        }
        return res
    }
}

function filterCurry(func){
    return function(obj={}){
        //console.log(Object.entries(obj));
        let res = {}
        for (const [key,val] of Object.entries(obj)) {
            if (func([key,val] )){
                res[key] =val
            }
        }
        return res
    }
}

function reduceScore(obj,acc=0) {
    return reduceCurry((acc,[_,val])=> val.isForceUser ? acc+= val.shootingScore + val.pilotingScore:acc)(obj,acc)
}
function filterForce(obj) {
    return filterCurry(([_,val]) =>  val.isForceUser && val.shootingScore >= 80)(obj)
}
function mapAverage(obj) {
    return mapCurry(([key, val]) => [
        key, 
        { 
            ...val, 
            averageScore: (val.shootingScore + val.pilotingScore) / 2 
        }
    ])(obj);
}



//console.log(reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0));


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