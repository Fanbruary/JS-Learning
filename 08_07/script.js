/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const tipCalculator = (sum, percentage, currency, prefix) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  if (prefix) {
    console.log(`
    Sum before tip: ${currency}${sum}
    Tip percentage: ${currency}${percentage}%
    Tip:            ${currency}${tip.toFixed(2)}
    Total:          ${currency}${total.toFixed(2)}
  `);
  } else {
    console.log(`
    Sum before tip: ${sum}
    Tip percentage: ${percentage}%
    Tip:            ${tip.toFixed(2)}
    Total:          ${total.toFixed(2)}
  `);
  }
};

tipCalculator(29.95, 28, "$", false);
