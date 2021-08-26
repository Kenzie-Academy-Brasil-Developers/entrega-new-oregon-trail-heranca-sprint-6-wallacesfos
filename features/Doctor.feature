# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Deve manter os Travelers saudável

    Contexto:
        Dado um doutor de nome "Chapatin"
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o doutor sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 3

    Cenário: Comeu e seguiu saudável
        Quando o Traveler parar para comer 1 vezes
        Então a quantidade de refeições deve ser igual a 0
        E o Traveler não ficará doente

    Cenário: Traveler ficou doente
       Quando o Traveler ficar doente
       Então a quantidade de refeições deve ser maior que 1
       E o Traveler não ficará doente