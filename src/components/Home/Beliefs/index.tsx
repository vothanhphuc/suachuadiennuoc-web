"use client";
import React from "react";
import Link from "next/link";

const Beliefs = () => {
  return (
    <section className="bg-cover bg-center dark:bg-darkmode overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* COLUMN-1 */}

          <div className="bg-purple  pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase">
              Dịch vụ
            </h2>
            <h3 className="text-6xl sm:text-65xl font-bold text-white mb-5 text-center sm:text-start">
              SG xanh{" "}
              <span className="text-white/60">
                Dịch vụ đa dạng, chuyên nghiệp.
              </span>
            </h3>
            <h5 className="text-white/75 pt-2 mb-16 text-center sm:text-start">
              Công nghệ hiện đại, chính xác, tiết kiệm thời gian và chi phí.
            </h5>
            <div className="text-center sm:text-start">
              <Link
                href="tel:+84-090-141-3079"
                className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode"
              >
                Liên hệ
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="">
            <div className="pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3x1  bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom">
              <h2 className="text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase">
                Ưu điểm vượt trội
              </h2>
              <h3 className="text-6xl sm:text-65xl font-bold text-black mb-5 text-center sm:text-start">
                <span className="text-primary">Bảo hành</span> dài hạn
              </h3>
              <h5 className="pt-2 mb-16 text-center sm:text-start text-black/75 text-lg">
                Hỗ trợ 24/7 Luôn sẵn sàng phục vụ mọi lúc, mọi nơi.
              </h5>
              <div className="text-center sm:text-start">
                <Link
                  href="tel:+84-090-141-3079"
                  className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Beliefs;
