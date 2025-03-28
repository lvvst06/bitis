'use client'

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/Slider.css';

export default function Slider() {
  const [slideData, setSlideData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/slide.json');
      const jsonData = await response.json();
      setSlideData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <section className='py-12'>
        <Swiper
          lazy="true"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {slideData?.items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Link href={item.url}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className='block h-full w-full object-cover'
                    loading="lazy"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
}
