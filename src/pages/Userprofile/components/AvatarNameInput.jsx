import React from "react";
import { Text, Input } from "../../../components/index";

const AvatarNameInput = () => {
  return (
    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full mb-4">
      <div className="flex flex-row gap-2 items-center justify-center w-full max-w-[400px]">
        <Text
          className="bg-light_blue-A200_01 border-2 border-light_blue-A200_01 border-solid h-[30px] justify-center sm:px-5 px-6 rounded-bl-[10px] rounded-tl-[10px] text-base text-black-900_01 uppercase"
          size="txtSairaRomanMedium16"
        >
          avatar name
        </Text>
        <Input
          name="groupOne"
          placeholder="type here"
          className="font-medium leading-[normal] p-0 placeholder:text-gray-500 text-left text-xs uppercase w-full"
        />
      </div>
    </div>
  );
};

export default AvatarNameInput;
