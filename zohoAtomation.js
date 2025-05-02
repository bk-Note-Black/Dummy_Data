// Question No1
// function findPairs(arr, target) {
//   let result = [];
//   let resultIndex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         let exists = false;
//         for (let k = 0; k < resultIndex; k++) {
//           if (
//             (result[k][0] === arr[i] && result[k][1] === arr[j]) ||
//             (result[k][0] === arr[j] && result[k][1] === arr[i])
//           ) {
//             exists = true;
//             break;
//           }
//         }
//         if (!exists) {
//           result[resultIndex] = [];
//           result[resultIndex][0] = arr[i];
//           result[resultIndex][1] = arr[j];
//           resultIndex++;
//         }
//       }
//     }
//   }
//   return result;
// }
// console.log(findPairs([1, 2, 3, 4, 5], 6));

// Question No2
// function rotateRight(arr, k) {
//   let n = arr.length;
//   k = k % n;
//   for (let i = 0; i < k; i++) {
//     let last = arr[n - 1];
//     for (let j = n - 1; j > 0; j--) {
//       arr[j] = arr[j - 1];
//     }
//     arr[0] = last;
//   }
//   return arr;
// }
// console.log(rotateRight([1, 2, 3, 4, 5,], 2));

// Question No3
// function binarySearch(arr, target) {
//   let low = 0,
//     high = arr.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (arr[mid] === target) return mid;
//     else if (arr[mid] < target) low = mid + 1;
//     else high = mid - 1;
//   }
//   return -1;
// }
// console.log(binarySearch([1, 3, 5, 7, 11], 7));

// Question No5
// function replaceWithNextGreatest(arr) {
//   let n = arr.length;
//   let max = -1;
//   for (let i = n - 1; i >= 0; i--) {
//     let current = arr[i];
//     arr[i] = max;
//     if (current > max) {
//       max = current;
//     }
//   }
//   return arr;
// }
// console.log(replaceWithNextGreatest([16, 17, 4, 3, 5, 2]));

// Question No6
// function chocolateCount(money, price, wrappers, choco, maxVisit) {
//   let chocolates = Math.floor(money / price);
//   let totalChocolates = chocolates;
//   let wrap = chocolates;
//   let visits = 0;
//   while (wrap >= wrappers && (maxVisit === 0 || visits < maxVisit)) {
//     let exchanged = Math.floor(wrap / wrappers) * choco;
//     wrap = (wrap % wrappers) + exchanged;
//     totalChocolates += exchanged;
//     visits++;
//   }
//   return {
//     totalChocolates: totalChocolates,
//     wrappersLeft: wrap,
//   };
// }
// console.log(chocolateCount(15, 1, 3, 1, 0));

// Question No7
// function repeatChars(str) {
//   let result = "";
//   let i = 0;
//   while (i < str.length) {
//     let char = str[i];
//     i++;
//     let num = "";
//     while (i < str.length && str[i] >= "0" && str[i] <= "9") {
//       num += str[i];
//       i++;
//     }
//     let count = parseInt(num);
//     for (let j = 0; j < count; j++) {
//       result += char;
//     }
//   }
//   return result;
// }
// console.log(repeatChars("a1b10"));
// console.log(repeatChars("b3c6d15"));

// Question No9
function reversedsentence(sentence){
    let words = [];
    let word = "";
    for(let i = 0;i < sentence.length;i++){
        if(sentence[i] !== " "){
            word += sentence[i];
        }else{
            words.push(word);
            word =" ";
        }
    }
    words.push(word);

    let reversed = "";
    for(let i = words.length -1; i >= 0; i--){
        reversed += words[i];
        if(i !== 0) reversed += " ";
    }
    return reversed;
}
console.log(reversedsentence("Bharath kumar"));