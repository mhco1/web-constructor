
Array.prototype.insert = function (el,i){
    return [...this.slice(0,i),el,...this.slice(i)];
}

Array.prototype.change = function (el,i){
    return [...this.slice(0,i),el,...this.slice(i+1)];
}

Array.prototype.remove = function (i){
    return [...this.slice(0,i),...this.slice(i+1)];
}

export default Array;