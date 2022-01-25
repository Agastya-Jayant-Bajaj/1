
function add() {
    var res=Number(document.getElementById("input1").value)+Number(document.getElementById("input2").value)
    document.getElementById("answer_label").innerHTML=res
}

function subtract() {
    var res=Number(document.getElementById("input1").value)-Number(document.getElementById("input2").value)
    document.getElementById("answer_label").innerHTML=res
}

function multiply() {
    var res=Number(document.getElementById("input1").value)*Number(document.getElementById("input2").value)
    document.getElementById("answer_label").innerHTML=res
}

function divide() {
    var res=Number(document.getElementById("input1").value)%Number(document.getElementById("input2").value)
    document.getElementById("answer_label").innerHTML=res
}