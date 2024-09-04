/**
 * Situação problema 1:
 * Nossa aplicação precisa suportar cálculo de distância entre dois endereços.
 * Vamos trabalhar apenas com o Google!
 */

/**
 * Situação problema 2:
 * Nossa aplicação precisa suportar cálculo de distância entre dois endereços.
 * Vamos trabalhar com o Google ou Waze baseado em configuração!
 */

/**
 * Situação problema 3:
 * Nossa aplicação precisa suportar cálculo de distância entre dois endereços.
 * Vamos trabalhar com o Google, Waze ou OpenMaps baseado em configuração!
 */

// SDK => Software Development Kit
//Construída na biblioteca do SDK da Google
class GoogleMapsAPI {
  calculateRoute(from: string, to: string): number {
    return 100;
  }
}

//Construída na biblioteca do SDK do Waze
class Coordenada {
  latitude: number;
  longitude: number;
  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
class WazeAPI {
  calculateDistance(from: Coordenada, to: Coordenada): number {
    return 1000;
  }
}

class Endereco {
  tipo: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;

  static fromString(endereco: string): Endereco {
    return new Endereco(
      endereco.split(" ")[0],
      endereco.split(" ")[1],
      "",
      "",
      "",
      "",
      "",
      ""
    )
  }

  constructor(tipo: string, logradouro: string, numero: string, complemento: string, bairro: string, cidade: string, estado: string, cep: string) {
    this.tipo = tipo;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }

  enderecoCompleto(): string {
    return `${this.tipo} ${this.logradouro}, ${this.numero}, ${this.complemento}, ${this.bairro}, ${this.cidade}/${this.estado}, ${this.cep}`
  }
}

//Escopo atual contempla somente distância
class DistanciaEntreDoisEnderecos {
  valor: number;
  unidade: string;
  origem: Endereco;
  destino: Endereco;
  tempoEmMinutos = 0;
  constructor(valor: number, unidade: string, origem: Endereco, destino: Endereco) {
    this.valor = valor;
    this.unidade = unidade;
    this.origem = origem;
    this.destino = destino;
  }
}

interface ProvedorCalculoDeDistancia {
  calcular(origem: Endereco, destino: Endereco): DistanciaEntreDoisEnderecos
}

//POO != de escrever pouco!
class ProvedorGoogleMaps implements ProvedorCalculoDeDistancia {
  calcular(origem: Endereco, destino: Endereco): DistanciaEntreDoisEnderecos {
    const googleMaps = new GoogleMapsAPI()
    const resultadoEmKM = googleMaps.calculateRoute(origem.enderecoCompleto(), destino.enderecoCompleto())
    return new DistanciaEntreDoisEnderecos(
      resultadoEmKM,
      "KM",
      origem,
      destino)
  }
}

class ProvedorWaze implements ProvedorCalculoDeDistancia {
  calcular(origem: Endereco, destino: Endereco): DistanciaEntreDoisEnderecos {
    const waze = new WazeAPI()
    const fromCoordenada = this.transformAddressToCoordenada(origem.enderecoCompleto())
    const toCoordenada = this.transformAddressToCoordenada(destino.enderecoCompleto())
    const resultado = waze.calculateDistance(fromCoordenada, toCoordenada)
    return new DistanciaEntreDoisEnderecos(
      resultado,
      "Mi",
      origem,
      destino)
  }

  transformAddressToCoordenada(address: string) {
    return new Coordenada(10, 20)
  }
}

class ProvedorAppleMaps implements ProvedorCalculoDeDistancia {
  calcular(origem: Endereco, destino: Endereco): DistanciaEntreDoisEnderecos {
    //...
    return new DistanciaEntreDoisEnderecos(
      500,
      "Metros",
      origem,
      destino)
    //...
  }
}

class ProvedorDeCalculoDistanciaBuilder {
  static createInstance(nomeDoProvedor: string): ProvedorCalculoDeDistancia {
    switch (nomeDoProvedor) {
      case "waze":
        return new ProvedorWaze()
      case "apple":
        return new ProvedorAppleMaps()
    }
    return new ProvedorGoogleMaps()
  }
}

//SOLID
function main() {
  //Determina do provedor de cálculo de distância
  let configuracaoProvedor = "google"
  //... código da aplicação antes
  const from = "Rua 1", to = "Rua 2"
  let provedor: ProvedorCalculoDeDistancia
  provedor = ProvedorDeCalculoDistanciaBuilder.createInstance(configuracaoProvedor) //Factory Method
  const fromEndereco = Endereco.fromString(from) //Builder!
  const toEndereco = Endereco.fromString(to)
  const distanciaEntreDoisEnderecos = provedor.calcular(fromEndereco, toEndereco)
  console.log(distanciaEntreDoisEnderecos.valor, distanciaEntreDoisEnderecos.unidade)
  //... código da aplicação depois
}

main();



