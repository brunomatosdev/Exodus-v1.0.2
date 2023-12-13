// contract-interactions.js
import { ethers } from "ethers";
import { provider, signer } from "./ethers-config";
import { contractAddress, contractABI } from "./contract-config";

const contract = new ethers.Contract(contractAddress, contractABI, signer);

const mintNFT = async () => {
  const transaction = await contract.mintNFT();
  await transaction.wait();
};

export { mintNFT };
