//Problema 1 - Eu gostaria de visualizar somente os logs de renderização dos componentes de tela
import { md5 } from "./utils";

class ComponenteDeTela {
  static logs: Array<string> = [];
  static debug: boolean = false;

  private ID: string = "";

  static novaInstancia(): ComponenteDeTela {
    let componente = new ComponenteDeTela();
    componente.ID = md5(Math.random().toString());
    return componente;
  }

  public redesenharNaTela(): void {
    let message = `Redesenhando componente ${this.ID}`
    ComponenteDeTela.logs.push(message)
    if (ComponenteDeTela.debug) {
      console.log(message)
    }
  }

  public deletaObjeto(): void {
    ComponenteDeTela.logs.push(`Deletando componente ${this.ID}`)
  }
}

const componentes: Array<ComponenteDeTela> = []
for (let i = 0; i < 10; i++) {
  componentes.push(ComponenteDeTela.novaInstancia())
}

// console.log(componentes)

for (let index = 0; index < 10; index++) {
  const numeroComponenteAtualizado: number = Math.floor(Math.random() * componentes.length)
  console.log("outros mensagens da aplicação")
  componentes[numeroComponenteAtualizado].redesenharNaTela()
}

console.log("Outras coisas na aplicação")
console.log(componentes)
componentes[3].deletaObjeto()
componentes[3] = ComponenteDeTela.novaInstancia()
componentes[3].redesenharNaTela()
console.log(componentes)
console.log(new Date().toUTCString())

console.log("Somente os logs de renderização", ComponenteDeTela.logs)