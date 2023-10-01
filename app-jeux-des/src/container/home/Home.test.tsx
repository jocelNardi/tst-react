import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Home from './Home';
import '@testing-library/jest-dom/extend-expect';

test('display home Page correctly', () => {
  const onChangeCountTour = jest.fn();
  const onChangeCountUser = jest.fn();
  const onClickStart = jest.fn();

  const { getByAltText, getByText, getByRole } = render(
    <Home
      onChangeCountTour={onChangeCountTour}
      onChangeCountUser={onChangeCountUser}
      onClickStart={onClickStart}
      disabled={false}
    />
  );

  const startImage = getByAltText('image_start_game');
  expect(startImage).toBeInTheDocument();

  const tourInput = getByRole('nbTour');
  const userInput = getByRole('nbPlayers');
  const startButton = getByText('Start Game');

  expect(tourInput).toBeInTheDocument();
  expect(userInput).toBeInTheDocument();
  expect(startButton).toBeInTheDocument();

  fireEvent.change(tourInput, { target: { value: '5' } });
  fireEvent.change(userInput, { target: { value: '3' } });

  expect(onChangeCountTour).toHaveBeenCalledWith(expect.anything());
  expect(onChangeCountUser).toHaveBeenCalledWith(expect.anything());

  fireEvent.click(startButton);

  expect(onClickStart).toHaveBeenCalled();
});
