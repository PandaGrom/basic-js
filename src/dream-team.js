const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!isNaN(members) || !members || members.length === 0 || members.__proto__ === Object.prototype) {
    return false;
  }
  const newName = [];
  for (let member of members) {
    if (typeof member !== 'string') {
      member = '';
    }
     newName.push(member.trim().substr(0,1).toUpperCase());
  }
  return newName.sort().join('');
};
