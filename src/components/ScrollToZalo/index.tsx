'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ScrollToZalo() {
  

  return (
    <div className="fixed bottom-20 right-8 z-[999]">
      {
        <div      
          className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#3687d3] text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
        >
          {/* <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white" ></span> */}
          <Link href="https://zalo.me/0901413079"><Icon icon={"simple-icons:zalo"}></Icon></Link>
        </div>
      }
    </div>
  );
}
