import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployKadiBet: DeployFunction = async ({ getNamedAccounts, deployments }: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("KadiBet", {
    from: deployer,
    log: true,
  });

  console.log("KadiBet deployed successfully");
};

export default deployKadiBet;
