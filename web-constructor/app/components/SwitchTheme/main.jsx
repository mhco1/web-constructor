import {useState} from 'react';
import {useThemeSwitcher} from 'react-css-theme-switcher';
import {Switch} from 'antd';
import styled from 'styled-components';
import conf from '/app/conf/conf.jsx'


var Style = styled.div`
    .ant-switch{
        background-color: var(--ms-color);
        background-image: none;
    }

    .ant-switch-handle::before{
        background-color: var(--mp-color);
    }
`

function SwitchTheme(props){
    var [themeState, setThemeState] = useState(conf.theme.default=='dark'?'light':'dark');
    var {switcher} = useThemeSwitcher();

    function changeTheme(){
        setThemeState(prev =>(prev=='dark'?'light':'dark'));
        switcher({ theme: themeState });
    }

    return (
        <>
            <Style>
                <Switch defaultChecked onChange={changeTheme} />
            </Style>
        </>
    )
}

export default SwitchTheme;