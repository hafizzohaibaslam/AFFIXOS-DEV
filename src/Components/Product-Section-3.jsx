function ProductThirdSection() {
  return (
    <>
      <div className="flex md:gap-[100px] md:h-max-[510px] flex-col md:flex-row sm:gap-[20px] justify-center items-center">
        {/* hours */}
        <div className="">
          <img
            src="images/p-section-3.png"
            alt=""
            className="h-max-[391px] md:mt-[59px] md:mb-[59px]"
          />
        </div>
        {/* descuption */}
        <div className="h-max-[294px] lg:w-[510px] flex flex-col gap-[20px] h-max-[294px] mt-[108px] mb-[90px]">
          <h2 className="text-[#14358A] font-[700] text-[24px] leading-[25px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-[#68718B] font-[400] text-[16px] leading-[22px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            illum repellendus aliquid eveniet fugiat magni! Blanditiis obcaecati
            enim amet ullam.
          </p>
          <div className="flex gap-[16px] items-center">
            <img src="images/CheckCircle.png" alt="check" />
            <p className="text-[#14358A]">User Experience Design Team</p>
          </div>
          <div className="flex gap-[16px] items-center">
            <img src="images/CheckCircle.png" alt="check" />
            <p className="text-[#14358A]">User Experience Design Team</p>
          </div>
          <div className="flex gap-[16px] items-center">
            <img src="images/CheckCircle.png" alt="check" />
            <p className="text-[#14358A]">User Experience Design Team</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductThirdSection;
