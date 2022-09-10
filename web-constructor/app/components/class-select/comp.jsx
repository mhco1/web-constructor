import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button, Space } from "antd";
import {useDef} from '/app/utilities/utilities'
import Box from '/app/components/box/comp';

//---
var Style = styled.div`
    .edit:focus{
        background-color: var(--ms-color);
        border-color: var(--ms-color);
        color: var(--mp-color);
    }
    
    .btn{
        cursor: pointer;
    }

    .btnEdit:hover{
        color: var(--success-color);
    }

    .btnDel:hover{
        color: var(--error-color);
    }
`

//---

function itemFunction(){
    return ({
        insert: function(){
            useDef('setData')(prev=>{
                var res = 'newClass';
                for (let i = 1; prev.includes(res); i++) {
                    res = 'newClass' + String(i);
                }
                return [...prev, res];
            })
        },
        remove: function(ref){
            useDef('setData')(prev=>
                prev.remove(prev.indexOf(ref.innerText)) 
            )

            useDef('setSelect')('')
        },
        edit: function(ref){
            var unselect = false;
            var changeSelect = false;
            useDef('setData')(prev=>{
                var idx = prev.indexOf(ref.prevText);
        
                //if already defined
                if(prev.includes(ref.innerText)){
                    ref.innerText = ref.prevText;
                    return prev
                }
        
                //if not have text
                if(ref.innerText == ''){
                    prev = prev.remove(idx);
                    unselect = true;
                    return [...prev]
                }
        
                prev[idx] = ref.innerText
                changeSelect = true;

                return [...prev]
            });

            if(unselect){
                useDef('setSelect')('')
                return
            }

            if(changeSelect){
                useDef('setSelect')(ref.innerText)
                return
            }
        },
        select: function(ref){
            useDef('setSelect')(ref.innerText);
        },
    })
}

function eventFunction(){
    return ({
        editClick: (ref,event)=>{
            ref.prevText = ref.innerText;
            ref.isEdit = true;
            ref.contentEditable = true;
            ref.classList.add('edit');
            ref.focus();
        },
        removeClick: (ref,event)=>{
            var {remove} = itemFunction()

            remove(ref)
        },
        blur: (ref,event)=>{
            var {edit} = itemFunction()

            if(ref.isEdit){
                ref.isEdit = false;
                ref.contentEditable = false;
                ref.classList.remove('edit');
                edit(ref);
            }
        },
        keyUp: (ref,event)=>{
            if(event.code == 'Enter'){
                event.preventDefault();
                ref.blur();
            }
        },
        click: (ref,event)=>{
            var {select} = itemFunction()

            select(ref);
        },
        add: (ref,event)=>{
            var {insert} = itemFunction()

            insert()
        }
    })
}

//---

function Item(props){
    var send;
    var events = eventFunction();
    var ref = useRef();

    send = ()=>[ref.current];

    var badge = props.children == useDef('select') && (
        <>
            <div className='btn btnEdit'
            onClick={(event)=>events.editClick.call(this,...send(),event)}>
                <EditOutlined />
            </div>
            <div className='btn btnDel'
            onClick={(event)=>events.removeClick.call(this,...send(),event)}>
                <DeleteOutlined />
            </div>
        </>
    )

    return (
        <>
            <Box $fill badge={badge}>
                <Button className={ref.className} type="primary" shape="round" ref={ref}
                onBlur ={(event)=>events.blur .call(this,...send(),event)}
                onKeyUp={(event)=>events.keyUp.call(this,...send(),event)}
                onClick={(event)=>events.click.call(this,...send(),event)}>
                    {props.children}
                </Button>
            </Box>
        </>
    )
}

function ButtonAdd(props){
    var events = eventFunction();
    var send = ()=>[];

    return (
        <>
            <Button className='success' type="primary" shape="circle"
                onClick={(event)=>{events.add.call(this,...send(),event)}}>
                <PlusOutlined />
            </Button>
        </>
    )
}

//---

export default function ClassSelector(props){
    useDef(function(){
        [this.select, this.setSelect] = useState('');
        [this.data,   this.setData]   = useState(props.data);
    })

    return (
        <>
            <Style>
                <Box>
                    <Space size={24} direction='horizontal' wrap>
                        {useDef('data').map(el =>
                            <Item key={el}>
                                {el}
                            </Item>
                        )}
                        <ButtonAdd/>
                    </Space>
                </Box>
            </Style>
            <p>Class was select: {useDef('select')}</p>
            <p>Data state: [ {useDef('data').join(' , ')} ]</p>
        </>
    )
}