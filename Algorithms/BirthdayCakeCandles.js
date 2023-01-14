function birthdayCakeCandles(candles) {
    const max = Math.max(...candles)
    return candles.length - candles.filter((c) => c !== max).length
}