var generate = {};

generate.id = function (){
    return String(Date.now()).slice(-7) + String(Math.floor(Math.random()*Math.pow(10,5)));
}

generate.tree = function (arr=[], callback=()=>{}){
    return ((function recursive(arr){
        var res, _res, arm=[[]];

        arr = arr.reverse();
        res = arr.map((el,id)=>{
            var res;

            if(Array.isArray(el)){
                _res = recursive(el);
            }else{
                res = callback(el,arr,_res);
                _res = undefined
            }

            return res
        })
        res = res.reverse();
        res = res.filter(el => typeof el !== 'undefined');

        return res
    })([...arr]))
}

export default generate;