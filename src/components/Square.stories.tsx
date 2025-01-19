import { fn } from "@storybook/test";

import Square from './Square';

export default {
  component: Square,
  title: 'Square',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {
    color: 'blue',
    borderColor: 'black',
    size: 100,
  },
};
