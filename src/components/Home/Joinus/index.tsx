"use client"
import React from "react";
import Link from "next/link";

const Join = () => {
  return (
    <section className="overflow-hidden dark:bg-darkmode bg-joinus">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest uppercase">
            Join us
          </h3>
          <h2 className="text-6xl font-bold my-6">
            Dịch Vụ Sài Gòn Xanh – Sự lựa chọn hoàn hảo cho ngôi nhà của bạn!
          </h2>
          <p className="text-black/50 text-base font-normal">
            Chúng tôi luôn tận tâm với khách hàng dù là Dịch Vụ nhỏ nhất.
          </p>
        </div>

        <div className="mx-auto max-w-4xl pt-5">
          <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-grey sm:rounded-full">
            <div>
              <input
                type="name"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-transparent pl-1 focus:outline-none bg-emailbg focus:text-black"
                placeholder="Your name"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="email"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-transparent focus:outline-none bg-emailbg focus:text-black"
                placeholder="Your email"
                autoComplete="off"
              />
            </div>
            <div className="sm:mr-3">
              <Link
                href="#"
                className="w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-5 px-12 hover:bg-darkmode duration-300"
              >
                Join!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Join;
