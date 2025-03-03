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
    <Link href={url} className={`foundation-card w-full sm:w-1/3 px-6 ${animationClass}`}>
      <div className="news-image-container relative overflow-hidden">
        <Image
          src={`/Assets/Images/${imageSrc}`}
          width={600}
          height={400}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="news-label absolute top-10 left-0 bg-white px-4 py-1 text-xs font-bold uppercase">
          {title}
        </div>
      </div>
      <div className="mt-2">
        <p className="news-date font-black uppercase">{date}</p>
        <p className="mt-2 news-description text-md xl:text-xl">{description}</p>
      </div>
    </Link>
  );
};

export default MediaCard;
