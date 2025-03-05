import Image from "next/image";
import Link from "next/link";
import { ImageProps } from "../../types/FoundationImageType";

const DesktopFoundationsSection = ({ images }: { images: ImageProps[] }) => {
  return (
    <section className="desktop-foundation-container flex w-full h-[45vw] group">
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
    </section>
  );
};

export default DesktopFoundationsSection;
