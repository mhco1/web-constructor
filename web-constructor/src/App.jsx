//import {useState,createContext} from 'react';
import {ThemeSwitcherProvider} from 'react-css-theme-switcher';
import {ConfigProvider} from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

import conf from '/app/conf/conf.jsx'
import index from '/app/index.jsx';
import Style from '/app/style/main.jsx'

ConfigProvider.config({
  loacale: ptBR
});

function App() {
  return (
    <ConfigProvider>
      <ThemeSwitcherProvider defaultTheme={conf.theme.default} themeMap={conf.theme.theme}>
        <Style />
        {index}
      </ThemeSwitcherProvider>
    </ConfigProvider>
  );
}

export default App
