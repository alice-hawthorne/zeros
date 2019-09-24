module.exports = function zeros(expression) {
  let arrInput = expression.toString().split(/\*/);
  let arrOutput = [];
  for (item in arrInput) {
    let n = parseInt(arrInput[item]);
    if (n == 1) {
      arrOutput.push(n);
    } else {
      if (arrInput[item].includes("!!")) {
        for (n; n > 0; n-=2) {
        arrOutput.push(n);
       }
      } else {
        if (n == 1) {
          arrOutput.push(n);
        } else {
          for (n; n > 0; n--) {
          arrOutput.push(n);
          }
        }
      }
    }
  }

  let x = 0;
  let y = 0;
  for (item in arrOutput) {
    let smallInt = [];
    if(arrOutput[item] > 0 && arrOutput[item] != 1){
      for(let i = 2; i <= arrOutput[item]; i++){
        while(arrOutput[item] % i == 0 && arrOutput[item] > 1){
          smallInt.push(i);
          arrOutput[item] = arrOutput[item] / i;
        }
        if(arrOutput[item]/i == 1){
          smallInt.push(arrOutput[item]);
        }
      }
    } else if(arrOutput[item] == 1){
        smallInt.push(arrOutput[item]);
      }

    for (elem in smallInt) {
      if (smallInt[elem] == 2) {
        x++;
      } else if (smallInt[elem] == 5) {
        y++;
      }
    }
  }
    if (x <= y) {
      return x
    } else {
        return y;
    }
}