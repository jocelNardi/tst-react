import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import StartedScreen from './StartedScreen';

test('Should render with Correctly positioned Start game page', () => {
  const onClickRolling = jest.fn();
  const MokedDataProps = {
    name: 'Player 1',
    score: 0,
    isRolling: false,
    valueDice1: 2,
    valueDice2: 6,
    total: 8,
    user: [],
  };
  const { getByText } = render(<StartedScreen {...MokedDataProps} onClick={onClickRolling} />);

  const total = getByText('8');

  const Button = getByText('Lancer le dé');

  expect(total).toBeInTheDocument();
  expect(Button).toBeInTheDocument();

  fireEvent.click(Button);

  expect(onClickRolling).toHaveBeenCalled();
});
