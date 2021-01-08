import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeWrapper from '../packages/phoenix-theme/lib/phoenix-theme';

addDecorator((story) => <ThemeWrapper>{story()}</ThemeWrapper>);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}