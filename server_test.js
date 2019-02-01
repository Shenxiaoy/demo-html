var a ={
 name: 'zhang',
  age: {
  sex: 'man'
  }
}
var b = Object.assign({}, a)
a.name = 'xxx'
a.age.sex = 'men'
console.log(a,b)