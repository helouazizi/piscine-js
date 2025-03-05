function indexOf(arr,val,index =0){
        for (let i = index ; i < arr.length ; i++){
            if (arr[i]=== val){
                return i
            }
        }
        return -1
}

function lastIndexOf(arr,val,index = arr.length-1){

    for (let i = index; i >=0 ; i--){
        if (arr[i]=== val){
            return i
        }
    }
    return -1
}




function includes(arr,val,index){
    //console.log(indexOf(arr,val) === 1)
    return indexOf(arr,val,index) !== -1 //&& lastIndexOf(arr,val,index) === 1 
}

console.log(includes([0, 0, "t", "t"], "t"))