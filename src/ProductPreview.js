import { useState } from "react";
import { ReactComponent as ExitIcon } from "./images/icon-close.svg";
const ProductPreview = () => {
  const [currentImage, setCurrentImage] = useState("1");
  const [isLighthouse, setIsLighthouse] = useState(false);
  const handleImageClick = (e) => {
    let activeImage = document.querySelector(".active");
    if (!e.target.classList.contains("active")) {
      e.target.parentElement.classList.add("active");
      activeImage.classList.remove("active");
    }
    setCurrentImage(e.target.getAttribute("id"));
  };
  return (
    <div className="product-preview">
      <div className="current-image" onClick={() => setIsLighthouse(true)}>
        <img
          src={require(`./images/image-product-${currentImage}.jpg`).default}
          alt="ProductImage"
        />
      </div>
      <div className="all-images">
        <div className="active" onClick={(e) => handleImageClick(e)}>
          <img
            id="1"
            src={require("./images/image-product-1-thumbnail.jpg").default}
            alt="product1th"
          />
        </div>
        <div onClick={(e) => handleImageClick(e)}>
          <img
            id="2"
            src={require("./images/image-product-2-thumbnail.jpg").default}
            alt="product2th "
          />
        </div>
        <div onClick={(e) => handleImageClick(e)}>
          <img
            id="3"
            src={require("./images/image-product-3-thumbnail.jpg").default}
            alt="product3th"
          />
        </div>
        <div onClick={(e) => handleImageClick(e)}>
          <img
            id="4"
            src={require("./images/image-product-4-thumbnail.jpg").default}
            alt="product4th"
          />
        </div>
      </div>

      {isLighthouse && (
        <div className="dark-bk">
          <div className="lightHouse">
            <ProductPreview />
            <ExitIcon
              className="exit-lightHouse"
              onClick={() => setIsLighthouse(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
