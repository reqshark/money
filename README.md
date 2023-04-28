# money
format dollars with commas every 3 decimals plus the spare change

```js
let str = '23423423'
let num = 3454345.534897

money(str) // outputs: '$23,423,423.00'
money(num) // outputs: '$3,454,345.53'

```

# how to install

paste the function where you need it, then call it on your input string or number.  function parameter assignments in javascript are basically a scoped `let` so don't worry this won't overwrite jquery

```js
function money($){
  let str = String(Number($).toFixed(2)).split('.')
  let mod = str[0].length > 3 ? str[0].length % 3 : 0
  return `$${mod ? `${str[0].substr(0, mod)},` : ''}${
    str[0].substr(mod).replace(/(\d{3})(?=\d)/g, "$1" + ',')
  }.${str[1]}`
}
```
