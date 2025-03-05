import NewsSection from "../../components/News/NewsSection";
import SubscribeSection from "../../components/News/Desktop/SubscribeSection";
import "../../components/News/news.css";

const News = () => {
  return (
    <section className="news-section">
      <NewsSection />
      <SubscribeSection />
    </section>
  );
};

export default News;
