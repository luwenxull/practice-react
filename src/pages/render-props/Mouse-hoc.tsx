import React from 'react';

interface IState {
  x: number,
  y: number,
}

interface IProps {
  render(state: IState): React.ReactElement
}

export default function(Component: React.ComponentType<IState>) {
  return class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event: any) {
      this.setState({
        x: event.nativeEvent.offsetX + 5,
        y: event.nativeEvent.offsetY + 5,
      });
    }
  
    render() {
      return (
        <div style={{ height: '500px', position: 'relative' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          <Component {...this.state}/>
        </div>
      );
    }
  }
}