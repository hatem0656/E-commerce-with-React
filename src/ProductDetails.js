import "./Styles/ProductDetails.css";
import ProductDescription from "./ProductDescription";
import ProductPreview from "./ProductPreview";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="container">
        <ProductPreview />
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductDetails;
