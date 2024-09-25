import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployLottery: DeployFunction = async ({ getNamedAccounts, deployments }: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // Deploy the LotteryToken contract
  const token = await deploy("AlmasiToken", {
    from: deployer,
    log: true,
  });

  // Deploy the Lottery contract with LotteryToken address
  await deploy("KadiLottery", {
    from: deployer,
    args: [token.address, 100, 10], // Adjust the constructor arguments
    log: true,
  });

  console.log("Lottery and LotteryToken deployed successfully");
};

export default deployLottery;
