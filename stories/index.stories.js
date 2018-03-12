import React from 'react';
import { storiesOf } from '@storybook/react';
import disableBrowserBackButton from '../src/index'

const style = {
  textAlign : "center",
  color: 'rgba(0, 0, 0, 0.87)',
  padding : 20
}

storiesOf('Back Button Navigation', module)
  .add('Disabled Back Button', () => {
    disableBrowserBackButton();
    return (
      <div style={style}>Try Pressing Back button, It won't be have any effect.</div>
    )
  })
  .add('Enabled Back Button', () => (
    <div style={style}>Back button should work as usual</div>
  ));
