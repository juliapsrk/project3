import logo from "../assets/images/logo.png"
import Navbar from "./Navbar";
import Wrapper from "../assets/wrappers/header";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Link to='/' className="logo"><img src={logo} alt="PetPow" /></Link>
      <Navbar />
    </Wrapper>
  );
}

export default Header;