function generateAngka(n) {
  let num = n.replace(/\./g, '');

  for (let i = 0; i < num.length; i++) {
    let numLength = num.slice(i).length;
    console.log(num[i] + "0".repeat(numLength - 1))
  }
}


generateAngka("1.225.441");