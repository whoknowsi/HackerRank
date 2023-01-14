const sumIfPM = (cropped) => {
    const hour = Number(cropped.slice(0, 2))
    return hour === 12 ? '12' : (hour + 12).toString() 
}

const sumIfAM = (cropped) => {
    const hour = Number(cropped.slice(0, 2))
    return hour === 12 ? '00' : cropped.slice(0, 2)
}

function timeConversion(s) {
    let cropped = s.slice(0, 8)
    if(s.includes('PM')) cropped = sumIfPM(cropped) + cropped.slice(2, 8)
    else if(s.includes('AM')) cropped = sumIfAM(cropped) + cropped.slice(2, 8)
    return cropped
}