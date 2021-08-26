# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo pegar comida
    Para que os trevelers possam seguir viagem saudavel

    Contexto:
        Dado um Hunter de nome "Gon Freecss"
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 6

    Cenário: Comeu e seguiu saudável
        Quando o Traveler parar para comer 1 vezes
        Então a quantidade de refeições deve ser igual a 0
        E o Traveler não ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 12
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 1
        E o Hunter ficará doente

    