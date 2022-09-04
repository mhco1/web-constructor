import SwitchTheme from '/app/components/switch-theme/comp';
import { Button } from 'antd';
//import DoomTree from '/app/components/dom-tree/comp'
//import Box from './components/box/comp';
import ClassSelect from '/app/components/class-select/comp'
import { Switch } from 'antd';

import Style from '/app/style/main.jsx';

var index;
export default index = (
  <>
    <Style/>
    <ClassSelect data={['class 1','class 2','class 3']} />
    <SwitchTheme />
  </>
)