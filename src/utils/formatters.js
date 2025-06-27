export const formatCurrency = (amount, currency = '') => {
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(amount));
  
  const sign = amount < 0 ? '-' : '';
  return `${sign}${currency}${formatted}`;
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US').format(Math.round(number));
};

export const formatPercentage = (decimal) => {
  const percentage = decimal * 100;
  return `${percentage >= 0 ? '+' : ''}${percentage.toFixed(1)}%`;
};

export const formatDecimal = (number, decimals = 2) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(number);
};