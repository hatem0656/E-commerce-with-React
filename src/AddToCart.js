import "./Styles/AddToCart.css";
import { useState } from "react";
import { ReactComponent as CartIcon } from "./images/icon-cart.svg";
import { ReactComponent as PlusIcon } from "./images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "./images/icon-minus.svg";
const AddToCart = () => {
  const [counter, setCounetr] = useState(0);
  return (
    <div className="add-to-cart">
      <div>
        <MinusIcon
          onClick={() => {
            if (counter > 0) setCounetr(counter - 1);
          }}
        />
        <span>{counter}</span>
        <PlusIcon onClick={() => setCounetr(counter + 1)} />
      </div>
      <button>
        <CartIcon />
        <span> Add to cart </span>
      </button>
    </div>
  );
};

export default AddToCart;
