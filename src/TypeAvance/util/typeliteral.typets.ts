(() => {
  //Creamos un type literal
  type Size = 'S' | 'M' | 'L' | 'XL';

  let shirtSize: Size;
  shirtSize = 'L';
  shirtSize = 'M';
  shirtSize = 'XL';

  function setShirtSize(size: Size): void {
    shirtSize = size;
    console.log(shirtSize);
  }

  setShirtSize('S');
})();
