import { newsData } from "../../constants/News";
import MediaCard from "./MediaCard";

const NewsSection = () => {
  return (
    <section className="pt-4 w-full flex justify-center">
      <div className=" w-full flex justify-between gap-1">
        {newsData.map((item, index) => (
          <MediaCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
