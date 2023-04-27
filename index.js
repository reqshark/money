
module.exports = money

function money($){
  let str = String(Number($).toFixed(2)).split('.')
  let mod = str[0].length > 3 ? str[0].length % 3 : 0
  return `$${mod ? `${str[0].substr(0, mod)},` : ''}${
    str[0].substr(mod).replace(/(\d{3})(?=\d)/g, "$1" + ',')
  }.${str[1]}`
}
