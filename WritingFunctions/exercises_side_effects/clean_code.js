function initApp(){
    const success = connectDatabase();
    if (!success){
        showErrorMessage('Could not connect do database!'); // console.log substituído por causa do nível de abstração
    }
    // ...
}

function connectDatabase() {
    const didConnect = database.connect(); // Side effect/efeito colateral esperado
    return didConnect;    
      // console.log('Could not connect to database!'); -- Side effect/efeito colateral inesperado
  }
  
  function determineSupportAgent(ticket) {
    if (ticket.requestType === 'unknown') {
      return findStandardAgent();
    }
    return findAgentByRequestType(ticket.requestType);
  }
  

  function createUser(email, password){
      if (!isValid(email, password)){
          showErrorMessage('Invalid input!');
      }

      // ...
  }


  function isValid(email, password) {
    if (!email.includes('@') || password.length < 7) {
      // console.log('Invalid input!'); -- Side effect/efeito colateral inesperado
      return false;
    }
    return true;
  }

  function showErrorMessage(message){
      console.log(message);
  }