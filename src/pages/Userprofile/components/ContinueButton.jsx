// components/ContinueButton.jsx
import React from "react";
import { Text } from "../../../components/index";
import { useNavigate } from "react-router-dom";

const ContinueButton = () => {
  const navigate = useNavigate();

  return (
    <Text
      className="common-pointer border-2 border-light_blue-A200_01 border-solid flex flex-row items-center justify-center md:ml-[0] ml-[100px] px-5 rounded-[10px] text-base text-light_blue-A200_01 uppercase w-[200px]"
      size="txtSairaRomanMedium16LightblueA20001"
      onClick={() => navigate("/downloadpage")}
    >
      continue
    </Text>
  );
};

export default ContinueButton;
