/*
if "clicked" held in card
  when reseting, need to "unclick" all cards or regenerate them?
  so in card, onClick, if card is already "clicked" -> need to update score, bestscore, and reset the "clicked" property
   -> meaning regen cards on mount (useEffect) and when clicking card that is already "clicked"
*/

import React from 'react';
import '../styles/Card.css'

interface CardProps{
  image: string;
  name: string;
  resetFunc: () => void;
  updateScoreFunc: () => void;
}

const Card: React.FC<CardProps> = ({image , name, resetFunc, updateScoreFunc}) => {

  let clicked: boolean = false;

  function cardClicked (){
    console.log('clicked: ' + clicked);
    if(!clicked){
      updateScoreFunc();
      clicked = true;
    }else{
      resetFunc();
    }
  }

  return(
    <div className='CardDiv' onClick={cardClicked}>
      <img className='CardImage' key={name} src={image}/>
      <p className='CardName'>{name}</p>
    </div>
  );
};

export default Card;