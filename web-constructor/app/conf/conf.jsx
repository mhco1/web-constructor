import { lazy, Suspense } from "react";
import confJson from './conf.json';
var conf = {
    ...confJson,
    dynamicImport: function(){
        return ({
            comp: (name)=>(props={})=>(children)=>{
                props.children = children;
                var path = `/app/components/${name}/main.jsx`;
                var Comp = ((path)=>lazy(()=>import(/* @vite-ignore */path)))(path);
                return <Comp {...props}/>
            },
            hook: (name)=>{
                var path = `/app/hooks/${name}/main.jsx`;
                var hook = ((path)=>lazy(()=>import(/* @vite-ignore */path)))(path);
                return hook
            },
            utilities: (name)=>{
                var path = `/app/utilities/${name}/main.jsx`;
                var utilities = ((path)=>lazy(()=>import(/* @vite-ignore */path)))(path);
                return utilities
            }
        })
    }
}


export default conf