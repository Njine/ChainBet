import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployLottery: DeployFunction = async ({ getNamedAccounts, deployments }: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // Deploy the LotteryToken contract (AlmasiToken in this case)
  const token = await deploy("AlmasiToken", {
    from: deployer,
    log: true,
  });

  // Correctly deploy the KadiLottery contract with only 2 arguments
  await deploy("KadiLottery", {
    from: deployer,
    args: [token.address, 100], // Provide only the 2 required arguments: token.address and ticket price
    log: true,
  });

  console.log("Lottery and LotteryToken deployed successfully");
};

export default deployLottery;
