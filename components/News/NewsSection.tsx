import { newsData } from "../../constants/News";
import DesktopNewsSection from "./Desktop/DesktopNewsSection";
import MobileNewsSection from "./Mobile/MobileNewsSection";

const NewsSection = () => {
  return (
    <>
      <DesktopNewsSection {...{ newsData }} />
      <MobileNewsSection {...{ newsData }} />
    </>
  );
};

export default NewsSection;
