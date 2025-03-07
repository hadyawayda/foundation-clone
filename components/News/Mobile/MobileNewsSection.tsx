"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsDataProps } from "../../../types/NewsData";
import MediaCard from "../Desktop/MediaCard";

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
            <MediaCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileNewsSection;
