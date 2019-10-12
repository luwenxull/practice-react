import React from 'react'
import Chip from '@material-ui/core/Chip';

const FancyChip = React.forwardRef((props: {refType: string}, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div ref={ref}>
      <Chip label={`Ref类型：${props.refType}`}></Chip>
    </div>
  )
})


export default class extends React.Component<any, {refType: string}> {
  private ref: React.RefObject<HTMLDivElement>
  constructor(props: any) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      refType: ''
    }
  }

  componentDidMount() {
    if (this.ref.current) {
      this.setState({
        refType: (this.ref.current.toString())
      })
    }
  }

  render() {
    return <FancyChip ref={this.ref} refType={this.state.refType}></FancyChip>
  }
}