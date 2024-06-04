const { ethers } = require('hardhat');

async function main() {
  const Contract = await ethers.getContractFactory("World");
  const deployedContract = await Contract.attach('0xd3a85ead10da64d3028a4e147256b66e449c0450');

  const account = "0x0e0eb0122843947526bd486370ed248f83678de6";
  const registry = "0x03cd67a9bcd6b1bdd26846ba0ec6f0ea41f2c47b";
  const item = "0xd7e17a079150d9fd1d0df31c649f2e237489cec0";
  const token = "0x5f0285eb417412047442075d8898f04344ca65c8";
  const profile = "0xb98624b9f6e3eadcb696947138aee682ba486b8d";
  const craft = "0x18edb95a5696d4cc9d9ee3311797404ea02e61ee";
  const chainId = 5611;

  const tx = await deployedContract.setProfile(profile);
  const receipt = await tx.wait();

  console.log('Transaction receipt: ', receipt);

  const tx2 = await deployedContract.setToken(token);
  const receipt2 = await tx2.wait();

  console.log('Transaction receipt2: ', receipt2);

  const tx3 = await deployedContract.setItem(item);
  const receipt3 = await tx3.wait();

  console.log('Transaction receipt3: ', receipt3);

  const tx4 = await deployedContract.configTokenBound(registry, account, chainId);
  const receipt4 = await tx4.wait();

  console.log('Transaction receipt4: ', receipt4);

  const tx5 = await deployedContract.setCraft(craft);
  const receipt5 = await tx5.wait();

  console.log('Transaction receipt5: ', receipt5);

  const CraftContract = await ethers.getContractFactory("CraftSystem");
  const deployedCraftContract = await CraftContract.attach(craft);

  const tx6 = await deployedCraftContract.setItem(item);
  const receipt6 = await tx6.wait();

  console.log('Transaction receipt5: ', receipt6);

  console.log('======================== DONE ========================');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });