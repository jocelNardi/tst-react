import { Meta } from '@storybook/react';
import Home from './Home';

const HomeStories = {
  title: 'Component/HomePage',
  component: Home,
  tags: ['autodocs'],
} satisfies Meta<typeof Home>;

export const Default = {
  args: {},
};

export default HomeStories;
