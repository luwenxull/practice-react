import React from 'react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

function Err(p: any) {
  if (p.err) {
    return (
      <span>{p.a.b}</span>
    )
  }
  return (
    <Chip label='GOOD!!!'></Chip>
  )
}

export default class extends React.Component<any, { hasError: boolean; err: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      err: false,
    };
    this.emitError = this.emitError.bind(this)
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  emitError() {
    this.setState({
      err: true,
    })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div>
        <Err err={this.state.err}></Err>
        <Button
          color="primary"
          variant="contained"
          onClick={this.emitError}
        >触发错误</Button>
      </div>
    )
  }
}