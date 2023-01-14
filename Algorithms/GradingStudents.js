const getNextMultipleOfFive = (number) => {
    while(number%5 !== 0) number++
    return number
}

const checkIfHasToBeUpgrade = (grade) => {
    const nextMultiple = (getNextMultipleOfFive(grade))
    return (nextMultiple - grade < 3 && nextMultiple >= 40) ? nextMultiple : grade
}

function gradingStudents(grades) {
    return grades.map(checkIfHasToBeUpgrade)
}