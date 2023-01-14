const getNumberOfFruits = (arrOfFruit, fruitAddress, range) => {
    return arrOfFruit.reduce((acc, curr) => {
        if ((curr + fruitAddress) >= range[0] && (curr + fruitAddress) <= range[1]) acc = acc + 1
        return acc
    },0)
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const numberOfApples = getNumberOfFruits(apples, a, [s,t])
    const numberOfOranges = getNumberOfFruits(oranges, b, [s,t])

    console.log(numberOfApples + "\n" + numberOfOranges)
}