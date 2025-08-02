import Card from "./Card";
import '../styles/CardContainer.css'

interface CardContainerProps{
  images: []
  resetFunc: () => void;
  updateScoreFunc: () => void;
}

const CardContainer: React.FC<CardContainerProps> = ({images, resetFunc, updateScoreFunc}) => {
  return(
    <div className="CardContainerDiv">
      {images.map(({ name, image }) => (
        <Card key={name} name={name} image={image} resetFunc={resetFunc} updateScoreFunc={updateScoreFunc}/>
      ))}
    </div>
  );
};

export default CardContainer;