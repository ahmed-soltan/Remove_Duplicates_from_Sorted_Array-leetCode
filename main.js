// const Fibonacci = (n) => {
//   const numbers = [0, 1]; //1
//   for (let i = 1; i < n - 1; i++) {
//     numbers.push(numbers[i] + numbers[i - 1]); //n-2
//   }

//   return numbers; // 1
// };

// //time complexity : O(n)
// console.log(Fibonacci(10));

// const factorial = (n) => {
//   if (n === 0) {
//     return 1;
//   } else {
//     let sum = 1;

//     for (let i = n; i >= 1; i--) {
//       sum *= i;
//     }
//     return sum;
//   }
// };

// //time complexity : O(n)
// console.log(factorial(0));

// const isPrime = (n) => {
//   let result = false;
//   result = n <= 1 && result;
//   for (let i = 2; i < Math.sqrt(n); i++) {
//     return (result = n % i == 0 ? false : true);
//   }
//   return result;
// };

// //time complexity : O(sqrt(n))
// console.log(isPrime(5));

// // sol-1
// const isPowerOfTwo = (n) => {
//   if (n < 1) {
//     return false;
//   }
//   for (let i = 0; i <= n / 2; i++) {
//     if (n === Math.pow(2, i)) {
//       return true;
//     } else {
//       continue;
//     }
//   }
//   return false;
// };
// //time complexity : O(n/2)

// // sol-2
// const isPowerOfTwoWhile = (n) => {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n /= 2;
//   }
//   return true;
// };
// //time complexity : O(log(n))

// // sol-3
// const isPowerOfTwoBitWise = (n) => {
//   if (n < 1) {
//     return false;
//   }
//   return (n & (n - 1)) === 0;
// };

// //time complexity : O(1)

// console.log(isPowerOfTwoBitWise(3));

// const RecursiveFibonacci = (n) => {
//   if (n <= 1) {
//     return n;
//   }
//   return RecursiveFibonacci(n - 1) + RecursiveFibonacci(n - 2);
// };

// console.log(RecursiveFibonacci(5));
// //time complexity : O(2**n)

// //0 1 1 2 3 5 8

// const linearSearch = (n) => {
//   const arr = [1, 2, 3, 4, 5];
//   let result = -1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       result = i;
//       break;
//     }
//   }

//   return result;
// };
// console.log(linearSearch(5));
// //time complexity : O(n)

// const binarySearch = (n) => {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let result = -1;
//   let left = 0;
//   let right = arr.length - 1;
//   let mid = Math.floor((right + left) / 2);

//   while (left <= right) {
//     if (arr[mid] === n) {
//       result = mid;
//       break;
//     }
//     if (arr[mid] < n) {
//       left = mid + 1;
//       mid = Math.floor((right + left) / 2);
//     }
//     if (arr[mid] > n) {
//       right = mid - 1;
//       mid = Math.floor((right + left) / 2);
//     }
//   }

//   return result;
// };
// // console.log(binarySearch(8));

// const binarySearchR = (l, m, r, n, arr) => {
//   m = Math.floor((r + l) / 2);
//   if (arr[m] === n) {
//     return m;
//   }
//   if (r < l) return -1;

//   if (arr[m] < n) {
//     l = m + 1;
//     return binarySearchR(l, m, r, n, arr);
//   }
//   if (arr[m] > n) {
//     r = m - 1;
//     return binarySearchR(l, m, r, n, arr);
//   }
// };
// const recursiveBinarySearch = (n) => {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let result = -1;
//   let left = 0;
//   let right = arr.length - 1;
//   let mid = Math.floor((right + left) / 2);

//   result = binarySearchR(left, mid, right, n, arr);
//   return result;
// };
// console.log(recursiveBinarySearch(8));
//time complexity : O(n)

// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap elements
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

// console.log(bubbleSort([7, 3, 5, 9, 1, 4, 0]));

// const insertionSort = (arr) => {
//   for (let i = 1; i <arr.length; i++) {
//     let key=arr[i];
//     let j=i-1;

//     while(j>=0 && arr[j]>key){
//       arr[j+1] = arr[j]
//       j=j-1;
//     }

//     arr[j+1]=key

//   }
//   return arr;
// };

// console.log(insertionSort([7, 3, 5, 9, 1, 4, 0]));

// const arr=[1,2,3,4,5];

// const sliceArr = arr.slice(1,3)
// // const spliceArr = arr.splice(1,0,6,7)
// const originalArray = [1, 2, 3, 4, 5];
// originalArray.splice(2, 2); // Remove elements at index 2 and 3 => [1, 2, 5]
// originalArray.splice(1, 0, 6, 7); // put 6 and 7 at index 1 and > [1, 6, 7, 2, 5]
// console.log(sliceArr)

// const obj ={
//   name:"ahmed",
//   age:20,
//   address:{
//     city:"cairo",
//     country:"egypt"
//   }
// }

// console.log(Object.entries(obj).map((arr)=>console.log(obj[arr[0]])));

// let a ='20';
// let b= a =30
// console.log(b+a)

