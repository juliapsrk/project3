import Navbar from "./Navbar";
import Wrapper from "../assets/wrappers/header";
import { MdPets } from 'react-icons/md';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <h1><Link to="/"><MdPets /> PetPow </Link> <span>Always listen to their pows</span></h1>
      <Navbar />
    </Wrapper>
  );
}

export default Header;