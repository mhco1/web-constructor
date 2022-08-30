var array = {};

array.remove = function (arr,i){
    return [...arr.slice(0,i),...arr.slice(i+1)];
}

array.insert = function (arr,el,i){
    return [...arr.slice(0,i),el,...arr.slice(i)];
}

export default array;