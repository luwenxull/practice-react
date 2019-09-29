import React from 'react';
import { withStyles, ThemeContext } from '../../components/withStyles';

class Demo extends React.Component {
  // private StyledComponent: ComponentType;
  constructor(p: any) {
    super(p);
    // console.log(this.context)
  }

  render() {
    const { classes } = this.context
    return (
      <div>
        <div className={classes.div}>
          {this.props.children}
        </div>
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
        color: data.color,
      }
    }
  }
)
