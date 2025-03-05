import DesktopFoundationsSection from "./DesktopFoundationsSection";
import MobileFoundationsSection from "./MobileFoundationsSection";
import { images } from "../../constants/Foundation";

const FoundationsSection = () => {
  return (
    <div className="w-full -z-10">
      <DesktopFoundationsSection {...{ images }} />
      <MobileFoundationsSection {...{ images }} />
    </div>
  );
};

export default FoundationsSection;
