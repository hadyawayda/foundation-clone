import { NewsDataProps } from "../../../types/NewsData";
import MediaCard from "./MediaCard";

const DesktopNewsSection = ({ newsData }: { newsData: NewsDataProps[] }) => {
  return (
    <div className="desktop-news-container flex w-full justify-between">
      {newsData.map((item, index) => (
        <MediaCard key={index} {...item} />
      ))}
    </div>
  );
};

export default DesktopNewsSection;
