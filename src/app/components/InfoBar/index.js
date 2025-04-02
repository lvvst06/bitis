'use client'

import React, { useState } from 'react';
import './styles.css';
import '@/app/styles/common.css';

export default function InfoBar() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <section className="info-bar max-w-[1600px]">
      <div className="px-[40px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center">
            <div className="hotline-left flex items-center space-x-1">
              <span>Hotline:</span>
              <span><a href="tel:0966158666">0966158666</a></span>
              <span>(8h – 21h30)</span>
            </div>
            <div className="aff-left pl-[15px] ml-[15px] border-l border-white">
              <a href="/pages/lien-he-hop-tac" data-vn="Liên hệ hợp tác"><span>Liên hệ hợp tác</span></a>
            </div>
          </div>
          <div className="flex">
            <ul className="flex items-center">
              <li>
                <a href="/pages/he-thong-cua-hang" data-vn="Tìm cửa hàng"><span>Tìm cửa hàng</span></a>
              </li>
              <li className="pl-[10px] ml-[10px] border-l border-white">
                <a href="/pages/tra-cuu-tinh-trang-don-hang" data-vn="Kiểm tra đơn hàng"><span>Kiểm tra đơn hàng</span></a>
              </li>
              <li className="pl-[10px] ml-[10px] mr-[10px] border-l border-white">
                <div className="relative">
                  <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
                    <img
                      src="/vietnam.webp"
                      className="h-[20px] pr-[16px]"
                      height={20}
                      width="100%"
                      alt="vietnam"
                    />
                    <span>VN</span>
                    <i className="fa-chevron-down"></i>
                  </div>
                  {isOpen && <div className="languages absolute bg-white text-black w-full shadow-md top-full left-0">
                    <div className="cursor-pointer py-[4px] px-[8px] flex items-center justify-center">
                      <img
                        src="/vietnam.webp"
                        className="h-[20px] pr-[4px]"
                        alt="vietnam"
                      />
                      <span>VN</span>
                    </div>
                    <div className="cursor-pointer mt-[4px] py-[4px] px-[8px] flex items-center justify-center">
                      <img
                        src="/united-kingdom.webp"
                        className="h-[20px] pr-[4px]"
                        alt="united-kingdom"
                      />
                      <span>EN</span>
                    </div>
                  </div>}
                </div>
              </li>
              <li className="pl-[10px] ml-[10px] border-l border-white">
                <a href="https://b2b.bitis.com.vn/" target="_blank">
                  <img src="/b2b.webp" height={33} width="100%" alt="B2B" className="h-[33px] rounded-[40px]"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
