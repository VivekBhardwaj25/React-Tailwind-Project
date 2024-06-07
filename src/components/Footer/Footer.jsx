import React from "react";
import email from "/src/assets/email.svg"
import facebk from "/src/assets/facebk.svg"
import gogle from "/src/assets/gogle.svg"
import insta from "/src/assets/insta.svg"
import pintrest from "/src/assets/pintrest.svg"
import telegram from "/src/assets/telegram.svg"
import twitter from "/src/assets/twiiter.svg"
import youtube from "/src/assets/youtube.svg"

function Footer() {
  return (
    <div className="w-full h-[380px] mx-auto flex flex-col justify-between">
      <div className="w-[1217px] h-[182px] mx-auto mt-[60px] flex justify-between flex-wrap">
        <div className="w-[90px] h-[156px]">
          <h1 className="font-popin font-bold text-sm mb-4">Hobbycue</h1>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              About Us
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Our Services
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Work with Us
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              FAQ
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Contact Us
            </a>
          </p>
        </div>
        <div className="w-[110px] h-[182px]">
          <h1 className="font-popin font-bold text-sm mb-4">How Do I</h1>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Sign Up
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Add a Listing
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Claim Listing
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Post a Query
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Add a Blog Post
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Other Queries
            </a>
          </p>
        </div>
        <div className="w-[87px] h-[130px]">
          <h1 className="font-popin font-bold text-sm mb-4">Quick Links</h1>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Listings
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Blog Posts
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Shop / Store
            </a>
          </p>
          <p>
            <a href="#" className="font-popin font-normal text-sm">
              Community
            </a>
          </p>
        </div>
        <div className="w-[360px] h-[182px] flex flex-col justify-between">
          
          <div>
          <h1 className="font-popin font-bold text-sm mb-4">Social Media</h1>
          <div className="h-[24px] flex justify-between">
            <div className="w-[24px] h-[24px] rounded-full bg-[#EBEDF0] flex justify-center items-center cursor-pointer">
            <img src={facebk} alt="" className="w-[16px] h-[16px]"/>
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-[#EBEDF0] flex justify-center items-center cursor-pointer">
            <img src={twitter} alt="" className="w-[16px] h-[16px]"/>
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-[#EBEDF0] flex justify-center items-center cursor-pointer">
            <img src={insta} alt="" className="w-[16px] h-[16px]"/>
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-[#EBEDF0] flex justify-center items-center cursor-pointer">
            <img src={pintrest} alt="" className="w-[16px] h-[16px]"/>
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-[#EBEDF0] flex justify-center items-center cursor-pointer">
            <img src={gogle} alt="" className="w-[16px] h-[16px]"/>
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-[#EBEDF0] flex justify-center items-center cursor-pointer">
            <img src={youtube} alt="" className="w-[16px] h-[16px]"/>
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-[#EBEDF0] flex justify-center items-center cursor-pointer">
            <img src={telegram} alt="" className="w-[16px] h-[16px]"/>
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-[#EBEDF0] flex justify-center items-center cursor-pointer">
            <img src={email} alt="" className="w-[16px] h-[16px]"/>
            </div>
          </div>
          </div>

          <div>
            <h1 className="font-popin font-bold text-sm mb-4">
              Invite Friends
            </h1>

            <div className="w-[360px]">
              <input
                type="text"
                placeholder="Email ID"
                className="font-popin border border-gray-300 py-2 text-[12px] rounded-s-md w-[300px] h-[40px] outline-none font-normal px-4"
              />
              <span className="p-[11.8px] bg-[#8064A2] text-[#ffffff] font-popin font-semibold text-xs rounded-e-[8px] cursor-pointer">
                Invite
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F7F5F9] h-[78px] font-popin font-medium text-sm text-black flex justify-center items-center">
        <p>© Purple Cues Private Limited</p>
      </div>
    </div>
  );
}

export default Footer;
