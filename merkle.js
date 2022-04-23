const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const add=["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
,"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"
,"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"]

const leaves = add.map(x => keccak256(x))
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
const root = tree.getRoot().toString('hex')
console.log('0x'+root)
const leaf = keccak256('0x5B38Da6a701c568545dCfcB03FcB875f56beddC4')
const proof = tree.getProof(leaf).map(x=>"0x"+x.data.toString('hex'))
console.log(proof)

