function aVeryBigSum(ar) {
    return ar.reduce((acc, curr) => curr += acc, 0)
}