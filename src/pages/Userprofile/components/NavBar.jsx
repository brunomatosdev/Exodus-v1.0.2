// components/NavBar.jsx
import React from "react";
import { Img, Text } from "../../../components/index"; // Importar componentes Img e Text

const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-start md:ml-[0] ml-[53px] w-[17%] md:w-full mb-20">
      <Img className="h-4 w-4" src="images/img_lock.svg" alt="lock" />
      <Text
        className="ml-3.5 text-center text-light_blue-500 text-xs uppercase"
        size="txtSairaRomanMedium12"
      >
        user profile
      </Text>
      <div className="flex flex-row gap-2.5 items-center justify-start ml-[25px] w-auto">
        <Img
          className="h-6 w-6"
          src="images/img_iconamoonclouddownloadfill.svg"
          alt="iconamooncloudd"
        />
        <Text
          className="text-center text-white-A700 text-xs uppercase w-auto"
          size="txtSairaRomanMedium12WhiteA700"
        >
          download launcher
        </Text>
      </div>
    </div>
  );
};

export default NavBar;
