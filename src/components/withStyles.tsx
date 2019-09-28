import React from 'react';
import createSheet, { IJSSSheetStyles, JSSSheet } from '@luwenxull/jss'

interface IPracticeTheme {
  backgroud: string,
  color: string,
}

const theme: IPracticeTheme = {
  backgroud: 'blue',
  color: 'red',
}

declare global {
  interface Window { practice_theme: IPracticeTheme; }
}

window.practice_theme = theme

export const ThemeContext = React.createContext({});

export function withStyles<T>(
  Component: React.ComponentType<T>,
  factory: (data: IPracticeTheme) => IJSSSheetStyles
) {
  let count = 0;
  let sheet: JSSSheet<IPracticeTheme>;
  let hasInflated: boolean = false;
  return class extends React.Component<T> {
    constructor(p: T) {
      super(p);
      if (count === 0) {
        sheet = createSheet(factory)
        console.log(sheet)
      }
      this.state = {
        classes: sheet.classes,
        update: null,
      };
      count++;
    }

    updateTheme() {

    }

    componentDidMount() {
      if (!hasInflated) {
        sheet
          .inflate(window.practice_theme)
          .attach();
        hasInflated = true;
        // console.log(sheet)
        this.setState({
          classes: sheet.classes
        });
      }
    }

    componentWillUnmount() {
      count--;
      if (count === 0) {
        console.log('should remove')
      }
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
