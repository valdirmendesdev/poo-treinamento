Perguntas

- Teremos mais de um provedor de distância
- Nós precisamos definir o provedor a partir de configuração (Decisão)
- Conversão de dados => Endereço para coordenada
  - Geral ou específica? Específica - necessidade específica do waze
- Qual a medida do resultado? Definir um resultado ou uma unidade comum
  - [Obsessão por tipo simples]
- Entrada de dados está boa? Sim ou não? Criar uma estrutura (classe) para representar o endereço? [Obsessão por tipo simples]

Respostas:

- Teremos mais de um provedor de distância => Polimorfismo por Interface
- Nós precisamos definir o provedor a partir de configuração (Decisão)
  - Método para construir o objeto de acordo com a configuração [design pattern]
- Qual a medida do resultado? Definir uma classe para representar o resultado que contém o valor do resultado e a unidade deste resultado
- Entrada de dados está boa? Construir uma classe para representar endereço

=> Entrada de dados => provedor de distância => Resultado
