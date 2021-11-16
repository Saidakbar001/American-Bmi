function calculateBmi(){
    const name  = document.querySelector("#name");
    const weightVal = document.querySelector("#weight");
    const heightVal = document.getElementById("height")
    const natija = document.getElementById("result")

    //parseFloat--bu stringni numberga aylantirib beradi.
    const weight = parseFloat(weightVal.value);
    const height = parseFloat(heightVal.value);

    let bmi = (weight / (height*height) ).toFixed(2);

    result.innerHTML  = `${name.value} 's Bmi is ${bmi}`;
    //yoki tepada innerHtml o'rniga textContent desa ham bo'ladi.
}

















// function calculateBmi (a, b) {
//   console.log (a+b);
// }

// calculateBmi(10, 12);




// function calculateBmi (name, weight, height) {
//   let bmi = weight / (height*height);
//   //console.log(name + " 's Bmi is" + bmi);
//   console.log(`${name} 's Bmi is ${bmi}`)
// }

// calculateBmi("Saidbek", 80, 1.8);
// calculateBmi("Azim", 75, 1.9);


