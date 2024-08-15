function Footer() {
  return (
    <div >
    
      <div
        className="w-full h-[992px] bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/Footer-bg.png')" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[40%,auto] max-w-[95%] lg:max-w-[80%] mx-auto pt-0 md:pt-[400px] h-full   ">
          {/* fisrt column */}
          <div className="mt-[400px] md:mt-0">
          <div className="  text-white">
            <div className="flex-col gap-[12px]">
              <h3 className="font-[700] text-[32px] leading-[33.6px]">
                AFFIXOS
              </h3>
              <p className="w-[301px] h-[66px] font-[400] text-[16px] leading-[22.4px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis consectetur atque debitis placeat eos aperiam!
              </p>
            </div>
            {/* icons div */}
            <div className="flex gap-[16px] mt-[32px]">
              <img
                src="images/world-icon.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <img
                src="images/facebook.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <img
                src="images/twitter.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <img
                src="images/google.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
              <img
                src="images/linkedin.png"
                alt=""
                className="w-[48px] h-[48px]"
              />
            </div>
          </div>
          </div>
          {/* second column */}
          <div className="grid grid-cols-3 ">

         
          <div className="text-white  ">
            <p className="font-[700] text-[18px] leading-[24.3px] mb-[16px]">
              Pages
            </p>
            <ul className="flex flex-col gap-[10px]">
              <li>Home V1</li>
              <li>Home V2</li>
              <li>Home V3</li>
            </ul>
          </div>

          {/* third column */}
          <div className="  text-white">
            <ul className="flex flex-col gap-[10px]">
              <li>Help Center 2</li>
              <li>FAQ 1</li>
              <li>FAQ 2</li>
            </ul>
          </div>

          {/* fourth column */}
          <div className="  text-white   ">
            <p className="font-[700] text-[18px] leading-[24.3px] mb-[16px]">
              Utility Pages
            </p>
            <ul className="flex flex-col gap-[10px] font-[400] text-[16px] leading-[20px]">
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>Forget Password</li>
            </ul>
          </div>
          </div>
        </div>

        {/* copyright */}
        <div className=" md:ml-[168px] mb-[48px] md:mr-[168px] mt-[-80px]">
          <div className="text-center text-white border-t-[1px] border-white border-opacity-[30%]">
            <p className="  mt-[24px]">
              Copyright Stairs | Designed by HafizAhmar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
