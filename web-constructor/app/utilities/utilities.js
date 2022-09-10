import conf from './conf.json' assert {type:'json'};
import Array from './array'
import generate from './generate'
import useDef from './hooks/def'

var utilities = {
    ...conf,
    ...generate,
    ...{useDef},
}

export {conf};
export {Array};
export {generate};
export {useDef};
export {utilities};