import React from "react";
import { useState, useEffect, useCallback } from "react";
import obj1 from "/src/assets/objects_1.svg";
import obj2 from "/src/assets/objects_2.svg";
import google from "/src/assets/google.svg";
import facebook from "/src/assets/facebook.svg";
import lock from "/src/assets/lock.svg";
import peoples from "/src/assets/peoples.svg";
import location from "/src/assets/location.svg";
import bag from "/src/assets/bag.svg";
import check from "/src/assets/check.svg";
import "/src/components/Main/Main.css";
import add from "/src/assets/add.svg";
import quot from "/src/assets/quotation.svg";
import actres from "/src/assets/ellipse_26.png";
import mic from "/src/assets/mic.svg";
import play from "/src/assets/play_arrow.svg";
import obj4 from "/src/assets/objects_4.svg";
import obj5 from "/src/assets/objects_5.svg";
import arrowforward from "/src/assets/arrow_forward.svg"
import { IoMdEye, IoIosEyeOff } from "react-icons/io";

function Main() {
  const [isLogin, setIsLogin] = useState(true);
  const [Icon, setIcon] = useState(true)
  const [type, setType] = useState(true)

  const handleToggale = () => {
    if(type === true) {
      setType(false)
      setIcon(false)
    } else {
      setType(true)
      setIcon(true)
    }
  }
 


  const LogIn = () => {
    return (
      <div>
        <div className="md:w-[410px] md:h-[96px] md:gap-y-[16px] mt-[32px] w-[312px] h-[78px]">
          <div className="w-[410px] h-[40px] border border-[#8064A2] rounded-[8px] flex items-center">
            <img src={google} alt="" className="w-[16px] h-[16px] ml-[24px]" />
            <a href="" className="font-popin text-sm text-center md:ml-[88px]">
              Continue with Google
            </a>
          </div>
          <div className="w-[410px] h-[40px] border border-[#8064A2] rounded-[8px] flex items-center mt-[16px]">
            <img
              src={facebook}
              alt=""
              className="w-[16px] h-[16px] ml-[24px]"
            />
            <a href="" className="font-popin text-sm text-center ml-[88px]">
              Continue with Facebook
            </a>
          </div>
        </div>

        <div className="w-[410px] h-[16px] mt-[28px] flex items-center justify-between">
          <div className="w-[149px] h-[2px] bg-[#CED4DA]"></div>
          <div className="w-[97px] h-[16px] flex item center">
            <span className="text-[12px] font-popin font-semibold">
              Or connect with
            </span>
          </div>
          <div className="w-[149px] h-[2px] bg-[#CED4DA]"></div>
        </div>

        <div className="w-[410px] h-[96px] flex flex-col gap-y-[16px] mt-[28px]">
          <input
            type="email"
            placeholder="Email"
            className="text-[#939CA3] font-popin h-[40px] rounded-[8px] w-[410px] pt-[12px] pb-[12px] pl-[12px] outline-none"
            
          />
          <div className="relative">
            <input
              type = {type ? 'password' : 'text'}
              placeholder="Password"
              className="text-[#939CA3] font-popin h-[40px] rounded-[8px] w-[410px] pt-[12px] pb-[12px] pl-[12px] outline-none"
            />
            <div className="text-[#6d747a] w-[16px] h-[16px] absolute right-3.5 top-2.5">
              {Icon ? <IoIosEyeOff size={20} onClick={handleToggale}/> : <IoMdEye size={20} onClick={handleToggale}/>}
            
            </div>
            
            <div></div>
          </div>
        </div>

        <div className="w-[410px] h-[16px] flex justify-between mt-[24px]">
          <div className="w-[116px] h-[16px] flex items-center">
            <input
              type="checkbox"
              name="remeber"
              id="remeber"
              className="cursor-pointer"
            />
            <label
              htmlFor="remeber"
              className="font-popin font-normal text-[12px] ml-[8px] cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <div className="w-[131px] h-[16px] flex items-center justify-end cursor-pointer">
            <img
              src={lock}
              alt=""
              className="w-[10.51px] h-[14px] cursor-pointer"
            />
            <label className="font-popin font-normal text-[12px] ml-[8px] cursor-pointer">
              Forgot password?
            </label>
          </div>
        </div>

        <div className="mt-[24px]">
          <button className="w-[410px] h-[40px] border border-[#8064a2] bg-[#8064a2] text-[#ffffff] rounded-[8px] text-center font-popin font-semibold text-sm hover:bg-[#634e7d]">
            Continue
          </button>
        </div>
      </div>
    );
  };

  const JionIn = () => {
    return (
      <div>
        <div className="w-[410px] h-[96px] gap-y-[16px] mt-[32px]">
          <div className="w-[410px] h-[40px] border border-[#8064A2] rounded-[8px] flex items-center">
            <img src={google} alt="" className="w-[16px] h-[16px] ml-[24px]" />
            <a href="" className="font-popin text-sm text-center ml-[88px]">
              Continue with Google
            </a>
          </div>
          <div className="w-[410px] h-[40px] border border-[#8064A2] rounded-[8px] flex items-center mt-[16px]">
            <img
              src={facebook}
              alt=""
              className="w-[16px] h-[16px] ml-[24px]"
            />
            <a href="" className="font-popin text-sm text-center ml-[88px]">
              Continue with Facebook
            </a>
          </div>
        </div>

        <div className="w-[410px] h-[16px] mt-[28px] flex items-center justify-between">
          <div className="w-[149px] h-[2px] bg-[#CED4DA]"></div>
          <div className="w-[97px] h-[16px] flex item center">
            <span className="text-[12px] font-popin font-semibold">
              Or connect with
            </span>
          </div>
          <div className="w-[149px] h-[2px] bg-[#CED4DA]"></div>
        </div>

        <div className="w-[410px] h-[96px] flex flex-col gap-y-[16px] mt-[28px]">
          <input
            type="email"
            placeholder="Email"
            className="text-[#939CA3] font-popin h-[40px] rounded-[8px] w-[410px] pt-[12px] pb-[12px] pl-[12px] outline-none"
          />
          <div className="">
            <input
              type="password"
              placeholder="Password"
              className="text-[#939CA3] font-popin h-[40px] rounded-[8px] w-[410px] pt-[12px] pb-[12px] pl-[12px] outline-none"
            />
            <div></div>
          </div>
        </div>

        <div className="w-[406px] h-[16px] flex justify-between mt-[4px]">
          <div className="w-[186px] h-[16px] flex items-center gap-x-[2px]">
            <div className="w-[60px] h-[4px] rounded-[2px] bg-[#ffffff]"></div>
            <div className="w-[60px] h-[4px] rounded-[2px] bg-[#ffffff]"></div>
            <div className="w-[60px] h-[4px] rounded-[2px] bg-[#ffffff]"></div>
          </div>
          <div className="w-[96px] h-[16px] flex items-center justify-end cursor-pointer">
            <p className="font-popin font-semibold text-[10px] text-[#939CA3]">
              Password strength
            </p>
          </div>
        </div>

        <div className="w-[402px] h-[18px] mt-[12px] mx-auto">
          <p className="f font-popin font-normal text-[12px] text-[#6D747A]">
            By continuing, you agree to our{" "}
            <span className="text-black">Terms of Service</span> and{" "}
            <span className="text-black">Privacy Policy</span>
          </p>
        </div>

        <div className="mt-[12px]">
          <button className="w-[410px] h-[40px] bg-[#8064A2] text-[#ffffff] rounded-[8px] text-center font-popin font-semibold text-sm hover:bg-[#634e7d]">
            Agree and Continue
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="md:w-[1440px] md:h-[678px] bg-[#f7f5f9] md:flex w-[360px] h-[720px] mx-auto border-[3px]">
        {/* Left Section */}
        <div className="md:h-[578px] md:w-[707px] md:mt-[100px] md:ml-[100px] w-[360px] h-[720px] mx-auto">
          <div className="md:w-[580px] md:h-[54px] w-full h-[27px] text-center">
            <h1 className="font-popin font-semibold italic md:text-4xl text-lg pt-[10px]">
              Explore your <span className="text-[#0096c8]">hobby</span> or{" "}
              <span className="text-[#8064a2]">passion</span>
            </h1>
          </div>
          <div className="md:w-[706px] md:h-[120px] mt-[32px] md:mx-auto w-[300px] mx-auto">
            <p className="text-[12px] font-light font-popin leading-[22px] text-wrap md:hidden block w-[312px] h-[88px] text-center">
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.
            </p>
            <p className="text-sm font-light font-popin leading-[30px] text- text-wrap hidden md:block">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
          </div>
          <div className="w-[706px] h-[60px] mt-[16px] hidden md:block">
            <p className="text-sm font-light font-popin leading-[30px] text-start">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>

          <div className="md:w-[697.07px] md:h-[216px] md:mt-[80px] flex justify-between w-[312px] h-[96.74px] mx-auto">
            <div className="w-[336.96px] md:h-[216px] h-[115px] flex justify-center items-end">
              <img src={obj1} alt="" />
            </div>

            <div className="w-[345.71px] md:h-[216px] h-[115px] flex justify-center items-end">
              <img src={obj2} alt="" />
            </div>
          </div>
        </div>

        {/* Right Section Sign in*/}
        <div className="md:h-[434px] md:w-[410px] md:mt-[103px] md:mr-[100px] w-[347px] mt-[-400px]">
          <div className="w-[169px] h-[34px] flex justify-between">
            <div className="w-[76px] h-[30px] cursor-pointer">
              <a
                onClick = {() => setIsLogin(true)}
                href="#"
                className={`${isLogin === true ? 'text-[#8064a2] font-popin font-semibold underline underline-offset-8 decoration-[2px] text-xl' : 'text-[#939CA3] font-semibold font-popin text-xl'}`}
              >
                Sign in
              </a>
            </div>
            <div className="w-[76px] h-[30px] cursor-pointer font-popin text-[20px]">
              <a
                href="#"
                onClick={() => setIsLogin(false)}
                className={`${isLogin === false ? 'text-[#8064a2] font-popin font-semibold text-xl underline underline-offset-8 decoration-[2px]' : 'text-[#939CA3] font-popin font-semibold text-xl'}`}
              >
                Join in
              </a>
            </div>
          </div>
          {isLogin ? <LogIn /> : <JionIn />}
        </div>
      </div>

      {/* Second Section */}
      <div className="md:h-[818px] md:w-[1440px] mx-auto flex items-center justify-center">
        <div className="md:w-[1240px] md:h-[618px] md:flex md:content-between md:justify-between md:flex-wrap mt-12">
          <div className="md:w-[608px] md:h-[297px] rounded-[8px] border-[1px] border-[#CED4DA] md:flex md:flex-col md:justify-center md:items-start px-11 py-10 cursor-pointer w-[312px] h-[216] flex justify-center items-center flex-col mb-6">
            <div className="md:w-[147px] md:h-[40px] flex justify-between items-center w-[102px] h-[32px]">
              <img
                src={peoples}
                alt=""
                className="md:w-[40px] md:h-[20px] w-[32px] h-[16px]"
              />
              <span className="md:text-[24px] text-[18px] font-popin font-semibold">
                People
              </span>
            </div>

            <div className="md:w-[520px] md:h-[81px] w-[264px] h-[80px] mt-6">
              <p className="font-popin font-light md:text-lg text-[12px] md:text-start text-center">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
            </div>

            <button className="md:w-[122px] md:h-[40px] border-[1px] border-[#8064A2] rounded-lg text-[#8064A2] font-popin font-semibold md:text-sm text-[12px] mt-8 cursor-pointer w-[264px] h-[32px]">
              Connect
            </button>
          </div>

          <div className="md:w-[608px] md:h-[297px] rounded-[8px] border-[1px] border-[#CED4DA] md:flex md:flex-col md:justify-center md:items-start px-11 py-10 cursor-pointer w-[312px] h-[216] flex justify-center items-center flex-col mb-6">
            <div className="md:w-[131px] md:h-[40px] flex justify-between items-center w-[102px] h-[32px]">
              <img
                src={location}
                alt=""
                className="md:w-[23px] md:h-[33px] w-[32px] h-[16px]"
              />
              <span className="md:text-[24px] text-[18px] font-popin font-semibold">
                People
              </span>
            </div>

            <div className="md:w-[520px] md:h-[81px] w-[264px] h-[80px] mt-6">
              <p className="font-popin font-light md:text-lg text-[12px] md:text-start text-center">
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
            </div>

            <button className="md:w-[122px] md:h-[40px] border-[1px] border-[#8064A2] rounded-lg text-[#8064A2] font-popin font-semibold md:text-sm text-[12px] mt-8 cursor-pointer w-[264px] h-[32px]">
              Meet up
            </button>
          </div>

          <div className="md:w-[608px] md:h-[297px] rounded-[8px] border-[1px] border-[#CED4DA] md:flex md:flex-col md:justify-center md:items-start px-11 py-10 cursor-pointer w-[312px] h-[216] flex justify-center items-center flex-col mb-6">
            <div className="md:w-[160px] md:h-[40px] flex justify-between items-center w-[102px] h-[32px]">
              <img
                src={bag}
                alt=""
                className="md:w-[36.67px] md:h-[31.63px] w-[32px] h-[16px]"
              />
              <span className="md:text-[24px] text-[18px] font-popin font-semibold">
                Product
              </span>
            </div>

            <div className="md:w-[520px] md:h-[81px] w-[264px] h-[80px] mt-6">
              <p className="font-popin font-light md:text-lg text-[12px] md:text-start text-center">
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
            </div>

            <button className="md:w-[122px] md:h-[40px] border-[1px] border-[#8064A2] rounded-lg text-[#8064A2] font-popin font-semibold md:text-sm text-[12px] mt-8 cursor-pointer w-[264px] h-[32px]">
              Get it
            </button>
          </div>

          <div className="md:w-[608px] md:h-[297px] rounded-[8px] border-[1px] border-[#CED4DA] md:flex md:flex-col md:justify-center md:items-start px-11 py-10 cursor-pointer w-[312px] h-[216] flex justify-center items-center flex-col mb-6">
            <div className="md:w-[165px] md:h-[40px] flex justify-between items-center w-[102px] h-[32px]">
              <img
                src={check}
                alt=""
                className="md:w-[30px] md:h-[33.33px] w-[32px] h-[16px]"
              />
              <span className="md:text-[24px] text-[18px] font-popin font-semibold">
                Program
              </span>
            </div>

            <div className="md:w-[520px] md:h-[81px] w-[264px] h-[80px] mt-6">
              <p className="font-popin font-light md:text-lg text-[12px] md:text-start text-center">
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </p>
            </div>

            <button className="md:w-[122px] md:h-[40px] border-[1px] border-[#8064A2] rounded-lg text-[#8064A2] font-popin font-semibold md:text-sm text-[12px] mt-8 cursor-pointer w-[264px] h-[32px]">
              Attend
            </button>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-[1440px] h-[484px] bg-[#F7FDFF] mx-auto flex justify-center items-center">
        <div className="w-[1240px] h-[284px] border-[1px] flex items-center justify-center">
          <div className="w-[1160px] h-[204px] flex flex-col justify-between">
            <div className="w-[232px] h-[40px] flex justify-between">
              <img src={add} alt="" className="w-[33.33px] h-[33.33px]" />
              <span className="font-popin font-semibold text-2xl">
                Add your own
              </span>
            </div>
            <div className="">
              <p className="font-popin font-light text-lg">
                Are you a teacher or expert? Do you sell or rent out equipment,
                venue or event tickets? Or, you know someone who should be on
                hobbycue? Go ahead and Add your Own page
              </p>
            </div>

            <button className="w-[121px] h-[40px] rounded-lg border border-[#8064A2] font-popin font-semibold text-sm text-[#8064A2]">
              Add new
            </button>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="w-[1440px] h-[672px] mx-auto flex justify-center items-center">
        <div className="bg-[#F7F5F9] w-[1240px] h-[472px] flex flex-col justify-between p-10">
          <div className="w-[221px] h-[40px] flex justify-between">
            <img
              src={quot}
              alt=""
              className="w-[40px] h-[40px] origin-center rotate-180"
            />
            <span className="font-popin font-semibold text-2xl">
              Testimonials
            </span>
          </div>

          <div className="w-[1160px]">
            <p className="font-popin font-light text-lg text-[#6D747A]">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
          </div>

          <div className="w-[1160px] flex justify-between">
            <div className="w-[776px] h-[100px] bg-[#CCC1DA] rounded-lg flex justify-between items-center px-8">
              <div className="w-[592px] h-[40px] flex items-center justify-between">
                <div className="h-[40px] w-[40px] rounded-full bg-[#ffffff] flex items-center justify-center cursor-pointer">
                  <img src={play} alt="" className="w-[24px] h-[24px]" />
                </div>

                <div className="flex relative">
                  <div className="w-[12px] h-[12px] bg-[#8064A2] rounded-full absolute left-[-1px] top-[-4.3px]"></div>
                  <div className="w-[468px] h-[2px] bg-[#ffffff] rounded-[2px]"></div>
                </div>

                <div className="w-[26px] h-[16px] font-popin font-normal text-xs">
                  0:00
                </div>
              </div>
              <div className="relative">
                <img
                  src={actres}
                  alt=""
                  className="h-[60px] w-[60px] rounded-full"
                />
                <img
                  src={mic}
                  alt=""
                  className="absolute w-[18.46px] h-[25.33px] bottom-1 right-12"
                />
              </div>
            </div>

            <div className="w-[304px] h-[100px] flex justify-between">
              <img
                src={actres}
                alt=""
                className="w-[100px] h-[100px] rounded-full"
              />
              <div className="flex flex-col justify-center">
                <div>
                  <span className="font-popin font-semibold text-lg text-[#8064A2]">
                    Shubha Nagarajan
                  </span>
                </div>
                <div>
                  <span className="font-popin font-normal text-sm text-[#0096C8]">
                    Shubha Nagarajan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fivft Section */}
      <div className="w-[1440px] h-[662px] mx-auto bg-[#F7FDFF] flex flex-col justify-between relative">

        <div className="w-[1240px] h-[130px] flex flex-col justify-between mx-auto mt-[100px]">
          <p className="font-popin font-medium text-4xl italic">
            Your <span className="text-[#8064A2]">Hobby</span>, Your{" "}
            <span className="text-[#0096C8]">Community...</span>
          </p>

          <button className="w-[147px] h-[46px] rounded-lg text-[#ffffff] bg-[#8064A2] font-popin font-semibold text-xl">
            Get started
          </button>
        </div>

        <div className="flex flex-col items-center gap-y-[7px] absolute right-4 top-44">
        <div className="w-[40px] h-[40px] rounded-full bg-[#ffffff] flex justify-center items-center cursor-pointer shadow-md">
          <a href="#home">
          <img src={arrowforward} alt="" className="w-[16px] h-[16px] origin rotate-90"/>
          </a>
        </div>

        <div className="w-[130px] h-[18px] rounded-sm shadow-md flex justify-center items-center">
          <p className="text-[#8064A2] font-popin font-medium text-[10px]">Go to top (Ctrl+Home)</p>
        </div>
        </div>

        <div className="flex justify-center mb-[30px]">
          <div className="w-[1240px] h-[302px] flex justify-between items-center">
              <img src={obj4} alt="" className="w-[531px] h-[280px]"/>
              <img src={obj5} alt="" className="w-[638px] h-[300px]"/>
          </div>
        </div>

      </div>
    </>
  );
}

export default Main;
