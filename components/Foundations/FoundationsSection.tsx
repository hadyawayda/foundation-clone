import Image from "next/image";
import Link from "next/link";
import { images } from "../../constants/Foundation";

const FoundationsSection = () => {
  return (
    <div className="foundation-container w-full overflow-hidden group">
      {/* Desktop View */}
      <div className="hidden lg:flex w-full h-[45vw]">
        {images.map((image, index) => (
          <Link
            key={index}
            href={image.href}
            className="group/image relative flex-[1_1_33%] h-full transition-all duration-500 ease-in-out hover:flex-[1_1_70%] hover:siblings:flex-[1_1_15%]"
          >
            {/* Image */}
            <Image
              className="object-cover w-full h-full"
              src={image.src}
              width={1024}
              height={768}
              alt={image.alt}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

            {/* Label & Arrow Container */}
            {image.label && image.href && (
              <div className="absolute inset-0 flex items-end justify-between px-4 pb-8 opacity-0 transition-opacity duration-500 group-hover/image:opacity-100 group-hover:opacity-0">
                {/* Label */}
                <div className="text-white text-4xl whitespace-nowrap">
                  {image.label}
                </div>
                {/* Arrow */}
                <div className="relative transition-transform duration-500 ease-in-out group-hover/image:-translate-x-3 group-hover/image:-translate-y-3">
                  <Image
                    src="/Assets/Images/arrow-white.svg"
                    width={24}
                    height={24}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="lg:hidden relative w-full h-[65vw] overflow-hidden">
        <div className="carousel flex w-[300%] transition-transform duration-500 ease-in-out">
          {images.map((image, index) => (
            <Link
              key={index}
              href={image.href}
              className="carousel-item w-full flex-shrink-0 relative"
            >
              {/* Image */}
              <Image
                className="object-cover w-full h-[65vw]"
                src={image.src}
                width={1024}
                height={768}
                alt={image.alt}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

              {/* Label & Arrow */}
              {image.label && (
                <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
                  {image.label}
                </div>
              )}
              <div className="absolute bottom-4 right-4 text-white">➚</div>
            </Link>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className="dot w-3 h-1 bg-gray-400 rounded transition-all duration-500 ease-in-out"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoundationsSection;
