function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomColor() {
    return {
        red: getRandomInt(255, 0), 
        green: getRandomInt(255, 0), 
        blue: getRandomInt(255, 0)
    };
}
function permute(A) {
    let len = A.length;
    if (len === 1) {
      return A;
    }
    let pick = "";
    let permutations = [];
    for (let i = 0; i < len; i++) {
      pick = A[i];
      var remainder = A.slice(0, i) + A.slice(i + 1, len);
      for (var perm of permute(remainder)) {
        permutations.push(pick + perm);
      }
    }
    return permutations;
  }
export { getRandomInt, getRandomColor, permute };

