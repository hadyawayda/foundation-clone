import DesktopFoundationsSection from "./DesktopFoundationsSection";
import MobileFoundationsSection from "./MobileFoundationsSection";
import { images } from "../../constants/Foundation";

const FoundationsSection = () => {
  return (
    <>
      <DesktopFoundationsSection {...{ images }} />
      <MobileFoundationsSection {...{ images }} />
    </>
  );
};

export default FoundationsSection;
