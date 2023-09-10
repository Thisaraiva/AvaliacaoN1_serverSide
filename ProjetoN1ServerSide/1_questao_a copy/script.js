class Leitores {
    constructor() {
      this.leitores = [];
    }
  
    adicionarLeitor(idade, cidade, opiniao) {
        this.leitores.push({ idade, cidade, opiniao });
    }

    /*Esta é uma função de flecha (arrow function) que define a condição para filtrar os leitores. 
    Ela recebe um parâmetro leitor, que representa cada elemento do array this.leitores. 
    A expressão leitor.opiniao === opiniao verifica se a propriedade opiniao do leitor é igual à variável opiniao 
    passada como argumento para a função. Se for igual, o leitor é mantido no novo array; caso contrário, é descartado.*/  
    calcularMediaIdadeOtimo() {
      const leitoresOtimo = this.leitores.filter(leitor => leitor.opiniao === 3);
        if (leitoresOtimo.length === 0) {
            return 0;
      }

      /*.reduce(): O método reduce() é um método disponível em arrays em JavaScript que é usado para 
      reduzir (ou acumular) os valores de um array em um único valor. Neste caso, estamos usando-o para 
      somar as idades dos leitores que responderam "ótimo". A chamada reduce() é executada da seguinte maneira:
      - (total, leitor) => total + leitor.idade: Isso é uma função de callback que é chamada para cada elemento do array leitoresOtimo. 
        A função recebe dois argumentos: total e leitor. total é o valor acumulado até o momento, e leitor é o elemento atual do array sendo processado. 
        A função simplesmente adiciona a idade do leitor ao valor acumulado (total + leitor.idade) e retorna o resultado.
      - 0 é o valor inicial para total. Isso significa que a primeira chamada da função de callback começará com total igual a 0.*/
      const somaIdadesOtimo = leitoresOtimo.reduce((total, leitor) => total + leitor.idade, 0);
        return somaIdadesOtimo / leitoresOtimo.length;
    }

    /* - this.leitores: this se refere à instância da classe Leitores, e this.leitores acessa a propriedade leitores dessa instância. 
        Esta propriedade contém um array de objetos, onde cada objeto representa um leitor com informações como idade e opinião.
       - .filter(): O método filter é um método disponível em arrays em JavaScript. Ele é usado para criar um novo array com todos os 
        elementos que passam por um teste especificado em uma função. Nesse caso, estamos filtrando os leitores com base em uma condição.
       - (leitor => leitor.opiniao === opiniao): Esta é uma função de flecha (arrow function) que define a condição para filtrar os leitores. 
        Ela recebe um parâmetro leitor, que representa cada elemento do array this.leitores. A expressão leitor.opiniao === opiniao verifica 
        se a propriedade opiniao do leitor é igual à variável opiniao passada como argumento para a função. Se for igual, o leitor é mantido 
        no novo array; caso contrário, é descartado.*/  
    contarLeitoresRegular() {
        return this.leitores.filter(leitor => leitor.opiniao === 1).length;
    }
  
    calcularPorcentagemBom() {
        const totalLeitores = this.leitores.length;
        const leitoresBom = this.leitores.filter(leitor => leitor.opiniao === 2).length;
        return (leitoresBom / totalLeitores) * 100;
    }
  
    calcularPorcentagemPorCidade() {
        // Criar um objeto vazio para armazenar o número de leitores por cidade.
        const cidades = {};
    
        // Percorrer todos os leitores.
        for (const leitor of this.leitores) {
            // Verificar se a cidade do leitor já existe no objeto "cidades".
            if (cidades[leitor.cidade]) {
                // Se existir, incrementar o contador de leitores para essa cidade.
                cidades[leitor.cidade]++;
            } else {
                // Se não existir, criar uma entrada para a cidade e inicializar o contador com 1.
                cidades[leitor.cidade] = 1;
            }
        }
    
        // Calcular o total de leitores.
        const totalLeitores = this.leitores.length;
    
        // Criar um objeto para armazenar as porcentagens de leitores por cidade.
        const porcentagens = {};
    
        // Percorrer todas as cidades no objeto "cidades".
        for (const cidade in cidades) {
            // Calcular a porcentagem de leitores para essa cidade.
            const porcentagem = (cidades[cidade] / totalLeitores) * 100;
    
            // Arredondar a porcentagem para duas casas decimais e armazenar no objeto "porcentagens".
            porcentagens[cidade] = porcentagem.toFixed(2);
        }
    
        // Retornar o objeto "porcentagens" que contém as porcentagens de leitores por cidade.
        return porcentagens;
    }
    
}
  
const leitores = new Leitores();

let n = parseInt(prompt("informe a quantidade de leitores que deram opinião: ")) 

for (let i = 1; i <= n; i++) {
    const idade = parseInt(prompt(`Digite a idade do leitor ${i}:`));
    const cidade = prompt(`Digite a cidade do leitor ${i}:`);
    const opiniao = parseInt(prompt(`Digite a opinião do leitor ${i} (1 - Regular, 2 - Bom, 3 - Ótimo):`));

    if (isNaN(idade) || isNaN(opiniao)) {
        alert('Por favor, insira valores numéricos válidos para idade e opinião.');
        i--; // Volta para a iteração anterior para coletar novamente os dados.
        continue;
    }
    leitores.adicionarLeitor(idade, cidade, opiniao);
}

const mediaIdadeOtimo = leitores.calcularMediaIdadeOtimo();
const quantidadeRegular = leitores.contarLeitoresRegular();
const porcentagemBom = leitores.calcularPorcentagemBom();
const porcentagensPorCidade = leitores.calcularPorcentagemPorCidade();

console.log(`Média de idade dos leitores que responderam ótimo: ${mediaIdadeOtimo}`);
console.log(`Quantidade de leitores que responderam regular: ${quantidadeRegular}`);
console.log(`Porcentagem de leitores que responderam bom: ${porcentagemBom.toFixed(2)}%`);
console.log('Porcentagem de leitores por cidade:');
for (const cidade in porcentagensPorCidade) {
    console.log(`${cidade}: ${porcentagensPorCidade[cidade]}%`);
}  