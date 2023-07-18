let weight = document.getElementById('weight');
let height = document.getElementById('height');
let submit_Button = document.getElementById('btn');
let values = document.getElementById('values')
let bmi_result = document.getElementById('bmi_result')

function check(){
let bmi= (weight.value/height.value*2)
let checkBmi = parseFloat(bmi.toFixed(2));
console.log(checkBmi);

if (checkBmi < 18.5) {
    // bmi_result.textContent = 'Underweight';
bmi_result.innerText = `BMI Result is ${checkBmi} : Underweight `

} else if (checkBmi >= 18.5 && checkBmi < 25) {
    // bmiCategory.textContent = 'Normal weight';
bmi_result.innerText = `BMI Result is ${checkBmi} : Normal weight `

    
} else if (checkBmi >= 25 && checkBmi < 30) {
    // bmi_result.textContent = 'Overweight';
bmi_result.innerText = `BMI Result is ${checkBmi} : Overweight`

} else {
    // bmi_result.textContent = 'Obesity';
bmi_result.innerText = `BMI Result is ${checkBmi} : Obesity or No Value `

}

// values.innerText = `Your weight is : ${weight.value} and Height : ${height.value}`
// bmi_result.innerText = `BMI Result is ${checkBmi} : `
}
submit_Button.addEventListener("click",check)
