import { newsData } from "../../constants/News";
import MediaCard from "./MediaCard";

const NewsSection = () => {
	return (
		<section className="news-section pt-4 pb-8 px-4 my-8 w-full flex justify-center">
		  <div className=" w-full flex justify-between">
			{newsData.map((item, index) => (
			  <MediaCard key={index} {...item} />
			))}
		  </div>
		</section>
	  );
};

export default NewsSection;
