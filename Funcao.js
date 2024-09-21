const dados = require('./dados');
const dados2 = require('./dados2');

class Funcao {
    /* 1)
     *
     * Basta fazer um teste de mesa para perceber que a função f1
     * 1ª iteração: K = 1, SOMA = 0 + 1 = 1
     * 2ª iteração: K = 2, SOMA = 1 + 2 = 3
     * 3ª iteração: K = 3, SOMA = 3 + 3 = 6
     * 4ª iteração: K = 4, SOMA = 6 + 4 = 10
     * 5ª iteração: K = 5, SOMA = 10 + 5 = 15
     * 6ª iteração: K = 6, SOMA = 15 + 6 = 21
     * 7ª iteração: K = 7, SOMA = 21 + 7 = 28
     * 8ª iteração: K = 8, SOMA = 28 + 8 = 36
     * 9ª iteração: K = 9, SOMA = 36 + 9 = 45
     * 10ª iteração: K = 10, SOMA = 45 + 10 = 55
     * 11ª iteração: K = 11, SOMA = 55 + 11 = 66
     * 12ª iteração: K = 12, SOMA = 66 + 12 = 78
     * 13ª iteração: K = 13, SOMA = 78 + 13 = 91
     * Resultado: 91
     * 
     * Codigo equivalente em java a seguir
     */
    f1() {
        const INDICE = 13;
        let SOMA = 0;
        let K = 0;
        while (K < INDICE) {
            K++;
            SOMA += K;
        }
        console.log(SOMA);
    }

    // 2)
    f2(num) {
        if (num === 0) {
            return true;
        }
        return this.Fibonacci(num, 0, 1);
    }

    Fibonacci(num, i, j) {
        if (j === num) {
            return true;
        } else if (j > num) {
            return false;
        } else {
            return this.Fibonacci(num, j, i + j);
        }
    }

    // 3)

    f3_menorValor() {
        let menorValor = dados[0].valor;       
        dados.forEach(dado => {
            if (dado.valor < menorValor) {
                menorValor = dado.valor;
            }
        });
    
        return menorValor;
    }

    f3_maiorValor() {
        let maiorValor = dados[0].valor;       
        dados.forEach(dado => {
            if (dado.valor > maiorValor) {
                maiorValor = dado.valor;
            }
        });
    
        return maiorValor;
    }

    f3_diasMaiorMedia(){
        let media = 0;
        let dias = 0;

        dados.forEach(dado => {
            media += dado.valor;
            dias++;
        });

        media = media / dias;
        dias = 0;

        dados.forEach(dado => {
            if (dado.valor > media) {
                dias++;
            }
        });

        return dias;
    }


    // 4)
    f4(){
        let retorno = "";
        let porcentagem = 0;
        let total = 0;
        dados2.forEach(dado => {
            total += Number(dado.valor);
        });

        dados2.forEach(dado => {
            porcentagem = (dado.valor / total) * 100;
            retorno += `${dado.estado} - ${porcentagem.toFixed(2)}%\n`;
        });
        
        console.log(retorno);
    };


    //f5
    f5(palavra){
        let palavraInvertida = "";
        for (let i = palavra.length - 1; i >= 0; i--) {
            palavraInvertida += palavra[i];
        }
        return palavraInvertida;
    }


}

// Exemplo de uso
const funcao = new Funcao();
funcao.f1(); // Saída: 91
console.log(funcao.f2(13)); // Exemplo de uso da função f2
console.log(funcao.f3_menorValor()); // Exemplo de uso da função f3
console.log(funcao.f3_maiorValor()); // Exemplo de uso da função f3
console.log(funcao.f3_diasMaiorMedia()); // Exemplo de uso da função f3
funcao.f4(); // Exemplo de uso da função f4
console.log(funcao.f5("teste")); // Exemplo de uso da função f5

