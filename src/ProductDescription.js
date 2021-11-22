import "./Styles/ProductDescription.css";
import AddToCart from "./AddToCart";

const ProductDescription = () => {
  return (
    <div className="product-description">
      <h3 className="company-name">Sneaker Company</h3>
      <h1 className="product-name">Fall Limited Edition Sneakers</h1>
      <p className="description">
        These low-profile sneakers are your prefect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <span className="actual">$125.00</span>
        <span className="discount">50%</span>
        <span className="old">$250.00</span>
      </div>
      <AddToCart />
    </div>
  );
};

export default ProductDescription;
