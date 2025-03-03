import DesktopFoundationsSection from "./DesktopFoundationsSection";
import MobileFoundationsSection from "./MobileFoundationsSection";

const FoundationsSection = () => {
  return (
    <div className="w-full -z-10">
      <DesktopFoundationsSection />
      <MobileFoundationsSection />
    </div>
  );
};

export default FoundationsSection;
