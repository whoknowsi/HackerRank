function compareTriplets(a, b) {
    return a.reduce((acc, currA, i) => {
        const currB = b[i]
        if(currA > currB) acc[0] += 1
        else if(currA < currB) acc[1] += 1
        return acc;
    }, [0, 0])
}