function diagonalDifference(arr) {
    const diags = arr[0].reduce((acc, curr, i) => {
        acc[0] += arr[i][i]
        console.log(acc)
        acc[1] += arr[i][arr[0].length - i - 1]
        return acc
    }, [0, 0])
    return Math.abs(diags[0] - diags[1])
}