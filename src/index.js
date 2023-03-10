import './assets/sass/styles.scss';
import 'normalize.css/normalize.css'
console.log('Hello from webpack');


var Names = require("./studentname");
var name = new Names("Nada", "adam");

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);



//setTimeout(() => { alert("hello nada") }, 5000);

