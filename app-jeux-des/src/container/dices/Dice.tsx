import React, { useEffect, useState } from 'react';

import FinishedScreen from '../finishedScreen/FinishedScreen';
import Home from '../home/Home';
import StartedScreen from '../startedScreen/StartedScreen';
import './style.css';
interface IuserInfo {
  score: number;
  name: string;
  id: number;
}
interface Icount {
  total: number;
  totalTour: number;
  userCount: number;
  currentTour: number;
}

interface IDice {
  statusDefaultGame?: 'STARTED' | 'FINISHED' | undefined;
  userDefault?: IuserInfo[] | undefined;
  countDefault?: Icount;
}

const initialStateCount = {
  total: 0,
  totalTour: 0,
  userCount: 0,
  currentTour: 1,
};
const Dice: React.FC<IDice> = ({
  statusDefaultGame = undefined,
  userDefault = [],
  countDefault = initialStateCount,
}) => {
  const [count, setCount] = useState<Icount>(countDefault);

  const [statusGame, setstatusGame] = useState<'STARTED' | 'FINISHED' | undefined>(
    statusDefaultGame
  );
  const [user, setuser] = useState<IuserInfo[]>(userDefault);

  const [isRolling, setIsRolling] = useState<boolean>(false);

  const [currentPlayer, setCurrentPlayer] = useState<number>(0);

  const [value, setValue] = useState<{
    dice1: number;
    dice2: number;
  }>({
    dice1: 1,
    dice2: 1,
  });
  const nextPlayer = () => {
    setCurrentPlayer((currentPlayer + 1) % user.length);
    setCount((prev) => ({ ...prev, total: 0 }));
  };

  const rollDice = () => {
    setIsRolling(true);
    setCount((prev) => {
      return {
        ...prev,
        currentTour: prev.currentTour + 1,
      };
    });

    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      const randomValue2 = Math.floor(Math.random() * 6) + 1;
      const totalValue = randomValue + randomValue2;
      // Mettre à jour le score du joueur actif
      const nouveauxUtilisateurs = [...user];
      nouveauxUtilisateurs[currentPlayer].score += totalValue;
      setuser(nouveauxUtilisateurs);

      // Passer au joueur suivant
      nextPlayer();

      setValue({ dice1: randomValue, dice2: randomValue2 });
      setCount((prev) => {
        return {
          ...prev,
          total: totalValue,
        };
      });

      setIsRolling(false);

      if (count.currentTour === count.totalTour * count.userCount) {
        setstatusGame('FINISHED');
      }
    }, 1000);
  };

  const onClickStart = () => setstatusGame('STARTED');

  const onClickRestart = () => {
    setuser((prev) =>
      prev.map((item) => {
        return {
          ...item,
          score: 0,
        };
      })
    );
    setstatusGame('STARTED');
    setCurrentPlayer(0);
    setCount((prev) => ({ ...prev, currentTour: 0, total: 0 }));
  };

  useEffect(() => {
    setuser([]);
    if (count.userCount) {
      for (let index = 0; index < count.userCount; index++) {
        setuser((prev) => [...prev, { score: 0, name: `Joueur ${index + 1}`, id: index + 1 }]);
      }
    }
    setCurrentPlayer(0);
  }, [count.userCount]);

  useEffect(() => {
    if (count.currentTour > 0 && count.currentTour % count.totalTour === 0) {
      nextPlayer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count.currentTour, count.totalTour, user.length]);
  const userWinners = user.sort((userA, userB) => userB.score - userA.score)[0];

  return (
    <div className="container">
      {!statusGame && (
        <Home
          disabled={!(count.totalTour > 0 && count.userCount > 0)}
          onChangeCountTour={(e) =>
            setCount((prev) => ({
              ...prev,
              totalTour: Number(e.target.value),
            }))
          }
          onChangeCountUser={(e) =>
            setCount((prev) => ({
              ...prev,
              userCount: Number(e.target.value),
            }))
          }
          onClickStart={onClickStart}
        />
      )}
      {statusGame === 'STARTED' && (
        <StartedScreen
          score={user[currentPlayer].score}
          isRolling={isRolling}
          name={user[currentPlayer]?.name}
          total={count.total}
          valueDice1={value.dice1}
          valueDice2={value.dice2}
          onClick={rollDice}
        />
      )}
      {statusGame === 'FINISHED' && (
        <FinishedScreen
          name={userWinners.name}
          onClickRestart={onClickRestart}
          score={userWinners.score}
        />
      )}
    </div>
  );
};

export default Dice;
