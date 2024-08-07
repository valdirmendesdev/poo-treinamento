class Documento {
  // private tipo: string. Faz sentido?

  //Outra forma de declarar atributos direto no construtor no typescript
  constructor(public nome: string, private extensao: string) { }

  tipo(): string {
    return "documento!";
  }

  getExtensao(): string {
    const index = this.nome.lastIndexOf(".")
    if (index == -1) {
      return ""
    }
    return this.nome.substring(index)
  }
}

class DocumentoWord extends Documento {
  //override palavra chave => para definir que um método foi sobreescrito
  override tipo(): string {
    return "Word"
  }
}

//DocumentoImagem? faz sentido?
class DocumentoImagem extends Documento {
  override tipo(): string {
    return "Imagem"
  }
}

const qualquer = new Documento("qualquer", "nao sei?")
const documentoWord = new DocumentoWord("anotacoes", ".docx")
const documentoImagem = new DocumentoImagem("foto_linkedin", ".png")

console.log(`arquivo ${qualquer.nome}, tipo ${qualquer.tipo()}`)
console.log(`arquivo ${documentoWord.nome}, tipo ${documentoWord.tipo()}`)
console.log(`arquivo ${documentoImagem.nome}, tipo ${documentoImagem.tipo()}`)
