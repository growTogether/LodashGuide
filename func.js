// 常用的lodash工具函数 
// 1. chunk：将数组分割成指定大小的块
function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
// 2. compact：过滤数组中的假值
function compact(array) {
  return array.filter(Boolean);
}
// 3. concat：合并多个数组
function concat(...arrays) {
  return [].concat(...arrays);
}
// 4. difference：返回两个数组的差异
function difference(array, values) {
  return array.filter(item => !values.includes(item));
}
// 5. drop：从数组的开头删除指定数量的元素
function drop(array, n = 1) {
  return array.slice(n);
}
// 6. dropRight：从数组的末尾删除指定数量的元素
function dropRight(array, n = 1) {
  return array.slice(0, -n);
}
// 7. fill：用指定的值填充数组
function fill(array, value, start = 0, end = array.length) {
  for (let i = start; i < end; i++) {
    array[i] = value;
  }
  return array;
}
// 8. findIndex：返回第一个满足条件的元素的索引
function findIndex(array, predicate) {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
// 9. flatten：将多维数组扁平化
function flatten(array) {
  return array.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
    return result;
  }, []);
}
// 10. intersection：返回多个数组的交集
function intersection(...arrays) {
  return arrays.reduce((result, array) => {
    return result.filter(item => array.includes(item));
  });
}
// 11. join：将数组的所有元素转换为字符串并连接起来
function join(array, separator = ',') {
  return array.join(separator);
}
// 12. last：返回数组的最后一个元素
function last(array) {
  return array[array.length - 1];
}
// 13. map：对数组中的每个元素执行指定的函数，并返回结果数组
function map(array, iteratee) {
  return array.map(iteratee);
}
// 14. max：返回数组中的最大值
function max(array) {
  return Math.max(...array);
}
// 15. min：返回数组中的最小值
function min(array) {
  return Math.min(...array);
}
// 16. pull：从数组中删除指定的值
function pull(array, ...values) {
  return array.filter(item => !values.includes(item));
}
// 17. reverse：反转数组的顺序
function reverse(array) {
  return array.reverse();
}
// 18. slice：返回数组的指定部分
function slice(array, start = 0, end = array.length) {
  return array.slice(start, end);
}
// 19. sortBy：根据指定的属性排序数组
function sortBy(array, iteratee) {
  return array.sort((a, b) => {
    const valueA = typeof iteratee === 'function' ? iteratee(a) : a[iteratee];
    const valueB = typeof iteratee === 'function' ? iteratee(b) : b[iteratee];
    return valueA - valueB;
  });
}
// 20. sum：计算数组中所有元素的总和
function sum(array) {
  return array.reduce((result, item) => result + item, 0);
}
// 21. take：返回数组的前n个元素
function take(array, n = 1) {
  return array.slice(0, n);
}
// 22. union：返回多个数组的并集
function union(...arrays) {
  return arrays.reduce((result, array) => {
    return [...result, ...array.filter(item => !result.includes(item))];
  });
}
// 23. uniq：返回数组中的唯一值
function uniq(array) {
  return [...new Set(array)];
}
// 24. without：从数组中删除指定的值
function without(array, ...values) {
  return array.filter(item => !values.includes(item));
}
// 25. zip：将多个数组的元素按索引合并为一个新数组
function zip(...arrays) {
  const maxLength = Math.max(...arrays.map(array => array.length));
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map(array => array[i]));
  }
  return result;
}
// 26. countBy：根据指定的条件对数组进行分组，并返回每个分组的数量
function countBy(array, iteratee) {
  return array.reduce((result, item) => {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    result[key] = (result[key] || 0) + 1;
    return result;
  }, {});
}
// 27. every：检查数组中的所有元素是否满足指定的条件
function every(array, predicate) {
  return array.every(predicate);
}
// 28. filter：根据指定的条件过滤数组中的元素
function filter(array, predicate) {
  return array.filter(predicate);
}
// 29. find：返回第一个满足条件的元素
function find(array, predicate) {
  return array.find(predicate);
}
// 30. flatMap：对数组中的每个元素执行指定的函数，并将结果扁平化
function flatMap(array, iteratee) {
  return array.flatMap(iteratee);
}
// 31. forEach：对数组中的每个元素执行指定的函数
function forEach(array, iteratee) {
  array.forEach(iteratee);
}
// 32. groupBy：根据指定的条件对数组进行分组
function groupBy(array, iteratee) {
  return array.reduce((result, item) => {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
}
// 33. includes：检查数组是否包含指定的值
function includes(array, value, fromIndex = 0) {
  return array.includes(value, fromIndex);
}
// 34. keyBy：根据指定的条件将数组转换为对象
function keyBy(array, iteratee) {
  return array.reduce((result, item) => {
    const key = typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    result[key] = item;
    return result;
  }, {});
}
// 35. mapKeys：对对象的键应用指定的函数
function mapKeys(object, iteratee) {
  return Object.keys(object).reduce((result, key) => {
    const newKey = typeof iteratee === 'function' ? iteratee(key) : key[iteratee];
    result[newKey] = object[key];
    return result;
  }, {});
}
// 36. mapValues：对对象的值应用指定的函数
function mapValues(object, iteratee) {
  return Object.keys(object).reduce((result, key) => {
    result[key] = typeof iteratee === 'function' ? iteratee(object[key]) : object[key][iteratee];
    return result;
  }, {});
}
// 37. omit：从对象中删除指定的属性
function omit(object, ...props) {
  return Object.keys(object).reduce((result, key) => {
    if (!props.includes(key)) {
      result[key] = object[key];
    }
    return result;
  }, {});
}
// 38. pick：从对象中选择指定的属性
function pick(object, ...props) {
  return Object.keys(object).reduce((result, key) => {
    if (props.includes(key)) {
      result[key] = object[key];
    }
    return result;
  }, {});
}
// 39. reduce：对数组中的元素进行累积计算
function reduce(array, iteratee, accumulator) {
  return array.reduce(iteratee, accumulator);
}
// 40. size：返回数组或对象的长度
function size(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}
// 41. some：检查数组中是否有元素满足指定的条件
function some(array, predicate) {
  return array.some(predicate);
}
// 42. sortBy：根据指定的条件对数组进行排序
function sortBy(array, iteratee) {
  return array.sort((a, b) => {
    const valueA = typeof iteratee === 'function' ? iteratee(a) : a[iteratee];
    const valueB = typeof iteratee === 'function' ? iteratee(b) : b[iteratee];
    return valueA - valueB;
  });
}
// 43. get：获取对象中指定路径的值
function get(object, path, defaultValue) {
  const keys = path.split('.');
  let result = object;
  for (let key of keys) {
    result = result[key];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
}
// 44. set：设置对象中指定路径的值
function set(object, path, value) {
  const keys = path.split('.');
  let result = object;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!result[key]) {
      result[key] = {};
    }
    result = result[key];
  }
  result[keys[keys.length - 1]] = value;
  return object;
}
// 45. debounce：创建一个防抖函数
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
// 46. throttle：创建一个节流函数
function throttle(func, wait) {
  let timeout;
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(this, args);
        timeout = null;
      }, wait);
    }
  };
}
// 47. memoize：创建一个记忆函数
function memoize(func) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}
// 48. curry：创建一个柯里化函数
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}
// 49. flow：创建一个组合函数
function flow(...funcs) {
  return function(...args) {
    let result = funcs[0].apply(this, args);
    for (let i = 1; i < funcs.length; i++) {
      result = funcs[i].call(this, result);
    }
    return result;
  };
}
// 50. identity：返回传入的第一个参数
function identity(value) {
  return value;
}
