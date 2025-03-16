async function getJSON(path, params) {
    const url = new URL(path, window.location.origin);
    
    // Append query parameters if any
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    try {
        const response = await fetch(url+p);
        
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        
        const json = await response.json();
        
        if (json.error) {
            throw new Error(json.error);
        }
        
        return json.data;
    } catch (error) {
        throw new Error(`Fetch failed: ${error.message}`);
    }

}