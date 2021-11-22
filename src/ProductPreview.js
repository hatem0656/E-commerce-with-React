import "./Styles/ProductPreview.css";
import { useEffect, useState } from "react";
import { store, useGlobalState } from "state-pool";
import { ReactComponent as ExitIcon } from "./images/icon-close.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

store.setState("imageID", 1);

const ProductPreview = () => {
  // eslint-disable-next-line no-unused-vars
  const [mobileView, setMobileView] = useGlobalState("mobileView");
  const [currentImageID, setCurrentImage] = useGlobalState("imageID");
  const [isLightBox, setIsLightBox] = useState(false);

  const handleImageClick = (e) => {
    let activeImage = document.querySelectorAll(".active");
    activeImage.forEach((image) => image.classList.remove("active"));

    let selectedImage = document.querySelectorAll(
      `[id = ${CSS.escape(e.target.parentElement.getAttribute("id"))}]`
    );
    selectedImage.forEach((image) => (image.className = "active"));
    setCurrentImage(e.target.parentElement.getAttribute("id"));
  };

  const handleNextClick = (currentImageID) => {
    let activeImage = document.querySelectorAll(".active");
    activeImage.forEach((image) => image.classList.remove("active"));

    let selectedImage = document.querySelectorAll(
      `[id = ${CSS.escape(currentImageID.toString())}]`
    );
    selectedImage.forEach((image) => (image.className = "active"));
    // imageID = currentImageID.toString();
    setCurrentImage(currentImageID.toString());
  };

  useEffect(() => {
    let activeImage = document.querySelector(".active");
    if (activeImage === null) {
      let defaultImage = document.querySelector(".all-images div");
      setCurrentImage(defaultImage.getAttribute("id"));
      defaultImage.className = "active";
    } else {
      let currentActive = document.querySelectorAll(
        `[id = ${CSS.escape(activeImage.getAttribute("id"))}]`
      );
      currentActive.forEach((image) => (image.className = "active"));
      setCurrentImage(activeImage.getAttribute("id"));
    }
  }, [setCurrentImage]);

  return (
    <div className="product-preview">
      {console.log(mobileView)}
      <div
        className="current-image"
        onClick={() => {
          if (!mobileView) setIsLightBox(true);
        }}
      >
        <img
          src={require(`./images/image-product-${currentImageID}.jpg`).default}
          alt="ProductImage"
        />

        {mobileView && (
          <span
            className="next"
            onClick={() => {
              if (currentImageID < 4)
                handleNextClick(parseInt(currentImageID) + 1);
            }}
          >
            <FontAwesomeIcon icon={faAngleRight} size="2x" />
          </span>
        )}
        {mobileView && (
          <span
            className="previous"
            onClick={() => {
              if (currentImageID > 1)
                handleNextClick(parseInt(currentImageID) - 1);
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          </span>
        )}
      </div>
      <div className="all-images">
        <div id="1" onClick={(e) => handleImageClick(e)}>
          <img
            src={require("./images/image-product-1-thumbnail.jpg").default}
            alt="product1th"
          />
        </div>
        <div id="2" onClick={(e) => handleImageClick(e)}>
          <img
            src={require("./images/image-product-2-thumbnail.jpg").default}
            alt="product2th "
          />
        </div>
        <div id="3" onClick={(e) => handleImageClick(e)}>
          <img
            src={require("./images/image-product-3-thumbnail.jpg").default}
            alt="product3th"
          />
        </div>
        <div id="4" onClick={(e) => handleImageClick(e)}>
          <img
            src={require("./images/image-product-4-thumbnail.jpg").default}
            alt="product4th"
          />
        </div>
      </div>

      {isLightBox && (
        <div className="dark-bk">
          <div className="lightBox">
            <ProductPreview />
            <ExitIcon
              className="exit-lightBox"
              onClick={() => setIsLightBox(false)}
            />

            <span
              className="next"
              onClick={() => {
                if (currentImageID < 4)
                  handleNextClick(parseInt(currentImageID) + 1);
              }}
            >
              <FontAwesomeIcon icon={faAngleRight} size="2x" />
            </span>

            <span
              className="previous"
              onClick={() => {
                if (currentImageID > 1)
                  handleNextClick(parseInt(currentImageID) - 1);
              }}
            >
              <FontAwesomeIcon icon={faAngleLeft} size="2x" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
