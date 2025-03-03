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
    <div className={`foundation-card w-full sm:w-1/3 px-4 ${animationClass}`}>
      <div className="relative overflow-hidden">
        <Image
          src={`/Assets/Images/${imageSrc}`}
          width={600}
          height={400}
          alt={title}
          className="w-full h-auto object-cover"
        />
        <div className="news-label absolute top-10 left-0 bg-white px-2 py-1 text-xs font-bold uppercase">
          {title}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-red-600 font-bold text-sm uppercase">{date}</p>
        <p className="text-gray-800 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default MediaCard;
