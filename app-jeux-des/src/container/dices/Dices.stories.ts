import { Meta } from '@storybook/react';
import Dice from './Dice';

const DicePage = {
  title: 'Container/ContainerDice',
  component: Dice,
  tags: ['docs'],
} satisfies Meta<typeof Dice>;

export const Default = {
  args: {
    statusDefaultGame: undefined,
    userDefault: [],
  },
};

export const Started = {
  args: {
    statusDefaultGame: 'STARTED',
    userDefault: [
      { score: 0, name: 'Player 1', id: 1 },
      { score: 0, name: 'Player 2', id: 2 },
    ],
    countDefault: {
      total: 0,
      totalTour: 2,
      userCount: 2,
      currentTour: 0,
    },
  },
};
export const End = {
  args: {
    statusDefaultGame: 'FINISHED',
    userDefault: [
      { score: 0, name: 'Player 1', id: 1 },
      { score: 0, name: 'Player 2', id: 2 },
    ],
    countDefault: {
      total: 12,
      totalTour: 2,
      userCount: 2,
      currentTour: 2,
    },
  },
};

export default DicePage;
