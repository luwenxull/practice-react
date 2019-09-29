import React from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import StyledDiv from './StyledDiv'
import { updateTheme, current } from '../../theme'
export default class extends React.Component {
  constructor(p: any) {
    super(p);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    updateTheme(current === 'red' ? 'blue' : 'red');
  }

  render() {
    return (
      <div style={{padding: 12}}>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <StyledDiv>测试文字1</StyledDiv>
          </Grid>
          <Grid item lg={6}>
            <StyledDiv>测试文字2</StyledDiv>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={this.handleClick}>切换主题</Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}
