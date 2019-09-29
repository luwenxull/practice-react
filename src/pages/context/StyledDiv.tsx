import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '../../components/withStyles';
import { ThemeContext } from '../../theme';

class StyledDiv extends React.Component {

  render() {
    const { classes } = this.context
    return (
      <Card>
        <CardContent>
          <div className={classes.div}>
            {this.props.children}
          </div>
        </CardContent>
      </Card>
    )
  }

  static contextType = ThemeContext;
}

export default withStyles(
  StyledDiv,
  data => {
    return {
      div: {
        color: data.color,
        // 'font-size': data.fontSize,
      }
    }
  }
)
