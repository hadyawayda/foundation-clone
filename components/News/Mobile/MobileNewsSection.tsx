"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsDataProps } from "../../../types/NewsData";

const MobileNewsSection = ({ newsData }: { newsData: NewsDataProps[] }) => {
  return (
    <div className="mobile-news-container py-2 px-[22.68] hidden relative w-full">
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
        {newsData.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={item.url} className="relative w-full h-full block">
              {/* News Image */}
              <Image
                className="media-card-image object-cover w-full h-full"
                src={`/Assets/Images/${item.imageSrc}`}
                width={1024}
                height={768}
                alt={item.title}
              />

              {/* Label, Date & Arrow */}
              <div className="absolute bottom-2 left-6 right-8 flex items-center justify-between px-4 py-6">
                <div className="text-white font-semibold text-4xl">
                  {item.title}
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

              {/* Date & Description */}
              <div className="absolute bottom-8 left-6 text-white text-md">
                <p className="font-bold text-lg">{item.date}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileNewsSection;
