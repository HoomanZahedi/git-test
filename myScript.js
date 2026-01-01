function returnLast(params) {
  if (Array.isArray(params)) {
    if (!params.length) {
      return -1;
    } else {
      return params[params.length - 1];
    }
  } else {
    return "input argument is not an Array";
  }
}

// const nums = [null, {}, 3];
// console.log(returnLast(nums));

// const arr = [];
// console.log(returnLast(arr));
/////////////////////////////////////////

function memoized(array) {
  const map = new Map();
  const returnVariable = [];
  for (const element of array) {
    const key = JSON.stringify([...element].sort());

    if (map.has(key)) {
      returnVariable.push(map.get(key));
    } else {
      map.set(key, element[0] + element[1]);
      returnVariable.push(element[0] + element[1]);
    }
  }
  return { returnVariable, map };
}
// //////////////////////////////////////
function snail(nums, rowsCount, colsCount) {
  if (rowsCount * colsCount !== nums.length) {
    return [];
  }

  const matrix = Array.from({ length: rowsCount }, () =>
    Array(colsCount).fill(0)
  );

  let idx = 0;
  for (let j = 0; j < colsCount; j++) {
    if (j % 2 === 0) {
      // even column – top to bottom
      for (let i = 0; i < rowsCount; i++) {
        matrix[i][j] = nums[idx++];
      }
    } else {
      // odd column – bottom to top
      for (let i = rowsCount - 1; i >= 0; i--) {
        matrix[i][j] = nums[idx++];
      }
    }
  }
  return matrix;
}

// const numsers = [
//   19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
// ];
// const rowsCount = 5;
// const colsCount = 4;

// console.log(snail(numsers, rowsCount, colsCount));
// ///////////////////////////////////

function sortBy(array, fn) {
  return array.map((x) => fn(x)).sort();
}

function removeDuplicate(array) {
  const map = new Map();
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!map.has(array[i])) {
      map.set(array[i], map.get(array[i]) + 1);
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function combinationSum(candidates, target) {
  const res = [];
  function dfs(start, path, sum) {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      dfs(i, path, sum + candidates[i]); // reuse allowed
      path.pop();
    }
  }

  dfs(0, [], 0);
  return res;
}

function mergeArray(array) {
  array.sort((a, b) => a[0] - b[0]);
  debugger;
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (result.length === 0 || result[result.length - 1][1] < array[i][0]) {
      result.push(array[i]);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        array[i][1]
      );
    }
  }
  return result;
}

function matSearch(matrix, target) {
  const condidatematrix = [];
  for (y of matrix) {
    if (y[0] < target) {
      condidatematrix.push(y);
    }
  }
  for (x of condidatematrix) {
    if (x[x.length - 1] <= target) {
      condidatematrix.pop(x[x.length - 1]);
    }
  }
  debugger;
  const t = condidatematrix[0].includes(target);
  return t;
}

// console.log(
//   matSearch(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );

function twoSum(array, target) {
  const map = new Map();
  const resultArray = [];
  for (const element of array) {
    const complement = target - element;
    if (map.has(complement)) {
      resultArray.push([element, complement]);
    } else {
      map.set(element, target - element);
    }
  }
  return resultArray;
}

// console.log(twoSum([2, 7, 12, 15, 8, 4, 11, 20, 1], 19));

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  debugger;
  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}

// console.log(maxProfit([7, 20, 1, 5, 3, 6, 4]));

function duplicate(array) {
  const set = new Set();
  for (const element of array) {
    if (set.has(element)) {
      return true;
    } else {
      set.add(element);
    }
  }
  return false;
}

// console.log(duplicate([7, 20, 1, 6, 5, 3, 6, 4]));
function productArray(array) {
  const resultArray = [];
  debugger;
  for (let i = 0; i < array.length; i++) {
    // console.log(array.splice(i, 1));
    const sub = array.filter((x) => x !== array[i]).reduce((a, b) => a * b);
    sub < 0 ? resultArray.push(0) : resultArray.push(sub);
  }
  return resultArray;
}
// console.log(productArray([7, 1, 6, 5]));

function maxSubarray(array) {
  let max = array[0];
  let currentSum = array[0];
  for (let i = 1; i < array.length; i++) {
    currentSum = Math.max(array[i], currentSum + array[i]);
    max = Math.max(currentSum, max);
  }
  return max;
}

