import { Badge } from 'antd';
import styled from 'styled-components';

var objStyle = {
    'badge':  `
        padding: 0px 4px;
        z-index: 10;
        & > *{
            margin: 1px;
        }

    `,
    '!badge':  `        
        padding: 7px;
        margin: 5px;
    `,
    'round':  'border-radius: 90px;',
    '!round': 'border-radius: 4px;',
    '!fill': 'border: 1px solid;',
    'fill badge':   'background-color: var(--s-color);',
    'fill !badge':  'background-color: var(--mp-color);',
    '!fill badge':  'border-color: var(--s-color);',
    '!fill !badge': 'border-color: var(--p-color);',
}

var Style = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

    ${(props)=>{
        var res = '';
        var {objStyle, _keys} = props;

        for(var key in objStyle){
            var rule = true;
            var ruleArr = key.split(' ');
            ruleArr.forEach((el,id) => {
                if(rule === false){return}
                rule = el[0] == '!'?
                    !_keys.includes(el.slice(1)):
                    _keys.includes(el)
                })
            rule && (res += objStyle[key] + " \n ");
        }

        return res;
    }}
`;

/* function Style_(props) {
    return (
        <>
            <Style className={props._keys.includes('fill') ? 'invert' : ''} {...props}>
                {props.children}
            </Style>
        </>
    )
} */

function Box(props) {
    var send = {};
    var res = props.children;
    send.objStyle = objStyle;
    send._keys = Object.keys(props);

    if (send._keys.includes('badge')){
        res = (
            <Badge count={
                <Style {...send}>
                    {props.badge}
                </Style>
            }>
                {props.children}
            </Badge>
        )
    } else {
        res = (
            <Style {...send}>
                {props.children}
            </Style>
        )
    }

    return (
        <>
            {res}
        </>
    )
}

export default Box