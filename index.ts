// class MyArray {
//   data: any = {};
//   length: number = 0;

//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   push(value: any) {
//     this.data[this.length] = value;
//     this.length++;
//     return this.length;
//   }

//   get(index: number) {
//     return this.data[index];
//   }

//   pop() {
//     if (this.length === 0) return undefined;
//     const lastValue = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastValue;
//   }

//   shift() {
//     const firstValue = this.data[0];
//     for (let i = 0; i < this.length; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }

//   delete(index: number) {
//     const value = this.data[index];
//     for (let i = index; i < this.length; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//     return value;
//   }

//   reverse() {
//     for (let i = 0; i < Math.floor(this.length / 2); i++) {
//       let temp = this.data[i];
//       this.data[i] = this.data[this.length - (i + 1)];
//       this.data[this.length - (i + 1)] = temp;
//     }

//     return this.data;
//   }

//   isPalindrome() {
//     const arr = {};
//     for (let i = 0; i < this.length; i++) {
//       arr[i] = this.data[i];
//     }
//     const myArray = this.reverse();

//     for (let i = 0; i < this.length; i++) {
//       if (myArray[i] !== arr[i]) {
//         console.log("This Array is Not Palindrome");
//         return false;
//       }
//     }

//     return true;
//   }

//   capitalizeString() {
//     for (let i = 0; i < this.length; i++) {
//       if (i === 0) this.data[i] = this.data[i].toUpperCase();
//       if (this.data[i] === " ")
//         this.data[i + 1] = this.data[i + 1].toUpperCase();
//     }

//     return this.data;
//   }

//   // chunk(arr:any , size:number){
//   //   let index = 0;
//   //   let chunks=[];

//   //   while (index < arr.length) {
//   //       chunks.push(arr.slice(index, index + size));
//   //       index += size;
//   //   }

//   //   return chunks;

//   // }
// }

// const myArray = new MyArray();

// myArray.push("1");
// myArray.push("2");
// myArray.push("l");
// myArray.push("l");
// myArray.push("o");
// myArray.push(" ");
// myArray.push("w");
// myArray.push("o");
// myArray.push("r");
// myArray.push("l");
// myArray.push("d");

class NodeL {
  data: any;
  next: NodeL | null = null;

  constructor(value: number) {
    this.data = value;
  }
}

class LinkedList {
  head: NodeL | null;
  tail: NodeL | null;
  length: number = 0;

