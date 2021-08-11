const toThousand = require('./toThousands');
module.exports = (price,discount)=> toThousand(price - (discount * price / 100).toFixed(0))