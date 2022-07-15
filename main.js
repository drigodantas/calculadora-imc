const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const divIMC = document.querySelector("#result")

function imcCompute() {
    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)
    const imc = calculateIMC(weight, height)
    const p = paragraphCreator()
    const levelimc = levelIMC(imc)

    divIMC.innerHTML = ""
    divIMC.appendChild(p)

    if (height <= 0 || height === NaN || height >= 2.5) {
        p.innerHTML = "Altura Inválida"
        p.classList.add('error')
        return
    }

    if (weight <= 0 || weight == NaN || weight >= 250) {
        p.innerHTML = "Peso Inválido"
        p.classList.add('error')
        return
    }
    
    p.classList.add('sucess')
    p.innerHTML = `O seu IMC é <strong>${imc}</strong> está em <strong>${levelimc}</strong>`

}

function calculateIMC (weight, height) {
    const imc = weight / (height ** 2)
    return imc.toFixed(1)

}

function levelIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso"
    }
    if (imc < 24.9) {
        return "Peso normal"
    }
    if (imc < 29.9) {
        return "Sobrepeso"
    }
    if (imc < 34.9) {
        return "Obesidade Grau I"
    }
    if (imc < 39.9) {
        return "Obesidade Grau II"
    }
    if (imc >= 39.9) {
        return "Obesidade Grau III"
    }

}

function paragraphCreator() {
    const p = document.createElement('p')
    return p
}

document.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        imcCompute()
    }
});