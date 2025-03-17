function deepCopy(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }

    // Handle functions and regular expressions explicitly
    if (typeof value === 'function') {
        return value;
    }

    if (value instanceof RegExp) {
        return new RegExp(value.source, value.flags);
    }

    if (Array.isArray(value)) {
        return value.map(item => deepCopy(item));
    }

    const copy = {};
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            copy[key] = deepCopy(value[key]);
        }
    }
    return copy;
}