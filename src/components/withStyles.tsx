import React from 'react';
import createSheet, { IJSSSheetStyles } from '@luwenxull/jss'

export const ThemeContext = React.createContext({});

export function withStyles<T, U>(
  Component: React.ComponentType<T>,
  factory: (data: U) => IJSSSheetStyles,
  option: {
    get: () => U,
    on?: (cb: () => void) => void,
    off?: (cb: () => void) => void,
  },
  namespace: string = ''
) {
  // let count = 0;
  let sheet = createSheet(factory, namespace)
  let hasInflated: boolean = false;
  if (option.on) {
    option.on(() => {
      sheet.replace(option.get())
    })
  }
  return class extends React.Component<T> {
    constructor(p: T) {
      super(p);
      this.updateClasses = this.updateClasses.bind(this)
      this.state = {
        classes: sheet.classes,
      };
      // count++;
    }

    componentDidMount() {
      if (!hasInflated) {
        sheet
          .inflate(option.get())
          .attach();
        hasInflated = true;
        // console.log(sheet)
      }
      this.updateClasses()
      if (option.on) {
        option.on(this.updateClasses)
      }
    }

    updateClasses() {
      this.setState({
        classes: sheet.classes
      })
    }

    componentWillUnmount() {
      if (option.off) {
        option.off(this.updateClasses)
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
