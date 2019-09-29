import React from 'react';
import Button from '@material-ui/core/Button'
import Demo from './Demo'
import { updateTheme, current } from '../../theme'
export default class extends React.Component {
  // private StyledComponent: ComponentType;
  constructor(p: any) {
    super(p);
    // console.log(this.context)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    updateTheme(current === 'red' ? 'blue' : 'red');
  }

  render() {
    return (
      <div>
        <Demo>测试文字1</Demo>
        <Demo>测试文字2</Demo>
        <Button onClick={this.handleClick}>切换主题</Button>
      </div>
    )
  }
}
