interface Dispositivo {
  ligar(): void
  desligar(): void
  estaLigado(): boolean
}

class TV implements Dispositivo {
  private _ligado: boolean

  constructor() {
    this._ligado = false
  }

  ligar(): void {
    console.log("Ligando TV...")
    this._ligado = true
  }

  desligar(): void {
    console.log("Desligando TV...")
    this._ligado = false
  }

  estaLigado(): boolean {
    console.log("TV esta ligada?", this._ligado)
    return this._ligado
  }
}

class Radio implements Dispositivo {
  private nivelVolume: Number

  constructor() {
    this.nivelVolume = 0
  }

  ligar(): void {
    console.log("Ligando Radio...")
    this.nivelVolume = 1
  }

  desligar(): void {
    console.log("Desligando Radio...")
    this.nivelVolume = 0
  }

  estaLigado(): boolean {
    const estaLigado = this.nivelVolume != 0
    console.log("Radio esta ligado?", estaLigado)
    return estaLigado
  }

  definirVolume(novoNivelDeVolume: number) {
    console.log("Definindo volume...")
    if (novoNivelDeVolume < 0 || novoNivelDeVolume > 100) {
      console.log("Volume inválido!")
      return
    }
    this.nivelVolume = novoNivelDeVolume
  }
}

let meuDispositivo: Dispositivo
meuDispositivo = new TV()
meuDispositivo.ligar()
meuDispositivo.estaLigado()
meuDispositivo.desligar()
meuDispositivo.estaLigado()

console.log("============ agora com radio ============")
meuDispositivo = new Radio()
meuDispositivo.ligar()
meuDispositivo.estaLigado()
meuDispositivo.desligar()
meuDispositivo.estaLigado()
const radio = meuDispositivo as Radio //aplicando polimorfismo
radio.definirVolume(75)
meuDispositivo.estaLigado()