// class Queue{
//   constructor(){
//     this.items = [];
//     this.head=0;
//     this.tail=0;
//   }

//   enqueue(element){
//     this.items[this.tail] = element;
//     this.tail++;
//   }

//   dequeue(){
//     const item= this.items[this.head]
//     delete this.items[this.head];
//     this.head++;
//     return item;
//   }

//   isEmpty(){
//     return this.items.length === 0;
//   }

//   peek(){
//     return this.items[this.head];
//   }

//   print(){
//     console.log(this.items);
//   }

// }

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);

// queue.print()

// queue.dequeue()

// queue.print()

class CircularQueue {
  constructor() {
    this.size = 6;
    this.items = new Array(6);
    this.head = 0;
    this.tail = 0;
    this.currentLength = 0;
  }

  isFull() {
    return this.currentLength === this.size;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.items[this.tail] = element;
      this.tail = (this.tail + 1) % this.size;
      this.currentLength++;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      const item = this.items[this.head];
      this.items[this.head] = null; // or undefined
      this.head = (this.head + 1) % this.size;
      this.currentLength--;
      return item;
    }
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  peek() {
    return this.items[this.head];
  }

  print() {
    let result = [];
    for (let i = 0; i < this.currentLength; i++) {
      const index = (this.head + i) % this.size;
      result.push(this.items[index]);
    }
    console.log(result);
  }
}

const queue = new CircularQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

// queue.print(); // Output: [1, 2, 3, 4]

queue.dequeue();

// queue.print(); // Output: [2, 3, 4]

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

// queue.print(); // Output: [2, 3, 4, 5, 6, 7]

const minPatch = (nums, n) => {
  let patches = 0;
  let miss = 1;
  let i = 0;

  while (miss <= n) {
    if (i < nums.length && miss >= nums[i]) {
      miss += nums[i];
      i++;
    } else {
      miss += miss;
      patches++;
    }
  }

  return patches;
};

// console.log(minPatch([1,2,31,33],2147483647));

// for (let j = i+1; j < nums.length; j++) {
//   if(nums[i]+nums[j]===target){
//       posArr.push(i,j);
//   }
// }
const twoSum = (nums, target) => {
  const posArr = [];

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (nums.includes(complement)) {
      if (posArr.includes(nums.indexOf(complement)) || posArr.includes(i)) {
        continue;
      } else {
        posArr.push(i, nums.indexOf(complement));
      }
    }
  }

  return posArr;
};

// console.log(twoSum([2, 7, 11, 15], 9));

const palindrome = (x) => {
  // let i = (x).toString();
  // i = i.split("").reverse().join("");
  // return parseInt(i)===x ;

  let reminder = 0,
    reverse = 0,
    n = x;

  while (n !== 0) {
    reminder = n % 10;
    reverse = reverse * 10 + reminder;
    n = Math.floor(n / 10);
  }
  console.log(reverse);
  return reverse === x;
};

// console.log(palindrome(121))

const romanToInt = (s) => {
  const romanToValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanToValue[s[i]] < romanToValue[s[i + 1]]) {
      sum -= romanToValue[s[i]];
    } else {
      sum += romanToValue[s[i]];
    }
  }

  return sum;
};

// console.log(romanToInt("III"))

//IVI

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

class Node {
  constructor() {
    this.value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  getSize() {
    return this.length;
  }

  insertFirst(element) {
    const newNode = new Node();
    newNode.value = element;
    if (this.isEmpty()) {
      this.head = newNode;
      newNode.next = null;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  insertValue(element, pos) {
    const newNode = new Node();
    newNode.value = element;
    if (this.isEmpty()) {
      this.insertFirst(element);
    } else if (pos === 0) {
      this.insertFirst(element);
    } else {
      let count = 0;
      let current = this.head;
      while (count < pos - 1) {
        count++;
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }

    this.length++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      return null;
    } else {
      const item = this.head.value;
      this.head = this.head.next;
      this.length--;
      return item;
    }
  }

  removeValue(element) {
    if (this.isEmpty()) {
      return null;
    } else if (element === this.head.value) {
      this.removeFirst();
    } else {
      let item = this.head;
      let previous = null;
      while (item.value !== element) {
        previous = item;
        item = item.next;
      }

      previous.next = item.next;
      item.next = null;

      this.length--;
      return item;
    }
  }

  search(element) {
    if (this.isEmpty()) {
      return null;
    } else {
      let item = this.head;
      let pos = 0;
      while (item) {
        if (item.value === element) {
          console.log("The element is Found at position " + pos);
          return pos;
        }
        ++pos;
        item = item.next;
      }
    }

    console.log("The element is not Found");
  }

  // 1 2 3 4 5

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  getSize() {
    return this.length;
  }

  insert(element) {
    const newNode = new Node();
    newNode.value = element;
    if (this.isEmpty()) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    } else {
      const item = this.top.value;
      this.top = this.top.next;
      this.length--;
      return item;
    }
  }

  print() {
    let current = this.top;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  getSize() {
    return this.length;
  }

  insert(element) {
    const newNode = new Node();
    newNode.value = element;
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      newNode.next = null;
    }
    this.length++;
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    } else {
      const item = this.head.value;
      this.head = this.head.next;
      this.length--;
      return item;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

class DoublyNode {
  constructor(element) {
    this.next = null;
    this.previous = null;
    this.item = element;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }
  getSize() {
    return this.length;
  }

  insertFirst(element) {
    const newNode = new DoublyNode(element);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.item);
      current = current.next;
    }
  }
}

const judgeSquareSum = (c) => {
  let result = false;
  let a = 0;
  let b = Math.floor(Math.sqrt(c));

  while (a <= b) {
    sum = a * a + b * b;
    if (sum === c) {
      result = true;
      break;
    } else if (sum < c) {
      a++;
    } else {
      b--;
    }
  }

  return result;
};

const sumSubarrayMins = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      sum += Math.min(...arr.slice(i, j + 1));
    }
  }
  return sum;
};

