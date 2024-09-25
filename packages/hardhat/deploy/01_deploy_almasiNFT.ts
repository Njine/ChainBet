import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployAlmasiNFT: DeployFunction = async ({ getNamedAccounts, deployments }: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("AlmasiNFT", {
    from: deployer,
    log: true,
  });

  console.log("AlmasiNFT deployed successfully");
};

export default deployAlmasiNFT;
