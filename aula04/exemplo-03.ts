abstract class ExplorerItem {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  abstract isFolder(): boolean;
}

class Folder extends ExplorerItem {
  override isFolder(): boolean {
    return true;
  }
}

class ExplorerFile extends ExplorerItem {
  private extension: string;
  constructor(name: string, extension: string) {
    super(name);
    this.extension = extension;
  }
  getExtension(): string {
    return this.extension;
  }
  isFolder(): boolean {
    return false;
  }
  override getName(): string {
    return `${super.getName()}${this.extension}`
  }
}

const myItems: ExplorerItem[] = [];
myItems.push(new Folder("Documents"))
myItems.push(new ExplorerFile("foto_capa", ".png"))

//item é do tipo ExplorerItem - Classe mais generalista
for (const item of myItems) {
  console.log('item name: ', item.getName())
  console.log('item isFolder: ', item.isFolder())
  if (!item.isFolder()) {
    //Conversão de tipo EXPLÍCITO para um tipo mais especialista
    const file = item as ExplorerFile; //Type Casting - Conversão de Tipo
    console.log('Extensão do arquivo:', file.getExtension())
  }
}