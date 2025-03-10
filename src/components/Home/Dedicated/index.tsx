"use client";
import React from "react";
import Image from "next/image";

const Dedicated = () => {
  return (
    <section className="relative bg-cover bg-center dark:bg-darkmode overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <Image
            src="/images/dedicated/spiral.svg"
            height={272}
            width={686}
            alt="spiral-design"
            className="absolute left-0 top-0 hidden lg:block -z-10"
          />
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="/images/dedicated/acuong 01.jpg"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0"
            />
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <Image
                src="/images/dedicated/comma.svg"
                alt="comma-image"
                width={200}
                height={106}
                className="absolute -top-16 -left-32 hidden lg:block"
              />
            </div>
            <p className="text-6xl font-bold sm:leading-tight text-center -mr-1 lg:text-start">
              “Điện Nước Sài gòn xanh – Sự lựa chọn hoàn hảo cho ngôi nhà của bạn.”
            </p>
            <p className="font-medium text-black/55 text-2xl mt-5 text-center lg:text-start -ml-1">
              Chúng tôi luôn tận tâm với khách hàng dù là Dịch Vụ nhỏ nhất
            </p>
            <p className="text-2xl font-semibold mt-12 lg:pl-32 relative lg:before:block before:hidden before:absolute before:bg-black before:h-0.5 before:w-24 before:left-0 before:bottom-1/2 text-center lg:text-start">
              Trần Thanh Cường, CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dedicated;
