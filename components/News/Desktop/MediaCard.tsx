import Image from "next/image";
import Link from "next/link";

interface MediaCardProps {
  title: string;
  date: string;
  imageSrc: string;
  url: string;
  description: string;
  animationClass?: string;
}

const MediaCard = ({
  title,
  date,
  imageSrc,
  url,
  description,
  animationClass = "",
}: MediaCardProps) => {
  return (
    <Link
      href={url}
      className={`foundation-card w-full px-6 py-2 ${animationClass}`}
    >
      <div className="news-image-container relative overflow-hidden">
        <Image
          src={`/Assets/Images/${imageSrc}`}
          width={600}
          height={400}
          alt={title}
          className="media-card-image w-full object-cover"
        />
        <div className="news-label absolute top-10 left-0 bg-white px-4 py-1 text-xs font-bold uppercase">
          {title}
        </div>
      </div>
      <div>
        <p className="news-date font-black text-base uppercase py-2 leading-6">
          {date}
        </p>
        <p className="news-description text-md xl:text-xl">{description}</p>
      </div>
    </Link>
  );
};

export default MediaCard;
