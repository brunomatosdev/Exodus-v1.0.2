import React from "react";

import { Img, Text } from "components";

const DownloadpagePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-saira items-start justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col justify-start mb-[110px] md:ml-[0] ml-[53px] w-[85%] md:w-full">
          <div className="flex flex-row items-center justify-start w-[21%] md:w-full">
            <Img className="h-4 w-4" src="images/img_lock.svg" alt="lock" />
            <Text
              className="ml-3.5 text-center text-white-A700 text-xs uppercase"
              size="txtSairaRomanMedium12WhiteA700"
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
                className="text-center text-light_blue-500 text-xs uppercase w-auto"
                size="txtSairaRomanMedium12"
              >
                download launcher
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[232px] mt-[177px] text-white-A700 text-xl uppercase"
            size="txtSairaRomanMedium20"
          >
            <>
              Warning:
              <br />
              As of today we do not have Microsoft Credentials. This will make
              our launcher flag Windows Defender.
              <br />
              We understand this causes trust issues and people are afraid of
              installing it, due to virus/malware concerns.
              <br />
              There is not much we can do about it right now, so please
              understand and have some patience with us.
            </>
          </Text>
          <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-end md:ml-[0] ml-[642px] mt-[47px] w-[26%] md:w-full">
            <div className="bg-blue_gray-100 h-[13px] sm:mt-0 my-[9px] w-[13px]"></div>
            <Text
              className="text-white-A700 text-xl uppercase"
              size="txtSairaRomanMedium20"
            >
              I understand, download anyway.
            </Text>
          </div>
          <Img
            className="h-[243px] md:h-auto md:ml-[0] ml-[728px] mt-[54px] object-cover w-[17%] sm:w-full"
            src="images/img_image109.png"
            alt="image109"
          />
          <Text
            className="border-2 border-light_blue-A200_01 border-solid md:ml-[0] ml-[806px] mt-[130px] px-3.5 rounded-[10px] text-base text-light_blue-A200_01 uppercase w-[125px]"
            size="txtSairaRomanMedium16LightblueA20001"
          >
            Download
          </Text>
        </div>
      </div>
    </>
  );
};

export default DownloadpagePage;
