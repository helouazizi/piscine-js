function round(nums) {
    let isarray = false
    if (Array.isArray(nums)) {
        isarray = true
    }
    console.log(isarray,nums.length)
    let res = []
    for (let i = 0; i < nums.legth; i++) {
        let num = nums[i]
        console.log(nums[i])
        let intnum = trunc(num)
        let diff = num - intnum
        if (num >= 0) {
            console.log("+")
            if (diff < 0.5) {
                res.push(intnum)
            }else{
                res.push(intnum+1)
            }
        } else {
            console.log("-")
            if (diff <= 0.5) {
                res.push(intnum-1)
            }else{
                res.push(intnum)
            }
           // return diff <= -0.5 ? intnum - 1 : intnum
        }

    }
    console.log(res)

    return isarray ? res : res.join()

}

function ceil(nums) {
    // let intnum = trunc(nums);
    // return nums === intnum ? intnum : intnum + 1;
    let isarray = false
    if (Array.isArray(nums)) {
        isarray = true
    }
    let res = []
    for (let i = 0; i < nums.legth; i++) {
        let num = nums[i]
        let intnum = trunc(num)
       // let diff = num - intnum
        if (num === intnum) {
                res.push(intnum)
            //return diff < 0.5 ? intnum : intnum + 1
        } else {
                res.push(intnum+1)
           // return diff <= -0.5 ? intnum - 1 : intnum
        }

    }

    return isarray ? res : res.join()
}

function floor(nums) {
    // let intnum = trunc(nums);
    // return nums === intnum ? intnum : nums < 0 ? intnum - 1 : intnum;
    let isarray = false
    if (Array.isArray(nums)) {
        isarray = true
    }
    let res = []
    for (let i = 0; i < nums.legth; i++) {
        let num = nums[i]
        let intnum = trunc(num)
       // let diff = num - intnum
        if (num === intnum) {
                res.push(intnum)
            //return diff < 0.5 ? intnum : intnum + 1
        } else {
            if (num < 0){
                res.push(intnum-1)
            }else{
                res.push(intnum)
            }
                
           // return diff <= -0.5 ? intnum - 1 : intnum
        }

    }

    return isarray ? res : res.join()
}

function trunc(num) {
    let result = 0;
    let isNegative = num < 0;
    let big = 0
    let isbiger = false
    if (num > 5000) {
        while (num > 5000) {
            big++
            num -= 5000
        }
        isbiger = true
    }

    if (isNegative) num = -num;

    while (num >= 1) {
        num -= 1;
        result++;
    }
    if (isbiger) {
        result += big * 5000
    }

    return isNegative ? -result : result;
}
console.log(round([25.32,524.25]))
