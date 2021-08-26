# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo pegar comida
    Para que os trevelers possam seguir viagem saudavel

    Contexto:
        Dado um Hunter de nome "Gon Freecss"
        E ele sempre começa a viagem com 2 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 7

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 5
        E o Hunter não ficará doente

    Cenário: Saiu para caçar 2 vezes
        Quando o Hunter sair para caçar 2 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 15

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 8 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 0
        E o Hunter ficará doente

    
