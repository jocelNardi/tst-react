import { Meta } from '@storybook/react';
import StartedScreen from './StartedScreen';

const StartedGame = {
  title: 'Container/GameScreen',
  component: StartedScreen,
  tags: ['autodocs'],
} satisfies Meta<typeof StartedScreen>;

export default StartedGame;

export const Default = {
  args: {
    name: 'Player 1',
    score: 0,
    isRolling: false,
    valueDice1: 1,
    valueDice2: 1,
    total: 0,
    user: [
      { name: 'Joueur 1', score: 0, id: 1 },
      { name: 'Joueur 2', score: 0, id: 2 },
    ],
  },
};

export const Onrolling = {
  args: {
    name: 'Player 1',
    score: 0,
    isRolling: true,
    valueDice1: 6,
    valueDice2: 1,
    total: 7,
    user: [
      { name: 'Joueur 1', score: 7, id: 1 },
      { name: 'Joueur 2', score: 0, id: 2 },
    ],
  },
};

export const DefaultNextPlayer = {
  args: {
    name: 'Player 2',
    score: 0,
    isRolling: false,
    valueDice1: 6,
    valueDice2: 1,
    total: 7,
    user: [
      { name: 'Joueur 1', score: 0, id: 1 },
      { name: 'Joueur 2', score: 0, id: 2 },
    ],
  },
};
