import { Meta } from '@storybook/react';
import TextInput from './TextInput';

const meta = {
  title: 'Component/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;

export const Default = {
  args: {
    label: 'Nombre de tour',
  },
};
