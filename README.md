# Redux e Redux Saga

  Repositório com aplicação simples com objetivo de abordar conceitos do Redux e Redux Saga
  
# Desenvolvimento
  
  É utilizado o json server para a criação de uma API Simples, com isso é simulado um e-commerce. Com o axios, utiliza-se o método GET para consultar produtos disponíveis
  e que é armazenado em um estado global (Redux), ao adicionar algum desses produtos no carrinho é feita uma tratativa através de um middleware (Redux Saga) verificando a  quantidade de produtos disponíveis, assim dando seguimento na aplicação
