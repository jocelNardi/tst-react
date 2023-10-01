import { Meta } from '@storybook/react';
import FinishedScreen from './FinishedScreen';

const FinishedStories = {
  title: 'Component/Endpage',
  component: FinishedScreen,
  tags: ['docs'],
} satisfies Meta<typeof FinishedScreen>;

export default FinishedStories;

export const Default = {
  args: {
    name: 'Player 1',
    score: 10,
  },
};
