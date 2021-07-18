// keys()で、配列のIndexを要素に持つIteratorを返してくれる。
const data = [...Array(10).keys()]
console.log(data)

data.forEach((x) => console.log(x))
