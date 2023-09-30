import React from 'react';
import './FinishedScreen.css';
interface IFinishedScreen {
  name: string;
  score: number;
  onClickRestart: React.MouseEventHandler<HTMLButtonElement>;
}
const FinishedScreen: React.FC<IFinishedScreen> = ({ name, onClickRestart, score }) => {
  return (
    <div className="box">
      <h2>Partie Terminé</h2>
      <h6>Le Gagnant</h6>
      <p>{name}</p>
      <p>Score: {score}</p>
      <button onClick={onClickRestart}>Rejouer</button>
    </div>
  );
};

export default FinishedScreen;
