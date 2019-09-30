import React from 'react';
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'

const TestContext = React.createContext({ time: new Date().toLocaleString() })

function Consumer() {
  return (
    <TestContext.Consumer>
      {
        (context) => {
          return (
            <Chip label={context.time} />
          )
        }
      }
    </TestContext.Consumer>
  )
}

export default class extends React.Component<any, { time: string }> {
  constructor(p: any) {
    super(p)
    this.state = {
      time: new Date().toLocaleString(),
    }
    this.updateContext = this.updateContext.bind(this)
  }

  updateContext() {
    this.setState({
      time: new Date().toLocaleString()
    })
  }

  render() {
    return (
      <React.Fragment>
        <TestContext.Provider value={this.state}>
          <Consumer></Consumer>
        </TestContext.Provider>
        {/* 这个consumer无法找到对应的provider，使用defaultvalue */}
        <Consumer></Consumer>
        <Button
          variant="contained"
          color="primary"
          onClick={this.updateContext}
        >
          更新context
        </Button>
      </React.Fragment>
    )
  }
}
