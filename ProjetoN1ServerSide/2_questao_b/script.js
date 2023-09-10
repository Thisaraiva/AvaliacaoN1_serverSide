function calcularClassificacao(notas) {
    let somaNotas = 0;
    const [I, II, III, IV, V] = notas;
  
    for (let i = 0; i < notas.length; i++) {
      somaNotas += notas[i];
    }
  
    const media = somaNotas / notas.length;
  
    if (media >= 70) {        
        if (I >= 70 && II >= 70 && (III < 70 || IV < 70) && V < 70) {
            return `Media = ${media} -> C - Passou em I e II, III ou IV, mas não em V`;      
      } else if (I >= 70 && II >= 70 && IV >= 70 && (III < 70 || V < 70)) {
            return `Media = ${media} -> B - Passou em I, II e IV, mas não em III ou V`;
      } else {
            return `Media = ${media} -> A - Passou em todos os exames`;
      }
    }  
    return `Media = ${media} -> Reprovado`;
  }
  
  const notas = [80, 75, 70, 85, 70];
  const classificacao = calcularClassificacao(notas);

  const notas1 = [90, 90, 65, 75, 60];
  const classificacao1 = calcularClassificacao(notas1);
  
  console.log(classificacao);  
  console.log(classificacao1);
