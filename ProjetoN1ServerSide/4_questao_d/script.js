
let tipoCarne = 0;
let quantidade = 0;

// Define os preços das carnes
const precoFileDuploAte5Kg = 24.90;
const precoFileDuploAcima5Kg = 25.80;
const precoAlcatraAte5Kg = 25.90;
const precoAlcatraAcima5Kg = 26.80;
const precoPicanhaAte5Kg = 36.90;
const precoPicanhaAcima5Kg = 37.80;

// Calcula o preço total com base na escolha do usuário
let precoTotal = 0;

while (true) {
    // Solicita ao usuário o tipo de carne e a quantidade desejada
    tipoCarne = parseInt(prompt("Informe o tipo de carne desejado (1 - File Duplo, 2 - Alcatra, 3 - Picanha): "));
    
    if (tipoCarne >= 1 && tipoCarne <= 3) {
        quantidade = parseFloat(prompt("Informe a quantidade desejada (em Kg):"));

        // Seleciona a opção escolhida pelo cliente e verifica o valor a partir da quantidade desejada
        switch (tipoCarne) {
            case 1:                
                if (quantidade <= 5) {
                    precoTotal = precoFileDuploAte5Kg * quantidade;
                } else {
                    precoTotal = precoFileDuploAcima5Kg * quantidade;
                }
                break;
            case 2:
                if (quantidade <= 5) {
                    precoTotal = precoAlcatraAte5Kg * quantidade;
                } else {
                    precoTotal = precoAlcatraAcima5Kg * quantidade;
                }
                break;
            case 3:
                if (quantidade <= 5) {
                    precoTotal = precoPicanhaAte5Kg * quantidade;
                } else {
                    precoTotal = precoPicanhaAcima5Kg * quantidade;
                }
                break;
        }        
        break; 
        // Fica no loop enquanto a escolha não for válida
    } else {
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
}

// Solicita ao usuário o tipo de pagamento
let tipoPagamento;

while (true) {
    tipoPagamento = parseInt(prompt("Informe o tipo de pagamento (1 - Dinheiro, 2 - Cartão Tabajara):"));
    
    if (tipoPagamento === 1 || tipoPagamento === 2) {
        break; // Fica no loop enquanto escolha não for válida
    } else {
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
}

// Calcula o desconto, se for Cartão Tabajara
let desconto = 0;
if (tipoPagamento === 2) {
    desconto = precoTotal * 0.05;
}

// Calcula o valor a pagar
let valorAPagar = precoTotal - desconto;

// Exibe o cupom fiscal
console.log("----------- Cupom Fiscal -----------");
console.log(`Tipo de carne    : ${(tipoCarne === 1 ? "1 - File-Duplo" : (tipoCarne === 2 ? "2 - Alcatra" : "3 - Picanha"))}`);
console.log(`Quantidade       : ${quantidade}Kg`);
console.log(`Preço total      : R$${precoTotal.toFixed(2)}`);
console.log(`Tipo de pagamento: ${(tipoPagamento === 1 ? "Dinheiro" : "Cartão Tabajara")}`);
console.log(`Desconto         : R$${desconto.toFixed(2)}`);
console.log(`Valor a pagar    : R$${valorAPagar.toFixed(2)}`);
