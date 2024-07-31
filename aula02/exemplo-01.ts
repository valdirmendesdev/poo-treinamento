class Colaborador {
  //public => Pode ser visto e utilizado fora e dentro da classe
  //protected => Pode ser visto e utilizado somente dentro da classe
  //private => Pode ser visto e utilizado somente dentro da classe
  // São os modificadores de acesso!
  // public nome: string = ""
  nome: string = ""
  protected dataNascimento: Date = new Date()
  private salario: number = 1000

  //Homenagem ao Paulinho
  public getSalarioParaFalarProZOTO(): number {
    console.log(this.getSalarioReal())
    return this.getSalarioReal() / 3
  }

  private getSalarioReal(): number {
    return this.salario
  }

  //Público implicitamente
  getDataNascimento(): Date {
    return this.dataNascimento
  }

  metodoQueNaoRetornaNada(): void {
    console.log("Método que não retorna nada")
  }

  // DTO => Data Transfer Object
  metodoComParametros(nome_do_paramentro: string, outro_parametro: number, mais_um_parametro: boolean): void {
    console.log(nome_do_paramentro, outro_parametro, mais_um_parametro)
  }

  //Membros estáticos
  static nomeDaAplicacao: string = "Meu Sistema"

  static meuMetodoIndependenteDeInstancia(): string {
    return "Método estático"
  }
}

//Sem instância
// NomeDaClasse.nomeDoAtributo ou NomeDaClasse.nomeDoMetodo()
console.log(Colaborador.nomeDaAplicacao)
console.log(Colaborador.meuMetodoIndependenteDeInstancia())
Date.now()

// //Com instância
// let meuColaborador = new Colaborador()
// meuColaborador.nome = "Valdir" //Acesso fora da classe
// console.log(meuColaborador.nome)
// // console.log(meuColaborador.dataNascimento)
// // console.log(meuColaborador.salario)
// console.log(meuColaborador.getDataNascimento())
// console.log(meuColaborador.getSalarioParaFalarProZOTO())
// // console.log(meuColaborador.getSalarioReal())
