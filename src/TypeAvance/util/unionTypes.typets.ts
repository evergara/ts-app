(() => {
  let paytmentID: string | number;
  let sector: string = 'G';
  paytmentID = 1232233344455;
  paytmentID = sector + paytmentID;

  function greeting(id: string | number): void {
    if (typeof id === 'string') {
      console.log(`string ${id.toLowerCase()}`);
    } else {
      console.log(`number ${id.toFixed()}`);
    }
  }

  greeting(paytmentID);
})();
