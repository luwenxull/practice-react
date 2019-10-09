import React from 'react';
import Button from '@material-ui/core/Button';

export default class extends React.Component {
  private textInput: React.RefObject<HTMLInputElement>
  constructor(props: any) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    if (this.textInput.current) {
      this.textInput.current.focus();
    }
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          ref={this.textInput}
        />
        <br/>
        <Button
          variant="contained"
          color="primary"
          onClick={this.focusTextInput}
        >聚焦</Button>
      </div>
    );
  }
}
