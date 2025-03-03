import Image from "next/image";
import Link from "next/link";
import { images } from "../../constants/Foundation";

const MobileFoundationsSection = () => {
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <>
      <div className="lg:hidden relative w-full h-[70vh] overflow-hidden">
        <div className="carousel" data-infinite-carousel>
          {duplicatedImages.map((image, index) => (
            <Link key={index} href={image.href} className="carousel-item">
              <Image
                className="object-cover"
                src={image.src}
                width={1024}
                height={768}
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

              {image.label && image.href && (
                <div className="foundation-label-container absolute bottom-2 left-6 right-0 flex items-end justify-between px-4 py-6 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                  <div className="carousel-label text-white font-semibold whitespace-nowrap">
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

        <div className="carousel-nav">
          {images.map((_, index) => (
            <a
              key={index}
              href={`#slide-${index + images.length}`}
              className="dot"
            ></a>
          ))}
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const carousel = document.querySelector('[data-infinite-carousel]');
              if (!carousel) return;
              
              // Center the carousel initially
              setTimeout(() => {
                const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
                carousel.scrollLeft = itemWidth * ${images.length};
              }, 100);
              
              // Set up touch/mouse events
              let isDown = false;
              let startX;
              let scrollLeft;
              
              carousel.addEventListener('mousedown', (e) => {
                isDown = true;
                carousel.style.cursor = 'grabbing';
                startX = e.pageX - carousel.offsetLeft;
                scrollLeft = carousel.scrollLeft;
                e.preventDefault();
              });
              
              carousel.addEventListener('mouseleave', () => {
                isDown = false;
                carousel.style.cursor = 'grab';
              });
              
              carousel.addEventListener('mouseup', () => {
                isDown = false;
                carousel.style.cursor = 'grab';
              });
              
              carousel.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - carousel.offsetLeft;
                const walk = (x - startX) * 2;
                carousel.scrollLeft = scrollLeft - walk;
              });
              
              // Handle infinite scroll effect
              carousel.addEventListener('scroll', () => {
                const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
                const totalItems = ${duplicatedImages.length};
                const totalOriginalItems = ${images.length};
                
                // If we scroll to the end, jump to the duplicate in the middle
                if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - itemWidth) {
                  // Jump to the middle set of duplicates
                  setTimeout(() => {
                    carousel.scrollLeft = itemWidth * totalOriginalItems;
                  }, 200);
                }
                
                // If we scroll to the beginning, jump to the duplicate in the middle
                if (carousel.scrollLeft <= itemWidth) {
                  setTimeout(() => {
                    carousel.scrollLeft = itemWidth * totalOriginalItems * 2;
                  }, 200);
                }
              });
            });
          `,
        }}
      />
    </>
  );
};

export default MobileFoundationsSection;
