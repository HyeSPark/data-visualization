const input1 = document.getElementById('number-1');
const input2 = document.getElementById('number-2');

input1.addEventListener('change', updateValue1);
input2.addEventListener('change', updateValue2);

function updateValue1(e) {
    for (i=1; i<6; i++){
        if (e.target.value !== "") var str = `${e.target.value} x ${i} = ${e.target.value*i}`
        else var str = " "
        document.getElementById(`multiple-${i}-1`).textContent = str;
    }
}

function updateValue2(e) {
    for (i=1; i<6; i++){
        if (e.target.value !== "") var str = `${e.target.value} x ${i} = ${e.target.value*i}`
        else var str = " "
        document.getElementById(`multiple-${i}-2`).textContent = str;
    }
}
