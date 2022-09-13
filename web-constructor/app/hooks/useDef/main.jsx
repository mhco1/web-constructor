import { useEffect } from "react"

export default function useDef(cmd,deb){
    if(deb == 'debugger'){
        useEffect(()=>{
            console.table(useDef.arg)
        })
    }

    if(typeof cmd == 'function'){
        useDef.arg = {}
        cmd.call(useDef.arg)
        return
    }

    if(typeof cmd == 'string'){
        return useDef.arg[cmd]
    }
}

