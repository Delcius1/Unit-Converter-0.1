const input1 = document.getElementById("input1");
const unit1 = document.getElementById("unit1");
const input2 = document.getElementById("input2");
const unit2 = document.getElementById("unit2");
const convert = document.getElementById("convert");

async function CreateTransformer() {
    if(unit1.value == "M" && unit2.value == "Km"){
        input2.value = input1.value * 0.001
    }
    if(unit1.value == "M" && unit2.value == "M"){
        input2.value = input1.value;
    }
    if(unit1.value == "M" && unit2.value == "Cm"){
        input2.value = input1.value * 100
    }
    if(unit1.value == "M" && unit2.value == "Mm"){
        input2.value = input1.value * 1000
    }

    if(unit1.value == "Cm" && unit2.value == "Km"){
        input2.value = input1.value * 0.00001
    }
    if(unit1.value == "Cm" && unit2.value == "Cm"){
        input2.value = input1.value;
    }
    if(unit1.value == "Cm" && unit2.value == "M"){
        input2.value = input1.value * 0.01
    }
    if(unit1.value == "Cm" && unit2.value == "Mm"){
        input2.value = input1.value * 10
    }

    if(unit1.value == "Km" && unit2.value == "M"){
        input2.value = input1.value * 1000
    }
    if(unit1.value == "Km" && unit2.value == "Km"){
        input2.value = input1.value;
    }
    if(unit1.value == "Km" && unit2.value == "Cm"){
        input2.value = input1.value * 100000
    }
    if(unit1.value == "Km" && unit2.value == "Mm"){
        input2.value = input1.value * 1000000
    }

    if(unit1.value == "Mm" && unit2.value == "M"){
        input2.value = input1.value * 0.001
    }
    if(unit1.value == "Mm" && unit2.value == "Mm"){
        input2.value = input1.value;
    }
    if(unit1.value == "Mm" && unit2.value == "Cm"){
        input2.value = input1.value * 0.1
    }
    if(unit1.value == "Mm" && unit2.value == "Km"){
        input2.value = input1.value * 0.000001
    }
}

function WhenConverted(){
    Number(input1.value)
    if(isNaN(input1.value) == false){
        CreateTransformer()
    }else{
        alert("You have to input numbers!")
    }
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        Number(input1.value)
        if(isNaN(input1.value) == false){
            CreateTransformer()
        }else{
            alert("You have to input numbers!")
        }
    }
  });