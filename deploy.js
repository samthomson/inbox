const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')
const envVars = require('./env')

const provider = new HDWalletProvider(
    envVars.mneumonic,
    envVars.deployUrl
)

const web3 = new Web3(provider)