  constructor() {
    const newNode = new NodeL(1);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value: number) {
    const newNode = new NodeL(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (this.tail) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (!this.head) return null;
    let temp = this.head;
    let prev: NodeL | null = null;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    if (prev) {
      prev.next = null;
      this.tail = prev;
    }

    this.length--;
  }

  unshift(value: number) {
    const newNode = new NodeL(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  shift() {
    if (!this.head) return undefined;
    let temp: NodeL | null = this.head;
    if (!temp.next) this.head = null;
    this.head = temp.next;
    temp = null;
    this.length--;
  }

  get(index: number) {
    let temp: NodeL | null = this.head;
    let counter = 0;

    while (counter !== index) {
      if (!temp || !temp.next) return undefined;
      temp = temp.next;
      counter++;
    }

    return temp;
  }

  set(index: number, value: number) {
    let temp: NodeL | undefined | null = this.get(index);

    if (!temp) return;

    temp.data = value;
  }

  insert(index: number, value: number) {
    if (index < 0 || index > this.length) return;

    if (index === 0) {
      this.unshift(value);
      return;
    }

    if (index === this.length) {
      this.push(value);
      return;
    }

    const newNode = new NodeL(value);
    let temp: NodeL | null = this.head;
    let counter = 0;

    while (temp && counter < index - 1) {
      temp = temp.next;
      counter++;
    }

    if (!temp) return;

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
  }
}

class NodeD {
  data: number;
  next: NodeD | null = null;
  prev: NodeD | null = null;

  constructor(value: number) {
    this.data = value;
  }
}

class DoublyLinkedList {
  head: NodeD | null;
  tail: NodeD | null;
  length: number = 0;

  constructor() {
    const newNode = new NodeD(1);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value: number) {
    const newNode = new NodeD(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    let temp: NodeD | null = this.tail;
    if (!temp) return undefined;

    if (temp.prev) {
      temp.prev.next = null;
      this.tail = temp.prev;
      temp = null;
    } else {
      this.head = null;
    }

    this.length--;
  }

  unshift(value: number) {
    const newNode = new NodeD(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === this.head) this.tail = newNode;
    this.length++;
  }

  reverse() {
    let current = this.head;
    let prev = null;
  }
}

class Stack {
  top: NodeL | null = null;
  length: any = 0;

  push(value: any) {
    const newNode = new NodeL(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    let temp = this.top;
    if (!temp) return;
    this.top = temp.next;
    this.length--;
    return temp.data;
  }

  isValidParentheses(str: string) {
    const brackets = {
      "(": ")",
      "[": "]",
      "{": "}",
    };

    for (const char of str) {
      if (brackets[char]) {
        this.push(char);
      } else {
        let top = this.pop();

        if (!top || brackets[top] !== char) {
          return false;
        }
      }
    }
    return this.length === 0;
  }

  reverseString(str: string) {
    const arr: string[] = [];
    for (const char of str) {
      this.push(char);
    }

    while (this.length > 0) {
      arr.push(this.pop());
    }

    return arr.join("");
  }
}

class Queue {
  front: NodeL | null = null;
  rear: NodeL | null = null;
  length: number = 0;

  enqueue(value: number) {
    const newNode = new NodeL(value);

    if (!this.front || !this.rear) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.front || !this.rear) return;

    let temp: NodeL | null = this.front;

    this.front = temp.next;
    temp = null;

    this.length--;
  }

  geMin() {
    if (!this.front || !this.rear) return;
    let current: NodeL | null = this.front;
    let min = current?.data;

    while (current) {
      if (current.data < min) min = current.data;
      current = current.next;
    }

    return min;
  }
}

class NodeT {
  value: any;
  left: NodeT | null = null;
  right: NodeT | null = null;

  constructor(value: any) {
    this.value = value;
  }
}

class BST {
  root: NodeT | null = null;

  insert(value: any) {
    const newNode = new NodeT(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp: NodeT | null = this.root;

    while (true) {
      if (temp.value < newNode.value) {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        } else {
          temp = temp.right;
        }
      } else {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      }
    }
  }
  includes(target: any) {
    if (!this.root) {
      return false;
    }

    if (this.root.value === target) {
      return true;
    }
    let temp: NodeT | null = this.root;

    while (true) {
      if (temp?.value < target) {
        temp = temp?.right!;
      } else if (temp?.value > target) {
        temp = temp?.left!;
      } else if (temp?.value === target) {
        return true;
      } else {
        return false;
      }
    }
  }

  bfs() {
    let queue: NodeT[] = [];
    let data: any[] = [];
    let current: NodeT | null = this.root;

    queue.push(current!);

    while (queue.length) {
      current = queue.shift()!;

      data.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return data;
  }
}

function missingNumbers(nums: number[]): number[] {
  const numbers: number[] = [];
  const numSet = new Set(nums);

  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      numbers.push(i);
    }
  }

  return numbers;
}

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];

    if (map.has(compliment)) {
      return [map.get(compliment)!, i];
    }

    map.set(nums[i], i);
  }
  return [];
}

function smallerNumbersThanCurrent(nums: number[]): number[] {
  const sortedNums = [...nums].sort((a, b) => a - b);
  return nums.map((num) => sortedNums.indexOf(num));
}

function minTimeToVisitAllPoints(points: number[][]): number {
  let seconds = 0;

  for (let i = 0; i < points.length - 1; i++) {
    let [x1, y1] = points[i];
    let [x2, y2] = points[i + 1];

    seconds += Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
  }

  return seconds;
}

function spiralOrder(matrix: number[][]): number[] {
  const data: number[] = [];

  let cols = matrix[0].length;
  let rows = matrix.length;

  let top = 0;
  let left = 0;
  let right = cols - 1;
  let bottom = rows - 1;

  if (cols === 1) {
    for (let i = 0; i < rows; i++) {
      data.push(matrix[i][0]);
    }

    return data;
  }

  if (rows === 1) {
    for (let i = 0; i < cols; i++) {
      data.push(matrix[0][i]);
    }

    return data;
  }

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      data.push(matrix[top][i]);
    }

    top++;
    if (top > bottom || left > right) break;

    for (let i = top; i <= bottom; i++) {
      data.push(matrix[i][right]);
    }

    right--;

    if (top > bottom || left > right) break;

    for (let i = right; i >= left; i--) {
      data.push(matrix[bottom][i]);
    }
    bottom--;
    if (top > bottom || left > right) break;

    for (let i = bottom; i >= top; i--) {
      data.push(matrix[i][left]);
    }
    left++;
    if (top > bottom || left > right) break;
  }

  return data;
}

[
  [4, 5], // top->1 bottom->1
];

/**
 * 
  mark all visited islands by 0
  explore all directions of all islands (top, bottom, right, left) using DFS  
 */
function numIslands(grid: string[][]): number {
  let count = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  const dfs = (grid: string[][], row: number, col: number) => {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === "0"
    )
      return;

    grid[row][col] = "0";

    dfs(grid, row - 1, col);
    dfs(grid, row + 1, col);
    dfs(grid, row, col - 1);
    dfs(grid, row, col + 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
}

function numIslandsBFS(grid: string[][]): number {
  if (grid.length === 0) return 0;

  let count = 0;
  let cols = grid[0].length;
  let rows = grid.length;

  let directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  const bfs = (row: number, col: number) => {
    const queue = [[row, col]];
    grid[row][col] = "0";

    while (queue.length > 0) {
      const [r, c] = queue.shift()!;

      for (const [dr, dc] of directions) {
        const newRow = r + dr;
        const newCol = c + dc;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === "1"
        ) {
          queue.push([newRow, newCol]);
          grid[newRow][newCol] = "0"; // Mark as visited to avoid infinite loop
        }
      }
    }
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == "1") {
        count++;
        bfs(i, j);
      }
    }
  }

  return count;
}

