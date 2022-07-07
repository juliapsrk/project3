import logo from "../assets/images/logo.png"
import Navbar from "./Navbar";
import HeaderWrapper from "../assets/wrappers/HeaderWrapper";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to='/' className="logo"><img src={logo} alt="PetPow" /></Link>
      <Navbar />
    </HeaderWrapper>
  );
}

export default Header;