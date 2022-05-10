const $ = document;
const divForm = $.createElement("div");
const form = $.createElement("form");

const divForLabel = $.createElement("div");
const PForLabel = $.createElement("p");
const nameLabel = $.createElement("label");
const inputFirst = $.createElement("input");
const inputSecond = $.createElement("input");
const ravnoLabel = $.createElement("label");
const output = $.createElement("input");

const divForButton = $.createElement("div");
const PForButton = $.createElement("p");
const btnPlus = $.createElement("button");
const btnPlusLabel = $.createElement("label");
const btnMinus = $.createElement("button");
const btnMinusLabel = $.createElement("label");
const btnDiv = $.createElement("button");
const btnDivLabel = $.createElement("label");
const btnMul = $.createElement("button");
const btnMulLabel = $.createElement("label");
const btnExp = $.createElement("button");
const btnExpLabel = $.createElement("label");
const btnPerc = $.createElement("button");
const btnPercLabel = $.createElement("label");

divForm.appendChild(form);
    form.appendChild(divForLabel);
        divForLabel.appendChild(PForLabel);
        divForLabel.appendChild(nameLabel);
            nameLabel.appendChild(inputFirst);
            nameLabel.appendChild(btnPlusLabel);
                btnPlusLabel.appendChild(btnPlus);
            nameLabel.appendChild(btnMinusLabel);
                btnMinusLabel.appendChild(btnMinus);
            nameLabel.appendChild(btnDivLabel);
                btnDivLabel.appendChild(btnDiv);
            nameLabel.appendChild(btnPercLabel);
                btnPercLabel.appendChild(btnPerc);
            nameLabel.appendChild(btnMulLabel);
                btnMulLabel.appendChild(btnMul);
            nameLabel.appendChild(btnExpLabel);
                btnExpLabel.appendChild(btnExp);
            nameLabel.appendChild(inputSecond);
    form.appendChild(divForButton);
        divForButton.appendChild(PForButton);
        divForButton.appendChild(ravnoLabel);
            ravnoLabel.appendChild(output);

$.body.appendChild(divForm);

//Текст на странице

PForLabel.textContent = "Простые вычисления";
PForButton.textContent = "=";
btnPlus.textContent = "+";
btnMinus.textContent = "-";
btnDiv.textContent = "/";
btnMul.textContent = "*";
btnExp.textContent = "^";
btnPerc.textContent = "%";

//Идентификаторы

divForm.id = "div_form"
inputFirst.id = "first";
inputSecond.id = "second";
output.id = "out";

//Классы

for (let element of [btnPlus, btnMinus, btnMul, btnDiv, btnExp, btnPerc]) {
    element.classList.add("btn");
}
inputFirst.classList.add("form-control");
inputSecond.classList.add("form-control");
output.classList.add("form-control");
nameLabel.classList.add("form-label");
ravnoLabel.classList.add("form-label");

btnPlus.addEventListener("click", () => {
    const a = $.getElementById("first").value;
    const b = $.getElementById("second").value;
    const out = $.getElementById("out").value;

    if ((a.trim() === "") || (b.trim() === "") || (out.trim() !== "" || Number.isInteger(Number(a)) === false || Number.isInteger(Number(b)) === false)) {
        alert("Введите правильно начальные значения");
        return;
    }

    $.getElementById("out").value = Number(a)+Number(b);
})

btnMinus.addEventListener("click", () => {
    const a = $.getElementById("first").value;
    const b = $.getElementById("second").value;
    const out = $.getElementById("out").value;

    if ((a.trim() === "") || (b.trim() === "") || (out.trim() !== ""|| Number.isInteger(Number(a)) === false || Number.isInteger(Number(b)) === false)) {
        alert("Введите правильно начальные значения");
        return;
    }

    $.getElementById("out").value = Number(a)-Number(b);
})

btnMul.addEventListener("click", () => {
    const a = $.getElementById("first").value;
    const b = $.getElementById("second").value;
    const out = $.getElementById("out").value;

    if ((a.trim() === "") || (b.trim() === "") || (out.trim() !== ""|| Number.isInteger(Number(a)) === false || Number.isInteger(Number(b)) === false)) {
        alert("Введите правильно начальные значения");
        return;
    }

    $.getElementById("out").value = Number(a)*Number(b);
})

btnDiv.addEventListener("click", () => {
    const a = $.getElementById("first").value;
    const b = $.getElementById("second").value;
    const out = $.getElementById("out").value;

    if ((a.trim() === "") || (b.trim() === "") || (out.trim() !== ""|| Number.isInteger(Number(a)) === false || Number.isInteger(Number(b)) === false)) {
        alert("Введите правильно начальные значения");
        return;
    }

    $.getElementById("out").value = Number(a)/Number(b);
})

btnExp.addEventListener("click", () => {
    const a = $.getElementById("first").value;
    const b = $.getElementById("second").value;
    const out = $.getElementById("out").value;

    if ((a.trim() === "") || (b.trim() === "") || (out.trim() !== ""|| Number.isInteger(Number(a)) === false || Number.isInteger(Number(b)) === false)) {
        alert("Введите правильно начальные значения");
        return;
    }

    $.getElementById("out").value = Math.pow(Number(a),Number(b));
})

btnPerc.addEventListener("click", () => {
    const a = $.getElementById("first").value;
    const b = $.getElementById("second").value;
    const out = $.getElementById("out").value;

    if ((a.trim() === "") || (b.trim() === "") || (out.trim() !== ""|| Number.isInteger(Number(a)) === false || Number.isInteger(Number(b)) === false)) {
        alert("Введите правильно начальные значения");
        return;
    }

    $.getElementById("out").value = Number(a)%Number(b);
})