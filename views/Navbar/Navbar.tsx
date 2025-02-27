import PrimaryNavbar from "../../components/Navbar/PrimaryNavbar/PrimaryNavbar";
import SecondaryNavbar from "../../components/Navbar/SecondaryNavbar/SecondaryNavbar";

const Navbar = () => {
  return (
    <nav className="header-container flex flex-col w-full">
      <PrimaryNavbar />
      <SecondaryNavbar />
    </nav>
  );
};

export default Navbar;