function numIslandsDFS(grid: string[][]): number {
  if (grid.length === 0) return 0;

  let cols = grid[0].length;
  let rows = grid.length;

  let count = 0;

  let directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  const dfs = (row: number, col: number) => {
    grid[row][col] = "0";
    const stack = [[row, col]];

    while (stack.length > 0) {
      const [r, c] = stack.pop()!;

      for (const [dr, dc] of directions) {
        const newRow = r + dr;
        const newCol = c + dc;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === "1"
        ) {
          stack.push([newRow, newCol]);
          grid[newRow][newCol] = "0";
        }
      }
    }
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
}

const ShortestPathInABinaryMatrixBfs = (grid: number[][]): any => {
  let rows = grid.length;
  let cols = grid[0].length;

  if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1)
    return { count: -1, data: [] }; // No path if start or end is blocked

  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  let queue: [number, number, number][] = [[0, 0, 1]]; // (row, col, distance)
  let data: [number, number][] = [[0, 0]];
  grid[0][0] = 1; // Mark as visited

  while (queue.length > 0) {
    const [r, c, dist] = queue.shift()!;

    if (r === rows - 1 && c === cols - 1) return { count: dist, data };

    for (const [dr, dc] of directions) {
      const newRow = r + dr;
      const newCol = c + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 0
      ) {
        queue.push([newRow, newCol, dist + 1]);
        grid[newRow][newCol] = 1; // Mark as visited
        data.push([newRow, newCol]);
      }
    }
  }

  return { count: -1, data: [] }; // No valid path found
};

// console.log(
//   ShortestPathInABinaryMatrixBfs([
//     [1, 0, 0],
//     [1, 1, 0],
//     [1, 1, 0],
//   ])
// );

function dfsIterative(
  graph: Record<number, number[]>,
  start: number
): number[] {
  const stack: number[] = [start];
  const visited: Set<number> = new Set();
  const result: number[] = [];

  while (stack.length > 0) {
    const node = stack.pop()!;

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      // Push neighbors in reverse order to visit in correct order
      for (const neighbor of graph[node].reverse()) {
        stack.push(neighbor);
      }
    }
  }

  return result;
}

function maxProfit(prices: number[]): number {
  let profit = 0;

  let left = 0;
  let right = 1;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[left] > prices[right]) {
      left += 1;
    } else {
      profit = Math.max(profit, Math.abs(prices[left] - prices[right]));
    }

    right += 1;
  }

  return profit;
}

function findDuplicate(nums: number[]): number {
  const numsMap = new Map<number, number>();

  for (const num of nums) {
    const count = (numsMap.get(num) || 0) + 1;
    if (count >= 2) return num;
    numsMap.set(num, count);
  }

  return 1;
}

function rotate(nums: number[], k: number): void {
  let rest = nums.length - k;
  const reminderArray: number[] = [];

  const slicedArray = nums.slice(-k);

  for (let i = 0; i < rest; i++) {
    reminderArray.push(nums[i]);
  }

  nums.length = 0;

  nums.push(...slicedArray, ...reminderArray);

  console.log(nums);
}

function subarraySum(nums: number[], k: number): number {
  let count = 0;

  let sumMap = new Map<number, number>();

  sumMap.set(0, 1);

  console.log(sumMap);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {
      count++;
      continue;
    }
    const complement = k - nums[i];
    if (nums[i + 1] === complement) {
      count++;
    }
  }

  return count;
}

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!numsSet.has(nums[i] - 1)) {
      let currentNum = nums[i];
      while (numsSet.has(currentNum)) {
        currentNum++;
      }
      count = Math.max(count, currentNum - nums[i]);
    }
  }

  return count;
}

function URLify(url: string): string {
  return url.trim().replaceAll(" ", "%20");
}

console.log(URLify("Mr John Smith "));

function sortedSquares(nums: number[]): number[] {
  let left = 0,
    right = nums.length - 1;
  const result: number[] = [];

  let index = nums.length - 1; // 4 3 2 1 0

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[index--] = leftSquare;
      left++; // 1
    } else {
      result[index--] = rightSquare;
      right--; // 4 3 2 1
    }
  }
  return result;
}

// console.log(sortedSquares([7, 1, 3, 4, 6]));

// [_, 9, 16, 36, 49]

//36

type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let sum = init;
  for (let i = 0; i < nums.length; i++) {
    sum = fn(sum, nums[i]);
  }

  return sum;
}

