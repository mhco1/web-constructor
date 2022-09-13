
import { useState } from 'react';
import conf from '/app/conf/conf.jsx'
var { comp } = conf.dynamicImport()

var exe = {
  Test: (props)=><Test {...props} />
};

function Test(props){
  return <p>Test1 - {props.children} - {props.text}</p>
}

var Comp = (name)=>(props={})=>(children)=>{
  props.children = children
  return exe[name]({...props})
}

export default (
  <>
    {comp`SwitchTheme`()()}
  </>
)