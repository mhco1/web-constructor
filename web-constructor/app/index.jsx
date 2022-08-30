import SwitchTheme from '/app/components/switch-theme/comp';
import { Button } from 'antd';
//import DoomTree from '/app/components/dom-tree/comp'
import Box from './components/box/comp'
import { Switch } from 'antd';

import '/app/style/main.css';

var index;
export default index = (
  <>
    <Box>
        teste
        <p>ok ok test test</p>
        <div><p>ok</p></div>
        <div>
          <Button type="primary">Button</Button>
          <Button>Button</Button>
        </div>
        <Button type="dashed" ghost>Button</Button>
        <Button type="dashed">Button</Button>
    </Box>
    <SwitchTheme />
  </>
)