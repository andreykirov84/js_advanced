function calcPrice(fruit, weigth_in_g, price_per_kilo){
    console.log(`I need $${(weigth_in_g / 1000 * price_per_kilo).toFixed(2)} to buy ${(weigth_in_g / 1000).toFixed(2)} kilograms ${fruit}.`)
}

calcPrice('orange', 2500, 1.80)