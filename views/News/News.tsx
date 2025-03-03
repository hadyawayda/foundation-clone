import NewsSection from "../../components/News/NewsSection";
import SubscribeSection from "../../components/News/SubscribeSection";
import "../../components/News/news.css";

const News = () => {
  return (
    <div className="news-section">
      <NewsSection />
	  <SubscribeSection />
    </div>
  );
};

export default News;
