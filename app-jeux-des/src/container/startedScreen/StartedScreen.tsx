import React from 'react';
import CustomDice from '../../components/dice/Dice';

interface IStartedScreen {
  name: string;
  score: number;
  isRolling: boolean;
  valueDice1: number;
  valueDice2: number;
  total: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const StartedScreen: React.FC<IStartedScreen> = ({ score, isRolling, name, total, valueDice1, valueDice2, onClick }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <div>
        Joueur Actif: {name} et score:{score}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '10px 0' }}>
        <CustomDice isRolling={isRolling} value={valueDice1} />
        <CustomDice isRolling={isRolling} value={valueDice2} />
      </div>
      <div style={{ margin: '10px 0' }}>{total}</div>
      <button onClick={onClick} disabled={isRolling} style={{ padding: 10 }}>
        {isRolling ? 'En cours de lancer...' : 'Lancer le dé'}
      </button>
    </div>
  );
};

export default StartedScreen;
