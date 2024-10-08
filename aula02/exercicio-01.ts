class Pessoa {
  static numeroDeInstanciasCriadas = 0;

  private nome: string = "";
  private sobreNome: string;
  private dataNascimento: Date;
  constructor(nome: string, sobreNome: string, dataNascimento: Date) {
    this.setNome(nome);
    this.sobreNome = sobreNome;
    this.dataNascimento = dataNascimento;
    Pessoa.numeroDeInstanciasCriadas++;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  setSobrenome(sobreNome: string): void {
    this.sobreNome = sobreNome;
  }

  setDataNascimento(dataNascimento: Date): void {
    if (dataNascimento > new Date()) {
      //error!
    }
    if (dataNascimento < this.dataNascimento) {
      //error!
    }
    this.dataNascimento = dataNascimento;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobreNome}`;
  }

  getIdade(): number {
    return new Date().getFullYear() - this.dataNascimento.getFullYear();
  }
}

function exibePessoa(pessoa: Pessoa) {
  console.log("Nome completo:", pessoa.getNomeCompleto());
  console.log(`Idade: ${pessoa.getIdade()} anos`);
}

const pessoa1 = new Pessoa("John", "Doe", new Date(1700, 1, 1));
const pessoa2 = new Pessoa("Neymar", "Junior", new Date()); //Está correto isto!

exibePessoa(pessoa1);
exibePessoa(pessoa2);

//Princípio de Imutabilidade de Objetos!
pessoa1.setDataNascimento(new Date()) //Pode isso Arnaldo?

exibePessoa(pessoa1);
exibePessoa(pessoa2);

console.log("Número de instâncias criadas até agora", Pessoa.numeroDeInstanciasCriadas)

const pessoa3 = new Pessoa("Kent", "Beck", new Date());
console.log("Número de instâncias criadas até agora", Pessoa.numeroDeInstanciasCriadas)