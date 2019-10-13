import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';

export default {
    title: 'Button',
};

storiesOf('Button', module)
    .add('gray', () => <Button color='gray' fluid size='large' type='submit'>Add</Button>)
    .add('blue', () => <Button color='blue' fluid size='large' type='submit'>Add</Button>)
