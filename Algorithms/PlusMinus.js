function plusMinus(arr) {
    const result = arr.reduce((acc, curr) => {
        if(curr > 0) acc[0] += 1
        else if(curr < 0) acc[1] += 1
        else acc[2] += 1
        return acc
    }, [0, 0, 0])

    const string = `${(result[0]/arr.length).toFixed(6)}
    ${(result[1]/arr.length).toFixed(6)}
    ${(result[2]/arr.length).toFixed(6)}`
    console.log(string)
    return string
}