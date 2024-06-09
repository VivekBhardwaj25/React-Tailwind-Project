import React from "react";
import logo from "/src/assets/hobby_cue_logo.png";
import search from "/src/assets/search_icon.svg";
import group from "/src/assets/group.svg";
import down from "/src/assets/down_arrow.svg";
import hobbies from "/src/assets/hobbies.svg";
import bookmarks from "/src/assets/bookmarks.svg";
import bellicon from "/src/assets/bell_icon.svg";
import shopycard from "/src/assets/shop_card.svg";
import line from "/src/assets/line_icon.svg";

function Navbar() {
  const exploreHover = () => {
    return (
      <div>
        <div className="w-[220px] h-[210px]">
          <ul>
            <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A]">
              People - Community
            </li>
            <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A]">
              Places - Venues
            </li>
            <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A]">
              Programs - Events
            </li>
            <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A]">
              Products - Store
            </li>
            <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A]">
              Blogs
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div
      id="home"
      className="md:h-[80px] md:w-[1540px] w-[370px] mx-auto flex items-center h-[48px] py-3 md:py-0 gap-x-4 justify-center"
    >
      <div className="flex px-3 md:px-0 w-full justify-around mx-auto">
      <div className="flex items-center w-[600px]">
        <div className="md:w-[293px] md:h-[60px] my-[10px] w-[156.4px] h-[32px]">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center justify-center md:ml-[43px] ">
          <input
            type="text"
            placeholder="search here.."
            className="font-popin border border-gray-300 px-1 py-2 text-sm rounded-s-md w-[300px] h-[40px] outline-none hidden md:block bg-[#F8F9FA]"
          />
          <span className="">
            <img
              src={search}
              alt=""
              className="bg-[#8064a2] px-1 py-2 size-[39.5px] rounded-e-md cursor-pointer hidden md:block"
            />
          </span>
        </div>
      </div>

      <div className="flex items-center md:gap-x-[24px]">
        <div className="hidden md:block relative group md:py-7">
          <div className="w-[107px] h-[24px] flex items-center justify-around ">
            <img src={group} alt="" className="size-[19.92px]" />
            <p>Explore</p>
            <img src={down} alt="" className="size-[11.26px]" />
          </div>
          <div className="absolute top-[80px] hidden group-hover:block hover:block">
            <div className="w-[220px] h-[210px] bg-[#FFFFFF]">
              <ul className="divide-y cursor-pointer">
                <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A] flex items-center px-4">
                  People - Community
                </li>
                <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A] flex items-center px-4">
                  Places - Venues
                </li>
                <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A] flex items-center px-4">
                  Programs - Events
                </li>
                <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A] flex items-center px-4">
                  Products - Store
                </li>
                <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A] flex items-center px-4">
                  Blogs
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative group md:py-7">
          <div className="w-[107px] h-[24px] flex items-center justify-around">
            <img src={group} alt="" className="size-[19.92px]" />
            <p>Hobbies</p>
            <img src={down} alt="" className="size-[11.26px]" />
          </div>
          <div className="absolute top-[80px] hidden group-hover:block hover:block">
            <div className="w-[220px] h-[210px] bg-[#FFFFFF]">
              <ul className="divide-y cursor-pointer">
                <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A] flex items-center px-4">
                  People - Community
                </li>
                <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A] flex items-center px-4">
                  Places - Venues
                </li>
                <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A] flex items-center px-4">
                  Programs - Events
                </li>
                <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A] flex items-center px-4">
                  Products - Store
                </li>
                <li className="w-[220px] h-[42px] font-popin font-normal text-sm text-[#6D747A] flex items-center px-4">
                  Blogs
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[28px]">
          <img
            src={bookmarks}
            alt=""
            className="w-[14px] h-[16px] hidden md:block"
          />
        </div>
        <div className="h-[22px] w-[26px] bg-[#8064A2] rounded-full text-[#8064A2] fill-blue-500 flex justify-center items-center ml-[-10px] md:hidden block">
          <img
            src={search}
            alt=""
            className="h-[12px] w-[12px] bg-[#8064A2] bg-clip-text bg-transparent"
          />
        </div>
        <div className="md:w-[24px] w-[19px]">
          <img
            src={bellicon}
            alt=""
            className="w-[15.17px] h-[19.5px] ml-[13px] md:ml-0"
          />
        </div>

        <div className="w-[28px]">
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
          <img
            src={line}
            alt=""
            className="block md:hidden w-[18px] h-[12px]"
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
