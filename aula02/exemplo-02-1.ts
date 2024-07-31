//Problema 1 - Eu gostaria de visualizar somente os logs de renderização dos componentes de tela
import { md5 } from "./utils";

class ComponenteDeTela {
  private ID: string = "";

  static novaInstancia(): ComponenteDeTela {
    let componente = new ComponenteDeTela();
    componente.ID = md5(Math.random().toString());
    return componente;
  }

  public redesenharNaTela(): void {
    console.log(`Redesenhando componente ${this.ID}`)
  }
}

const componentes: Array<ComponenteDeTela> = []
for (let i = 0; i < 10; i++) {
  componentes.push(ComponenteDeTela.novaInstancia())
}

console.log(componentes)

for (let index = 0; index < 10; index++) {
  const numeroComponenteAtualizado: number = Math.floor(Math.random() * componentes.length)
  console.log("outros mensagens da aplicação")
  componentes[numeroComponenteAtualizado].redesenharNaTela()
}

console.log("Outras coisas na aplicação")
componentes[3].redesenharNaTela()
console.log(new Date().toUTCString())