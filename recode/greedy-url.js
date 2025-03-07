function getURL(data){
    const urlRegex = /(https?:\/\/[^\s"']+)/g;
    return data.match(urlRegex) || [];
}

function greedyQuery(data) {
    const queryRegex = /(https?:\/\/[^\s"']+\?([^#\s&=]+=[^#\s&=]+&){2,}[^#\s"']+)/g;
    return data.match(queryRegex) || [];
}

function notSoGreedy(data) {
    const queryRegex = /(https?:\/\/[^\s"']+\?([^#\s"']+=[^#\s"']+&){1,2}[^#\s"']+=[^#\s"']*)/g;


    return data.match(queryRegex) || [];
}