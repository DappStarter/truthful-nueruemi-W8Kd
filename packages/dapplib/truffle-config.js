require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remember solid grace neck flock swap'; 
let testAccounts = [
"0x5e92662f0bdd068f68779b5c9791d3d347b945ac5ba67872eeba82ee10370739",
"0xabab33302d7eeb3aed5c62b31ab33532ed9e9f1ef78377cf704e55ef4b621955",
"0x9b80fee72227d517931d1bb6cb89357ed43420f246fd6bd9068c3c5e65b40023",
"0x459a3c8d0f9c064918eee13054e35b503aab215fcacda47432558a149799546e",
"0xb0123b8279687b2b05b721149286eaa33ffe872f6d84d42562629fef42403d1b",
"0xf09c9a0d9544be72923212c8ad8dc1232df18698a6ab35cecce1f75e795a8c32",
"0xa9c0a803add101c579cfdab11b8b0bc00b4894631ec2afe64935d94b25761987",
"0xa20a0dd2db390541179958a1c11d7f293b70abdf6fc10b30803bfc63366f49a3",
"0x9541b88bdc70e51a97a6b15a9e5110d1ce110edb2e033a45ab480bcd950c0db8",
"0x4577684346338efd633543dcb12d1c24d86d07eb44afc96dfb878c0bb8a5c70a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

