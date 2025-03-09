function retry(count, callback) {

    return async function (...args) {
        if (count === 0) {
            return await callback(...args);
        }
        let times = 0
        let result;
        while (times < count) {
            try {
              result = await callback(...args)
            } catch (error) {
                times++
                if (times === count) {
                    // If retries exceeded, throw an error
                    console.log(error);
                    
                    throw error
                    
                }
                
            }
        }
        return result
    }

}