const fn = (accum: number, curr: number) => {
  return accum + curr * curr;
};

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (value: any) => {
      if (value === val) {
        return true;
      } else {
        throw new Error(`Not Equal`);
      }
    },

    notToBe: (value: any) => {
      if (value !== val) {
        return true;
      } else {
        throw new Error(`Equal`);
      }
    },
  };
}

function sortingNumbersUsingTwoPointers(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  const result: number[] = [];

  while (left <= right) {
    if (nums[left] > nums[right]) {
      result[index--] = nums[left];
      left++;
    } else {
      result[index--] = nums[right];
      right--;
    }
  }

  return result;
}

// console.log(sortingNumbersUsingTwoPointers([5, 4, 3, 2, 1]));

const maxProfitUsingTwoPointers = (prices: number[]): number => {
  let left = 0;
  let right = 1;

  let profit = 0;

  while (right <= prices.length) {
    if (prices[left] < prices[right]) {
      profit = Math.max(profit, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right++;
  }

  return profit;
};

// console.log(maxProfitUsingTwoPointers([7, 4, 3, 2, 6]));

function ShortestPathInMaze(grid: any[][]): any {
  let cols = grid[0].length;
  let rows = grid.length;

  const queue: [number, number, number][] = [[0, 0, 1]]; // (row, col, steps)
  const parent: Record<string, [number, number] | null> = { "0,0": null }; // Track previous positions
  grid[0][0] = 1; // Mark the start as visited

  let directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ];

  let endRow = -1,
    endCol = -1;

  // 🔍 Find "E" dynamically
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "E") {
        endRow = i;
        endCol = j;
      }
    }
  }

  if (endRow === -1 || endCol === -1) return { steps: -1, path: [] }; // No exit found

  while (queue.length > 0) {
    const [r, c, steps] = queue.shift()!;

    if (r === endRow && c === endCol) {
      // ✅ Found "E" → Reconstruct Path
      let path: number[][] = [];
      let curr: [number, number] | null = [endRow, endCol];

      while (curr) {
        path.unshift(curr);
        curr = parent[`${curr[0]},${curr[1]}`] || null;
      }

      return { steps, path };
    }

    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        (grid[newRow][newCol] === 0 || grid[newRow][newCol] === "E") // Can move if 0 or "E"
      ) {
        queue.push([newRow, newCol, steps + 1]);
        grid[newRow][newCol] = 1; // Mark as visited
        parent[`${newRow},${newCol}`] = [r, c]; // Store previous cell
      }
    }
  }

  return { steps: -1, path: [] }; // No path found
}

function shortestPathBinaryMatrix(grid: number[][]): number {
  let rows = grid.length;
  let cols = grid[0].length;

  if (grid[0][0] === 1) return -1;

  let queue: [number, number, number][] = [[0, 0, 1]];
  let path: number[][] = [[0, 0]];

  grid[0][0] = 1;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  while (queue.length > 0) {
    const [r, c, dist] = queue.shift()!;

    if (r === rows - 1 && c === cols - 1) return dist;

    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 0
      ) {
        queue.push([newRow, newCol, dist + 1]);
        grid[newRow][newCol] = 1;
        path.push([newRow, newCol]);
      }
    }
  }

  return -1;
}

function updateMatrix(mat: number[][]): number[][] {
  let cols = mat[0].length;
  let rows = mat.length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue: [number, number][] = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else if (mat[i][j] === 1) {
        mat[i][j] = -1;
      }
    }
  }

  while (queue.length) {
    const [r, c] = queue.shift()!;

    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      if (
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < rows &&
        newCol < cols &&
        mat[newRow][newCol] === -1
      ) {
        mat[newRow][newCol] = mat[r][c] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }

  return mat;
}

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  if (!wordList.includes(endWord)) return 0;

  let steps = 1;
  const queue = [beginWord];
  const hasVisited = new Set([beginWord]);

  function canTransform(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    let differCount = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        differCount++;
      }
    }
    return differCount === 1;
  }

  while (queue.length > 0) {
    const level = queue.length;

    for (let i = 0; i < level; i++) {
      const currentWord = queue.shift()!; // dot

      for (const word of wordList) {
        if (!hasVisited.has(word) && canTransform(word, currentWord)) {
          if (word === endWord) {
            return steps + 1;
          }
          hasVisited.add(word);
          queue.push(word);
        }
      }
    }
    steps++;
  }

  return 0;
}

function threeSum(nums: number[]): number[][] {
  nums = sortingNumbersUsingTwoPointers(nums);

  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++;
      }
    }
  }

  return result;
}

function longestMountain(arr: number[]): number {
  if (arr.length < 3) return 0;

  let maxLength = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let left = i - 1;
      let right = i + 1;

      while (left > 0 && arr[left] > arr[left - 1]) left--;
      while (right < arr.length - 1 && arr[right] > arr[right + 1]) right++;

      let length = right - left + 1;
      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength >= 3 ? maxLength : 0;
}

