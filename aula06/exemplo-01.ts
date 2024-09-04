// /**
//  * Situação problema 1:
//  * Nossa aplicação precisa suportar cálculo de distância entre dois endereços.
//  * Vamos trabalhar apenas com o Google!
//  */

// /**
//  * Situação problema 2:
//  * Nossa aplicação precisa suportar cálculo de distância entre dois endereços.
//  * Vamos trabalhar com o Google ou Waze baseado em configuração!
//  */

// /**
//  * Situação problema 3:
//  * Nossa aplicação precisa suportar cálculo de distância entre dois endereços.
//  * Vamos trabalhar com o Google, Waze ou OpenMaps baseado em configuração!
//  */

// // SDK => Software Development Kit
// //Construída na biblioteca do SDK da Google
// class GoogleMapsAPI {
//   calculateDistance(from: string, to: string): number {
//     return 100;
//   }
// }

// //Construída na biblioteca do SDK do Waze
// class Coordenada {
//   latitude: number;
//   longitude: number;
//   constructor(latitude: number, longitude: number) {
//     this.latitude = latitude;
//     this.longitude = longitude;
//   }
// }
// class WazeAPI {
//   calculateDistance(from: Coordenada, to: Coordenada): number {
//     return 1000;
//   }
// }

// //SOLID
// function main() {
//   //Determina do provedor de cálculo de distância
//   let distanceProvider = "waze"
//   //... código da aplicação antes
//   const from = "Rua 1", to = "Rua 2"
//   let resultado = 0
//   if (distanceProvider == "google") {
//     const googleMaps = new GoogleMapsAPI()
//     resultado = googleMaps.calculateDistance(from, to)
//   } else if (distanceProvider == "waze") {
//     const waze = new WazeAPI()
//     const fromCoordenada = transformAddressToCoordenada(from)
//     const toCoordenada = transformAddressToCoordenada(to)
//     resultado = waze.calculateDistance(fromCoordenada, toCoordenada)
//   } else if (distanceProvider == "openmaps") {
//     //... código da openmaps
//   }
//   console.log(resultado)
//   //... código da aplicação depois
// }

// function transformAddressToCoordenada(address: string) {
//   return new Coordenada(10, 20)
// }

// main();