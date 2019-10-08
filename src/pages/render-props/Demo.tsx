import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Mouse from './Mouse';

export default function () {
  return (
    <Mouse render={state => {
      return (
        <div style={{ position: 'absolute', left: state.x, top: state.y }}>
          <Card>
            <CardContent>
              跟随鼠标
            </CardContent>
          </Card>
        </div>
      )
    }} />
  )
}