// function highestPeak(isWater: number[][]): number[][] {
//   const queue: number[][] = [];
//   const hasVisited = new Set();

//   let rows = isWater.length;
//   let cols = isWater[0].length;

//   let directions = [
//     [-1, 0], // top
//     [1, 0], // bottom
//     [0, -1], // left
//     [0, 1], // right
//   ];

//   for (let i = 0; i < isWater.length; i++) {
//     for (let j = 0; j < isWater.length; j++) {
//       if (isWater[i][j] === 1) {
//         queue.push([i, j]);
//         isWater[i][j] = 0;
//         hasVisited.add(`${i},${j}`);
//       } else if (isWater[i][j] === 0) {
//         isWater[i][j] = -1;
//       }
//     }
//   }

//   while (queue.length) {
//     let [r, c] = stack.pop()!;

//     for (const [dr, dc] of directions) {
//       let newRow = dr + r;
//       let newCol = dc + c;

//       if (
//         newRow >= 0 &&
//         newRow < rows &&
//         newCol >= 0 &&
//         newCol < cols &&
//         !hasVisited.has(`${newRow},${newCol}`) &&
//         isWater[newRow][newCol] === -1
//       ) {
//         hasVisited.add(`${newRow},${newCol}`);
//         isWater[newRow][newCol] = isWater[r][c] + 1;
//         queue.push([newRow, newCol]);
//       }
//     }
//   }

//   return isWater;
// }

function validMountainArray(arr: number[]): boolean {
  if (arr.length <= 2) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left + 1 < arr.length && arr[left] < arr[left + 1]) left++;
  while (right > 0 && arr[right] < arr[right - 1]) right--;

  return left > 0 && left === right && right < arr.length - 1;
}

function countServers(grid: number[][]): number {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  const rowCount = new Array(rows).fill(0);
  const colCount = new Array(cols).fill(0);

  let serversCount = 0;
  // 0 2 ---> rowCount
  // 2 1 ---> colCount

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        rowCount[r]++;
        colCount[c]++;
        serversCount++;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
        count++;
      }
    }
  }

  return count;
}

// function gridGame(grid: number[][]): number {
//   const cols = grid[0].length;

//   // Step 1: Compute prefix sums for row 0 (top) and row 1 (bottom)
//   let topPrefixSum = [...grid[0]];  // Copy row 0
//   let bottomPrefixSum = [...grid[1]]; // Copy row 1

//   for (let j = 1; j < cols; j++) {
//     topPrefixSum[j] += topPrefixSum[j - 1];
//     bottomPrefixSum[j] += bottomPrefixSum[j - 1];
//   }

//   // Step 2: The first robot chooses an optimal path
//   let minSecondRobotScore = Infinity;

//   for (let j = 0; j < cols; j++) {
//     // If the first robot stops at column `j`, the second robot must avoid its path.

//     let topRemaining = j === cols - 1 ? 0 : topPrefixSum[cols - 1] - topPrefixSum[j]; // Remaining sum of top row
//     let bottomRemaining = j === 0 ? 0 : bottomPrefixSum[j - 1]; // Sum of bottom row up to column `j - 1`

//     // The second robot is forced to take the maximum remaining path
//     let secondRobotScore = Math.max(topRemaining, bottomRemaining);

//     // Minimize the worst case for the second robot
//     minSecondRobotScore = Math.min(minSecondRobotScore, secondRobotScore);
//   }

//   return minSecondRobotScore;
// }

function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let charSet = new Set();
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    while (charSet.has(s[i])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[i]);
    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
}

function longestMonotonicSubarray(nums: number[]): number {
  let left = 0;
  let maxLength = 1;

  //strictly increasing
  for (let right = 1; right < nums.length - 1; right++) {
    if (nums[right] <= nums[right - 1]) {
      break;
    }

    maxLength = Math.max(maxLength, right - left + 1) + 1;
  }

  //strictly decreasing
  left = 0;
  for (let right = 1; right < nums.length - 1; right++) {
    if (nums[right] >= nums[right - 1]) {
      break;
    }
    maxLength = Math.max(maxLength, right - left + 1) + 1;
  }

  return maxLength;
}

function makeFancyString(s: string): string {
  for (let i = 0; i < s.length; i++) {
    let left = i - 1;
    let right = i + 1;

    if (s[i] === s[left] && s[i] === s[right]) {
      s = s.slice(0, i) + s.slice(i + 1);
    }
  }

  return s;
}

function minLength(s: string): number {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "B" && stack[stack.length - 1] === "A") {
      stack.pop();
    } else if (s[i] === "D" && stack[stack.length - 1] === "C") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length;
}

function maximumGain(s: string, x: number, y: number): number {
  const stack: string[] = [];
  let score = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b" && stack[stack.length - 1] === "a") {
      stack.pop();
      score += x;
    } else if (s[i] === "a" && stack[stack.length - 1] === "b") {
      stack.pop();
      score += y;
    } else {
      stack.push(s[i]);
    }
  }

  return score;
}

