// Precisamos construir uma aplicação que nos permita criar, iniciar, finalizar, excluir e verificar status de containers (Máquina Virtual)
// Docker!
//
// Fluxo básico de POO
// 1. Entender o problema
// 2. Modelar uma solução que resolva o problema (Abstração e Encapsulamento)
// 3. Implementar! Escrever código
// 
// Problemas que eu posso encontrar com esta aplicação
// - Sistema Operacional (MacOS, Linux e Windows)
// - Organização de pastas e arquivos (/) \
// - Compatibilidade de versão de SO
// - Arquitetura 32 bits, 64 bits e ARM (M1, M2 e M3...)

// Representar a aplicação e suas funcionalidades
// Representar sistema operacional
// Representar a arquitetura do SO

interface GestorContainer {
  criar(nomeDoContainer: string, nomeDaImage: string): void //faz sentido ser void?
  iniciar(nomeDoContainer: string): void //faz sentido ser void?
  finalizar(nomeDoContainer: string): void //faz sentido ser void?
  excluir(nomeDoContainer: string): void //faz sentido ser void?
  status(nomeDoContainer: string): string //faz sentido ser somente uma string?
}

class VersaoDoSO {
  nome: string;
  versao: string;

  constructor(nome: string, versao: string) {
    this.nome = nome;
    this.versao = versao;
  }

  toString(): string {
    return `${this.nome} ${this.versao}`
  }
}

//Dentro desta interface, incluir algo para retorna o nome do SO.
interface SistemaOperacional {
  separadorDeArquivos(): string
  versao(): VersaoDoSO //Deve ser retornado junto do nome do SO no modelo "{nome do so} {versao}"
  // versao(): string
  arquitetura(): string
  // nome(): string
}

class Windows implements SistemaOperacional {
  private _versao: string;
  private _arquitetura: string;

  constructor(versao: string, arquitetura: string) {
    this._versao = versao;
    this._arquitetura = arquitetura;
  }

  separadorDeArquivos(): string {
    return "\\"
  }

  versao(): VersaoDoSO {
    // return `Windows ${this._versao}`
    return new VersaoDoSO("Windows", this._versao)
  }

  arquitetura(): string {
    return this._arquitetura
  }
}

abstract class UnixBased implements SistemaOperacional {
  private _versao: string;
  private _arquitetura: string;

  constructor(versao: string, arquitetura: string) {
    this._versao = versao;
    this._arquitetura = arquitetura;
  }
  nome(): string {
    throw new Error("Method not implemented.")
  }

  separadorDeArquivos(): string {
    return "/"
  }

  versao(): VersaoDoSO {
    // return this._versao
    return new VersaoDoSO("Unix", this._versao)
  }

  arquitetura(): string {
    return this._arquitetura
  }
}

class Linux extends UnixBased {
  constructor(versao: string, arquitetura: string) {
    super(versao, arquitetura);
  }
  override versao(): VersaoDoSO {
    // return `Linux ${super.versao()}`
    const versaoClasseMae = super.versao()
    return new VersaoDoSO("Linux", versaoClasseMae.versao)
  }
}

class MacOS extends UnixBased {
  constructor(versao: string, arquitetura: string) {
    super(versao, arquitetura);
  }
  override versao(): VersaoDoSO {
    // return `MacOS ${super.versao()}`
    const versaoClasseMae = super.versao()
    return new VersaoDoSO("MacOS", versaoClasseMae.versao)
  }
}

class Docker implements GestorContainer {
  private _so: SistemaOperacional;

  constructor(so: SistemaOperacional) {
    this._so = so;
  }

  criar(nomeDoContainer: string, nomeDaImage: string): void //faz sentido ser void?
  {
    const versao = this._so.versao()
    if (versao.nome == "Windows") {
      if (versao.versao != "10") {
        console.log(`${this._so.versao()} com arquitetura ${this._so.arquitetura()} não é compatível!`)
        return
      }
    }

    if (soUtilizado.arquitetura() != "x64") {
      console.log(`${this._so.versao()} com arquitetura ${this._so.arquitetura()} não é compatível!`)
      return
    }
    console.log(`criando container: ${nomeDoContainer}, nome da imagem: ${nomeDaImage}, montando volume na pasta ${this._so.separadorDeArquivos()}users${this._so.separadorDeArquivos()} no ${this._so.versao()}`)
  }

  iniciar(nomeDoContainer: string): void //faz sentido ser void?
  {
    if (soUtilizado.arquitetura() != "x64") {
      console.log("Não é compatível!")
      return
    }
    console.log(`iniciando container: ${nomeDoContainer}`)
  }

  finalizar(nomeDoContainer: string): void //faz sentido ser void?
  {
    if (soUtilizado.arquitetura() != "x64") {
      console.log("Não é compatível!")
      return
    }
    console.log(`finalizando container: ${nomeDoContainer}`)
  }

  excluir(nomeDoContainer: string): void //faz sentido ser void?
  {
    if (soUtilizado.arquitetura() != "x64") {
      console.log("Não é compatível!")
      return
    }
    console.log(`excluindo container: ${nomeDoContainer}`)
  }

  status(nomeDoContainer: string): string //faz sentido ser somente uma string?
  {
    if (soUtilizado.arquitetura() != "x64") {
      console.log("Não é compatível!")
      return ""
    }
    return `verificando status do container: ${nomeDoContainer}`
  }

}

let soUtilizado: SistemaOperacional
soUtilizado = new Windows("7", "x64")
// soUtilizado = new Linux("Ubuntu 22.04", "x64")

let aplicacao: GestorContainer
aplicacao = new Docker(soUtilizado) //Polimorfismo
aplicacao.criar("meu-postgres", "postgres:16")