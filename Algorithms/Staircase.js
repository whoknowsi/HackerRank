function staircase(n) {
    const result = Array(n).fill(0).map((_, i) => {
        return ' '.repeat(n - 1 - i) + "#".repeat(i + 1)
    }).join('\n')
    console.log(result)
    return result
}