import {Space} from 'antd';
import styled from 'styled-components';
import {useThemeSwitcher} from 'react-css-theme-switcher';
import {conf} from '/app/utilities/utilities.js'

var styleArm ={
    text: (props)=>(props.fill?
        'color: '+conf.color[props.textColor]+';':''),

    border: (props)=> (!(props.fill)?
        'border-color: var(--primary-color);'
        :'border-color: transparent;'),

    boxShadow: (props)=> (!(props.fill)?
        'box-shadow: inset 0px 0px 2px var(--primary-color);':''),

    background: (props)=>(props.fill?
        'background-color: '+conf.color[props.theme]+';':''),
}

var Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;
    margin: 5px;


    border: 1px solid;
    ${styleArm.border}
    border-radius: 4px;

    ${styleArm.boxShadow}
    ${styleArm.background}

    /* >*{
        ${styleArm.text}
    } */
`;

function Box(props){
    var {currentTheme} = useThemeSwitcher();
    var send = {}

    send.fill = Object.keys(props).includes('fill');
    send.theme = (currentTheme=='dark'?'light':'dark');
    send.textColor = currentTheme;

    return (
        <>
            <Style {...send}>
                <Space direction='vertical'>{props.children}</Space>
            </Style>
        </>
    )
}

export default Box