"use client"
import React from "react";
import { Icon } from "@iconify/react";
import { Disclosure,DisclosureButton,DisclosurePanel } from "@headlessui/react";

const FAQ = () => {
  return (
    <section className="relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="relative rounded-2xl py-24 bg-faqBg bg-no-repeat bg-cover bg-primary">
          <p className="text-lg font-normal text-white text-center mb-6">FAQ</p>
          <h2 className="text-6xl font-semibold text-center text-white mx-72">
            Những câu hỏi thường gặp.
          </h2>
          <div className="w-full px-4 pt-16">
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-none ">
                      <span className="text-black">Chống thấm là gì?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""
                          }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="text-16 text-black/50 font-normal text-left pt-4 mt-6 border-t border-border">
                      <div className="lg:max-w-70%">
                        Chống thấm là biện pháp quan trọng để bảo vệ công trình xây dựng khỏi tác động của nước, ngăn ngừa tình trạng thấm.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-none">
                      <span className="text-black">Những dấu hiệu nhận biết rò rỉ nước</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""
                          }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="text-base text-black/50 pt-4 mt-6 text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        Rò rỉ nước là một vấn đề thường gặp, không chỉ gây lãng phí nước mà còn tiềm ẩn nhiều nguy cơ như ẩm,...
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-none">
                      <span className="text-black">Tại sao nên sử dụng dịch vụ SG Xanh?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""
                          }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="text-base text-black/50 pt-4 mt-6 font-normal text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        Sửa chữa điện nước là dịch vụ không thể thiếu trong mỗi gia đình, đặc biệt là khi gặp các sự cố không mong
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;