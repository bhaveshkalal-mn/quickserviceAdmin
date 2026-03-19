import React from "react";

function PickupAddress() {
  return (
    <div>
      <div
        id="boxshadow3"
        className="w-[100%] rounded-[10px] lg:rounded-[14px] px-[20px] xl:px-[25px] py-[15px] xl:py-[20px]"
      >
        <h1 className="text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#8225AF]">
          Product Pickup Address
        </h1>
        <h1 className="mt-[2px] text-[11px] lg:text-[12px] xl:text-[14px] font-normal">
          Your product will be picked up from this PIN code and delivered to
          your buyers.
        </h1>
        <div className="mt-[20px] xl:mt-[30px]">
          <div className="flex place-items-center w-[100%] ">
            <div className="w-[70%] lg:w-[60%] xl:w-[42%] ">
              <h1 className="text-[11px] lg:text-[12px] xl:text-[14px] font-normal">
                Pincode
              </h1>
            </div>

            <div className="w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]">
              <input
                name="name"
                className="outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal "
                placeholder="Enter Pickup Pincode"
              />
            </div>
          </div>
          <div className="flex place-items-center w-[100%] mt-[10px] xl:mt-[15px]">
            <div className="w-[70%] lg:w-[60%] xl:w-[42%] ">
              <h1 className="text-[11px] lg:text-[12px] xl:text-[14px] font-normal">Shop No, Building Name, Floor</h1>
            </div>

            <div className="w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]">
              <input
                name="name"
                className="outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal "
                placeholder="Enter Shop No, Building Name, Floor"
              />
            </div>
          </div>
           <div className="flex place-items-center w-[100%] mt-[10px] xl:mt-[15px]">
            <div className="w-[70%] lg:w-[60%] xl:w-[42%] ">
              <h1 className="text-[11px] lg:text-[12px] xl:text-[14px] font-normal">Road Name. Area, Colony</h1>
            </div>

            <div className="w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]">
              <input
                name="name"
                className="outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal "
                placeholder="Enter Road Name. Area, Colony"
              />
            </div>
          </div>
           <div className="flex place-items-center w-[100%] mt-[10px] xl:mt-[15px]">
            <div className="w-[70%] lg:w-[60%] xl:w-[42%] ">
              <h1 className="text-[11px] lg:text-[12px] xl:text-[14px] font-normal">Nearby Landmark</h1>
            </div>

            <div className="w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]">
              <input
                name="name"
                className="outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal "
                placeholder="Enter Nearby Landmark"
              />
            </div>
          </div>
           <div className="flex place-items-center w-[100%] mt-[10px] xl:mt-[15px]">
            <div className="w-[70%] lg:w-[60%] xl:w-[42%] ">
              <h1 className="text-[11px] lg:text-[12px] xl:text-[14px] font-normal">Enter City</h1>
            </div>

            <div className="w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]">
              <input
                name="name"
                className="outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal "
                placeholder="Enter City"
              />
            </div>
          </div>
           <div className="flex place-items-center w-[100%] mt-[10px] xl:mt-[15px]">
            <div className="w-[70%] lg:w-[60%] xl:w-[42%] ">
              <h1 className="text-[11px] lg:text-[12px] xl:text-[14px] font-normal">Enter State</h1>
            </div>

            <div className="w-[100%] flex place-items-center   h-[30px] lg:h-[35px] xl:h-[45px]  border-[1px] border-[#D6D6D6] hover:border-[black] rounded-[8px] pl-[10px] lg:pl-[15px] pr-[5px]">
              <input
                name="name"
                className="outline-none w-[100%] text-[11px] lg:text-[12px]  xl:text-[14px] font-normal "
                placeholder="Enter State"
              />
            </div>
          </div>
          <div className=" flex justify-end mt-[15px] xl:mt-[20px]">
            <button className="px-[15px] lg:px-[25px] h-[30px] lg:h-[35px] xl:h-[40px] rounded-[8px] bg-[#8225AF] hover:opacity-90 text-[11px] lg:text-[12px]  xl:text-[14px] text-[white] font-normal cursor-pointer">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickupAddress;
