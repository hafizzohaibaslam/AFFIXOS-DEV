function ProductSecondSection() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* descuption */}
        <div className="h-max-[294px] lg:w-[510px]  2xl:w-[70%] flex flex-col gap-[20px] h-max-[294px] mt-[108px] mb-[90px]">
          <h2 className="text-[#14358A] font-[700] text-[24px] leading-[25px] 2xl:text-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-[#68718B] font-[400] text-[16px] leading-[22px] 2xl:text-[26px] 2xl:py-[20px] 2xl:leading-[40px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            illum repellendus aliquid eveniet fugiat magni! Blanditiis obcaecati
            enim amet ullam.
          </p>
          <div className="flex gap-[16px] items-center">
            <img src="images/CheckCircle.png" alt="check" />
            <p className="text-[#14358A] 2xl:text-[26px]">
              User Experience Design Team
            </p>
          </div>
          <div className="flex gap-[16px] items-center">
            <img src="images/CheckCircle.png" alt="check" />
            <p className="text-[#14358A] 2xl:text-[26px]">
              User Experience Design Team
            </p>
          </div>
          <div className="flex gap-[16px] items-center">
            <img src="images/CheckCircle.png" alt="check" />
            <p className="text-[#14358A] 2xl:text-[26px]">
              User Experience Design Team
            </p>
          </div>
        </div>

        <div className="h-full w-full md:order-2 order-1 ">
          <img
            src="images/p-section2.png"
            alt=""
            className="ml-[-30px] mb-[50px] md:mb-0 md:ml-0  2xl:w-[70%]"
          />
        </div>
      </div>
    </>
  );
}

export default ProductSecondSection;
