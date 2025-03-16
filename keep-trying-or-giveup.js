function retry(count, callback) {
    return async function (...args) {
        let attempts = 0;
        while (attempts <= count) {
            try {
                return await callback(...args);
            } catch (error) {
                attempts++;
                if (attempts > count) {
                    throw error;
                }
            }
        }
    };
}

function timeout(delay, func) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject(new Error('timeout')), delay);
            func(...args)
                .then(result => {
                    clearTimeout(timer);
                    resolve(result);
                })
                .catch(error => {
                    clearTimeout(timer);
                    reject(error);
                });
        });
    };
}
