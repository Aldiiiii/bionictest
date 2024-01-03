// No. 1
function numberOne(n) {
  for (let i = 0; i < n; i++) {
    let output = "";
    for (let j = 1; j <= n + 3; j++) {
      if (i + 2 == j) {
        output += "**";
        j += 1;
      } else {
        output += j;
      }
    }
    console.log(output);
  }
}
let n = 4;
numberOne(n);

// No.2
function selisih(arr){
        let result = 0
        for (let i = arr.length-1; i >= 0; i--) {
             for (let j = 0; j < i; j++) {
                if(arr[i]-arr[j] > result){
                        result = arr[i]-arr[j]
                }
             }
        }
        return result
}
let harga = [10,7,5,8,11,9,1]
console.log(selisih(harga))
