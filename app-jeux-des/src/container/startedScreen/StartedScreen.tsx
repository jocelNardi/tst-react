import React from 'react';
import CustomDice from '../../components/dice/Dice';
import './styles.css';
interface IStartedScreen {
  name: string;
  score: number;
  isRolling: boolean;
  valueDice1: number;
  valueDice2: number;
  total: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const StartedScreen: React.FC<IStartedScreen> = ({
  score,
  isRolling,
  name,
  total,
  valueDice1,
  valueDice2,
  onClick,
}) => {
  return (
    <div className="box">
      <label>
        Joueur Actif: {name} et score:{score}
      </label>
      <div className="root-dice">
        <CustomDice role="dice1" isRolling={isRolling} value={valueDice1} />
        <CustomDice role="dice2" isRolling={isRolling} value={valueDice2} />
      </div>
      <label style={{ margin: '10px 0' }}>{total}</label>
      <button onClick={onClick} disabled={isRolling} style={{ padding: 10 }}>
        {isRolling ? 'En cours de lancer...' : 'Lancer le dé'}
      </button>
    </div>
  );
};

export default StartedScreen;
