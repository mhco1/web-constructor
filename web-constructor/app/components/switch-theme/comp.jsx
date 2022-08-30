import {useState} from 'react';
import {useThemeSwitcher} from 'react-css-theme-switcher';
import {Switch} from 'antd';
import styled from 'styled-components';
import {conf} from '/app/utilities/utilities.js';

var Style = styled.div`
    .ant-switch{
        background-color: ${props => conf.color[props.theme=='dark'?'light':'dark']};
        background-image: none;
    }

    .ant-switch-handle::before{
        background-color: ${props => conf.color[props.theme]};
    }
`

function SwitchTheme(props){
    var [themeState, setThemeState] = useState(conf.color.theme=='dark'?'light':'dark');
    var {switcher,currentTheme} = useThemeSwitcher();

    function changeTheme(){
        setThemeState(prev =>(prev=='dark'?'light':'dark'));
        switcher({ theme: themeState });
    }

    return (
        <>
            <Style theme={currentTheme}>
                <Switch defaultChecked onChange={changeTheme} />
            </Style>
        </>
    )
}

export default SwitchTheme;