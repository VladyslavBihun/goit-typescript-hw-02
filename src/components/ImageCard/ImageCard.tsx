import { ImageCardData, ImgClickProp } from "../../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  card: ImageCardData;
  onImgClick: ImgClickProp;
}

const ImageCard: React.FC<ImageCardProps> = ({ card, onImgClick }) => {
  return (
    <div
      className={css.card}
      onClick={() => onImgClick(card.urls.regular, card.altDescription)}
    >
      <img
        className={css.img}
        src={card.urls.small}
        alt={card.altDescription}
      />
    </div>
  );
};

export default ImageCard;
