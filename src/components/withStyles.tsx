import React from 'react';
import createSheet, { IJSSSheetStyles } from '@luwenxull/jss'

export const ThemeContext = React.createContext({});

export function withStyles<T, U>(
  Component: React.ComponentType<T>,
  sheetConfig: [(data: U) => IJSSSheetStyles, () => U, string?],
) {
  // let count = 0;
  const [factory, getter, namespace = ''] = sheetConfig
  let sheet = createSheet(factory, namespace)
  let hasInflated: boolean = false;
  return class extends React.Component<T> {
    constructor(p: T) {
      super(p);
      this.updateClasses = this.updateClasses.bind(this)
      this.state = {
        classes: sheet.classes,
      };
    }

    componentDidMount() {
      if (!hasInflated) {
        sheet
          .inflate(getter())
          .attach();
        hasInflated = true;
      }
      this.updateClasses()
      sheet.onChange(this.updateClasses)
    }

    updateClasses() {
      this.setState({
        classes: sheet.classes
      })
    }

    componentWillUnmount() {
      sheet.offChange(this.updateClasses)
    }

    render() {
      return (
        <ThemeContext.Provider value={this.state}>
          <Component {...this.props} />
        </ThemeContext.Provider>
      )
    }

    static updateSheet() {
      sheet.replace(getter())
    }
  }
}
