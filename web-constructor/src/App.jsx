//import {useState,createContext} from 'react';
import {ThemeSwitcherProvider} from 'react-css-theme-switcher';
import {ConfigProvider} from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import index from '/app/index.jsx';
import {conf} from '/app/utilities/utilities.js'

var theme = {
  light: '/app/style/theme-light.less',
  dark: '/app/style/theme-dark.less',
};

ConfigProvider.config({
  loacale: ptBR
});

function App() {
  return (
    <ConfigProvider>
      <ThemeSwitcherProvider defaultTheme={conf.color.theme} themeMap={theme}>
        {index}
      </ThemeSwitcherProvider>
    </ConfigProvider>
  );
}

export default App