function findPairs(nums: number[], target: number): number[][] {
  const pairs: number[][] = [];
  const seen = new Set<number>();

  for (let num of nums) {
    let complement = target - num;

    if (seen.has(complement)) {
      let pair = [Math.min(num, complement), Math.max(num, complement)];
      pairs.push(pair);
    }

    seen.add(num);
  }

  pairs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  return pairs;
}
function maxSubarraySum(arr: number[]): number {
  let maxSum = 0;
  let currentSum = 0;

  for (let num of arr) {
    currentSum += num;
    if (currentSum < 0) currentSum = 0;
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

function sortNums(arr: number[]): number[] {
  const numsMap = new Map<number, number>();

  for (const num of arr) {
    numsMap.set(num, (numsMap.get(num) || 0) + 1);
  }

  return [
    ...Array(numsMap.get(0))!.fill(0),
    ...Array(numsMap.get(1))!.fill(1),
    ...Array(numsMap.get(2))!.fill(2),
  ];
}

function rotateArray(arr: number[], k: number): number[] {
  if (k === 0 || k === arr.length) return arr;
  let rotatedNums: number[] = arr.slice(0, k);
  let remainingNums: number[] = arr.slice(k);
  rotatedNums = remainingNums.concat(rotatedNums);

  return rotatedNums;
}

function firstLastOccurrence(arr: number[], k: number): number[] {
  let firstIndex = -1;
  let lastIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      firstIndex = i;
      break;
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === k) {
      lastIndex = i;
      break;
    }
  }
  return [firstIndex, lastIndex];
}

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    while (Math.abs(right - left) > k) {
      left++;
    }

    if (nums[right] === nums[left] && right !== left) {
      return true;
    }
  }

  return false;
}

function longestSubstring(s: string, k: number): number {
  if (s.length < k) return 0;

  let freq: Record<string, number> = {};

  // Count frequency of each character
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find first character that appears less than k times
  for (let char of Object.keys(freq)) {
    if (freq[char] < k) {
      // Split and recursively solve for both halves
      return Math.max(...s.split(char).map((sub) => longestSubstring(sub, k)));
    }
  }

  // If all characters appear at least k times, return the whole string length
  return s.length;
}

function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length;
  const reverseGraph: number[][] = Array.from({ length: n }, () => []);
  const inDegree: number[] = new Array(n).fill(0);

  // Construct reverse graph and calculate in-degrees
  for (let node = 0; node < n; node++) {
    for (const neighbor of graph[node]) {
      reverseGraph[neighbor].push(node);
      inDegree[node]++;
    }
  }

  // Start with terminal nodes (nodes with 0 ,outgoing edges)
  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const safeNodes: number[] = [];

  // Process nodes in topological order
  while (queue.length > 0) {
    const node = queue.shift()!;
    safeNodes.push(node);

    for (const parent of reverseGraph[node]) {
      inDegree[parent]--;
      if (inDegree[parent] === 0) {
        queue.push(parent);
      }
    }
  }

  return safeNodes.sort((a, b) => a - b);
}

function maximumSumOfSubArray(nums: number[], size: number) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < size; i++) {
    currentSum += nums[i];
  }

  maxSum = currentSum;

  for (let i = size; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - size];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

function SubArrayThatAddUpToNumber(nums: number[], target: number) {
  let left = 0;
  let right = left + 1;

  const arr: number[][] = [];

  let currentSum = nums[left];

  if (currentSum === target) {
    arr.push([nums[left]]);
  }

  while (right < nums.length) {
    currentSum += nums[right];
    if (currentSum > target) {
      currentSum -= nums[left];
      left++;
    }

    if (currentSum === target) {
      arr.push(nums.slice(left, right + 1));
      currentSum -= nums[left];
      left++;
    }
    right++;
  }
  return arr;
}

function maximumSequenceOf1(arr: number[], maxFlips: number) {
  let left = 0;
  let maxSequence = 0;
  let flips = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] == 0) flips++;

    while (flips > maxFlips) {
      if (arr[left] === 0) flips--;
      left++;
    }

    maxSequence = Math.max(maxSequence, right - left + 1);
  }

  return maxSequence;
}

function countSubstringsWithUniqueCharacters(
  s: string,
  desiredS: string
): string {
  let left = 0;
  let count = 0;
  const result: string[] = [];

  for (let right = 0; right < s.length; right++) {
    if (desiredS.includes(s[right])) count++;

    while (count > desiredS.length) {
      if (desiredS.includes(s[left])) count--;
      left++;
    }

    if (count === desiredS.length) {
      result.push(s.slice(left, right + 1));
    }

    if (right === s.length - 1) {
      result.push(s.slice(left, right + 1));
    }
  }

  return result.sort((a, b) => a.length - b.length).at(0)!;
}

