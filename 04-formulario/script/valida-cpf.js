document.getElementById("validarButton").
    addEventListener("click", function () {
        // alert("deu certo!!");
        const cpf = document.getElementById("cpfInput").value;

        if (validaCPF(cpf)) {
            document.getElementById("resultado").textContent = "CPF Válido"
        } else {
            document.getElementById("resultado").textContent = "CPF Inválido"
        }

    })

function validaCPF(vrCPF) {
    //Implementar as regras de validação do CPF
    let soma = 0;
    soma += parseInt(vrCPF.charAt(0)) * 10;
    soma += parseInt(vrCPF.charAt(1)) * 9;
    soma += parseInt(vrCPF.charAt(2)) * 8;
    soma += parseInt(vrCPF.charAt(3)) * 7;
    soma += parseInt(vrCPF.charAt(4)) * 6;
    soma += parseInt(vrCPF.charAt(5)) * 5;
    soma += parseInt(vrCPF.charAt(6)) * 4;
    soma += parseInt(vrCPF.charAt(7)) * 3;
    soma += parseInt(vrCPF.charAt(8)) * 2;

    let digitoX = soma%11;
    digitoX = 11 - digitoX;
    if (digitoX >= 10) {
        digitoX = 0
    }

    soma = 0 ; 
    soma += parseInt(vrCPF.charAt(0)) * 11;
    soma += parseInt(vrCPF.charAt(1)) * 10;
    soma += parseInt(vrCPF.charAt(2)) * 9;
    soma += parseInt(vrCPF.charAt(3)) * 8;
    soma += parseInt(vrCPF.charAt(4)) * 7;
    soma += parseInt(vrCPF.charAt(5)) * 6;
    soma += parseInt(vrCPF.charAt(6)) * 5;
    soma += parseInt(vrCPF.charAt(7)) * 4;
    soma += parseInt(vrCPF.charAt(8)) * 3;
    soma += parseInt(vrCPF.charAt(9)) * 2;

    let digitoY = soma%11;
    digitoY = 11 - digitoY;
    if (digitoY >= 10) {
        digitoY = 0
    }

    let digitValido = true;
    if (digitoX !== parseInt(vrCPF.charAt(9))) {
        digitValido = false;
    }
    if (digitoY !== parseInt(vrCPF.charAt(10))) {
        digitValido = false;
    }

        return digitValido;
    //return vrCPF.length === 11 & !isNaN(vrCPF) 

       
}

