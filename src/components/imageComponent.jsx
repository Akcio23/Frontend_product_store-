import { useState } from 'react';
import '../style/ImageComponent.css'

const ImageComponent = ({ img1, img2 }) => {
  const [currentImage, setCurrentImage] = useState(img1);

  return (
    <img
      src={currentImage}
      alt="product"
      className="image-product"
      onMouseOver={() => setCurrentImage(img2)} // Muda para a segunda imagem
      onMouseOut={() => setCurrentImage(img1)} // Volta para a primeira imagem
    />
  );
};

export default ImageComponent;
