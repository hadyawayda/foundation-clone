import Image from "next/image";
import Link from "next/link";
import { images } from "../../constants/Foundation";

const DesktopFoundationsSection = () => {
	return (
		<div className="hidden lg:flex w-full h-[45vw] group">
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

            {/* Label & Arrow Container (Only Hovered Image's Text Stays Visible) */}
            {image.label && image.href && (
              <div className="absolute inset-0 flex items-end justify-between px-4 pb-8 transition-opacity duration-500 opacity-100 group-hover:opacity-0 group-hover/image:opacity-100 foundation-label-container">
                {/* Label */}
                <div className="text-white text-4xl whitespace-nowrap">
                  {image.label}
                </div>
                {/* Arrow (Animates on Hover) */}
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
	)
};

export default DesktopFoundationsSection;