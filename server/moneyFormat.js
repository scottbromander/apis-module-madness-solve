const moneyFormat = (newRandomNumber) => {
  const formatNumber = new Intl.NumberFormat().format(newRandomNumber);
  return '$' + formatNumber + '.00';
};

module.exports = moneyFormat;
