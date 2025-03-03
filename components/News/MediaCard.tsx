import Image from "next/image";

interface MediaCardProps {
  title: string;
  date: string;
  imageSrc: string;
  description: string;
  animationClass?: string;
}

const MediaCard = ({
  title,
  date,
  imageSrc,
  description,
  animationClass = "",
}: MediaCardProps) => {
  return (
    <div className={`foundation-card w-full sm:w-1/3 px-6 ${animationClass}`}>
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
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default MediaCard;
