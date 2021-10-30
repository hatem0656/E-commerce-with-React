import { ReactComponent as CartIcon } from "./images/icon-cart.svg";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as ExitIcon } from "./images/icon-close.svg";
import avatar from "./images/image-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [viewMenu, setView] = useState({});
  const menuStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "hsl(0, 0%, 100%)",
    width: "60%",
    zIndex: "100",
    position: "absolute",
    top: "10%",
    left: 0,
  };

  const handleResize = () => {
    if (window.innerWidth > 767 && Object.keys(viewMenu).length !== 0) {
      setView({});
    }
  };
  window.addEventListener("resize", handleResize);

  return (
    <header>
      <div className="container">
        <FontAwesomeIcon
          className="bars"
          icon={faBars}
          size="lg"
          onClick={() => setView(menuStyles)}
        />
        <Logo className="logo" />
        <nav style={viewMenu}>
          <ExitIcon className="exit" onClick={() => setView({})} />
          <a href="/">Collections</a>
          <a href="/">Men</a>
          <a href="/"> Women</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </nav>
        <CartIcon className="cart" />
        <span>
          <img src={avatar} alt="avatar" />
        </span>
      </div>
    </header>
  );
};

export default Header;
