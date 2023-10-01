import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import FinishedScreen from './FinishedScreen';

test('should be display when game is finished', () => {
  const onClickRestart = jest.fn();
  const MockedProps = {
    name: 'Joueur 1',
    score: 24,
  };
  const { getByText } = render(<FinishedScreen {...MockedProps} onClickRestart={onClickRestart} />);

  const textTitle = getByText('Partie Terminé');
  const textWinner = getByText('Le Gagnant');
  const textName = getByText('Joueur 1');
  const textScore = getByText('Score: 24');
  const Button = getByText('Rejouer');

  expect(textTitle).toBeInTheDocument();
  expect(textWinner).toBeInTheDocument();
  expect(textName).toBeInTheDocument();
  expect(textScore).toBeInTheDocument();
  expect(Button).toBeInTheDocument();

  fireEvent.click(Button);

  expect(onClickRestart).toHaveBeenCalled();
});
