import React from 'react';
import Button from '@material-ui/core/Button'
import { withStyles, ThemeContext } from '../../components/withStyles';

class Demo extends React.Component {
  // private StyledComponent: ComponentType;
  constructor(p: any) {
    super(p);
    // console.log(this.context)
  }

  render() {
    const { classes } = this.context
    console.log(classes)
    return (
      <div>
        <div className={classes.div}>
          测试文字
        </div>
        <Button>切换主题</Button>
      </div>
    )
  }

  static contextType = ThemeContext;
}

export default withStyles(
  Demo,
  data => {
    return {
      div: {
        // background: data.backgroud,
        color: data.color,
      }
    }
  })
