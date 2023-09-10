class Leitores {
    constructor() {
        this.leitores = [];
    }
    adicionarEleitor(idade, cidade, opniao) {
        this.leitores.push({ idade, cidade, opniao });
    }
}

let leitores = new Leitores();

let n = parseInt(prompt("Quantos Leitores darão sua opinião: "));

for (let i = 0; i < n; i++) {
    let idade = parseInt(prompt("Qual sua idade: "));
    let cidade = prompt("Qual sua cidade: ");
    let opniao = parseInt(prompt("Qual sua opinião (1-regular, 2-bom, 3-ótimo): "));
    
    leitores.adicionarEleitor(idade, cidade, opniao);
}

// Agora você pode acessar os leitores como leitores.leitores

console.log(leitores);

for(let i = 0; i < n; i++){
    console.log(leitores.leitores[i].idade);
}



/*class Leitores {
    constructor (idade, cidade, opiniao){
        this.idade = idade;  //atributos ou propriedades do objeto eleitor
        this.cidade = cidade;// atributo ou propriedade do objeto eleitor
        this.opiniao = opiniao// atributo ou propriedade do objeto eleitor
    }
}

let leitore = [];

let n = parseInt(prompt("Quantos leitores darão sua opniao: "));

for(let i = 0; i < n; i++){
    idade = parseInt(prompt("Qual sua idade: "));
    cidade = prompt("Qual sua cidade: ");
    opiniao = parseInt(prompt("Qual sua opniao: 1-regular, 2-bom, 3-ótimo"));
    let eleitor = new Leitores(idade, cidade, opiniao);
    leitores.push(eleitor);
}

console.log(leitores);*/