import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Features() {
  const [selectedCard, setSelectedCard] = useState(2); // Initially, the third card is selected means at index 2

  const handleSelectCard = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="mt-[70px] 2xl:mt-[300px] 2xl:mb-[150px] max-w-[94%] xl:max-w-[90%] lg:max-w-[95%] mx-auto ">
      <div>
        <h2 className="text-[48px] leading-[50.4px] text-center font-[600] text-[#14358A] 2xl:text-[40px] 2xl:leading-[33px]">
          Key Features.
        </h2>
        <p className="text-[16px] text-center text-[#68718B] font-[400] leading-[22.4px] mt-[25px] 2xl:text-[30px] 2xl:leading-[33px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione,
          quasi adipisci
        </p>
      </div>

      {/* features card */}
      <div className="flex justify-center w-full">
        <div className="mt-[57px] justify-center  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center gap-[13px] 2xl:gap-[100px]">
          <div
            className={`flex flex-col items-center justify-center w-full lg:w-[24.1rem] h-[280px] p-[18px] gap-[5.7px] ${
              selectedCard === 0 ? "shadow-md shadow-gray-300" : ""
            }`}
            onMouseEnter={() => handleSelectCard(0)}
          >
            <img
              src="images/Info.png"
              alt=""
              className={`p-[11.4px] rounded-[4.5px] 2xl:w-[80px] ${
                selectedCard === 0 ? "" : "bg-[#F0F5FF]"
              }`}
            />
            <p className="text-[#14358A] font-[700] 2xl:text-[34px]">
              Customizable Layout
            </p>
            <p className="text-center text-[#68718B] 2xl:text-[24px] 2xl:leading-[33px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A] border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className={`flex flex-col items-center justify-center w-full lg:w-[24.1rem] h-[280px] p-[18px] gap-[5.7px] ${
              selectedCard === 1 ? "shadow-md shadow-gray-300" : ""
            }`}
            onMouseEnter={() => handleSelectCard(1)}
          >
            <img
              src="images/bulb.png"
              alt=""
              className={`p-[11.4px] rounded-[4.5px] 2xl:w-[80px] ${
                selectedCard === 1 ? "" : "bg-[#F0F5FF]"
              }`}
            />
            <p className="text-[#14358A] font-[700] 2xl:text-[34px]">
              Data Visualization
            </p>
            <p className="text-center text-[#68718B] 2xl:text-[24px] 2xl:leading-[33px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A] border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className={`flex flex-col items-center justify-center w-full lg:w-[24.1rem] h-[280px] p-[18px] gap-[5.7px] ${
              selectedCard === 2 ? "shadow-md shadow-gray-300" : ""
            }`}
            onMouseEnter={() => handleSelectCard(2)}
          >
            <img
              src="images/reload.png"
              alt=""
              className={`p-[11.4px] rounded-[4.5px] 2xl:w-[80px] ${
                selectedCard === 2 ? "bg-[#14358A]" : "bg-[#F0F5FF]"
              }`}
            />
            <p className="text-[#14358A] font-[700] 2xl:text-[34px]">
              Real-Time Updates
            </p>
            <p className="text-center text-[#68718B] 2xl:text-[24px] 2xl:leading-[33px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A]  border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className={`flex flex-col items-center justify-center w-full lg:w-[24.1rem] h-[280px] p-[18px] gap-[5.7px] ${
              selectedCard === 3 ? "shadow-md shadow-gray-300" : ""
            }`}
            onMouseEnter={() => handleSelectCard(3)}
          >
            <img
              src="images/Cpu.png"
              alt=""
              className={`p-[11.4px] rounded-[4.5px] 2xl:w-[80px] ${
                selectedCard === 3 ? "" : "bg-[#F0F5FF]"
              }`}
            />
            <p className="text-[#14358A] font-[700] 2xl:text-[34px]">
              User Access Control
            </p>
            <p className="text-center text-[#68718B] 2xl:text-[24px] 2xl:leading-[33px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A] border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className={`flex flex-col items-center justify-center w-full lg:w-[24.1rem] h-[280px] p-[18px] gap-[5.7px] ${
              selectedCard === 4 ? "shadow-md shadow-gray-300" : ""
            }`}
            onMouseEnter={() => handleSelectCard(4)}
          >
            <img
              src="images/Database.png"
              alt=""
              className={`p-[11.4px] rounded-[4.5px] 2xl:w-[80px] ${
                selectedCard === 4 ? "" : "bg-[#F0F5FF]"
              }`}
            />
            <p className="text-[#14358A] font-[700] 2xl:text-[34px]">
              Interactive Elements
            </p>
            <p className="text-center text-[#68718B] 2xl:text-[24px] 2xl:leading-[33px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A] border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight />
            </div>
          </div>

          <div
            className={`flex flex-col items-center justify-center w-full lg:w-[24.1rem] h-[280px] p-[18px] gap-[5.7px] ${
              selectedCard === 5 ? "shadow-md shadow-gray-300" : ""
            }`}
            onMouseEnter={() => handleSelectCard(5)}
          >
            <img
              src="images/Package.png"
              alt=""
              className={`p-[11.4px] rounded-[4.5px] 2xl:w-[80px] ${
                selectedCard === 5 ? "" : "bg-[#F0F5FF]"
              }`}
            />
            <p className="text-[#14358A] font-[700] 2xl:text-[34px]">
              Reports and Analytics
            </p>
            <p className="text-center text-[#68718B] 2xl:text-[24px] 2xl:leading-[33px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facere inventore eius.
            </p>
            <div className="text-[#14358A] border-b-[1px] border-[#14358A] flex items-center justify-center gap-[4px]">
              <a href="#">Learn More</a>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
