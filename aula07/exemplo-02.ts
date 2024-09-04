// /***
//  * Estrutura básica de uma classe de exceção customizada!
//  */
// class MinhaExcecao extends Error {
//   constructor(message: string) {
//     super(message);
//     this.name = "Regra de negócio";
//   }
// }

// function exemplo() {
//   throw new MinhaExcecao("Está funcionando meu erro customizado!");
// }

// //Tratamento de exceção
// try {
//   exemplo(); // Esta linha sempre vai ser executada
// } catch (error) {
//   // Se tiver erro, este bloco é executado
//   //Registrar no log da aplicação
//   // Mandar msg, e-mail
//   console.log('Só falando que deu erro, mas vamos continuar!', error)
// } finally {
//   // Este bloco sempre é executado para que seja possível recuperar ou não
//   // da exceção
//   console.log('[finally]Aqui sempre será executado independente se deu certo ou não!')
// }

// console.log(
//   "Agora será executada! Pois tratamos a exceção!",
// );
