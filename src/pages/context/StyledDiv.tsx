import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles, ThemeContext } from '../../components/withStyles';
import {
  getTheme,
  onThemeChange,
  // offThemeChange,
} from '../../theme';

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

  // Consumer用法参考ContextConsumer.tsx
  static contextType = ThemeContext;
}

const Component = withStyles(
  StyledDiv,
  [
    data => {
    return {
      div: {
        color: data.color,
        // 'font-size': data.fontSize,
      }
    }
    },
    getTheme,
    'styled_',
  ],
)

onThemeChange(Component.updateSheet)

export default Component
