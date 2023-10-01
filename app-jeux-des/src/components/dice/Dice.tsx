import React from 'react';
import './Dice.css';
import D1 from '../../assets/png/D1.png';
import D2 from '../../assets/png/D2.png';
import D3 from '../../assets/png/D3.png';
import D4 from '../../assets/png/D4.png';
import D5 from '../../assets/png/D5.png';
import D6 from '../../assets/png/D6.png';

interface ICustomDice {
  isRolling: boolean;
  value: number;
  role?: React.AriaRole | undefined;
}
const Dice: React.FC<ICustomDice> = ({ isRolling, value, role }) => {
  const [Class, setClass] = React.useState('dice');
  const imgT = [undefined, D1, D2, D3, D4, D5, D6];

  React.useEffect(() => {
    const diceClass = `dice ${isRolling ? 'roll' : ''}`;
    setClass(diceClass);
  }, [isRolling]);

  return (
    <div className={Class}>
      <img role={role} src={imgT[value]} alt="imagedice" style={{ width: 50, height: 50 }} />
    </div>
  );
};

export default Dice;
