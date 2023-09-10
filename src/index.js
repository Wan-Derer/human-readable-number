module.exports = function toReadable(number) {
  if (number === 0) return 'zero';

  const digitsArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const less20Arr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tensArr = ['zero', 'one', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let res = '';
  const tens = number % 100;
  if (tens !== 0) {
    if (tens < 10) {
      res = digitsArr[tens];
    } else if (tens < 20) {
      res = less20Arr[tens - 10];
    } else {
      res = tensArr[Math.floor(tens / 10)];
      if (tens % 10 !== 0) res += " " + digitsArr[tens % 10]
    }
  }

  if (number > 99) {
    res = digitsArr[Math.floor(number / 100)] + " hundred " + res;
  }

  return res.trim();
}
