// ethers-config.js
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/14b85bdf3c844884a1932ad0ab029ce9"
);
const signer = new ethers.Wallet(
  "ce28cf30a4bd33a7ff9b16fdba8d1406b6caa768e2d8f63d3d66fd57e594dc65",
  provider
);

export { provider, signer };
