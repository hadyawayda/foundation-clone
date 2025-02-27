import PrimaryFooter from "../../components/Footer/PrimaryFooter/PrimaryFooter";
import SecondaryFooter from "../../components/Footer/SecondaryFooter/SecondaryFooter";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <PrimaryFooter />
      <SecondaryFooter />
    </footer>
  );
};

export default Footer;
