class Computer {
  cpu: string = "Apple M1"
  memory: number = 16000
  disk: number = 512000
  so: string = "MacOS Sonoma 14.5"

  printInfo() {
    let memoryQuantityInGb: number
    let diskQuantityInGb: number
    memoryQuantityInGb = this.divideMegabytesToGigabytes(this.memory)
    diskQuantityInGb = this.divideMegabytesToGigabytes(this.disk)
    console.log(
      `Processador: ${this.cpu}\n`,
      `Memória: ${memoryQuantityInGb} GB\n`,
      `Disco: ${diskQuantityInGb} GB\n`,
      `Sistema Operacional: ${this.so}\n`
    )
  }

  divideMegabytesToGigabytes(megabytes: number) {
    return megabytes / 1000
  }
}

class DescribeComputer {
  showInfo(theComputer: Computer) {
    console.log(
      `Processador: ${theComputer.cpu}\n`,
      `Memória: ${theComputer.memory / 1000} GB\n`,
      `Disco: ${theComputer.disk / 1000} GB\n`,
      `Sistema Operacional: ${theComputer.so}\n`
    )
  }
  execute(theComputer: Computer) {
    console.log(
      `Processador: ${theComputer.cpu}\n`,
      `Memória: ${theComputer.memory / 1000} GB\n`,
      `Disco: ${theComputer.disk / 1000} GB\n`,
      `Sistema Operacional: ${theComputer.so}\n`
    )
  }
}

const myPC = new Computer()
// myPC.printInfo()
const describer = new DescribeComputer()
describer.execute(myPC)