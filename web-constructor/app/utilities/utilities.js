import conf from './conf.json' assert {type:'json'};
import array from './array'
import generate from './generate'

var utilities = {
    ...conf,
    ...array,
    ...generate
}

export {conf};
export {array};
export {generate};
export {utilities};