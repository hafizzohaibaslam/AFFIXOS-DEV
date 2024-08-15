import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function NavBar() {
  const [isOpen,setOpen]=useState(false)
  return (
    <>
      <div className="flex text-white max-w-[95%] lg:max-w-[86%] mx-auto  justify-between w-full h-auto md:h-[86px] items-center">
        { !isOpen && <FaBars onClick={()=>setOpen(true)} size={25} className="ml-[10px] font-[18px] lg:hidden "></FaBars>}

       {isOpen && <div className="lg:hidden absolute left-0 top-0 z-10 w-[70%] sm:w-[40%] p-9 bg-white text-black ">
        <div className=" block">
          <div className="flex justify-end" onClick={()=>setOpen(false)}>
          <RxCross2 size={30}/>
          </div>
        
          <nav className=" ">
            <ul className="flex flex-col gap-[30px]">
              <li>Home</li>
              <li>Solution</li>
              <li>Product</li>
              <li>Industries</li>
              <div className="flex items-center gap-[8px]">
                <li>Company</li>
                <FaChevronDown></FaChevronDown>
              </div>
            </ul>
          </nav>
        </div>
        </div>}
        <div className="   lg:text-[22px] text-[32px] font-[700] font-sans">
          AFFIXOS
        </div>
        <div className=" hidden lg:block">
          <nav>
            <ul className="flex gap-[40px] text-[16px] items-center">
              <li>Home</li>
              <li>Solution</li>
              <li>Product</li>
              <li>Industries</li>
              <div className="flex items-center gap-[8px]">
                <li>Company</li>
                <FaChevronDown></FaChevronDown>
              </div>
            </ul>
          </nav>
        </div>

        <div className="mt-[21px] mb-[21px]  flex gap-[10px] md:gap-[16px]">
          <button className="md:mt-[11px] hidden sm:block md:mb-[11px] mt-[6px] md-[6px]">
            Contact Us
          </button>
          <button className="md:pt-[12px] md:pb-[12px] md:pl-[24px] md:pr-[24px] border-[1px] md:rounded-[10px] rounded-[6px] p-[10px] border-white">
            Book a Demo
            
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
