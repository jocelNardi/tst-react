import React from 'react';
import CustomDice from '../../components/dice/Dice';
import './styles.css';
import { IuserInfo } from '../dices/Dice';
interface IStartedScreen {
  name: string;
  score: number;
  isRolling: boolean;
  valueDice1: number;
  valueDice2: number;
  user: IuserInfo[];
  total: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const StartedScreen: React.FC<IStartedScreen> = ({
  isRolling,
  total,
  valueDice1,
  valueDice2,
  onClick,
  name,
  user,
}) => {
  return (
    <div className="box">
      <div className="labelScore">
        {user.map((item) => (
          <div
            key={item.id}
            className="listUser"
            style={{
              color: item.name === name ? 'green' : '#000',
            }}
          >
            <label>{item.name}</label>
            <label style={{ margin: '10px 0', fontSize: 22, fontWeight: 'bold' }}>
              {item.score}
            </label>
          </div>
        ))}
      </div>
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
