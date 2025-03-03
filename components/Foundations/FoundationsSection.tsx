import Image from "next/image";
import Link from "next/link";
import { images } from "../../constants/Foundation";

const FoundationsSection = () => {
  return (
    <div className="w-full -z-10">
      <div className="foundation-container hidden lg:flex w-full h-[45vw] group">
        {images.map((image, index) => (
          <Link
            key={index}
            href={image.href}
            className="foundation-image-container relative flex-[1_1_33%] h-full transition-all duration-500 ease-in-out hover:flex-[1_1_70%] hover:siblings:flex-[1_1_15%]"
          >
            <Image
              className="object-cover w-full h-full"
              src={image.src}
              width={1024}
              height={768}
              alt={image.alt}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

            {image.label && image.href && (
              <div className="foundation-label-container absolute bottom-2 left-0 right-0 flex items-end justify-between px-4 py-6 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                <div className="foundation-label text-white text-4xl whitespace-nowrap">
                  {image.label}
                </div>
                <div className="foundation-arrow right-4 xl:right-6 bottom-1.5 relative">
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
