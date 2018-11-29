const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')
const env = require('./env')

const provider = new HDWalletProvider(
    env.mneumonic,
    'https://rinkeby.infura.io/v3/104f11b7052c460195dfeecfc4e4260b'
)

const web3 = new Web3(provider)