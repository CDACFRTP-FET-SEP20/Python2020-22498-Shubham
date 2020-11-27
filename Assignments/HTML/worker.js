onmessage = (e) => {
    console.log("In Worker, message recieved");
    console.log(e);
    postMessage('Welcome to Cybage, '+ e.data);
    console.log("In Worker, message sent back to main.js");
  };