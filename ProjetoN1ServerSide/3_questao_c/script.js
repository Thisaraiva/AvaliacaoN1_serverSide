//1ª Função testa se alguns anos pré-determinados são bissexto

/*function eBissexto(ano) {
      if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
    
    // Teste com alguns anos
    const anos = [1600, 1996, 2000, 2004, 2008, 2012, 2016, 2400, 2800, 1500, 1974, 1982, 1983, 1990, 2018, 2022, 2030, 2038];
    
    for (const ano of anos) {
      if (eBissexto(ano)) {
        console.log(`${ano} é bissexto.`);
      } else {
        console.log(`${ano} não é bissexto.`);
      }
    }
    

//2ª Função testa se alguns anos dentro de um período são bissexto
function eBissexto(ano1) {
      if ((ano1 % 4 === 0 && ano1 % 100 !== 0) || ano1 % 400 === 0) {
            return true;
      } else {
            return false;
      }
}
      
for (let i = 1980; i <= 2040; i++) {
      if (eBissexto(i)) {
            console.log(`${i} é bissexto.`);
      } else {
            console.log(`${i} não é bissexto.`);
      }
}*/
    
//3ª Função testa se o ano informado pelo usuário é bissexto
function eBissexto(ano2) {
      if ((ano2 % 4 === 0 && ano2 % 100 !== 0) || ano2 % 400 === 0) {
            return true;
      } else {
            return false;
      }
}

let n = prompt("Digite um ano para verificar se ele é bissexto: ");
    
if (eBissexto(n)) {
      console.log(`${n} é bissexto.`);
} else {
      console.log(`${n} não é bissexto.`);
}
    