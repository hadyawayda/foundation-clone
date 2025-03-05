import { newsData } from "../../constants/News";
import DesktopNewsSection from "./Desktop/DesktopNewsSection";
import MobileNewsSection from "./Mobile/MobileNewsSection";

const NewsSection = () => {
  return (
    <section className="pt-4 w-full flex justify-center">
      <DesktopNewsSection {...{ newsData }} />
      <MobileNewsSection {...{ newsData }} />
    </section>
  );
};

export default NewsSection;