function lengthOfLongestSubstringResolving(s: string): number {
  let left = 0;
  let maxLength = 0;
  const charSet = new Set<string>();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

function findAnagrams(s: string, p: string): number[] {
  let left = 0;
  let right = 0;
  const charSet = new Set<string>(p);
  const result: number[] = [];
  let count = 0;

  while (right < s.length) {
    if (count === p.length) {
      result.push(left);
      charSet.add(s[left]);
      count--;
      left++;
    } else if (charSet.has(s[right])) {
      charSet.delete(s[right]);
      count++;
    }
    right++;
  }

  return result;
}

function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let currentSum = 0;
  let minlength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minlength = Math.min(minlength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minlength === Infinity ? 0 : minlength;
}

function totalFruit(fruits: number[]): number {
  const fruitsMap = new Map();
  let maxCount = 0;

  for (let i = 0; i < fruits.length; i++) {
    if (!fruitsMap.has(fruits[i])) {
      fruitsMap.set(fruits[i], i);
    } else {
      let produces = fruitsMap.get(fruits[i]);
      fruitsMap.set(fruits[i], produces + i);
    }
  }

  if (fruitsMap.size === 2) {
    return fruits.length;
  }

  const arr = Array.from(fruitsMap).sort((a, b) => a[1] - b[1]);
  const fruit1 = arr[arr.length - 1][0];
  const fruit2 = arr[arr.length - 2][0];

  let count = 0;

  for (const fruit of fruits) {
    if (fruit === fruit1 || fruit === fruit2) {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }

  return Math.max(maxCount, count);
}

function characterReplacement(s: string, k: number): number {
  let left = 0;
  let maxLength = 0;
  let maxFreq = 0;
  const charCount: Record<string, number> = {};

  for (let right = 0; right < s.length; right++) {
    charCount[s[right]] = (charCount[s[right]] || 0) + 1;

    maxFreq = Math.max(maxFreq, charCount[s[right]]);

    while (right - left + 1 - maxFreq > k) {
      charCount[s[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

function checkInclusion(s1: string, s2: string): boolean {
  let left = 0;
  let right = 0;
  let length = 0;
  const charMap = new Map();

  for (let i = 0; i < s1.length; i++) {
    charMap.set(s1[i], (charMap.get(s1[i]) || 0) + 1);
  }

  let needed = s1.length;

  while (right < s2.length) {
    if (charMap.has(s2[right])) {
      charMap.set(s2[right], charMap.get(s2[right]) - 1);
      if (charMap.get(s2[right]) === 0) {
        needed--;
      }
    }
    if (right - left + 1 > s1.length) {
      if (charMap.has(s2[left])) {
        if (charMap.get(s2[left])! >= 0) needed++; // Restore character count
        charMap.set(s2[left], charMap.get(s2[left])! + 1);
      }
      left++;
    }
    if (needed === 0) return true;
    right++;
  }
  return false;
}

function heightChecker(heights: number[]): number {
  let count = 0;
  const expected = [...heights].sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (expected[i] !== heights[i]) count++;
  }

  return count;
}

function distinctAverages(nums: number[]): number {
  if (nums.length === 0 || nums.length === 1) return 0;
  if (nums.length === 2) return 1;

  let right = nums.length - 1;
  let left = 0;
  const averageSet = new Set();
  nums.sort((a, b) => a - b);

  while (left < right) {
    let average = (nums[left] + nums[right]) / 2;
    if (!averageSet.has(average)) averageSet.add(average);

    right--;
    left++;
  }

  return averageSet.size;
}

function minimumAverage(nums: number[]): number {
  if (nums.length === 0 || nums.length === 1) return 0;
  if (nums.length === 2) return (nums[0] + nums[1]) / 2;

  let right = nums.length - 1;
  let left = 0;
  const averageArray: number[] = [];
  nums.sort((a, b) => a - b);

  while (left < right) {
    let average = (nums[left] + nums[right]) / 2;
    averageArray.push(average);

    right--;
    left++;
  }

  return Math.min(...averageArray);
}

function longestEqualSubarray(nums: number[], k: number): number {
  const freq = new Map<number, number>();
  let left = 0,
    maxFreq = 0,
    maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    const current = nums[right];
    freq.set(current, (freq.get(current) || 0) + 1);
    maxFreq = Math.max(maxFreq, freq.get(current)!);

    while (right - left + 1 - maxFreq > k) {
      const leftNum = nums[left];
      freq.set(leftNum, freq.get(leftNum)! - 1);
      left++;
    }
    maxLength = Math.max(maxLength, maxFreq);
  }

  return maxLength;
}

function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  const isPalindrome = (str: string, left: number, right: number): boolean => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      right--;
      left++;
    }

    return true;
  };

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    right--;
    left++;
  }

  return true;
}

function numWaterBottles(numBottles: number, numExchange: number): number {
  if (numBottles < numExchange) return numBottles;
  let bottles = numBottles;
  let totalBottles = bottles;
  while (totalBottles >= numExchange) {
    let reminder = Math.floor(totalBottles / numExchange);
    bottles += reminder;
    let emptyBottles = totalBottles - reminder * numExchange;
    totalBottles = emptyBottles + reminder;
  }

  return bottles;
}

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);

    maxArea = Math.max(maxArea, width * minHeight);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }

  return closestSum;
}

