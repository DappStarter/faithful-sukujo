require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind huge hidden prize orange giggle'; 
let testAccounts = [
"0x60c999ab1c6776665a40b069b28b988062afd717f89857d50802e9d74e9196e7",
"0xe267a73cb9f3a00086e8a2b7570bd5994882683fb6ffafcdb6a4cd4f7585e21e",
"0x9519a837195c6bb5ecdc15eee60d65316a4f383f2311cec5c28228a92943dbe3",
"0x05450c7e290876800c6e0cf8cfce7b78cc1cc94f66970ccb419f787b93e935fe",
"0xb89f5de5e334640ed8c8c6b07efe56d90db2c3eb7fb4e7330cc8141b055bbad1",
"0x9ee6a81703bb5a24ebfb78a8db519c2043cc5b733394ecad654c1d2bc514c37d",
"0xa46732242cf3b9a2a1023a03b3a23af2fece051461ac773926190c39d0e3a46f",
"0x594e49d15a450f5bb6acd6e621fd393d39b0962999aa39effa8fcd570eed44e8",
"0x2a86974947b76972b04ac078d4b4eb00bafd8af3141b903fbf9ece78a3f3ebce",
"0x2066c10f750d301999bbc03e1a90e1c5c3d26b391b7e5967b51f45a1fec6bf3f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
