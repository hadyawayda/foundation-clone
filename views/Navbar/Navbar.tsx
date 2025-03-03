import FillBar from "../../components/Navbar/FillBar/FillBar";
import "../../components/Navbar/navbar.css";
import PrimaryNavbar from "../../components/Navbar/PrimaryNavbar/PrimaryNavbar";
import SecondaryNavbar from "../../components/Navbar/SecondaryNavbar/SecondaryNavbar";

const Navbar = () => {
  return (
    <nav className="flex flex-col w-full">
      <SecondaryNavbar />
      <PrimaryNavbar />
      <FillBar />
    </nav>
  );
};

export default Navbar;
