import React from "react";
import logo from "/src/assets/hobby_cue_logo.png";
import search from "/src/assets/search_icon.svg";
import group from "/src/assets/group.svg";
import down from "/src/assets/down_arrow.svg";
import hobbies from "/src/assets/hobbies.svg";
import bookmarks from "/src/assets/bookmarks.svg";
import bellicon from "/src/assets/bell_icon.svg";
import shopycard from "/src/assets/shop_card.svg";
import line from '/src/assets/line_icon.svg'

function Navbar() {
  return (
    <div id="home" className="h-[80px] w-[1440px] mx-auto flex items-center justify-center">
      <div className="flex items-center">
        <div className="w-[293px] h-[60px] my-[10px]">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center justify-center ml-[43px]">
          <input
            type="text"
            placeholder="search here.."
            className="font-popin border border-gray-300 px-1 py-2 text-sm rounded-s-md w-[300px] h-[40px] outline-none"
          />
          <span className="">
            <img
              src={search}
              alt=""
              className="bg-[#8064a2] px-1 py-2 size-[39.5px] rounded-e-md cursor-pointer"
            />
          </span>
        </div>
      </div>

      <div className="ml-[90px] flex items-center md:gap-x-[24px] gap-x-[16px]">
        <div className="hidden md:block">
          <div className="w-[107px] h-[24px] flex items-center justify-around">
            <img src={group} alt="" className="size-[19.92px]" />
            <p>Explore</p>
            <img src={down} alt="" className="size-[11.26px]" />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="w-[107px] h-[24px] flex items-center justify-around">
            <img src={group} alt="" className="size-[19.92px]" />
            <p>Hobbies</p>
            <img src={down} alt="" className="size-[11.26px]" />
          </div>
        </div>

        <div>
          <img
            src={bookmarks}
            alt=""
            className="w-[14px] h-[18px] hidden md:block"
          />
        </div>
        <div>
          <img src={bellicon} alt="" className="w-[15.17px] h-[19.5px]" />
        </div>
        <div>
          <img
            src={shopycard}
            alt=""
            className="w-[22px] h-[23px] hidden md:block"
          />
        </div>
        <div>
          <button className="text-[#8064A2] text-sm font-popin border border-[#8064A2] rounded-[8px] px-4 py-1 w-[112px] h-[40px] cursor-pointer transition ease-in delay-150 hover:bg-[#8064A2] hover:text-white hidden md:block">
            sign in
          </button>
        </div>
        <div>
            <img src={line} alt="" className="block md:hidden w-[18px] h-[12px]" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
