# primeiraAPI-REST
API REST para converter fahrenheit para celsius

nesta api, recebemos dados do front end, no caso a temperatura em farenheit, através da porta 8080 do localhost e pegando esses dados utilizamos a camada de serviço e devolvemos a temperatura convertida para celsius.

temos diversos conceitos abordados e um deles, importante, é a função validaParametro que verifica se o parametro recebido é do tipo number, e, se não é, devolve um arquivo json indicando o erro e o status.
