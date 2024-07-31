import { md5 } from "./utils";

class Computador {
  private numeroDeSerie: string

  //Garantir que todo objeto criado tenha um estado válido!
  constructor(numeroDeSerie?: string);
  constructor(numeroDeSerie?: string) {
    //regra de negócio encapsulada (escondida) dentro do construtor
    if (numeroDeSerie && numeroDeSerie != "") {
      this.numeroDeSerie = numeroDeSerie
    } else {
      this.numeroDeSerie = md5(Math.random().toString())
    }
  }

  //Encapsulamento clássico
  getNumeroDeSerie(): string {
    return this.numeroDeSerie
  }
}

const meuComputador = new Computador();
console.log(meuComputador.getNumeroDeSerie())

const outroComputador = new Computador("Valdir");
console.log(outroComputador.getNumeroDeSerie())

const computador1 = new Computador("");
console.log(computador1.getNumeroDeSerie())