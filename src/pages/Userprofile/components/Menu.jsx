// components/Menu.jsx
import React, { useState } from "react";
import { Img, Text } from "../../../components/index";

const Menu = () => {
  const [showNetworks, setShowNetworks] = useState(false);

  const handleChooseNetworksClick = () => {
    setShowNetworks(!showNetworks);
  };

  const handleNetworkClick = (networkName) => {
    // Adicione a lógica de conexão à rede aqui, por exemplo, navegação ou chamada de função
    console.log(`Conectar à rede: ${networkName}`);
  };

  const networks = [
    { name: "Cosmic Exodus (testnet)", icon: "images/img_user.svg" },
    { name: "Polygon (testnet)", icon: "images/img_image697.png" },
    { name: "Arbitrum (testnet)", icon: "images/img_image698.png" },
  ];

  return (
    <div className="flex md:flex-col flex-row md:gap-5 mr-14 items-start justify-end mr-20">
      <div
        className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-1.5 w-[110%] md:w-full mr-20"
        style={{
          backgroundImage: "url('images/img_group1000002575.svg')",
        }}
      >
        <div
          className="flex flex-row  gap-[43px] items-center justify-end mr-[15px] w-[244px] md:w-full"
          onClick={handleChooseNetworksClick}
        >
          <Text
            className="min-w-[185px] relative text-white-A700 text-xl uppercase"
            size="txtSairaRomanMedium20"
          >
            Choose network
          </Text>
          <Img
            className={`h-3.5 w-3.5 transform ${
              showNetworks ? "rotate-180" : "rotate-0"
            }`}
            src="images/img_forward.svg"
            alt="forward"
          />
        </div>
      </div>

      {showNetworks && (
        <div className="fixed top-20 right-12 flex flex-col gap-5  justify-end mr-20 mt-20">
          {networks.map((network, index) => (
            <button
              key={index}
              onClick={() => handleNetworkClick(network.name)}
              className="flex flex-row gap-3 items-center justify-start border-4 border-light_blue-A200_01 pt-1 cursor-pointer bg-black-900 mr-20 mb-1"
            >
              <Text
                className="max-w-[300px] md:max-w-full text-white-A700 text-xl uppercase "
                size="txtSairaRomanMedium20"
              >
                {network.name}
              </Text>
              <div className="flex items-center ml-auto mr-12">
                {" "}
                {/* Adicionando div para ajustar margem à direita */}
                <Img
                  className="h-3.5 w-3.5 mr-5"
                  src={network.icon}
                  alt="network icon"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
