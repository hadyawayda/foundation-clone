import Image from "next/image";
import Link from "next/link";
import { images } from "../../constants/Foundation";
import DesktopFoundationsSection from "./DesktopFoundationsSection";

const FoundationsSection = () => {
  return (
    <div className="w-full -z-10">
      <DesktopFoundationsSection />

      {/* Mobile View - CSS Scroll-Snap Carousel */}
      <div className="lg:hidden relative w-full h-[70vh] overflow-hidden">
        <div className="carousel">
          {images.map((image, index) => (
            <Link key={index} href={image.href} className="carousel-item">
              <Image
                className="object-cover"
                src={image.src}
                width={1024}
                height={768}
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

              {/* Label */}
              {image.label && image.href && (
							<div className="foundation-label-container absolute bottom-2 left-6 right-0 flex items-end justify-between px-4 py-6 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
							  <div className="carousel-label text-white font-semibold text-4xl whitespace-nowrap">
								{image.label}
							  </div>
							  <div className="foundation-arrow right-10 xl:right-6 bottom-1.5 relative">
								<Image
								className="carousel-arrow"
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

        {/* Navigation Dots (Positioned at the Top) */}
        <div className="carousel-nav">
          {images.map((_, index) => (
            <a key={index} href={`#slide-${index}`} className="dot"></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoundationsSection;
