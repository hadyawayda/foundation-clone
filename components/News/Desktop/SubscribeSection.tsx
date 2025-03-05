import Link from "next/link";

const SubscribeSection = () => {
  return (
    <div className="subscribe-section flex flex-col items-center text-center mt-8">
      <Link
        href="https://www.cmacgm-group.com/en/news-media"
        className="read-more text-red-600 text-md font-extralight mb-4 underline"
      >
        read more
      </Link>

      <Link
        href="https://cloud.customer.cmacgm-group.com/news_subscribe"
        className="subscribe-button text-white font-bold py-4 px-10 transition-all duration-300"
      >
        Subscribe to our news
      </Link>
    </div>
  );
};

export default SubscribeSection;
