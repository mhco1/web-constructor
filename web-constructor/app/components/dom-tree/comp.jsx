import { useState } from 'react';
import { Tree } from 'antd';
//import {PlusCircleOutlined} from '@ant-design/icons';
import {PlusOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {conf, array, generate} from '/app/utilities/utilities.js';

//debugger

var Style = styled.div`
    .ant-tree .ant-tree-treenode{
        /* -webkit-user-drag: none; */
    }

    .ant-tree .ant-tree-node-content-wrapper{
        min-width: 100px;
        background-image: none;

        &::after{
            display: block;
            content:'';
            margin-bottom: 5px;
            width: 75%;
            height: 0px;
            border: 1px solid;
            border-radius: 10px;
            border-color: rgba(${conf.color.primaryRgb},0.5);
            transition: all 1s ease;
        }

        &:hover{
            background: none;
        }

        &:hover::after{
            width: 100%;
        }

        &:-moz-drag-over::after{
            display: none;
        }
    }
`;

function DomTree (props) {
    var [data,setData] = useState(DomTree.data);

    DomTree.defineData(props.data);

    function onDrop(event){
        var newData, key;
        var target = DomTree.dataMap.get(event.node.key).this;
        var current = DomTree.dataMap.get(event.dragNode.key).this;
        var inside = !event.dropToGap;
        var pos = inside ? 0 : event.dropPosition;

        //debugger
        if(
            (target.parent.this.title == 'fakeNode' && !inside) ||
            typeof target.parent === 'undefined' ||
            typeof current.parent === 'undefined'
        ){return}

        var targetParent = inside ?
        target.parent.find(el => el.key == target.key) :
        target.parent.this;
        var currentParent = current.parent.this;
        var idx = currentParent.children.findIndex(el => el.key == current.key);

        if(
            idx == -1 ||
            (targetParent.key == currentParent.key &&
            pos == idx)
        ){return}

        currentParent.children = array.remove(currentParent.children, idx);
        targetParent.children = array.insert(targetParent.children, current, pos);

        DomTree.data = newData = [...data];
        setData(newData);
    }

    function onDrag(event){
        event.event.dataTransfer.setDragImage(new Image(), 0, 0);
    }

    return (
        <>
            <Style>
                <Tree className="draggable-tree" blockNode draggable treeData={data} showLine='true' onDrop={onDrop} onDragStart={onDrag} />
            </Style>
        </>
    );
}

DomTree.defineData = function (arr){
    var fakeNode;

    function generateNode(title,children){
        var res = {};
        Object.defineProperty(res,'children',{
            set(value){
                return DomTree.dataMap.set(this.key,value, this);
            },

            get(){
                return DomTree.dataMap.get(this.key);
            }
        })
        Object.defineProperty(res,'parent',{
            set(value){
                this.parentKey = value;
                return value
            },
            get(){
                return DomTree.dataMap.get(this.parentKey);
            }
        })

        res.title = String(title);
        res.key = generate.id();
        res.children = children;
        return res
    }

    DomTree.data = generate.tree(arr,(el,arr,next=[])=>{
        var res;
        res = generateNode(el,next);
        return res
    });

    fakeNode = generateNode('fakeNode',DomTree.data);
}

DomTree.dataMap = {};
DomTree.dataMap.set = function(key,value, obj){
    if(typeof value == 'undefined'){return}
    value.forEach(el => el.parent = key);
    value.this = obj;
    DomTree.dataMap[key] = value;
    return value;
}

DomTree.dataMap.get = function(key){
    return DomTree.dataMap[key];
}

export default DomTree;