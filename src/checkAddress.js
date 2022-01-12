var cryptoUtil = require('@polkadot/util-crypto');

/**
 * check address
 * @param {string} address - crab address
 * @param {number} ss58 - ss58 number, darwinia = 18
 * @return {*} [boolean, string | null]
 */
var checkResult = cryptoUtil.checkAddress('2tWwpfSGF16keTrrs7HRhWf7jM94ocnucTZBfJTCsv56QAsD', 18);

console.log('-----check darwinia address----- \n' , checkResult);