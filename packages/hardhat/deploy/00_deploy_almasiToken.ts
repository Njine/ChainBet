import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployAlmasiToken: DeployFunction = async ({ getNamedAccounts, deployments }: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("AlmasiToken", {
    from: deployer,
    log: true,
  });

  console.log("AlmasiToken deployed successfully");
};

export default deployAlmasiToken;
