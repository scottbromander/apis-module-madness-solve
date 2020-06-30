const randomNumber = require('./randomNumber');
const moneyFormat = require('./moneyFormat');

const makeMoney = () => {
  const random = randomNumber(10, 10000);
  const money = moneyFormat(random);

  return money;
};

module.exports = makeMoney;
