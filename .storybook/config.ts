import { configure, addDecorator } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css'
import { withProvider, withGrid } from './decorators'

addDecorator(withProvider)
addDecorator(withGrid)

// automatically import all files ending in *.stories.ts(x)
configure(require.context('../src/stories', true, /\.stories\.tsx?$/), module);
