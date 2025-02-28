import Image from "next/image";
import { images } from "../../constants/Foundation";

const FoundationsSection = () => {
  return (
    <div className="foundation-container flex w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative flex-[1_1_33%] h-[45vw] transition-all duration-500 ease-in-out hover:flex-[1_1_70%] hover:siblings:flex-[1_1_15%]"
        >
          <Image
            className="object-cover w-full h-full"
            src={image.src}
            width={1024}
            height={768}
            alt={image.alt}
          />
          {image.label && (
            <div className="absolute bottom-4 left-4 text-white text-lg font-bold opacity-100 group-hover:opacity-100 transition-opacity duration-300">
              {image.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FoundationsSection;
