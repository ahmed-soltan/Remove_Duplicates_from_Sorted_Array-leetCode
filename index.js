// class MyArray {
//   data: any = {};
//   length: number = 0;
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var NodeL = /** @class */ (function () {
    function NodeL(value) {
        this.next = null;
        this.data = value;
    }
    return NodeL;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        var newNode = new NodeL(1);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    LinkedList.prototype.push = function (value) {
        var newNode = new NodeL(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        if (this.tail)
            this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    };
    LinkedList.prototype.pop = function () {
        if (!this.head)
            return null;
        var temp = this.head;
        var prev = null;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        if (prev) {
            prev.next = null;
            this.tail = prev;
        }
        this.length--;
    };
    LinkedList.prototype.unshift = function (value) {
        var newNode = new NodeL(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    };
    LinkedList.prototype.shift = function () {
        if (!this.head)
            return undefined;
        var temp = this.head;
        if (!temp.next)
            this.head = null;
        this.head = temp.next;
        temp = null;
        this.length--;
    };
    LinkedList.prototype.get = function (index) {
        var temp = this.head;
        var counter = 0;
        while (counter !== index) {
            if (!temp || !temp.next)
                return undefined;
            temp = temp.next;
            counter++;
        }
        return temp;
    };
    LinkedList.prototype.set = function (index, value) {
        var temp = this.get(index);
        if (!temp)
            return;
        temp.data = value;
    };
    LinkedList.prototype.insert = function (index, value) {
        if (index < 0 || index > this.length)
            return;
        if (index === 0) {
            this.unshift(value);
            return;
        }
        if (index === this.length) {
            this.push(value);
            return;
        }
        var newNode = new NodeL(value);
        var temp = this.head;
        var counter = 0;
        while (temp && counter < index - 1) {
            temp = temp.next;
            counter++;
        }
        if (!temp)
            return;
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
    };
    return LinkedList;
}());
var NodeD = /** @class */ (function () {
    function NodeD(value) {
        this.next = null;
        this.prev = null;
        this.data = value;
    }
    return NodeD;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.length = 0;
        var newNode = new NodeD(1);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    DoublyLinkedList.prototype.push = function (value) {
        var newNode = new NodeD(value);
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    };
    DoublyLinkedList.prototype.pop = function () {
        var temp = this.tail;
        if (!temp)
            return undefined;
        if (temp.prev) {
            temp.prev.next = null;
            this.tail = temp.prev;
            temp = null;
        }
        else {
            this.head = null;
        }
        this.length--;
    };
    DoublyLinkedList.prototype.unshift = function (value) {
        var newNode = new NodeD(value);
        newNode.next = this.head;
        this.head = newNode;
        if (this.tail === this.head)
            this.tail = newNode;
        this.length++;
    };
    DoublyLinkedList.prototype.reverse = function () {
        var current = this.head;
        var prev = null;
    };
    return DoublyLinkedList;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.length = 0;
    }
    Stack.prototype.push = function (value) {
        var newNode = new NodeL(value);
        if (!this.top) {
            this.top = newNode;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    };
    Stack.prototype.pop = function () {
        var temp = this.top;
        if (!temp)
            return;
        this.top = temp.next;
        this.length--;
        return temp.data;
    };
    Stack.prototype.isValidParentheses = function (str) {
        var brackets = {
            "(": ")",
            "[": "]",
            "{": "}",
        };
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var char = str_1[_i];
            if (brackets[char]) {
                this.push(char);
            }
            else {
                var top_1 = this.pop();
                if (!top_1 || brackets[top_1] !== char) {
                    return false;
                }
            }
        }
        return this.length === 0;
    };
    Stack.prototype.reverseString = function (str) {
        var arr = [];
        for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
            var char = str_2[_i];
            this.push(char);
        }
        while (this.length > 0) {
            arr.push(this.pop());
        }
        return arr.join("");
    };
    return Stack;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }
    Queue.prototype.enqueue = function (value) {
        var newNode = new NodeL(value);
        if (!this.front || !this.rear) {
            this.front = newNode;
            this.rear = newNode;
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    };
    Queue.prototype.dequeue = function () {
        if (!this.front || !this.rear)
            return;
        var temp = this.front;
        this.front = temp.next;
        temp = null;
        this.length--;
    };
    Queue.prototype.geMin = function () {
        if (!this.front || !this.rear)
            return;
        var current = this.front;
        var min = current === null || current === void 0 ? void 0 : current.data;
        while (current) {
            if (current.data < min)
                min = current.data;
            current = current.next;
        }
        return min;
    };
    return Queue;
}());
var NodeT = /** @class */ (function () {
    function NodeT(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
    return NodeT;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.insert = function (value) {
        var newNode = new NodeT(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        var temp = this.root;
        while (true) {
            if (temp.value < newNode.value) {
                if (!temp.right) {
                    temp.right = newNode;
                    return this;
                }
                else {
                    temp = temp.right;
                }
            }
            else {
                if (!temp.left) {
                    temp.left = newNode;
                    return this;
                }
                else {
                    temp = temp.left;
                }
            }
        }
    };
    BST.prototype.includes = function (target) {
        if (!this.root) {
            return false;
        }
        if (this.root.value === target) {
            return true;
        }
        var temp = this.root;
        while (true) {
            if ((temp === null || temp === void 0 ? void 0 : temp.value) < target) {
                temp = temp === null || temp === void 0 ? void 0 : temp.right;
            }
            else if ((temp === null || temp === void 0 ? void 0 : temp.value) > target) {
                temp = temp === null || temp === void 0 ? void 0 : temp.left;
            }
            else if ((temp === null || temp === void 0 ? void 0 : temp.value) === target) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    BST.prototype.bfs = function () {
        var queue = [];
        var data = [];
        var current = this.root;
        queue.push(current);
        while (queue.length) {
            current = queue.shift();
            data.push(current.value);
            if (current.left)
                queue.push(current.left);
            if (current.right)
                queue.push(current.right);
        }
        return data;
    };
    return BST;
}());
function missingNumbers(nums) {
    var numbers = [];
    var numSet = new Set(nums);
    for (var i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            numbers.push(i);
        }
    }
    return numbers;
}
function twoSum(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var compliment = target - nums[i];
        if (map.has(compliment)) {
            return [map.get(compliment), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
function smallerNumbersThanCurrent(nums) {
    var sortedNums = __spreadArray([], nums, true).sort(function (a, b) { return a - b; });
    return nums.map(function (num) { return sortedNums.indexOf(num); });
}
function minTimeToVisitAllPoints(points) {
    var seconds = 0;
    for (var i = 0; i < points.length - 1; i++) {
        var _a = points[i], x1 = _a[0], y1 = _a[1];
        var _b = points[i + 1], x2 = _b[0], y2 = _b[1];
        seconds += Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
    }
    return seconds;
}
function spiralOrder(matrix) {
    var data = [];
    var cols = matrix[0].length;
    var rows = matrix.length;
    var top = 0;
    var left = 0;
    var right = cols - 1;
    var bottom = rows - 1;
    if (cols === 1) {
        for (var i = 0; i < rows; i++) {
            data.push(matrix[i][0]);
        }
        return data;
    }
    if (rows === 1) {
        for (var i = 0; i < cols; i++) {
            data.push(matrix[0][i]);
        }
        return data;
    }
    while (left <= right && top <= bottom) {
        for (var i = left; i <= right; i++) {
            data.push(matrix[top][i]);
        }
        top++;
        if (top > bottom || left > right)
            break;
        for (var i = top; i <= bottom; i++) {
            data.push(matrix[i][right]);
        }
        right--;
        if (top > bottom || left > right)
            break;
        for (var i = right; i >= left; i--) {
            data.push(matrix[bottom][i]);
        }
        bottom--;
        if (top > bottom || left > right)
            break;
        for (var i = bottom; i >= top; i--) {
            data.push(matrix[i][left]);
        }
        left++;
        if (top > bottom || left > right)
            break;
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
function numIslands(grid) {
    var count = 0;
    var rows = grid.length;
    var cols = grid[0].length;
    var dfs = function (grid, row, col) {
        if (row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            grid[row][col] === "0")
            return;
        grid[row][col] = "0";
        dfs(grid, row - 1, col);
        dfs(grid, row + 1, col);
        dfs(grid, row, col - 1);
        dfs(grid, row, col + 1);
    };
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
}
function numIslandsBFS(grid) {
    if (grid.length === 0)
        return 0;
    var count = 0;
    var cols = grid[0].length;
    var rows = grid.length;
    var directions = [
        [-1, 0], // up
        [1, 0], // down
        [0, -1], // left
        [0, 1], // right
    ];
    var bfs = function (row, col) {
        var queue = [[row, col]];
        grid[row][col] = "0";
        while (queue.length > 0) {
            var _a = queue.shift(), r = _a[0], c = _a[1];
            for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
                var _b = directions_1[_i], dr = _b[0], dc = _b[1];
                var newRow = r + dr;
                var newCol = c + dc;
                if (newRow >= 0 &&
                    newRow < rows &&
                    newCol >= 0 &&
                    newCol < cols &&
                    grid[newRow][newCol] === "1") {
                    queue.push([newRow, newCol]);
                    grid[newRow][newCol] = "0"; // Mark as visited to avoid infinite loop
                }
            }
        }
    };
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j] == "1") {
                count++;
                bfs(i, j);
            }
        }
    }
    return count;
}
function numIslandsDFS(grid) {
    if (grid.length === 0)
        return 0;
    var cols = grid[0].length;
    var rows = grid.length;
    var count = 0;
    var directions = [
        [-1, 0], // up
        [1, 0], // down
        [0, -1], // left
        [0, 1], // right
    ];
    var dfs = function (row, col) {
        grid[row][col] = "0";
        var stack = [[row, col]];
        while (stack.length > 0) {
            var _a = stack.pop(), r = _a[0], c = _a[1];
            for (var _i = 0, directions_2 = directions; _i < directions_2.length; _i++) {
                var _b = directions_2[_i], dr = _b[0], dc = _b[1];
                var newRow = r + dr;
                var newCol = c + dc;
                if (newRow >= 0 &&
                    newRow < rows &&
                    newCol >= 0 &&
                    newCol < cols &&
                    grid[newRow][newCol] === "1") {
                    stack.push([newRow, newCol]);
                    grid[newRow][newCol] = "0";
                }
            }
        }
    };
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
}
var ShortestPathInABinaryMatrixBfs = function (grid) {
    var rows = grid.length;
    var cols = grid[0].length;
    if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1)
        return { count: -1, data: [] }; // No path if start or end is blocked
    var directions = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
    ];
    var queue = [[0, 0, 1]]; // (row, col, distance)
    var data = [[0, 0]];
    grid[0][0] = 1; // Mark as visited
    while (queue.length > 0) {
        var _a = queue.shift(), r = _a[0], c = _a[1], dist = _a[2];
        if (r === rows - 1 && c === cols - 1)
            return { count: dist, data: data };
        for (var _i = 0, directions_3 = directions; _i < directions_3.length; _i++) {
            var _b = directions_3[_i], dr = _b[0], dc = _b[1];
            var newRow = r + dr;
            var newCol = c + dc;
            if (newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                grid[newRow][newCol] === 0) {
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
function dfsIterative(graph, start) {
    var stack = [start];
    var visited = new Set();
    var result = [];
    while (stack.length > 0) {
        var node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            // Push neighbors in reverse order to visit in correct order
            for (var _i = 0, _a = graph[node].reverse(); _i < _a.length; _i++) {
                var neighbor = _a[_i];
                stack.push(neighbor);
            }
        }
    }
    return result;
}
function maxProfit(prices) {
    var profit = 0;
    var left = 0;
    var right = 1;
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[left] > prices[right]) {
            left += 1;
        }
        else {
            profit = Math.max(profit, Math.abs(prices[left] - prices[right]));
        }
        right += 1;
    }
    return profit;
}
function findDuplicate(nums) {
    var numsMap = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var count = (numsMap.get(num) || 0) + 1;
        if (count >= 2)
            return num;
        numsMap.set(num, count);
    }
}
function rotate(nums, k) {
    var rest = nums.length - k;
    var reminderArray = [];
    var slicedArray = nums.slice(-k);
    for (var i = 0; i < rest; i++) {
        reminderArray.push(nums[i]);
    }
    nums.length = 0;
    nums.push.apply(nums, __spreadArray(__spreadArray([], slicedArray, false), reminderArray, false));
    console.log(nums);
}
function subarraySum(nums, k) {
    var count = 0;
    var sumMap = new Map();
    sumMap.set(0, 1);
    console.log(sumMap);
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === k) {
            count++;
            continue;
        }
        var complement = k - nums[i];
        if (nums[i + 1] === complement) {
            count++;
        }
    }
    return count;
}
function productExceptSelf(nums) {
    var result = Array(nums.length).fill(1);
    var prefix = 1;
    for (var i = 0; i < nums.length; i++) {
        result[i] *= prefix;
        prefix *= nums[i];
    }
    var suffix = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    return result;
}
function longestConsecutive(nums) {
    var numsSet = new Set(nums);
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (!numsSet.has(nums[i] - 1)) {
            var currentNum = nums[i];
            while (numsSet.has(currentNum)) {
                currentNum++;
            }
            count = Math.max(count, currentNum - nums[i]);
        }
    }
    return count;
}
function URLify(url) {
    return url.trim().replaceAll(" ", "%20");
}
console.log(URLify("Mr John Smith "));
function sortedSquares(nums) {
    var left = 0, right = nums.length - 1;
    var result = [];
    var index = nums.length - 1; // 4 3 2 1 0
    while (left <= right) {
        var leftSquare = nums[left] * nums[left];
        var rightSquare = nums[right] * nums[right];
        if (leftSquare > rightSquare) {
            result[index--] = leftSquare;
            left++; // 1
        }
        else {
            result[index--] = rightSquare;
            right--; // 4 3 2 1
        }
    }
    return result;
}
function reduce(nums, fn, init) {
    var sum = init;
    for (var i = 0; i < nums.length; i++) {
        sum = fn(sum, nums[i]);
    }
    return sum;
}
var fn = function (accum, curr) {
    return accum + curr * curr;
};
function expect(val) {
    return {
        toBe: function (value) {
            if (value === val) {
                return true;
            }
            else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (value) {
            if (value !== val) {
                return true;
            }
            else {
                throw new Error("Equal");
            }
        },
    };
}
function sortingNumbersUsingTwoPointers(nums) {
    var left = 0;
    var right = nums.length - 1;
    var index = nums.length - 1;
    var result = [];
    while (left <= right) {
        if (nums[left] > nums[right]) {
            result[index--] = nums[left];
            left++;
        }
        else {
            result[index--] = nums[right];
            right--;
        }
    }
    return result;
}
// console.log(sortingNumbersUsingTwoPointers([5, 4, 3, 2, 1]));
var maxProfitUsingTwoPointers = function (prices) {
    var left = 0;
    var right = 1;
    var profit = 0;
    while (right <= prices.length) {
        if (prices[left] < prices[right]) {
            profit = Math.max(profit, prices[right] - prices[left]);
        }
        else {
            left = right;
        }
        right++;
    }
    return profit;
};
// console.log(maxProfitUsingTwoPointers([7, 4, 3, 2, 6]));
function ShortestPathInMaze(grid) {
    var cols = grid[0].length;
    var rows = grid.length;
    var queue = [[0, 0, 1]]; // (row, col, steps)
    var parent = { "0,0": null }; // Track previous positions
    grid[0][0] = 1; // Mark the start as visited
    var directions = [
        [-1, 0], // Up
        [1, 0], // Down
        [0, -1], // Left
        [0, 1], // Right
    ];
    var endRow = -1, endCol = -1;
    // 🔍 Find "E" dynamically
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j] === "E") {
                endRow = i;
                endCol = j;
            }
        }
    }
    if (endRow === -1 || endCol === -1)
        return { steps: -1, path: [] }; // No exit found
    while (queue.length > 0) {
        var _a = queue.shift(), r = _a[0], c = _a[1], steps = _a[2];
        if (r === endRow && c === endCol) {
            // ✅ Found "E" → Reconstruct Path
            var path = [];
            var curr = [endRow, endCol];
            while (curr) {
                path.unshift(curr);
                curr = parent["".concat(curr[0], ",").concat(curr[1])] || null;
            }
            return { steps: steps, path: path };
        }
        for (var _i = 0, directions_4 = directions; _i < directions_4.length; _i++) {
            var _b = directions_4[_i], dr = _b[0], dc = _b[1];
            var newRow = dr + r;
            var newCol = dc + c;
            if (newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                (grid[newRow][newCol] === 0 || grid[newRow][newCol] === "E") // Can move if 0 or "E"
            ) {
                queue.push([newRow, newCol, steps + 1]);
                grid[newRow][newCol] = 1; // Mark as visited
                parent["".concat(newRow, ",").concat(newCol)] = [r, c]; // Store previous cell
            }
        }
    }
    return { steps: -1, path: [] }; // No path found
}
function shortestPathBinaryMatrix(grid) {
    var rows = grid.length;
    var cols = grid[0].length;
    if (grid[0][0] === 1)
        return -1;
    var queue = [[0, 0, 1]];
    var path = [[0, 0]];
    grid[0][0] = 1;
    var directions = [
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
        var _a = queue.shift(), r = _a[0], c = _a[1], dist = _a[2];
        if (r === rows - 1 && c === cols - 1)
            return dist;
        for (var _i = 0, directions_5 = directions; _i < directions_5.length; _i++) {
            var _b = directions_5[_i], dr = _b[0], dc = _b[1];
            var newRow = dr + r;
            var newCol = dc + c;
            if (newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                grid[newRow][newCol] === 0) {
                queue.push([newRow, newCol, dist + 1]);
                grid[newRow][newCol] = 1;
                path.push([newRow, newCol]);
            }
        }
    }
    return -1;
}
function updateMatrix(mat) {
    var cols = mat[0].length;
    var rows = mat.length;
    var directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    var queue = [];
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            }
            else if (mat[i][j] === 1) {
                mat[i][j] = -1;
            }
        }
    }
    while (queue.length) {
        var _a = queue.shift(), r = _a[0], c = _a[1];
        for (var _i = 0, directions_6 = directions; _i < directions_6.length; _i++) {
            var _b = directions_6[_i], dr = _b[0], dc = _b[1];
            var newRow = dr + r;
            var newCol = dc + c;
            if (newRow >= 0 &&
                newCol >= 0 &&
                newRow < rows &&
                newCol < cols &&
                mat[newRow][newCol] === -1) {
                mat[newRow][newCol] = mat[r][c] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }
    return mat;
}
function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord))
        return 0;
    var steps = 1;
    var queue = [beginWord];
    var hasVisited = new Set([beginWord]);
    function canTransform(word1, word2) {
        if (word1.length !== word2.length)
            return false;
        var differCount = 0;
        for (var i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                differCount++;
            }
        }
        return differCount === 1;
    }
    while (queue.length > 0) {
        var level = queue.length;
        for (var i = 0; i < level; i++) {
            var currentWord = queue.shift(); // dot
            for (var _i = 0, wordList_1 = wordList; _i < wordList_1.length; _i++) {
                var word = wordList_1[_i];
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
function threeSum(nums) {
    nums = sortingNumbersUsingTwoPointers(nums);
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1])
            continue;
        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum > 0) {
                right--;
            }
            else if (sum < 0) {
                left++;
            }
            else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                while (left < right && nums[left] === nums[left - 1])
                    left++;
            }
        }
    }
    return result;
}
function longestMountain(arr) {
    if (arr.length < 3)
        return 0;
    var maxLength = 0;
    for (var i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            var left = i - 1;
            var right = i + 1;
            while (left > 0 && arr[left] > arr[left - 1])
                left--;
            while (right < arr.length - 1 && arr[right] > arr[right + 1])
                right++;
            var length_1 = right - left + 1;
            maxLength = Math.max(maxLength, length_1);
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
function validMountainArray(arr) {
    if (arr.length <= 2)
        return false;
    var left = 0;
    var right = arr.length - 1;
    while (left + 1 < arr.length && arr[left] < arr[left + 1])
        left++;
    while (right > 0 && arr[right] < arr[right - 1])
        right--;
    return left > 0 && left === right && right < arr.length - 1;
}
function countServers(grid) {
    var count = 0;
    var rows = grid.length;
    var cols = grid[0].length;
    var rowCount = new Array(rows).fill(0);
    var colCount = new Array(cols).fill(0);
    var serversCount = 0;
    // 0 2 ---> rowCount
    // 2 1 ---> colCount
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                rowCount[r]++;
                colCount[c]++;
                serversCount++;
            }
        }
    }
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
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
function lengthOfLongestSubstring(s) {
    var left = 0;
    var charSet = new Set();
    var maxLength = 0;
    for (var i = 0; i < s.length; i++) {
        while (charSet.has(s[i])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[i]);
        maxLength = Math.max(maxLength, i - left + 1);
    }
    return maxLength;
}
function longestMonotonicSubarray(nums) {
    var left = 0;
    var maxLength = 1;
    //strictly increasing
    for (var right = 1; right < nums.length - 1; right++) {
        if (nums[right] <= nums[right - 1]) {
            break;
        }
        maxLength = Math.max(maxLength, right - left + 1) + 1;
    }
    //strictly decreasing
    left = 0;
    for (var right = 1; right < nums.length - 1; right++) {
        if (nums[right] >= nums[right - 1]) {
            break;
        }
        maxLength = Math.max(maxLength, right - left + 1) + 1;
    }
    return maxLength;
}
function makeFancyString(s) {
    for (var i = 0; i < s.length; i++) {
        var left = i - 1;
        var right = i + 1;
        if (s[i] === s[left] && s[i] === s[right]) {
            s = s.slice(0, i) + s.slice(i + 1);
        }
    }
    return s;
}
function minLength(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "B" && stack[stack.length - 1] === "A") {
            stack.pop();
        }
        else if (s[i] === "D" && stack[stack.length - 1] === "C") {
            stack.pop();
        }
        else {
            stack.push(s[i]);
        }
    }
    return stack.length;
}
function maximumGain(s, x, y) {
    var stack = [];
    var score = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "b" && stack[stack.length - 1] === "a") {
            stack.pop();
            score += x;
        }
        else if (s[i] === "a" && stack[stack.length - 1] === "b") {
            stack.pop();
            score += y;
        }
        else {
            stack.push(s[i]);
        }
    }
    return score;
}
function findPairs(nums, target) {
    var pairs = [];
    var seen = new Set();
    for (var _i = 0, nums_2 = nums; _i < nums_2.length; _i++) {
        var num = nums_2[_i];
        var complement = target - num;
        if (seen.has(complement)) {
            var pair = [Math.min(num, complement), Math.max(num, complement)];
            pairs.push(pair);
        }
        seen.add(num);
    }
    pairs.sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    return pairs;
}
function maxSubarraySum(arr) {
    var maxSum = 0;
    var currentSum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        currentSum += num;
        if (currentSum < 0)
            currentSum = 0;
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
function sortNums(arr) {
    var numsMap = new Map();
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var num = arr_2[_i];
        numsMap.set(num, (numsMap.get(num) || 0) + 1);
    }
    return __spreadArray(__spreadArray(__spreadArray([], Array(numsMap.get(0)).fill(0), true), Array(numsMap.get(1)).fill(1), true), Array(numsMap.get(2)).fill(2), true);
}
function rotateArray(arr, k) {
    if (k === 0 || k === arr.length)
        return arr;
    var rotatedNums = arr.slice(0, k);
    var remainingNums = arr.slice(k);
    rotatedNums = remainingNums.concat(rotatedNums);
    return rotatedNums;
}
function firstLastOccurrence(arr, k) {
    var firstIndex = -1;
    var lastIndex = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            firstIndex = i;
            break;
        }
    }
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === k) {
            lastIndex = i;
            break;
        }
    }
    return [firstIndex, lastIndex];
}
function containsNearbyDuplicate(nums, k) {
    var left = 0;
    for (var right = 1; right < nums.length; right++) {
        while (Math.abs(right - left) > k) {
            left++;
        }
        if (nums[right] === nums[left] && right !== left) {
            return true;
        }
    }
    return false;
}
function longestSubstring(s, k) {
    if (s.length < k)
        return 0;
    var freq = {};
    // Count frequency of each character
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        freq[char] = (freq[char] || 0) + 1;
    }
    // Find first character that appears less than k times
    for (var _a = 0, _b = Object.keys(freq); _a < _b.length; _a++) {
        var char = _b[_a];
        if (freq[char] < k) {
            // Split and recursively solve for both halves
            return Math.max.apply(Math, s.split(char).map(function (sub) { return longestSubstring(sub, k); }));
        }
    }
    // If all characters appear at least k times, return the whole string length
    return s.length;
}
function eventualSafeNodes(graph) {
    var n = graph.length;
    var reverseGraph = Array.from({ length: n }, function () { return []; });
    var inDegree = new Array(n).fill(0);
    // Construct reverse graph and calculate in-degrees
    for (var node = 0; node < n; node++) {
        for (var _i = 0, _a = graph[node]; _i < _a.length; _i++) {
            var neighbor = _a[_i];
            reverseGraph[neighbor].push(node);
            inDegree[node]++;
        }
    }
    // Start with terminal nodes (nodes with 0 ,outgoing edges)
    var queue = [];
    for (var i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    var safeNodes = [];
    // Process nodes in topological order
    while (queue.length > 0) {
        var node = queue.shift();
        safeNodes.push(node);
        for (var _b = 0, _c = reverseGraph[node]; _b < _c.length; _b++) {
            var parent_1 = _c[_b];
            inDegree[parent_1]--;
            if (inDegree[parent_1] === 0) {
                queue.push(parent_1);
            }
        }
    }
    return safeNodes.sort(function (a, b) { return a - b; });
}
function maximumSumOfSubArray(nums, size) {
    var currentSum = 0;
    var maxSum = 0;
    for (var i = 0; i < size; i++) {
        currentSum += nums[i];
    }
    maxSum = currentSum;
    for (var i = size; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - size];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
function SubArrayThatAddUpToNumber(nums, target) {
    var left = 0;
    var right = left + 1;
    var arr = [];
    var currentSum = nums[left];
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
function maximumSequenceOf1(arr, maxFlips) {
    var left = 0;
    var maxSequence = 0;
    var flips = 0;
    for (var right = 0; right < arr.length; right++) {
        if (arr[right] == 0)
            flips++;
        while (flips > maxFlips) {
            if (arr[left] === 0)
                flips--;
            left++;
        }
        maxSequence = Math.max(maxSequence, right - left + 1);
    }
    return maxSequence;
}
function countSubstringsWithUniqueCharacters(s, desiredS) {
    var left = 0;
    var count = 0;
    var result = [];
    for (var right = 0; right < s.length; right++) {
        if (desiredS.includes(s[right]))
            count++;
        while (count > desiredS.length) {
            if (desiredS.includes(s[left]))
                count--;
            left++;
        }
        if (count === desiredS.length) {
            result.push(s.slice(left, right + 1));
        }
        if (right === s.length - 1) {
            result.push(s.slice(left, right + 1));
        }
    }
    return result.sort(function (a, b) { return a.length - b.length; }).at(0);
}
function lengthOfLongestSubstringResolving(s) {
    var left = 0;
    var maxLength = 0;
    var charSet = new Set();
    for (var right = 0; right < s.length; right++) {
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
function findAnagrams(s, p) {
    var left = 0;
    var right = 0;
    var charSet = new Set(p);
    var result = [];
    var count = 0;
    while (right < s.length) {
        if (count === p.length) {
            result.push(left);
            charSet.add(s[left]);
            count--;
            left++;
        }
        else if (charSet.has(s[right])) {
            charSet.delete(s[right]);
            count++;
        }
        right++;
    }
    return result;
}
function minSubArrayLen(target, nums) {
    var left = 0;
    var currentSum = 0;
    var minlength = Infinity;
    for (var right = 0; right < nums.length; right++) {
        currentSum += nums[right];
        while (currentSum >= target) {
            minlength = Math.min(minlength, right - left + 1);
            currentSum -= nums[left];
            left++;
        }
    }
    return minlength === Infinity ? 0 : minlength;
}
function totalFruit(fruits) {
    var fruitsMap = new Map();
    var maxCount = 0;
    for (var i = 0; i < fruits.length; i++) {
        if (!fruitsMap.has(fruits[i])) {
            fruitsMap.set(fruits[i], i);
        }
        else {
            var produces = fruitsMap.get(fruits[i]);
            fruitsMap.set(fruits[i], produces + i);
        }
    }
    if (fruitsMap.size === 2) {
        return fruits.length;
    }
    var arr = Array.from(fruitsMap).sort(function (a, b) { return a[1] - b[1]; });
    var fruit1 = arr[arr.length - 1][0];
    var fruit2 = arr[arr.length - 2][0];
    var count = 0;
    for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
        var fruit = fruits_1[_i];
        if (fruit === fruit1 || fruit === fruit2) {
            count++;
        }
        else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }
    return Math.max(maxCount, count);
}
function characterReplacement(s, k) {
    var left = 0;
    var maxLength = 0;
    var maxFreq = 0;
    var charCount = {};
    for (var right = 0; right < s.length; right++) {
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
function checkInclusion(s1, s2) {
    var left = 0;
    var right = 0;
    var length = 0;
    var charMap = new Map();
    for (var i = 0; i < s1.length; i++) {
        charMap.set(s1[i], (charMap.get(s1[i]) || 0) + 1);
    }
    var needed = s1.length;
    while (right < s2.length) {
        if (charMap.has(s2[right])) {
            charMap.set(s2[right], charMap.get(s2[right]) - 1);
            if (charMap.get(s2[right]) === 0) {
                needed--;
            }
        }
        if (right - left + 1 > s1.length) {
            if (charMap.has(s2[left])) {
                if (charMap.get(s2[left]) >= 0)
                    needed++; // Restore character count
                charMap.set(s2[left], charMap.get(s2[left]) + 1);
            }
            left++;
        }
        if (needed === 0)
            return true;
        right++;
    }
    return false;
}
function heightChecker(heights) {
    var count = 0;
    var expected = __spreadArray([], heights, true).sort(function (a, b) { return a - b; });
    for (var i = 0; i < heights.length; i++) {
        if (expected[i] !== heights[i])
            count++;
    }
    return count;
}
function distinctAverages(nums) {
    if (nums.length === 0 || nums.length === 1)
        return 0;
    if (nums.length === 2)
        return 1;
    var right = nums.length - 1;
    var left = 0;
    var averageSet = new Set();
    nums.sort(function (a, b) { return a - b; });
    while (left < right) {
        var average = (nums[left] + nums[right]) / 2;
        if (!averageSet.has(average))
            averageSet.add(average);
        right--;
        left++;
    }
    return averageSet.size;
}
function minimumAverage(nums) {
    if (nums.length === 0 || nums.length === 1)
        return 0;
    if (nums.length === 2)
        return (nums[0] + nums[1]) / 2;
    var right = nums.length - 1;
    var left = 0;
    var averageArray = [];
    nums.sort(function (a, b) { return a - b; });
    while (left < right) {
        var average = (nums[left] + nums[right]) / 2;
        averageArray.push(average);
        right--;
        left++;
    }
    return Math.min.apply(Math, averageArray);
}
function longestEqualSubarray(nums, k) {
    var freq = new Map();
    var left = 0, maxFreq = 0, maxLength = 0;
    for (var right = 0; right < nums.length; right++) {
        var current = nums[right];
        freq.set(current, (freq.get(current) || 0) + 1);
        maxFreq = Math.max(maxFreq, freq.get(current));
        while (right - left + 1 - maxFreq > k) {
            var leftNum = nums[left];
            freq.set(leftNum, freq.get(leftNum) - 1);
            left++;
        }
        maxLength = Math.max(maxLength, maxFreq);
    }
    return maxLength;
}
function validPalindrome(s) {
    var left = 0;
    var right = s.length - 1;
    var isPalindrome = function (str, left, right) {
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
            return (isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1));
        }
        right--;
        left++;
    }
    return true;
}
function numWaterBottles(numBottles, numExchange) {
    if (numBottles < numExchange)
        return numBottles;
    var bottles = numBottles;
    var totalBottles = bottles;
    while (totalBottles >= numExchange) {
        var reminder = Math.floor(totalBottles / numExchange);
        bottles += reminder;
        var emptyBottles = totalBottles - reminder * numExchange;
        totalBottles = emptyBottles + reminder;
    }
    return bottles;
}
function maxArea(height) {
    var left = 0;
    var right = height.length - 1;
    var maxArea = 0;
    while (left < right) {
        var width = right - left;
        var minHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * minHeight);
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxArea;
}
function threeSumClosest(nums, target) {
    nums.sort(function (a, b) { return a - b; });
    var closestSum = Infinity;
    for (var i = 0; i < nums.length - 2; i++) {
        var left = i + 1, right = nums.length - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }
            if (sum < target) {
                left++;
            }
            else if (sum > target) {
                right--;
            }
            else {
                return sum;
            }
        }
    }
    return closestSum;
}
function longestPalindrome(s) {
    if (s.length < 2 || s.split("").reverse().join("") === s)
        return s;
    var longest = "";
    var expandAroundCenter = function (left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    };
    for (var i = 0; i < s.length; i++) {
        var oddLength = expandAroundCenter(i, i);
        var evenLength = expandAroundCenter(i, i + 1);
        var longer = oddLength.length > evenLength.length ? oddLength : evenLength;
        if (longer.length > longest.length) {
            longest = longer;
        }
    }
    return longest;
}
function merge(nums1, m, nums2, n) {
    var i = m - 1;
    var j = n - 1;
    var k = m + n - 1;
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        }
        else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
}
function removeDuplicates(nums) {
    if (nums.length <= 2)
        return nums.length;
    var i = 2;
    for (var j = 2; j < nums.length; j++) {
        if (nums[j] !== nums[i - 2]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function deleteDuplicates(head) {
    if (!head)
        return null;
    var dummy = new ListNode(0, head);
    var left = dummy;
    var right = head;
    while (right) {
        if (right.next && right.val === right.next.val) {
            while (right.next && right.val === right.next.val) {
                right = right.next;
            }
            left.next = right.next;
        }
        else {
            left = left.next;
        }
        right = right.next;
    }
    return head;
}
function arrayToLinkedList(arr) {
    if (arr.length === 0)
        return null;
    var head = new ListNode(arr[0]);
    var current = head;
    for (var i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
var head = arrayToLinkedList([1, 2]);
function rotateRight(head, k) {
    if (!head || !head.next || k === 0)
        return head;
    var length = 1;
    var right = head;
    while (right.next) {
        right = right.next;
        length++;
    }
    k = k % length;
    if (k === 0)
        return head;
    right.next = head;
    var left = head;
    for (var i = 0; i < length - k - 1; i++) {
        left = left.next;
    }
    var newHead = left.next;
    left.next = null;
    return newHead;
}
function areAlmostEqual(s1, s2) {
    if (s1 === s2)
        return true;
    var diff = [];
    for (var i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
        }
    }
    return (diff.length === 2 &&
        s1[diff[0]] === s2[diff[1]] &&
        s1[diff[1]] === s2[diff[0]]);
}
function removeNthFromEnd(head, n) {
    var length = 0;
    var current = head;
    while (current) {
        length++;
        current = current.next;
    }
    var index = length - n;
    if (index === 0)
        return (head === null || head === void 0 ? void 0 : head.next) || null;
    current = head;
    var prev = null;
    while (index > 0) {
        prev = current;
        current = current.next;
        index--;
    }
    if (prev)
        prev.next = current.next;
    return head;
}
function reverseWords(s) {
    return s
        .split(" ")
        .reverse()
        .filter(function (w) { return w !== ""; })
        .join(" ");
}
function twoSumAgain(numbers, target) {
    var numMap = new Map();
    for (var i = 0; i < numbers.length; i++) {
        var complement = target - numbers[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i + 1];
        }
        numMap.set(numbers[i], i + 1);
    }
    return [];
}
function reverseWord(s) {
    return s.split("").reverse().join("").split(" ").reverse().join(" ");
}
function maxAreaResolve(height) {
    var left = 0;
    var right = height.length - 1;
    var maxArea = 0;
    while (left < right) {
        var area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxArea;
}
function searchInsert(nums, target) {
    if (nums.length === 0 || nums[0] > target) {
        return 0;
    }
    if (nums[nums.length - 1] < target) {
        return nums.length;
    }
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return nums[left] < target ? left + 1 : right;
}
function clearDigits(s) {
    var result = "";
    for (var i = 0; i < s.length; i++) {
        if (i < s.length - 1 && !isNaN(Number(s[i + 1]))) {
            i++;
        }
        else {
            result += s[i];
        }
    }
    return result;
}
function search(nums, target) {
    var left = 0, right = nums.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
    }
    return -1;
}
function findPeakElement(nums) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid;
        }
        if (nums[mid] < nums[left]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}
function removeOccurrences(s, part) {
    var left = 0;
    var right = left + part.length - 1;
    var str = s;
    while (right < str.length) {
        if (str.slice(left, right + 1) === part) {
            str = str.slice(0, left) + str.slice(right + 1);
            left = Math.max(0, left - part.length);
            right = left + part.length - 1;
        }
        else {
            left++;
            right++;
        }
    }
    return str;
}
