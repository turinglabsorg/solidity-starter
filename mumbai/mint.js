const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");
require('dotenv').config()
const MNEMONIC = process.env.MNEMONIC;
const CONTRACT_ADDRESS = process.env.TESTNET_MATIC_CONTRACT_ADDRESS;
const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
const ABI = require('../build/abi.json')

async function main() {
  const provider = new HDWalletProvider(
    MNEMONIC,
    `https://rpc-mumbai.matic.today`
  );
  const web3Instance = new web3(provider);

  const contract = new web3Instance.eth.Contract(
    ABI,
    CONTRACT_ADDRESS,
    { gasLimit: "5000000" }
  );

  try {
    console.log('Minting new supply...')
    let amount = 100000000
    const mint = await contract.methods.mint(OWNER_ADDRESS, amount).send({ from: OWNER_ADDRESS })
    console.log(mint)
  } catch (e) {
    console.log(e)
  }

}

main();
