const makeServerRequest = new Promise((resolve, error) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      makeServerRequest.catch(error => {
        console.log(error);
      });
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });