import React from "react";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import AvatarNameInput from "./components/AvatarNameInput";
import ContinueButton from "./components/ContinueButton";
import { Img } from "components";

const UserprofilePage = () => {
  return (
    <>
      <div className="bg-black-900 font-saira mx-auto p-[49px] md:px-10 sm:px-5 w-full relative">
        <NavBar />

        <div className="flex flex-col md:flex-row items-center gap-[95px] md:ml-[0] ml-[5%] md:pl-10 sm:pl-5 w-full md:w-[70%]">
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <Menu />
          </div>

          <div
            className="flex flex-col gap-[50px] items-center w-full max-w-[150px] mb-[60px] 
           mr-[250px] relative"
          >
            <Img
              className="max-w-full h-auto"
              src="images/img_rectangle19.png"
              alt="rectangleNineteen"
            />
          </div>
        </div>

        <AvatarNameInput />

        <div className="flex flex-col items-center w-full mt-5">
          <ContinueButton />
        </div>
      </div>
    </>
  );
};

export default UserprofilePage;
