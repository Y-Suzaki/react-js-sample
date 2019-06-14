let todos = [{name:"aaa"}, {name: "bbb"}, {name: "ccc"}];

todos.forEach(x => console.log(x));

console.log(todos);
console.log(JSON.stringify(todos));
console.log(JSON.parse(JSON.stringify(todos)));

console.log(null || "aabbccdd");


