function birthdayCakeCandles(candles) {
    // Find the maximum height of the candles
    let max = Math.max(...candles);
    // Count the number of candles with maximum height
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === max) {
            count++;
        }
    }
    return count;
}
