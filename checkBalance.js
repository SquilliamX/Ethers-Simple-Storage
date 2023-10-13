const ethers = require('ethers');
require('dotenv').config();

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

  const squilliamPrivateKey = process.env.PRIVATE_KEY;
  const squilliamWallet = new ethers.Wallet(squilliamPrivateKey);

  const squillWalletAddress = squilliamWallet.address;

  const balance = await provider.getBalance(squillWalletAddress);
  console.log(
    `Balance of Master Squilliam:, ${squillWalletAddress}: ${ethers.utils.formatEther(
      balance
    )}`
  );
}

main().catch(console.error);
