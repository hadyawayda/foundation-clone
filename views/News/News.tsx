import NewsSection from "../../components/News/NewsSection";
import SubscribeSection from "../../components/News/SubscribeSection";
import "../../components/News/news.css";

const News = () => {
  return (
    <div className="news-section my-8 px-16 md:px-16">
      <NewsSection />
      <SubscribeSection />
    </div>
  );
};

export default News;
