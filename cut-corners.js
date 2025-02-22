function round(nums) {

    let isarray = true
    if (!Array.isArray(nums)) {
        nums = [nums]
        isarray = false
    }
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let intnum = trunc(num)
        let diff = 0


        if (num >= 0) {
            if (diff = num - intnum < 0.5) {
                res.push(intnum)
            } else {
                res.push(intnum + 1)
            }
        } else {
            //console.log("yguyyu");

            if (-(diff = num - intnum) < 0.5) {
                res.push(intnum)
            } else {

                res.push(intnum - 1)
            }
        }


    }

    return isarray ? res : res.join() * 1

}

function ceil(nums) {
    console.log(nums);

    // let intnum = trunc(nums);
    // return nums === intnum ? intnum : intnum + 1;
    let isarray = true
    if (!Array.isArray(nums)) {
        nums = [nums]
        isarray = false
    }
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let intnum = trunc(num)
        // let diff = num - intnum
        if (num > 0) {
            res.push(intnum + 1)
        }else {
            res.push(intnum)
        }

        // return diff <= -0.5 ? intnum - 1 : intnum


    }

    return isarray ? res : res.join() * 1
}

function floor(nums) {
    // let intnum = trunc(nums);
    // return nums === intnum ? intnum : nums < 0 ? intnum - 1 : intnum;
    let isarray = true
    if (!Array.isArray(nums)) {
        nums = [nums]
        isarray = false
    }
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let intnum = trunc(num)
        // let diff = num - intnum
        if (num === intnum) {
            res.push(intnum)
            //return diff < 0.5 ? intnum : intnum + 1
        } else {
            if (num < 0) {
                res.push(intnum - 1)
            } else {
                res.push(intnum)
            }

            // return diff <= -0.5 ? intnum - 1 : intnum
        }

    }

    return isarray ? res : res.join() * 1
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

//console.log(round(-2.218281828459045))