const isValid = (s) => {
  const stack = [];

  const isStackEmpty = () => stack.length === 0;
  console.log(s.length);
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      stack.push(s[i]);
    } else {
      if (!isStackEmpty()) {
        if (s[i] === ")" && stack[stack.length - 1] === "(") {
          stack.pop();
        } else if (s[i] === "}" && stack[stack.length - 1] === "{") {
          stack.pop();
        } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return isStackEmpty();
};

const generateParenthesis = (n) => {
  const result = [];

  const backtrack = (current, open, close) => {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  };

  backtrack("", 0, 0);
  return result;
};

const mergeTwoLists = (list1, list2) => {
  const arr = [];
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < list1.length * 2; i++) {
    if (list1[p1] <= list2[p2]) {
      arr.push(list1[p1]);
      p1++;
    } else {
      arr.push(list2[p2]);
      p2++;
    }
  }

  return arr;
};

const longestCommonPrefix = (strs) => {
  let prefix = "";
  let i = 0;
  let minStr = strs[0].length;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < minStr) {
      minStr = strs[i].length;
    }
  }


  while (i < minStr) {
    if (strs[0][i] === strs[1][i] && strs[1][i] === strs[2][i]) {
      prefix += strs[0][i];
      i++;
    }
  }

  return prefix;
};
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));


class HashTable{
  constructor(size){
    this.table= new Array(size);
    this.size=size;
  }

  hash(key){
    let total =0;
    for (let i = 0; i < key.length; i++) {
      total+=key.charCodeAt(i);
    }

    return total;
  }

  set(key , value){
    let index = this.hash(key);
    const bucket = this.table[index];

    if(!bucket){
      this.table[index] = [[key, value]];
    }else{
      const samekey = bucket.find(item=>item[0]===key);

      if(samekey){
        samekey[1] = value;
      }else{
        bucket.push([key,value]);
      }
    }
  }

  get(key){
    let index = this.hash(key);
    const bucket = this.table[index];

    const similarKey = bucket.find(item=>item[0]===key);

    if(similarKey){
      return similarKey[1];
    }else{
      return undefined;
    }
  }


  remove(key)
  {
    let index = this.hash(key);
    const bucket = this.table[index];
    const similarKey = bucket.find(item=>item[0]===key);
    if(similarKey){
      bucket.splice(bucket.indexOf(similarKey),1);
    }else{
      return undefined;
    }
  }


  display()
  {
    for (let i = 0; i < this.table.length; i++) {
      if(this.table[i]){
        console.log(this.table[i]);
      }
    }
  }

}


const table = new HashTable(50)

table.set('grapes', 10000);
table.set('Melon', 100);
table.set('Banana', 10);
table.set('sgrape', 40000);

// table.display()

console.log(table.get('grapes'))

table.remove('grapes')

// table.display()



const removeElement = (nums,val)=>{
  const arr=[]
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== val){
      arr.push(nums[i])
    }
  }



  return arr;
}

const reverse = (x)=>{
  let sign = x<0 ? -1 : 1
  let str=x.toString().split('').reverse().join("");
  let number;
  if(sign == -1){
   number = parseInt(str)*sign < Math.pow(-2,31) ? 0 :  parseFloat(str)*sign 
  }else{
    number = parseInt(str)*sign >= Math.pow(2,31) ? 0 : parseInt(str)*sign
  }
  return number
}

const divide = (dividend, divisor)=>{

  if(dividend===0 || Math.abs(dividend)< Math.abs(divisor)) return 0;
  let sign = (dividend<0 && divisor<0 ) || (dividend>0 && divisor>0 )? 1 : -1 
  if(Math.abs(divisor)===1)
    {
      return sign*Math.abs(dividend)
    } 
  let sub = Math.abs(dividend) - Math.abs(divisor);
  let count=1
  while(sub>0){
    sub= (sub - Math.abs(divisor)) - Math.abs(divisor) ;
    count++;
  }

  let result = count * sign;

  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = -(2 ** 31);

  if (result > MAX_INT) return MAX_INT;
  if (result < MIN_INT) return MIN_INT;
  return result;
}

/*
  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
  7 / -3
   10 - 3 = 5
   7-3 = 4
   1-3 =-2
  
*/


