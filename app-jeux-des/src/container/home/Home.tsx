import React from 'react';
import StartImage from '../../assets/jpg/start.jpg';
import TextInput from '../../components/TextInput/TextInput';
import './style.css';
interface IHome {
  onChangeCountTour: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onChangeCountUser: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onClickStart: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled: boolean;
}
const Home: React.FC<IHome> = ({ onChangeCountTour, onChangeCountUser, onClickStart, disabled = true }) => (
  <div className="root">
    <img src={StartImage} alt="image_start_game" />
    <TextInput label="Nombre de Tour" placeholder="Inserer nombre de tour" onChange={onChangeCountTour} type="number" />
    <TextInput label="Nombre de Joueur" placeholder="Inserer nombre de Joueur" onChange={onChangeCountUser} type="number" />
    <button className="btnstart" onClick={onClickStart} disabled={disabled}>
      Start Game
    </button>
  </div>
);

export default Home;
