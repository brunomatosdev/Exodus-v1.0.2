import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Text } from "components";

const UserprofilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-saira gap-[38px] justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-row items-center justify-start md:ml-[0] ml-[53px] w-[17%] md:w-full">
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
        <div className="flex flex-col items-end mb-[95px] md:ml-[0] ml-[53px] mr-[376px] md:pl-10 sm:pl-5 pl-[558px] w-[77%] md:w-full">
          <div className="flex flex-col gap-[50px] justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end ml-40 md:ml-[0]">
              <div className="flex flex-col md:gap-10 gap-[69px] justify-start w-[46%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[46px] items-end justify-start p-1.5 w-[106%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_group1000002575.svg')",
                  }}
                >
                  <div className="flex flex-row gap-[43px] items-center justify-end mr-[13px] w-[244px] md:w-full">
                    <Text
                      className="min-w-[185px] relative text-white-A700 text-xl uppercase"
                      size="txtSairaRomanMedium20"
                    >
                      Choose network
                    </Text>
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_forward.svg"
                      alt="forward"
                    />
                  </div>
                </div>
                <Img
                  className="h-[550px] md:h-auto md:ml-[0] ml-[15px] object-cover rounded-[100px] w-[83%]"
                  src="images/img_rectangle19.png"
                  alt="rectangleNineteen"
                />
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-row h-[210px] items-center justify-center p-[35px] sm:px-5 w-[400px] md:w-full"
                style={{ backgroundImage: "url('images/img_group3.svg')" }}
              >
                <div className="flex flex-col gap-[21px] justify-start my-2.5 w-[95%] md:w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                    <Text
                      className="max-w-[300px] md:max-w-full text-white-A700 text-xl uppercase w-[2000px]"
                      size="txtSairaRomanMedium20"
                    >
                      Cosmic Exodus (testnet)
                    </Text>
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                  <div className="flex flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[35px] w-[83%] md:w-full">
                    <div className="flex flex-row gap-[7px] items-center justify-between w-[94%] md:w-full">
                      <Text
                        className="max-w-[300px] md:max-w-full text-white-A700 text-xl uppercase w-[2000px]"
                        size="txtSairaRomanMedium20"
                      >
                        Polygon (testnet)
                      </Text>
                      <Img
                        className="h-4 md:h-auto object-cover w-4"
                        src="images/img_image697.png"
                        alt="image697"
                      />
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-between w-full">
                      <Text
                        className="text-white-A700 text-xl uppercase"
                        size="txtSairaRomanMedium20"
                      >
                        arbitrum (testnet)
                      </Text>
                      <Img
                        className="h-[15px] md:h-auto object-cover"
                        src="images/img_image698.png"
                        alt="image698"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[72%] md:w-full">
              <Text
                className="bg-light_blue-A200_01 border-2 border-light_blue-A200_01 border-solid h-[30px] justify-center sm:px-5 px-6 rounded-bl-[10px] rounded-tl-[10px] text-base text-black-900_01 uppercase w-40"
                size="txtSairaRomanMedium16"
              >
                avatar name
              </Text>
              <Input
                name="groupOne"
                placeholder="type here"
                className="font-medium leading-[normal] p-0 placeholder:text-gray-500 text-left text-xs uppercase w-full"
                wrapClassName="w-[74%] md:w-full"
              ></Input>
            </div>
            <Text
              className="common-pointer border-2 border-light_blue-A200_01 border-solid flex flex-row items-center justify-center md:ml-[0] ml-[100px] px-5 rounded-[10px] text-base text-light_blue-A200_01 uppercase w-[200px]"
              size="txtSairaRomanMedium16LightblueA20001"
              onClick={() => navigate("/downloadpage")}
            >
              continue
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserprofilePage;