function longestPalindrome(s: string): string {
  if (s.length < 2 || s.split("").reverse().join("") === s) return s;
  let longest = "";
  const expandAroundCenter = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    const oddLength = expandAroundCenter(i, i);
    const evenLength = expandAroundCenter(i, i + 1);

    const longer =
      oddLength.length > evenLength.length ? oddLength : evenLength;
    if (longer.length > longest.length) {
      longest = longer;
    }
  }

  return longest;
}

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let i = 2;

  for (let j = 2; j < nums.length; j++) {
    if (nums[j] !== nums[i - 2]) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let dummy = new ListNode(0, head);
  let left: ListNode | null = dummy;
  let right: ListNode | null = head;

  while (right) {
    if (right.next && right.val === right.next.val) {
      while (right.next && right.val === right.next.val) {
        right = right.next;
      }
      left.next = right.next;
    } else {
      left = left.next!;
    }
    right = right.next;
  }

  return head;
}

function arrayToLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

const head = arrayToLinkedList([1, 2]);

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 0) return head;

  let length = 1;

  let right: ListNode | null = head;

  while (right.next) {
    right = right.next;
    length++;
  }

  k = k % length;
  if (k === 0) return head;

  right.next = head;

  let left: ListNode | null = head;
  for (let i = 0; i < length - k - 1; i++) {
    left = left!.next!;
  }

  let newHead = left.next;
  left.next = null;

  return newHead;
}

function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true;

  const diff: number[] = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff.push(i);
    }
  }

  return (
    diff.length === 2 &&
    s1[diff[0]] === s2[diff[1]] &&
    s1[diff[1]] === s2[diff[0]]
  );
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  let index = length - n;

  if (index === 0) return head?.next || null;

  current = head;
  let prev: ListNode | null = null;

  while (index > 0) {
    prev = current;
    current = current!.next!;
    index--;
  }

  if (prev) prev.next = current!.next;

  return head;
}

function reverseWords(s: string): string {
  return s
    .split(" ")
    .reverse()
    .filter((w) => w !== "")
    .join(" ");
}

function twoSumAgain(numbers: number[], target: number): number[] {
  const numMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i + 1];
    }
    numMap.set(numbers[i], i + 1);
  }

  return [];
}

function reverseWord(s: string): string {
  return s.split("").reverse().join("").split(" ").reverse().join(" ");
}

function maxAreaResolve(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

function searchInsert(nums: number[], target: number): number {
  if (nums.length === 0 || nums[0] > target) {
    return 0;
  }

  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return nums[left] < target ? left + 1 : right;
}

function clearDigits(s: string): string {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && !isNaN(Number(s[i + 1]))) {
      i++;
    } else {
      result += s[i];
    }
  }

  return result;
}

function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
      return mid;
    }
    if (nums[mid] < nums[left]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function removeOccurrences(s: string, part: string): string {
  let left = 0;
  let right = left + part.length - 1;
  let str = s;

  while (right < str.length) {
    if (str.slice(left, right + 1) === part) {
      str = str.slice(0, left) + str.slice(right + 1);
      left = Math.max(0, left - part.length);
      right = left + part.length - 1;
    } else {
      left++;
      right++;
    }
  }

  return str;
}

function isPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  const strSet = new Set(s1);

  for (const char of s2) {
    if (!strSet.has(char)) return false;
  }

  return true;
}

function isPalindromePermutation(str: string): boolean {
  const countMap = new Map();
  str = str.toLocaleLowerCase().replaceAll(" ", "");

  for (let char of str) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  let oddCount = 0;

  const strArr = Array.from(countMap.values());

  for (const count of strArr) {
    if (count % 2 !== 0) oddCount++;
    if (oddCount > 1) return false;
  }

  return true;
}

function OneAway(s1: string, s2: string): boolean {
  let len1 = s1.length,
    len2 = s2.length;

  if (Math.abs(len1 - len2) > 1) return false;
  let edits = 0,
    i = 0,
    j = 0;

  while (i < len1 && j < len2) {
    if (s1[i] !== s2[j]) {
      edits++;
      if (edits > 1) return false;

      if (len1 > len2) i++;
      else if (len1 < len2) j++;
      else i++;
      j++;
    } else {
      i++;
      j++;
    }
  }

  return true;
}

function compressString(str: string): string {
  let s = "";

  let left = 0;
  let right = 1;

  while (right <= str.length) {
    let count = 1;
    s += str[left];
    while (str[right] === str[left]) {
      count++;
      right++;
    }

    s += count;
    left = right;
    right++;
  }

  return s.length < str.length ? s : str;
}

