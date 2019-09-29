import React from 'react';
import createSheet, { IJSSSheetStyles, JSSSheet } from '@luwenxull/jss'
import { getTheme, onThemeChange, offThemeChange, IPracticeTheme } from '../theme'

export const ThemeContext = React.createContext({});

export function withStyles<T>(
  Component: React.ComponentType<T>,
  factory: (data: IPracticeTheme) => IJSSSheetStyles
) {
  // let count = 0;
  let sheet = createSheet(factory)
  let hasInflated: boolean = false;
  onThemeChange(() => {
    sheet.replace(getTheme())
  })
  return class extends React.Component<T> {
    constructor(p: T) {
      super(p);
      this.handleThemeChange = this.handleThemeChange.bind(this)
      this.state = {
        classes: sheet.classes,
      };
      // count++;
    }

    componentDidMount() {
      if (!hasInflated) {
        sheet
          .inflate(getTheme())
          .attach();
        hasInflated = true;
        // console.log(sheet)
      }
      this.setState({
        classes: sheet.classes
      });
      onThemeChange(() => {
        this.setState({
          classes: sheet.classes
        })
      })
    }

    handleThemeChange() {
      this.setState({
        classes: sheet.classes
      })
    }

    componentWillUnmount() {
      offThemeChange(this.handleThemeChange)
    }

    render() {
      return (
        <ThemeContext.Provider value={this.state}>
          <Component {...this.props} />
        </ThemeContext.Provider>
      )
    }
  }
}
