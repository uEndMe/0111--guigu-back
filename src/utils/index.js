//基本工具

//遍历对象
//each(obj)((key)=>{'获得对象每个key'});
export function each(obj, fn) {
  const arr = Object.keys(obj)
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

//遍历 map
//each(obj)((key)=>{'获得对象每个key'});
export function mapEach(map, fn) {
  const iterator = map.keys();
  let arr = [];
  for (let key of iterator) {
    arr = [...arr, fn(key)];
  }
  return arr;
}

