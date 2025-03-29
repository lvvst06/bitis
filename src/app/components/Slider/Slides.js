'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

export default function Slides({ slides }) {
  return (
    <section>
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
          {slides?.items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Link href={item.url}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className='block h-full w-full object-cover'
                    loading={index == 0 ? 'eager' : 'lazy'}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
}
