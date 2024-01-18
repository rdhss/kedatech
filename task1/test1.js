const fishbash = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            console.log("fish bash");
        } else if (i % 3 === 0) {
            console.log("fish");
        } else if (i % 5 === 0) {
            console.log("bash");
        } else {
            console.log(i);
        }
    }
}

console.log('\n');
console.log('soal no 1 :')
fishbash(15)


// type 
// asc : dari kecil ke besar
// desc : dari besar ke kecil
const array = [2, 3, 8, 1, 4, 5, 9, 7, 6]
const sortingarray = (arr, sort) => {
    if(sort != 'asc' && sort != 'desc'){
        console.log('masukan type : asc | desc');
        return false
    }

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if(sort == 'asc'){
            if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
        } else if(sort == 'desc'){
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
              }
        }
      }
    }
    console.log(sort + ':');
    console.log(arr);
  }

console.log('\n');
console.log('soal no 2 :');
sortingarray(array, 'asc')

const isPalindrome = (str) => {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            console.log(false);
            return false;
        }
        j--;
    }
    console.log(true);
}

console.log('\n');
console.log('soal no 3 :');
isPalindrome('kasurrusak')

console.log('\n');





