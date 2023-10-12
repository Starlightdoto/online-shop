export const getCurrentId = () => {
    const url = window.location.href;
    let tempId = "" ;
    let currentId = "";
    for(let i = url.length-1; url[i] !== "/"; i--) {
        tempId += url[i];
    }
    for(let j = tempId.length-1; j >= 0; j--) {
        currentId += tempId[j];
    }
    return currentId;
};