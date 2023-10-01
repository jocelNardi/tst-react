/* eslint-disable storybook/story-exports */
import { Meta, StoryObj } from '@storybook/react';
import CustomDice from './Dice';

const meta = {
  title: 'Component/Dice',
  component: CustomDice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomDice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isRolling: false,
    value: 5,
  },
};

export const Loading: Story = {
  args: {
    isRolling: true,
    value: 5,
  },
};
