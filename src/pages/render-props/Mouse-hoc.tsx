import React from 'react';

interface IState {
  x: number,
  y: number,
}

export default function(Component: React.ComponentType<IState>) {
  return class extends React.Component<any, IState> {
    constructor(props: any) {
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
          {/* 也可用hoc实现 */}
          <Component {...this.state} {...this.props}/>
        </div>
      );
    }
  }
}