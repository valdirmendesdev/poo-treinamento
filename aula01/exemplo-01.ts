class MinhaPrimeiraClasse {
  //Atributos ou variáveis
  atributo1: string = ""
  atributo2: string = ""
  atributo3: string = "valor_inicial"

  mes: number = 7

  // Métodos ou habilidades ou comportamentos
  setAtributo2(novoValor: string) {
    this.atributo2 = novoValor
  }

  setAtributo3(novoValor: string) {
    //Regra de negócio ou validação técnica
    if (novoValor == "") {
      return
    }
    this.atributo3 = novoValor
  }

  setMes(novoMes: number) {
    if (novoMes < 1 || novoMes > 12) {
      return
    }
    this.mes = novoMes
  }
}

let instancia: MinhaPrimeiraClasse;
// console.log(instancia);

// Processo simples de criação de objeto
instancia = new MinhaPrimeiraClasse();
console.log("Estado depois da criação: ", instancia);
// // Estou alterando direto o atributo, a variável
// instancia.atributo1 = "qualquer"
// console.log("Estado depois de uma alteração: ", instancia);
// //Através de método
// instancia.setAtributo2("novo valor")
// console.log("Estado depois de uma alteração: ", instancia);

// instancia.setAtributo3("")
// console.log("Estado depois de uma alteração: ", instancia);

instancia.setMes(10)
console.log("Estado depois de uma alteração: ", instancia);

instancia.setMes(13)
console.log("Estado depois de uma alteração: ", instancia);

instancia.setMes(-1)
console.log("Estado depois de uma alteração: ", instancia);

// const instancia2 = new MinhaPrimeiraClasse();
// console.log(instancia2);