// console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // Step 1: sort
  const res = [];
  debugger;
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left & right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};

function Container_With_Most_Water(array) {
  let left = 0;
  let right = array.length - 1;
  let maxArea = 0;
  while (left < right) {
    const area = Math.min(array[right], array[left]) * (right - left);
    maxArea = Math.max(area, maxArea);
    if (array[left] < array[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

// console.log(Container_With_Most_Water([1, 8, 6, 2, 5, 4, 8, 3, 7]));
function merge(array) {
  const result = [];
  let interval = [];
  for (let i = 1; i < array.length; i++) {
    debugger;
    if (array[i - 1][1] > array[i][0]) {
      interval = [array[i - 1][0], array[i][1]];
    } else {
      result.push(interval);
      interval = array[i];
    }
  }
  result.push(interval);
  return result;
}

function search(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid;

    if (array[left] <= array[mid]) {
      if (target < array[mid] && target > array[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > array[mid] && target < array[right]) {
        left = mid + 1;
      } else {
        right = right - 1;
      }
    }
  }
  return -1;
}

// console.log(search([4, 5, 6, 7, 8, 9, 11, 15, 17, 19, 0, 1, 2], 1));

function reverseString(string) {
  let str = [];
  const helper = (left, right) => {
    if (left >= right) {
      debugger;
      return str;
    } else {
      str[left] = string[right];
      str[right] = string[left];
      return helper(left + 1, right - 1);
    }
  };
  helper(0, string.length - 1);
}

// console.log(reverseString("Hello World"));

function Fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
}

// console.log(Fibonacci(11));

function subset(array) {
  const result = [];

  function backTrack(start, current) {
    result.push([...current]);

    for (let i = start; i < array.length; i++) {
      current.push(array[i]);
      backTrack(i + 1, current);
      current.pop();
    }
  }
  backTrack(0, []);
  return result;
}

// console.log(subset([1, 2, 3]));

function permutation(nums) {
  const result = [];

  function backtrack(current) {
    debugger;
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (current.includes(nums[i])) continue;

      current.push(nums[i]);

      backtrack(current);

      current.pop();
    }
  }

  backtrack([]);
  return result;
}
// console.log(permutation([1, 2, 3]));

function binaryTreeDepth(root) {
  function maxDepth(root) {
    debugger;
    if (!root) return 0;
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
  }
  return maxDepth(root);
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// console.log(binaryTreeDepth(root));

const root3 = new TreeNode(1);
root3.left = new TreeNode(2);
root3.right = new TreeNode(3);
root3.left.left = new TreeNode(4);
root3.left.right = new TreeNode(5);

const root2 = new TreeNode(5);
root2.left = new TreeNode(2);
root2.right = new TreeNode(9);
root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(10);

function isSameTree(T1, T2) {
  if (!T1 && !T2) return true;
  if (!T1 || !T2) return false;
  if (T1.val !== T2.val) return false;

  return isSameTree(T1.left, T2.left) && isSameTree(T1.right, T2.right);
}

console.log(isSameTree(root, root2));

function bfs(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

function findWord(str) {
  const string = str.split(" ");
  const map = new Map();
  for (const element of string) {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  const maxValue = Math.max(...Array.from(map.values()));
  const maxKey = Array.from(map.entries()).find(
    ([key, value]) => value === maxValue
  )[0];
  return maxKey;
}

const str =
  "ali mohammad javad akbar sina javad mohammad omid javad reza sina ali shahab ali javad";

console.log(findWord(str));
// ////////////////////////////////////////////

function mergeSortedArray(array1, array2) {
  let i = 0;
  let j = 0;
  const mergedArray = [];
  while (i < array1.length || j < array2.length) {
    if (!array1[i]) {
      return mergedArray.concat(array2.slice(j, array2.length));
    }
    if (!array2[j]) {
      return mergedArray.concat(array1.slice(i, array1.length));
    }
    if (array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }
  return mergedArray;
}

function K_Frequent(array, k) {
  const map = new Map();
  for (const element of array) {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }

  const sortedArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  return Array.from(sortedArray[0]).slice(0, k);
}

function meetingRoom(intervals) {
  const startsArray = intervals.map((x) => x[0]).sort((a, b) => a - b);
  const endsArray = intervals.map((x) => x[1]).sort((a, b) => a - b);

  let rooms = 0;
  let endPointer = 0;
  for (let i = 0; i < startsArray.length; i++) {
    if (startsArray[i] < endsArray[endPointer]) {
      rooms++;
    } else {
      endPointer++;
    }
  }
  return rooms;
}

function ValidAnagram(word, target) {
  const wordArray = word.split("").sort().join("");
  const targetArray = target.split("").sort().join("");
  return wordArray === targetArray;
}

var lengthOfLongestSubstring = function (s) {
  const charMap = new Map(); // Stores character -> index mapping
  let left = 0; // Left pointer of sliding window
  let maxLength = 0;
  debugger;
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // If character exists and is within current window
    if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
      // Move left pointer to position after the duplicate
      left = charMap.get(currentChar) + 1;
    }

    // Update character's latest position
    charMap.set(currentChar, right);

    // Update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// console.log(lengthOfLongestSubstring("pwwkew"));

class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function createTestGraph() {
  // Create all nodes
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);

  // Set up neighbors (undirected graph)
  node1.neighbors = [node2, node4];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];
  node4.neighbors = [node1, node3];

  return node1; // Return any node as entry point
}

const originalGraph = createTestGraph();

var cloneGraph = function (node) {
  if (!node) return null;

  const visited = new Map();
  const dfs = (original) => {
    debugger;
    if (visited.has(original)) {
      return visited.get(original);
    }

    const clone = new Node(original.val);
    visited.set(original, clone);

    for (let neighbor of original.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };

  return dfs(node);
};

// const clonedGraph = cloneGraph(originalGraph);

/////////////////////////////////////////////

function generateParenthesis(n) {
  const result = [];

  const backtrack = (current, openCount, closeCount) => {
    debugger;
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (openCount < n) {
      backtrack(current + "(", openCount + 1, closeCount);
    }

    if (closeCount < openCount) {
      backtrack(current + ")", openCount, closeCount + 1);
    }
  };

  backtrack("", 0, 0);
  return result;
}

// console.log(generateParenthesis(3));

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  debugger;
  while (left < right) {
    // Move left pointer to next alphanumeric character
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    // Move right pointer to next alphanumeric character
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    // Compare characters (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(char) {
  return /[a-zA-Z0-9]/.test(char);
}

function isValidParenthesis(string) {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const element of string) {
    if (element in pairs) {
      stack.push(element);
    } else {
      const lastElement = stack.pop();
      if (pairs[lastElement] !== element) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function mergeInterval(array) {
  let rooms = 0;
  let endPointer = 0;
  const startArray = array.map((x) => x[0]).sort((a, b) => a - b);
  const endsArray = array.map((x) => x[1]).sort((a, b) => a - b);
  debugger;
  for (let i = 0; i < startArray.length; i++) {
    if (startArray[i] < endsArray[endPointer]) {
      rooms++;
    } else {
      endPointer++;
    }
  }
  return rooms;
}

function trapWater(array) {
  let max = 0;
  let left = 0;
  let right = array.length - 1;

  while (right > left) {
    temp = (right - left) * Math.min(array[left], array[right]);
    max = Math.max(temp, max);
    if (array[left] > array[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
}
const map = new Map();

const LRU = {
  map: map,
  capacity: 5,
  get: function (key) {
    if (this.map.has(key)) {
      const value = this.map.get(key);
      map.delete(key);
      map.set(key, value);
      return value;
    } else {
      return "No Item Has Been Found!";
    }
  },
  put: function (key, value) {
    if (map.size >= this.capacity) {
      const firstKey = map.keys().next().value;
      map.delete(firstKey);
      map.set(key, value);
      return map;
    } else {
      map.set(key, value);
      return map;
    }
  },
};

function findUniqueChar(params) {
  const strArray = params.split("");
  const map = new Map();
  for (const element of strArray) {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }

  return Array.from(map).find((x) => x[1] === 1);
}

var lengthOfLongestSubstring = function (s) {
  const charMap = new Map(); // Stores character -> index mapping
  let lastDuplicate = 0; // Left pointer of sliding window
  let maxLength = 0;
  debugger;
  for (let current = 0; current < s.length; current++) {
    const currentChar = s[current];

    // If character exists and is within current window
    if (charMap.has(currentChar) && charMap.get(currentChar) >= lastDuplicate) {
      // Move left pointer to position after the duplicate
      lastDuplicate = charMap.get(currentChar) + 1;
    }

    // Update character's latest position
    charMap.set(currentChar, current);

    // Update max length
    maxLength = Math.max(maxLength, current - lastDuplicate + 1);
  }

  return maxLength;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));

function wordBreak(string, array) {
  function backtrack(string, array) {
    if (string === "") return true;
    for (const element of array) {
      if (string.startsWith(element)) {
        if (wordBreak(string.replace(element, ""), array)) return true;
      }
    }
    return false;
  }
  return backtrack(string, array);
}

const tree = {
  root: root2,
  array: [1, 2, null, null, 3, 4, null, null, 5, null, null],
  serialize: function () {
    const result = [];
    function dfs(node) {
      if (!node) {
        result.push(null);
      } else {
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
      }
    }
    dfs(this.root);
    return result;
  },
  deserialize: function () {
    let index = 0;
    function dfs(array) {
      if (!array[index]) {
        index++;
      } else {
        const node = new TreeNode(array[index]);
        index++;
        node.left = dfs(array);
        node.right = dfs(array);
        return node;
      }
    }
    return dfs(this.array);
  },
};

// console.log(tree.serialize());
// console.log(tree.deserialize());

function interval(callback, time) {
  let timerId;
  function repeat() {
    callback();
    timerId = setTimeout(repeat, time);
  }

  timerId = setTimeout(repeat, time);

  return () => clearTimeout(timerId);
}

// interval(() => {
//   console.log("call back");
// }, 1000);

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject("wrong input type");
    }
    const resultArray = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((res) => {
          resultArray[index] = res;
          completed++;
          if (completed === promises.length) {
            resolve(resultArray);
          }
        })
        .catch(reject);
    });
  });
}

// const p1 = Promise.resolve(1);
// const p2 = new Promise((resolve, reject) => {
//   reject(() => console.log("asad"));
// });
// const p3 = Promise.resolve(3);

// myPromiseAll([p1, p2, p3]).then(console.log);

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

// curriedSum(8)(1)(4);

function groupBy(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = fn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

const fn = function (item) {
  return item.id;
};
const array = [{ id: "1" }, { id: "1" }, { id: "2" }];

const gb = (array, fn) => {
  return array.reduce((curr, item) => {
    const key = fn(item);
    if (!curr[key]) {
      curr[key] = [];
    } else {
      curr[key].push(item);
    }
    return curr;
  });
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const node = new ListNode(val);

    if (!this.head) {
      this.head = node;
      return;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }

  createCycle(pos) {
    if (pos < 0 || !this.head) return;

    let cycleNode = null;
    let tail = null;
    let curr = this.head;
    let index = 0;

    while (curr) {
      if (index === pos) {
        cycleNode = curr;
      }
      tail = curr;
      curr = curr.next;
      index++;
    }

    if (cycleNode) {
      tail.next = cycleNode;
    }
  }
}

function hasCycle(head) {
  let fast = head;
  const visitedNode = new Map();
  while (fast && fast.next) {
    if (visitedNode.has(fast)) {
      return true;
    } else {
      visitedNode.set(fast, 1);
      fast = fast.next;
    }
  }

  return false;
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.createCycle(1);

// console.log(hasCycle(list.head));

function movingAverage(array, k) {
  const avgList = [];
  for (let index = 0; index < array.length; index++) {
    if (k - (index + 1) > 0) {
      avgList.push(
        array.slice(0, index + 1).reduce((a, b) => a + b) / (index + 1)
      );
    } else {
      avgList.push(
        array.slice(index + 1 - k, index + 1).reduce((a, b) => a + b) / k
      );
    }
  }
  return avgList;
}

var maxTwoEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);

  const byEnd = [...events].sort((a, b) => a[1] - b[1]);

  let maxValueSoFar = 0;
  let endPtr = 0;
  let result = 0;
  for (let i = 0; i < events.length; i++) {
    const [start, end, value] = events[i];

    while (endPtr < byEnd.length && byEnd[endPtr][1] < start) {
      maxValueSoFar = Math.max(maxValueSoFar, byEnd[endPtr][2]);
      endPtr++;
    }

    result = Math.max(result, maxValueSoFar + value);

    result = Math.max(result, value);
  }

  return result;
};
