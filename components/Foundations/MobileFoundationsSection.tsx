"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageProps } from "../../types/FoundationImageType";

const MobileFoundationsSection = ({ images }: { images: ImageProps[] }) => {
  return (
    <section className="mobile-foundation-container hidden relative w-full h-[70vh]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (_, className) =>
            `<span class="${className} dot"></span>`,
        }}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Link href={image.href} className="relative w-full h-full block">
              <Image
                className="object-cover w-full h-full"
                src={image.src}
                width={1024}
                height={768}
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

              {image.label && (
                <div className="absolute bottom-2 left-6 right-8 flex items-center justify-between px-4 py-6">
                  <div className="text-white font-semibold text-4xl">
                    {image.label}
                  </div>
                  <div className="relative">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MobileFoundationsSection;
