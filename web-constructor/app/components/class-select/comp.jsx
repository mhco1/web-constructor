import { Badge, Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Box from '../box/comp';
import { useEffect, useRef, useState } from 'react';
import { array } from '../../../app/utilities/utilities'

var Style = styled.div`
    .edit:focus{
        background-color: var(--ms-color);
        border-color: var(--ms-color);
        color: var(--mp-color);
    }

/*     .editClas{
        display:none;
    } */

    .btn{
        cursor: pointer;
    }

    .btnEdit:hover{
        color: var(--success-color);
        /* background-color: var(--mp-color);
        border: 1px solid;
        border-radius: 4px; */
    }

    .btnDel:hover{
        color: var(--error-color);
    }
`

function eventInsert([data,setData],event){
    setData(prev=>{
        var res = 'newClass';
        for (let i = 1; prev.includes(res); i++) {
            res = 'newClass' + String(i);
        }
        return [...prev, res];
    })
}

function eventEdit(clas,setEdit,event){
    setEdit('edit');
    clas.current.prevText = clas.current.innerText;
    clas.current.editBlur = true;
    clas.current.contentEditable = true;
    clas.current.focus();
}

function eventBlur(clas,setEdit,[data,setData],[select,setSelect],event){
    if(clas.current.editBlur){
        setEdit('');
        clas.current.exeBlur = false;
        clas.current.contentEditable = false;
        if(data.includes(clas.current.innerText)){
            clas.current.innerText = clas.current.prevText;
            return
        }
        setData(prev=>{
            var idx = prev.indexOf(clas.current.prevText);
            clas.current.innerText ?
                (prev[idx] = clas.current.innerText):
                (prev = array.remove(prev,idx))
            return [...prev]
        });
        setSelect(clas.current.innerText);
    }
}

function eventDelete(clas,[data,setData],event){
    setData(prev=>array.remove(prev,prev.indexOf(clas.current.innerText)))
}

function eventKeyUp(clas,event){
    if(event.code == 'Enter'){
        debugger
        event.preventDefault();
        clas.current.blur();
    }
}

function eventOnClick(clas,[select,setSelect],event){
    setSelect(clas.current.innerText);
}

//---

function Item(props){
    var [edit,setEdit] = useState();
    var clas = useRef();

    var badge = (props.selectState[0] == props.children) && (
        <>
            <div className='btn btnEdit' onClick={(event)=>(eventEdit).call(this,clas,setEdit,event)}>
                <EditOutlined />
            </div>
            <div className='btn btnDel' onClick={(event)=>(eventDelete).call(this,clas,props.dataState,event)}>
                <DeleteOutlined />
            </div>
        </>
    )

    return (
        <>
            <Box $fill badge={badge}>
                <Button className={edit}
                onBlur={(event)=>(eventBlur).call(this,clas,setEdit,props.dataState,props.selectState,event)}
                onKeyUp={(event)=>(eventKeyUp).call(this,clas,event)}
                onClick={(event)=>(eventOnClick).call(this,clas,props.selectState,event)}
                type="primary" shape="round"
                ref={clas}>
                    {props.children}
                </Button>
            </Box>
        </>
    )
}

function ButtonAdd(props){
    
    return (
        <>
            <Button className='success' onClick={()=>(eventInsert).call(this,props.dataState)} type="primary" shape="circle"><PlusOutlined /></Button>
        </>
    )
}

export default function ClassSelect(props){
    var [select, setSelect] = useState('');
    var [data, setData] = useState(props.data);

    useEffect(()=>{
        console.log(select)
        console.log(data)
    },[data,select])

    return (
        <>
            <Style>
                <Box>
                    <Space size={24} direction='horizontal' wrap>
                        {data.map(el =>
                            <Item key={el} selectState={[select,setSelect]} dataState={[data,setData]}>{el}</Item>
                        )}
                        <ButtonAdd dataState={[data,setData]}/>
                    </Space>
                </Box>
            </Style>
        </>
    )
};