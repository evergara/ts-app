
(()=>{
    //Creamos un tipado un Alias
    type PaytmentID = string | number | boolean;

    let paytmentID: PaytmentID;
    let sector: string = 'G';
    paytmentID = 1232233344455;
    paytmentID = sector + paytmentID;
    
    function greeting(id: PaytmentID): void {
      if (typeof id === 'string') {
        console.log(`string ${id.toLowerCase()}`);
      } else if ( typeof id === 'boolean'){
        console.log(`boolean ${id.valueOf()}`);
      } else {
        console.log(`number ${id.toFixed()}`);
      }
    }
    
    greeting(paytmentID);
    
})()
