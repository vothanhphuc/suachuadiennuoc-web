'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ScrollToCall() {
  

  return (
    <div className="fixed bottom-8.5 right-8 z-[999]">
      {
        <div      
          className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#102C46] text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
        >
          <Link href="tel:+84-090-141-3079"><Icon icon={"tdesign:call-1-filled"}></Icon></Link>
        </div>
      }
    </div>
  );
}
