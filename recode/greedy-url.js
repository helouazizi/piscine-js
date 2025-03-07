function getURL(data){
    const urlRegex = /(https?:\/\/[^\s"']+)/g;
    return dataSet.match(urlRegex) || [];

}