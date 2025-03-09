function retry(count, callback) {
    let times = 0
    return async function test (...args) {
        // if (count === 0) {
        //     return await callback(...args);
        // }

        // while (times < count) {
        try {
            return await callback(...args)
        } catch (error) {
            times++
            if (times <= count) {
                return await test(...args)
            } else {
                throw error
            }

        }
    }

    // }

}