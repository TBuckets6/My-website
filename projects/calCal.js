const feet = document.getElementById('heightFt')
const inches = document.getElementById('heightInc')
const weight = document.getElementById('weight')
const male = document.getElementById('genMale')
const female = document.getElementById('genFem')
const age = document.getElementById('age')
const trueGen = {}
const calc = document.getElementById('calculateBtn')
const result = document.getElementById('result')

calc.addEventListener("click", () => {
    
    let g = document.getElementsByName('gender')
    for(let i = 0; i < g.length; i++){
        if(g[i].checked){
            trueGen.innerHTML = g[i].value
            //console.log(trueGen.innerHTML)
        }
    }

    let height = convertHtToInches(feet.value, inches.value)
    //console.log(height)

    let value = calculator(height, weight.value, trueGen.innerHTML, age.value)
    console.log(value)
    result.innerHTML = 'the estimated recommended calories per day is ' + value
})

function convertHtToInches(feet, inches){
    return parseInt(feet) * 12 + parseInt(inches)
}

function calculator(height, weight, gender, age){
    console.log(weight)
    console.log(age)
    console.log(height)
    console.log(gender)

    let genderConst = ''

    if (gender == 'male'){
        genderConst = 5
    }
    else if(gender == 'female'){
        genderConst = -161
    }
    
    return (parseInt(weight) * 10) + (parseInt(height) * 6) - parseInt(age) * 5 + genderConst  
}

//let gender = document.getElementById('trueGen').innerHTML



