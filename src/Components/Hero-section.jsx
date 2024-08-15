function Hero() {
  return (
    <>
      <div className=" max-w-[96%]  sm:max-w-[92%] mx-auto text-white md:max-h-[1162px]">
        {/* intro */}
        <div className="mt-[80px] flex justify-center items-center flex-col md:ml-[100px] md:mr-[100px] ">
          <h1 className="md:text-[50px] text-[40px] md:font-[600] lg:w-[70%] md:w-[90%] w-full  font-[400] text-center leading-[50px] md:leading-[66px]">
            AFFIXOS Real Time Location Tracking System
          </h1>
          <p className="mt-[24px]  text-center font-[400] lg:w-[55%] md:w-[70%] w-full text-[18px] leading-[24.3px]">
            mprove Productivity and Efficiency by Tracking and Managing Movable
            Industrial Assets with
            <span className="font-[700]"> AFFIXOS</span> Asset Tracking, the
            Most Cost-Efficient Real-Time Location Solution
          </p>

          {/* buttons */}
          <div className="mt-[48px] md:flex-row flex-col justify-center items-center flex gap-[16px] w-full">
            <button className="rounded-[10px] w-[178px] h-[64px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] bg-gradient-to-r from-[#06268D] to-[#30D3AC] font-medium">
              Contact Us
            </button>
            <button className=" border-[1px] w-[206px] border-white rounded-[10px] h-[64px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] font-medium flex items-center">
              Learn More
              <img src="images/arr-right.png" alt="" className="ml-[7px]" />
            </button>
          </div>
        </div>

        {/* dashboard */}
        <div className="">
          <img
            src="images/Dashboard.png"
            alt="dashboard"
            className="h-[614px] w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
